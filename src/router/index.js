import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '@/views/Home.vue';
import Thesis from '@/views/Thesis.vue';

export default createRouter({
    history: createWebHashHistory(),
    routes:[
        {
            path: '/',
            component: Home,
        },
        {
            path: '/thesis',
            component: Thesis,
        },
    ]
});

