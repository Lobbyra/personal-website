<template>
<v-app>
    <main class="maxSize">
        <component :is="layout || 'div'">
            <router-view />
        </component>
    </main>
</v-app>
</template>

<script setup lang="ts">

import layouts from "@/layouts/layouts";
import router from "@/router/index";
import { provide, shallowRef } from 'vue';

const layout = shallowRef("div");

router.afterEach(
    (to: any) => {
        layout.value = (layouts as any)[to.meta.layout] || "div";
    }
);

provide("app:layout", layout);

</script>

<style scoped>
</style>
