import { defineStore } from 'pinia'
export const useThemeStore = defineStore('theme', {
state: () => ({
    theme: "light",
}),
actions: {
    setTheme(theme){
        if ( theme != "light" && theme != "dark" ) {
            theme = "light";
        }
        this.theme = theme;
        localStorage.setItem("theme", theme);
        document.documentElement.setAttribute('data-theme', theme);
    },
    init(){
        let theme = localStorage.getItem("theme");
        document.documentElement.setAttribute('data-theme', theme);
        if ( theme == null ) {
            theme = "light";
        }
        this.theme = theme;
    }
},
getters: {
    getTheme(){
        return this.theme;
    }
}
});