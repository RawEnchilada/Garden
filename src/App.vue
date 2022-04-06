<template>
    <div id="background"></div>
    <router-view />
    <button @click="$store.commit('setTheme',$store.state.theme=='light'?'dark':'light')">
        <svg v-if="$store.state.theme == 'dark'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
    </button>
</template>

<script>

//import Navbar from "@/components/Navbar.vue";
export default {
    name:"App",
    components:{
    },
    mounted(){
        if (history.scrollRestoration) {
            history.scrollRestoration = "manual";
        } else {
            window.onbeforeunload = function () {
                window.scrollTo(0, 0);
            }
        }

        let theme="light";
        if(localStorage.getItem("theme")){
            if(localStorage.getItem("theme") == "dark"){
                theme = "dark";
            }
        } else if(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            theme = "dark";
        }
        this.$store.commit("setTheme", theme);
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
#app>button{
    position: fixed;
    top: 20px;
    right: 20px;
    border: none;
    background: none;
    text-decoration: none;
    z-index: 100000 !important;
    color:var(--text-color);
}
#app>button:hover{
    cursor:pointer;
    color: var(--highlight-color);
}
:root{
    --text-color: #000000;
    --lighter-text-color: #585858;
    --highlight-color: #e45f32;
    --bg-color: #bee2e3;
    --theme-color: #ffe2d8;
    --secondary-color: #d1d1d1;
    --header-color: #e07b1d;

    --navbar-height: 0px;

    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: var(--text-color);
}
[data-theme="dark"] {
    --text-color: #FFF4F0;
    --lighter-text-color: #ebe0dc;
    --highlight-color: #ff90b7;
    --bg-color: #595B83;
    --theme-color: #cc8bb9;
    --secondary-color: #d1d1d1;
    --header-color: #f4578d;
}
</style>
