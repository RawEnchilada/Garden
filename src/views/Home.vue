<template>
<ScrollDesktop v-if="!isMobile()"/>

</template>

<script>
import ScrollDesktop from "@/components/ScrollDesktop.vue";

export default{
    name:"Home",
    components:{
        ScrollDesktop
    },
    methods: {
        isMobile() {
            return true;
            /*if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            } else {
                return false
            }*/
        }

    }
}
</script>

