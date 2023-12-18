<template>
<v-app>
    <main class="maxSize">
        <component @changeTheme="toggleTheme($event)" :is="layout || 'div'">
            <router-view />
        </component>
    </main>
</v-app>
</template>

<script setup lang="ts">

import layouts from "@/layouts/layouts";
import router from "@/router/index";
import { provide, shallowRef } from 'vue';
import { useTheme } from 'vuetify';
import { sTheme } from "./main";

const layout = shallowRef("div");

router.afterEach(
    (to: any) => {
        layout.value = (layouts as any)[to.meta.layout] || "div";
    }
);


const theme = useTheme()
theme.global.name.value = sTheme.theme;

function toggleTheme (newTheme: string) {
  theme.global.name.value = newTheme;
  sTheme.changeTheme(newTheme);
}

provide("app:layout", layout);

</script>

<style scoped>
</style>
