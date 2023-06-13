<template>
 <div id="scroll-arrow">
    <div class="appear shadow">
        Scroll to see more...
        <div id="cta">
            <span class="arrow next " id="first-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down"><polyline points="12 19 19 12 12 5"></polyline></svg>
            </span>
            <span class="arrow next " id="second-arrow">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-arrow-down"><polyline points="12 19 19 12 12 5"></polyline></svg>
            </span>
        </div>
    </div>
</div>
</template>

<script setup>
import { onMounted,onBeforeUnmount, ref } from 'vue';

function onScroll(){
    if(window.scrollY > 50){
        const arrow = document.getElementById('scroll-arrow');
        arrow.classList.add('disappear');
        window.removeEventListener('scroll', onScroll);
    }
}

onMounted(()=>{
    window.addEventListener('scroll', onScroll);
});

onBeforeUnmount(()=>{
    window.removeEventListener('scroll', onScroll);
});
</script>

<style scoped>
#scroll-arrow {
    bottom: 20%;
    position: fixed;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    color:var(--header-color);
    z-index: 100000;
}
#cta{
    width: 40px;
    height: 40px;
    position: absolute;
    transform: rotate(90deg) translateX(10px) translateY(-40px);
}
.arrow {
    position: absolute;
    bottom: 0;
    margin-left:0px;
    width: 40px;
    height: 40px;
    background-size: contain;
}
#second-arrow{
    margin-left: 12px;
}
.next {
    color: var(--header-color);
}
.bounceAlpha {
    animation-name: bounceAlpha;
    animation-duration:1.4s;
    animation-iteration-count:infinite;
    animation-timing-function:linear;
}
.arrow.primera.bounceAlpha {
    animation-name: bounceAlpha;
    animation-duration:1.4s;
    animation-delay:0.2s;
    animation-iteration-count:infinite;
    animation-timing-function:linear;
}
.arrow{
    animation-name: bounceAlpha;
    animation-duration:1.4s;
    animation-iteration-count:infinite;
    animation-timing-function:linear;
}
.arrow#first-arrow{
    animation-name: bounceAlpha;
    animation-duration:1.4s;
    animation-delay:0.2s;
    animation-iteration-count:infinite;
    animation-timing-function:linear;
}
.appear{
    animation-name: appear;
    animation-duration:5s;
    animation-iteration-count:1;
    animation-timing-function:linear;
}
.disappear{
    animation-name: disappear;
    animation-duration:1s;
    animation-iteration-count:1;
    animation-timing-function:linear;
    animation-fill-mode: forwards;
}
@keyframes bounceAlpha {
  0% {opacity: 1; transform: translateX(0px) scale(1);}
  25%{opacity: 0; transform:translateX(10px) scale(0.9);}
  26%{opacity: 0; transform:translateX(-10px) scale(0.9);}
  55% {opacity: 1; transform: translateX(0px) scale(1);}
}
@keyframes appear {
  0% {opacity: 0;}
  70% {opacity: 0;}
  100%{opacity: 1;}
}
@keyframes disappear {
  0% {opacity: 1;}
  95%{opacity: 0;}
  100%{opacity: 0;display: none;top: 100%;}
}
</style>