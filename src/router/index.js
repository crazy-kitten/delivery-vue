import {createRouter, createWebHistory} from "vue-router";
import HomeView from "@/views/HomeView.vue";
import GoodsView from "@/views/GoodsView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes:[{
        path: '/',
        component: HomeView,
    }, {
        path: '/rest',
        component: HomeView
    }, {
        path: '/goods',
        component: GoodsView
    }]
})

export default router