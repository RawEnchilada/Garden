<template>
<div id="references">
    <h1 class="title">References</h1>
    <div class="description">
        <a class="link" href="https://github.com/RawEnchilada">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            <label>
                {{ content.description[0] }}
            </label>
        </A>
        <router-link class="link" to="/thesis">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-paperclip"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
            <label> 
                {{ content.description[1] }}
            </label>
        </router-link>
        <a class="link" href="https://www.linkedin.com/in/%C3%A1ron-wittmann-5631aa234/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            <label>
                {{ content.description[2] }}
            </label>
        </a>
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import textMap from '@/scripts/locale.js';

const content = ref(textMap.references);
</script>

<style scoped>
.description{
    width: 60%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.description>*{
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 20fr;
    align-items: flex-start;
    justify-content: flex-start;
    margin: 0.5rem 0;
}
.link{
    color: var(--text-color);
    text-decoration: none;
    cursor:pointer;
}
.link label{
    cursor: pointer;
    text-align: left;
    margin-left: 1rem;
}
.link:hover{
    color: var(--highlight-color);
}
</style>