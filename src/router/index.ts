import FHFPage from "@/pages/404.vue";
import HomePage from "@/pages/home.vue";
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import localePresenceProtection from "./localePresenceProtection";

export const PublicPages: Array<{name: string, path: string}> = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "about",
        path: "/about",
    },
    {
        name: "contact",
        path: "/contact",
    },
];

const routes: RouteRecordRaw[] = [
    {
        path: "/:locale",
        children: [
            {
                path: "/:locale/",
                name: "index",
                meta: {
                    layout: "DefaultLayout",
                },
                component: HomePage,
            },
        ]
    },
    {
        path: "/:catchAll(.*)",
        meta: {
            layout: "DefaultLayout"
        },
        component: FHFPage,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

router.beforeEach((to: any, from: any, next: any) => {
    const localeReturn: string = localePresenceProtection(to);
    if (localeReturn != "") {
        next(localeReturn);
        return ;
    }
    next();
});

export default router;
