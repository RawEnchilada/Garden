<template>
    <NavDock/>
    <Background :fill="true" />
    <div id="container" :style="viewportStyle">
        <div id="viewport">
            <iframe 
                :style="frameStyle"
                src="https://rawenchilada.github.io/DataAssistant-Thesis/" 
                allowfullscreen
                frameborder="0"
                sandbox
                color="white"
            ></iframe>
        </div>
    </div>
</template>

<script setup>
import NavDock from '@/components/NavDock.vue';
import Background from '@/components/Background.vue';
import { ref, computed, onMounted } from 'vue';
import { useThemeStore } from '@/store/theme';


const themeStore = useThemeStore();

const viewportStyle = computed(()=>{
    return {
        backgroundColor: themeStore.theme=='light'?'rgba(255,255,255,0.7)':'rgba(0,0,0,0.7)'
    }
});

onMounted(()=>{
    document.title = "Data Assistant Thesis";
});

</script>

<style scoped>
#container{
    height: 100%;
    width: 100%;
    max-width: 1280px;
    backdrop-filter: blur(15px);
    margin: 0 auto;
}
#viewport{
    height: calc( 100% - 1rem );
    overflow-y: visible;
    padding: 0.5rem 2rem;
}
#viewport iframe{
    overflow-y: visible;
    width: 100%;
    height: calc( 100% - 2em );
    padding: 1em 0;
    color: var(--text-color);
}
</style>