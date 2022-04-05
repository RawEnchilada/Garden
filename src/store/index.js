import { createStore } from 'vuex'

export default createStore({
    state: {
        publicPath: process.env.BASE_URL,
        theme: "light",
    },
    mutations: {
        setTheme(state, theme) {
            state.theme = theme;
            localStorage.setItem('theme', theme);
            document.documentElement.setAttribute('data-theme', theme);
        }
    },
    actions: {
    },
    modules: {
    }
})
