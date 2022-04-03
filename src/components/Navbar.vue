<template>    
    <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

#nav {
    width: 100%;
    padding: 0px;
    display: flex;
    height: var(--navbar-height);
    position: fixed;
    top:0px;
    color:var(--theme-color);
    background-color: var(--text-color);
}
#nav::after{
    content: "";
    height: 20px;
    width: 100%;
    position: fixed;
    top:var(--navbar-height);
    background-image: linear-gradient(var(--text-color),var(--theme-color));
}

#nav a {
    font-weight: bold;
    padding: 10px;
    color: inherit;
}

#nav a.router-link-exact-active {
    color: #42b983;
}

</style>