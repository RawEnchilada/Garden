<template>    
    <div id="nav">
        <router-link to="/">Home</router-link>
    </div>
</template>

<script>
export default {
    name:"Navbar"
}
</script>

<style scoped>

#nav {
    width: 100%;
    padding: 0px 30px;
    display: flex;
    height: var(--navbar-height);
    position: fixed;
    top:0px;
    color:var(--text-color);
    margin-left: var(--contacts-width);
    z-index: 1000;
}

#nav a {
    font-weight: bold;
    padding: 10px;
    color: inherit;
}

#nav a.router-link-exact-active {
    color: var(--header-color);
}

#nav a:hover{
    cursor: pointer;
    color: var(--highlight-color);
}



</style>
<style>
:root{
    --navbar-height: 5%;
}
</style>