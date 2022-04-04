
import Contacts from '@/components/Contacts.vue';

export default {
    name: "Home",
    components: {
        Contacts
    },
    mounted() {
        const items = document.querySelectorAll(".stage");
        const navHeight = document.querySelector("#nav").offsetheight;

        
        for (let i = 0; i < items.length; i++) {
            const text = items[i].querySelector(".text");
            const node = items[i].querySelector(".node");
            const duration = (items[i].offsetHeight);

            //for each element
            new ScrollMagic.Scene({
                triggerElement: items[i],
                triggerHook: "onLeave",
                duration: duration,
                offset: -navHeight
            })
            .setPin(items[i], { pushFollowers: false })
            .addTo(controller);

            (i == 0 ?
                new ScrollMagic.Scene({
                    triggerElement: items[i],
                    triggerHook: "onLeave"
                })
                .setTween(new TweenMax.to(text, 1.5, {
                    opacity: 1
                })):
                new ScrollMagic.Scene({
                    triggerElement: items[i],
                    triggerHook: "onLeave",
                    duration: duration/3
                })
                .setTween(new TweenMax.to(text, 1, {
                    opacity: 1
                })))
            .addTo(controller);

            new ScrollMagic.Scene({
                triggerElement: items[i],
                triggerHook: "onLeave",
                duration: duration/3,
                offset: duration/3*2
            })
            .setTween(new TweenMax.to(text, 1, {
                opacity: 0
            }))
            .addTo(controller);

            (i == 0 ?
                new ScrollMagic.Scene({
                    triggerElement: items[i],
                    triggerHook: "onLeave"
                })
                .setTween(new TweenMax.to(node, 2, {
                    width: "30px", height: "30px",left: "-16px",top: "50%"
                })):
                new ScrollMagic.Scene({
                    triggerElement: items[i],
                    triggerHook: "onLeave",
                    duration: duration/3
                })     
                .setTween(new TweenMax.to(node, 1, {
                    width: "30px", height: "30px",left: "-16px",top: "50%"
                })))
            .addTo(controller);

            new ScrollMagic.Scene({
                triggerElement: items[i],
                triggerHook: "onLeave",
                duration: duration/3,
                offset: duration/3*2
            })            
            .setTween(new TweenMax.to(node, 1, {
                width: "0px", height: "0px",left: "-1px",top: "10%"
            }))
            .addTo(controller);
        }
    },
};