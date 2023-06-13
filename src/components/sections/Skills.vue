<template>
<div id="skills">
    <h1 class="title">{{ content.title }}</h1>
    <div class="description">{{ content.description }}</div>
    <div class="skill-grid">
        <FlippingTile :src="'dart'" :title="'Dart'" />   
        <FlippingTile :src="'kotlin'" :title="'Kotlin'" />   
        <FlippingTile :src="'node'" :title="'Node.js'" />            
        <FlippingTile :src="'typescript'" :title="'TypeScript'" />            
        <FlippingTile :src="'csharp'" :title="'C#'" />            
        <FlippingTile :src="'vue'" :title="'Vue.js'" />            
        <FlippingTile :src="'angular'" :title="'Angular'" />            
        <FlippingTile :src="'css'" :title="'CSS'" />            
        <FlippingTile :src="'html'" :title="'HTML'" />            
        <FlippingTile :src="'godot'" :title="'Godot'" />            
        <FlippingTile :src="'arch'" :title="'Arch Linux'" />            
        <FlippingTile :src="'git'" :title="'Git'" />            
        <FlippingTile :src="'graphql'" :title="'GraphQL'" />            
        <FlippingTile :src="'mysql'" :title="'MySql'" />
        <FlippingTile :src="'docker'" :title="'Docker'" />
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';
import FlippingTile from '@/components/FlippingTile.vue';
import textMap from '@/scripts/locale.js';

const content = ref(textMap.skills);

</script>

<style scoped>
.skill-grid{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-evenly;
    align-items:center;
    gap: 1rem;
    margin: 1rem auto;
    max-width: 36rem;
} 
@media screen and (max-width: 768px) {
    .skill-grid{
        grid-template-columns: repeat(3, minmax(75px, 1fr));
        width:100%;
    }
}
</style>