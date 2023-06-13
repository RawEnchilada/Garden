<template>
    <Background />
    <NavDock/>
    <ScrollArrow />
    <div id="content">
        <Section img_name="clouds" class="front">
            <Cover />
        </Section>
        <Section img_name="mountain" :stack="true">
            <About />
        </Section>
        <Section img_name="3_trees" :stack="true">
            <Skills />
        </Section>
        <Section img_name="2_trees" :stack="true">
            <References />
        </Section>
        <Section img_name="1_trees" :stack="true">
            <Contact />
        </Section>
    </div>
</template>

<script setup>
import { onMounted } from 'vue';
import Background from '@/components/Background.vue';
import NavDock from '@/components/NavDock.vue';
import ScrollArrow from '@/components/ScrollArrow.vue';
import Cover from '@/components/sections/Cover.vue';
import About from '@/components/sections/About.vue';
import References from '@/components/sections/References.vue';
import Contact from '@/components/sections/Contact.vue';
import Section from '@/components/Section.vue';
import Skills from '@/components/sections/Skills.vue';

onMounted(()=>{
    document.title = "Garden";
});

</script>

<style>
#content{
    height:100%;
    max-width: 1280px;
    margin: 0 auto;
}
.front>.parallax{
    z-index:0;
}
a{
    color: var(--text-color);
    text-decoration: none;
    cursor:pointer;
}
a:hover{
    color: var(--highlight-color);
}
.title{
    color: var(--title-color);
}
.description{
    font-weight: 600;
}
.description>*{
    margin: 1em 0;
} 
</style>
