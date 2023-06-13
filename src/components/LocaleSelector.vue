<template>
<div>
    <div v-show="!showDropdown" class="current" @click="showDropdown = !showDropdown">
        <span :class="`fi fi-${selectedLanguage}`"></span>
    </div>
    <div v-show="showDropdown" class="dropdown">
        <div v-for="language of languages" :key="language">
            <span :class="`fi fi-${language}`" @click="selectLanguage(language)"></span>
        </div>
    </div>
</div>
</template>

<script setup>
import "/node_modules/flag-icons/css/flag-icons.min.css";
import { languages,currentLanguage } from "@/scripts/locale.js";
import { ref } from "vue";
const selectedLanguage = ref(currentLanguage);
const showDropdown = ref(false);
function selectLanguage(language){
    showDropdown.value = false;
    selectedLanguage.value = language;
    localStorage.setItem("language", language);
    window.location.replace(window.location.origin);
}
</script>

<style scoped>
.fi{
    cursor:pointer;
}
.dropdown{
    border-radius: 5px;
}
.dropdown>div{
    padding: 0.25rem 0.5rem;
    border-radius: 5px;
}
.dropdown>div>span:hover{
    box-shadow: 0 0 15px var(--highlight-color);
}
</style>