<template>
    <router-view />
</template>

<script setup>
import { onMounted, watch, ref, computed } from 'vue';
import { useThemeStore } from '@/store/theme.js';
import { useSectionStore } from '@/store/section.js';
import { useRouter } from 'vue-router';

const themeStore = useThemeStore();
const sectionStore = useSectionStore();

const router = useRouter();

onMounted(()=>{
    sectionStore.reset();
    if (history.scrollRestoration) {
        history.scrollRestoration = "manual";
    } else {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }
    themeStore.init();

});


watch(router.currentRoute,()=>{
    sectionStore.reset();
    window.scrollTo(0,0);
});
</script>

<style>
:root{
    --title-color: #f09641;
    --text-color: #4d4d4d;
    --highlight-color: #f09641;
    --secondary-highlight-color: #d16812;
    --bg-top-color: #bee2e3;
    --bg-bottom-color: #ffe2d8;
}
[data-theme="dark"] {
    --title-color: #FFF4F0;
    --text-color: #ebe0dc;
    --highlight-color: #ff90b7;
    --secondary-highlight-color: #ff768c;
    --bg-top-color: #595B83;
    --bg-bottom-color: #cc8bb9;
}
body,html{
    margin:0;
    width:100vw;
    height:100vh;
    color:var(--text-color);
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}
#app {
    height:inherit;
    width:inherit;
}
</style>
