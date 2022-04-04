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
    width: 100%;
    color: var(--text-color);
    background-color: var(--theme-color);
}
a{
    text-decoration: none;
    color: var(--text-color);
}
a:hover{
    cursor: pointer;
    color: var(--highlight-color);
}
:root{
    --text-color: rgb(0, 0, 0);
    --lighter-text-color: #8b8b8b;
    --highlight-color: #e09812;
    --theme-color: rgb(255, 255, 255);
    --secondary-color: rgb(206, 206, 206);
    --line-color: rgb(255, 135, 23);

    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
