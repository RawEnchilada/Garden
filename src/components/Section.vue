<template>
<div id="etemp" class="section" ref="top">
    <img class="parallax" :src="`${publicPath}imgs/${img_name}-${theme}.webp`" :alt="img_name" />
    <div class="content">
        <slot />
    </div>
</div>
</template>
    
<script setup>
import { onMounted, computed, ref } from 'vue';
import { useSectionStore } from '@/store/section.js';
import { useThemeStore } from '@/store/theme.js';
import { updateOnScroll,elementHeight,elementTop } from "basic-scroll-animations";

const publicPath = ref(process.env.BASE_URL);
const sectionStore = useSectionStore();
const themeStore = useThemeStore();
const top = ref(null);

const props = defineProps({
    img_name: {
        type: String,
        required: true
    },
    stack: {
        type: Boolean,
        default: false
    }
});

const theme = computed(()=>{
    return themeStore.theme;
});

const id = ref(0);

onMounted(()=>{
    let e = sectionStore.addSection(top.value);
    id.value = e.index;

    top.value.id = `e${id.value}`;

    if(!sectionStore.isSafari){
        let height = top.value.clientHeight;
        let relEnd = elementHeight(`#e${id.value}`);
        let start = elementTop(`#e${id.value}`);
        let end = start + relEnd;

        if(props.stack){
            updateOnScroll(`#e${id.value}>.parallax`)
                .from(start,{translateY: height})
                .to(end,{translateY: 0});
        }else{
            let width = top.value.clientWidth;
            updateOnScroll(`#e${id.value}>.parallax`)
                .from(0,{translateX: width/2})
                .to(1,{translateX: -width/2});
        }
    }
});



</script>

<style scoped>
.section{
    width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
}
.parallax{
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
    top: 0;
}
.content{
    z-index: 1;
    margin-top: 20%;
    padding: 0 2rem;
    font-size: 1.5rem;
}
@media (max-width: 768px) {
    .content{
        margin-top: 30%;
        font-size: 1rem;
        padding: 0 4rem;
    }
}
</style>