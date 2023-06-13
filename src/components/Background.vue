<template>
    <div id="background" ref="backgroundElement">
        <div v-if="props.fill" class="img-container">
            <img :src="`${publicPath}imgs/mountain-${theme}.webp`" alt="mountain" />
            <img :src="`${publicPath}imgs/3_trees-${theme}.webp`" alt="3_trees" />
            <img :src="`${publicPath}imgs/2_trees-${theme}.webp`" alt="2_trees" />
            <img :src="`${publicPath}imgs/1_trees-${theme}.webp`" alt="1_trees" />
            <img :src="`${publicPath}imgs/clouds-${theme}.webp`" alt="clouds" />
        </div>
    </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref, computed } from 'vue';
import { useThemeStore } from '@/store/theme.js';

const publicPath = ref(process.env.BASE_URL);
const themeStore = useThemeStore();

const theme = computed(()=>{
    return themeStore.theme;
});

const props = defineProps({
    fill: {
        type: Boolean,
        default: false
    }
});

</script>

<style scoped>
#background{
    background-image: linear-gradient(var(--bg-top-color),var(--bg-bottom-color));
    position: fixed;
    top:0;
    left:0;
    width:inherit;
    height:inherit;
    z-index: -10;
}
.img-container{
    position: absolute;
    top:0;
    left:0;
    width:inherit;
    height:inherit;
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-content: center;
    align-items: center;
}
.img-container>*{
    grid-column: 1;
    grid-row: 1;
}
</style>