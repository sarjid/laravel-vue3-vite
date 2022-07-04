import { createRouter, createWebHistory } from "vue-router";
import about from "../views/About.vue";
import home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: home,
    },

    {
        path: "/about-us",
        name: "about",
        component: about,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
