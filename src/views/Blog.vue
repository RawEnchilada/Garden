<template>
    <NavDock/>

</template>

<script setup>
import NavDock from '@/components/NavDock.vue';


</script>

<style>
.card{
    padding: 2em;
    border-radius: 15px;
    background-image: linear-gradient(135deg, rgba(240, 254, 255, 0.75) 0%, rgba(255, 239, 231, 0.75) 100%);
    backdrop-filter: blur(7px);
    box-shadow: 0 0 15px rgba(0,0,0,0.5);
    margin: 1em;
    text-align: start;
    font-size: 1.5rem;
    white-space: break-spaces;
    max-width: 90vw;
}
[data-theme="dark"] .card{
    background-image: linear-gradient(135deg, rgba(0, 0, 0, 0.75) 0%, rgba(54, 30, 39, 0.75) 100%);
}
@media screen and (max-width: 768px) {
    .card{
        font-size: 1.2rem;
    }
}
@media screen and (min-width: 769px) {
    .card{
        max-width: 65vw;
    }
}
</style>