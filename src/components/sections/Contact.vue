<template>
<div id="contact">
    <h1 class="title">{{ content.title }}</h1>
    <div class="description">
        <div>
            {{ content.description }}
        </div>
        <div class="links">
            <a href="https://www.linkedin.com/in/%C3%A1ron-wittmann-5631aa234/">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="mailto:wittmann.aron@gmail.com">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </a>
        </div>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import textMap from '@/scripts/locale.js';

const content = ref(textMap.contact);
</script>

<style scoped>
.links{
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin: 0 auto;
}
.links>*{
    transform: scale(1.5);
}
</style>