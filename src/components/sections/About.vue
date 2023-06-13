<template>
<div id="about">
    <h1 class="title">{{ content.title }}</h1>
    <div class="description">
        <div v-for="text in content.description">
            {{ text }}
        </div>  
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import textMap from '@/scripts/locale.js';

const content = ref(textMap.about);


</script>

<style scoped>  
</style>