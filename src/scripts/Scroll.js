
import Contacts from '@/components/Contacts.vue';

export default {
    name: "ScrollDesktop",
    components: {
        Contacts
    },
    data() {
        return {
            publicPath: this.$store.state.publicPath
        }
    },
    mounted() {
        const items = document.querySelectorAll(".stage");
        const navHeight = document.querySelector("#nav")?document.querySelector("#nav").offsetheight:0;
        const duration = (items[0].offsetHeight * 2); //Only samples the first element

        //clouds------------------------------------------------------------------------
        new ScrollMagic.Scene({
            triggerElement: items[0],
            triggerHook: "onLeave",
            duration: duration * items.length
        })
            .setTween(new TweenMax.fromTo(items[0].querySelector(".parallax"), 1, {
                left: "-50%"
            }, {
                left: "50%"
            }))
            .addTo(controller);

        for (let i = 0; i < items.length-1; i++) {
            const text = items[i].querySelector(".text");
            const node = items[i].querySelector(".node");
            const parallax = items[i].querySelector(".parallax");

            //pin---------------------------------------------------------------------
            new ScrollMagic.Scene({
                triggerElement: items[i],
                triggerHook: "onLeave",
                duration: duration,
                offset: -navHeight
            })
                .setPin(items[i], { pushFollowers: false })
                .addTo(controller);

            //parallax background elements----------------------------------------------
            if (parallax != null) {
                (i == 0 ?
                    new ScrollMagic.Scene({
                        triggerElement: items[i]
                    })
                        .setTween(new TweenMax.fromTo(parallax, 2, {
                            bottom: "-100%"
                        }, {
                            bottom: "0%"
                        })) :
                    new ScrollMagic.Scene({
                        triggerElement: items[i],
                        duration: duration
                    })
                        .setTween(new TweenMax.fromTo(parallax, 1, {
                            bottom: "-100%"
                        }, {
                            bottom: "-10%"
                        })))
                    .addTo(controller);
            }

            //enter--------------------------------------------------------------------------
            if (i == 0) {
                //text first--------------------------
                new ScrollMagic.Scene({
                    triggerElement: items[i]
                }).setTween(TweenMax.fromTo(text, 1.5, {
                    opacity: 0,
                    bottom: "-90%"
                }, {
                    opacity: 1,
                    bottom: "0%"
                })).addTo(controller);

                //node first--------------------------
                new ScrollMagic.Scene({
                    triggerElement: items[i]
                }).setTween(new TweenMax.fromTo(node, 1.5, {
                    width: "0px", height: "0px", left: "-1px", top: "90%"
                }, {
                    width: "30px", height: "30px", left: "-16px", top: "50%"
                })).addTo(controller);
            }
            else {
                //text --------------------------
                new ScrollMagic.Scene({
                    triggerElement: items[i],
                    duration: duration / 2
                }).setTween(new TweenMax.fromTo(text, 1, {
                    opacity: 0
                }, {
                    opacity: 1,
                    ease: "expo.in"
                })).addTo(controller);

                //node --------------------------
                new ScrollMagic.Scene({
                    triggerElement: items[i],
                    duration: duration / 2
                }).setTween(TweenMax.fromTo(node, 1, {
                    width: "0px", height: "0px", left: "-1px"
                }, {
                    width: "30px", height: "30px", left: "-16px", ease: "expo.in"
                })).addTo(controller);
            }


            //exit---------------------------------------------------------
            if(i < items.length - 1) {
                //text --------------------------
                new ScrollMagic.Scene({
                    triggerElement: items[i],
                    duration: duration / 2,
                    offset: duration / 2
                }).setTween(TweenMax.fromTo(text, 1, {
                    left: "0%",
                    display: "block"
                }, {
                    opacity: 0,
                    left: "75%",
                    display: "none"
                })).addTo(controller);

                //node --------------------------
                new ScrollMagic.Scene({
                    triggerElement: items[i],
                    duration: duration / 2,
                    offset: duration / 2
                }).setTween(new TweenMax.fromTo(node, 1, {
                    width: "30px", height: "30px", left: "-16px", top: "50%"
                }, {
                    width: "0px", height: "0px", left: "-1px", top: "10%"
                })).addTo(controller);
            }

        }
        //last pin
        new ScrollMagic.Scene({
            triggerElement: items[items.length - 1],
            triggerHook: "onLeave",
            duration: duration,
            offset: -navHeight
        })
        .setPin(items[items.length-1], { pushFollowers: false })
        .addTo(controller);

        //contact arrow
        new ScrollMagic.Scene({
            triggerElement: items[items.length-2],
            triggerHook: "onLeave",
            duration: duration /2
        })
        .setTween(new TweenMax.fromTo(document.querySelector("#contactArrow"), 1, {
            opacity: 0
        }, {
            opacity: 1
        }))
        .addTo(controller);
    }
};