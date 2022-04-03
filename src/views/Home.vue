<template>
    <div id="container">
        <div id="contacts">
            <div class="item">
                <i data-feather="mail"></i>
                <label> wittmann.aron@gmail.com </label>
            </div>
        </div>
        <div id="scroller">
            <div id="s1" class="stage">
                about me
                <br />
                sdfgsdfg
                <br />
                sdfgsfdfffffffffff
                <br />
                sdfgsdfgadfgagdf
                <br />
                gafgsfgsfgsfgsfgsfg
            </div>
            <div id="s2" class="stage">
                about me
                <br />
                sdfgsdfg
                <br />
                sdfgsfdfffffffffff
                <br />
                sdfgsdfgadfgagdf
                <br />
                gafgsfgsfgsfgsfgsfg
            </div>
            <div id="s3" class="stage">
                about me
                <br />
                sdfgsdfg
                <br />
                sdfgsfdfffffffffff
                <br />
                sdfgsdfgadfgagdf
                <br />
                gafgsfgsfgsfgsfgsfg
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Home",
    components: {},
    mounted() {
        let items = document.querySelectorAll(".stage");
        let navHeight = document.querySelector("#nav").offsetHeight;
        for (let i = 0; i < items.length; i++) {
            new ScrollMagic.Scene({
                triggerElement: items[i],
                triggerHook: "onLeave",
                duration: items[i].offsetHeight-navHeight,
                offset: -navHeight
            })
            .setPin(items[i], { pushFollowers: false })
            .setTween(new TweenMax.to(items[i], 1, {
                opacity: 0
            }))
            .addIndicators({ name: "" + i })
            .addTo(controller);
        }
    },
};
</script>

<style scoped>
#container {
    margin-top: var(--navbar-height);
    height: calc(100% - var(--navbar-height));
}
#contacts {
    top: var(--navbar-height);
    position: fixed;
    padding: 20px;
    width: var(--contacts-width);
}
#scroller {
    position: absolute;
    top:0;
    margin-left: var(--contacts-width);
    width: calc(100% - var(--contacts-width));
    height: calc(100vh - var(--navbar-height));
}
.stage {
    text-align: center;
    height: 100%;
    width: 100%;
}
#s1 {
    
}
#s2 {
    
}
#s3 {
    
}
</style>
<style>
:root {
    --contacts-width: 20%;
}
</style>