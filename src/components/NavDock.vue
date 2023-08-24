<template>
<div id="dock">
    <!--LocaleSelector class="item flag"/>
    <div aria-label="separation line" class="line"></div-->
    <router-link to="/" class="item" :class="{highlight:($route.path == '/')}">
        <label v-show="landscape">Home</label>
        <button aria-label="home route">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-home"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        </button>
    </router-link>
    <a href="https://coal-tang-4cf.notion.site/DataAssistant-1329c395c7bc475b8e06fd1268aa3da7" class="item" :class="{highlight:($route.path == '/thesis')}">
        <label v-show="landscape">Thesis</label>
        <button aria-label="thesis route">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-paperclip"><path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/></svg>
        </button>
    </a>
    <div class="sections" v-if="sectionStore.sections.length > 0">
        <div aria-label="separation line" class="line"></div>
        <div class="item" :class="{highlight:(nearSection == 0)}" @click="scrollTo(0)">
            <label v-show="landscape">Title</label>
            <button aria-label="top navigation">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-up-circle"><circle cx="12" cy="12" r="10"/><polyline points="16 12 12 8 8 12"/><line x1="12" y1="16" x2="12" y2="8"/></svg>
            </button>
        </div>
        <div class="item" :class="{highlight:(nearSection == 1)}" @click="scrollTo(1)">
            <label v-show="landscape">About</label>
            <button aria-label="about navigation">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
            </button>
        </div>
        <div class="item" :class="{highlight:(nearSection == 2)}" @click="scrollTo(2)">
            <label v-show="landscape">Skills</label>
            <button aria-label="skills navigation">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-award"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>
            </button>
        </div>
        <div class="item" :class="{highlight:(nearSection == 3)}" @click="scrollTo(3)">
            <label v-show="landscape">References</label>
            <button aria-label="references navigation">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </button>
        </div>
        <div class="item" :class="{highlight:(nearSection == 4)}" @click="scrollTo(4)">
            <label v-show="landscape">Contact</label>
            <button aria-label="contact navigation">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-mail"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </button>
        </div>
    </div>
    <!--div aria-label="separation line" class="line"></div>
    <button aria-label="theme switcher" class="item theme-button" @click="changeTheme()">
        <svg v-if="theme == 'dark'" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
    </button-->
</div>
</template>

<script setup>
import LocaleSelector from './LocaleSelector.vue';
import { useSectionStore } from '@/store/section';
import { useThemeStore } from '@/store/theme';
import { computed } from 'vue';

const sectionStore = useSectionStore();
const themeStore = useThemeStore();

const theme = computed(() => themeStore.theme);

const nearSection = computed(() => sectionStore.section);
const landscape = computed(() => {
    return window.innerWidth > window.innerHeight;
});

function changeTheme(){
    themeStore.setTheme(theme.value=='light'?'dark':'light');
}

function scrollTo(y){
    sectionStore.scrollTo(y);
}

</script>

<style scoped>
#dock{
    position: fixed;
    top:0;
    right:0;
    width: min-content;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
    padding: 0.5em;
    z-index:1000;
}
.sections{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: flex-end;
}
.item,.line{
    margin: 0.5rem;
}
#dock a, #dock button{
    padding: 0;
    color: var(--text-color);
    text-decoration: none;
    border: none;
    background: none;
}
#dock .item:hover>label,#dock .item:hover>button, .highlight>label, .highlight>button{
    color: var(--highlight-color) !important;
    cursor: pointer;
}
.line{
    border-top-color: var(--text-color);
    border-top-width: 1px;
    border-top-style: solid;
    width: 24px;
    height: 1px;
}
.item{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
}
.item>label{
    margin-right: 0.5em;
    font-size: 0.8em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
}
.flag.item{
    width:24px;
    justify-content: center;
}

.theme-button:hover{
    color: var(--highlight-color) !important;
    cursor: pointer;
}

</style>