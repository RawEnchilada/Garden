<template>
    <Navbar />
    <router-view />
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
    name:"App",
    components:{
        Navbar
    }
}
</script>

<style>
html,
body,
#app {
    margin: 0;
    height: 100vh;
    width: 100vw;
    color: var(--text-color);
}
:root{
    --navbar-height: 5%;
    --text-color: black;
    --theme-color: white;
}
</style>
