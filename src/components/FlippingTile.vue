<template>
<div class="tile" :class="{'hint':props.hint}" :title="props.title" ref="tile" @mouseover="flip()" @touchover="flip()">
    <div class="frontface">
        <img :src="`${publicPath}skills/${props.src}.svg`" :alt="props.title" />
    </div>
    <div class="backface">
    </div>
</div>
</template>

<script setup>
import { ref } from 'vue';

const publicPath = ref(process.env.BASE_URL);
const tile = ref(null);
const props = defineProps({
    title: {
        type: String,
        required: true
    },
    src: {
        type: String,
        required: true
    },
    hint: {
        type: Boolean,
        default: false
    }
});

function flip(){
    tile.value.classList.add('flip');
    if(props.hint){
        tile.value.classList.remove('hint');
    }
}

</script>

<style scoped>
.tile{
    border-radius: 15px;
    padding: 0.5rem;
    background-color: var(--bg-top-color);
    transition: all 0.3s ;
    cursor:help;
    display: flex;
    justify-content: center;
    align-items: center;
    transform-style: preserve-3d;
    width: 5rem;
    height: 5rem;
}
.tile:hover>.backface{
    box-shadow: 5px 5px 10px var(--secondary-highlight-color);
}
.tile>div{
    width:100%;
    height:100%;
    backface-visibility: hidden;
}
.tile img{
    width:100%;
    height:100%;
    object-fit: contain;
    transform: rotateY(180deg);
}
.backface{
    background-color: var(--highlight-color);
    border-radius: 15px;
    position: absolute;
    width: 100%;
    height: 100%;
    box-shadow: -5px 5px 10px #000;
}
.flip{
    transform: rotateY(180deg);
}
.flip>.backface{
    box-shadow: 5px 5px 10px #000;
}
.tile.hint{
    animation: flip-hint 3s;
    animation-iteration-count: infinite;
}

@keyframes flip-hint{
    0%{
        transform: rotateY(0deg);
    }
    40%{
        transform: rotateY(0deg);
    }
    70%{
        transform: rotateY(75deg);
    }
    85%{
        transform: rotateY(135deg);
    }
    100%{
        transform: rotateY(0deg);
    }
}

@media (max-width: 768px) {
    .tile{
        width: 3rem;
        height: 3rem;
        animation: flip-mobile 1s forwards;
    }
    @keyframes flip-mobile{
        from{
            transform: rotateY(0deg);
        }
        to{
            transform: rotateY(180deg);
        }
    }
}
</style>