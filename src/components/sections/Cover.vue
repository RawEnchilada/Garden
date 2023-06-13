<template>
<div id="cover">
    <h1 class="title">{{ content.title }}</h1>
    <h2>{{ content.subtitle }}</h2>
</div>
</template>

<script setup>
import { ref } from 'vue';
import textMap from '@/scripts/locale.js';

const content = ref(textMap.cover);

</script>

<style scoped>
#cover{
    width: 100%;
    animation: slideIn 1s ease-in-out;
}
@keyframes slideIn {
    0%{
        transform: translateY(50vh);
        opacity: 0;
    }
    100%{
        transform: translateY(0%);
        opacity: 1;
    }
}
</style>