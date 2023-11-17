import FHFPage from "@/pages/404.vue";
import HomePage from "@/pages/home.vue";
import PostPage from "@/pages/post.vue";
import PostsPage from "@/pages/posts.vue";
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
    {
        name: "posts",
        path: "/posts",
    },
    {
        name: "post",
        path: "/posts/:uid",
    },
];

const routes: RouteRecordRaw[] = [
    {
        path: "/:locale",
        children: [
            {
                path: "",
                name: "index",
                meta: {
                    layout: "DefaultLayout",
                },
                component: HomePage,
            },
            {
                path: "posts/:uid",
                name: "posts",
                meta: {
                    layout: "DefaultLayout",
                },
                component: PostPage,
            },
            {
                path: "posts",
                name: "post",
                meta: {
                    layout: "DefaultLayout",
                },
                component: PostsPage,
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
