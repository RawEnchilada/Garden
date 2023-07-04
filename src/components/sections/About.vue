<template>
<div id="about">
    <h1 class="title">{{ content.title }}</h1>
    <div class="description">
        <div v-for="text in content.description">
            <span v-html="generateHighlightedText(text)"></span>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import textMap from '@/scripts/locale.js';

const content = ref(textMap.about);

function generateHighlightedText(text){
    let highlighted = `<span>${text}</span>`;
    for(const keyword of content.value.highlight){
        highlighted = highlighted.replaceAll(keyword,`<span class="highlighted">${keyword}</span>`);
    }
    return highlighted;
}

</script>

<style>  
.highlighted{
    color: var(--secondary-highlight-color);
}
</style>