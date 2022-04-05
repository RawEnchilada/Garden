<template>
    <div id="background"></div>
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
    width: 100%;
    scroll-behavior: smooth;
}
a{
    text-decoration: none;
    color: var(--text-color);
}
a:hover{
    cursor: pointer;
    color: var(--highlight-color);
}
#background{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(var(--bg-color),var(--theme-color));
    z-index: -100000;
}
:root{
    --text-color: #000000;
    --lighter-text-color: #585858;
    --highlight-color: #e45f32;
    --bg-color: #cee6e7;
    --theme-color: #FFF4F0;
    --secondary-color: #d1d1d1;
    --line-color: #e07b1d;

    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: var(--text-color);
}
</style>
