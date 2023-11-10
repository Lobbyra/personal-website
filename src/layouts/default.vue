<template>
<div id="defaultLayoutMain">
    <!-- <v-app-bar
    app
    v-if="isMobileComp"
    :clipped-left="true">
        <v-app-bar-nav-icon
        variant="text"
        @click.stop="isDrawerShown = !isDrawerShown"/>
    </v-app-bar> -->
    <div id="desktopAppBar">
        <div id="desktopAppBarContent">
            <a
            target="_blank"
            href="https://github.com/Lobbyra">
                <v-icon
                size="large"
                color="black">
                    mdi-github
                </v-icon>
            </a>
            <a
            target="_blank"
            href="https://app.hackthebox.com/users/527776">
                <img
                alt="htb personal icon"
                src="@/assets/htb.svg">
            </a>
        </div>
    </div>
    <v-navigation-drawer
    app
    fixed
    :clipper="true"
    v-if="isMobileComp"
    v-model="isDrawerShown">
        coucou
    </v-navigation-drawer>
    <slot/>
</div>
</template>

<script lang='ts'>

import { PublicPages } from "@/router/index";

export default {
    name: 'DefaultLayout',
    data() {
        return {
            publicPages: PublicPages,
            isDrawerShown: false as boolean,
        }
    },
    mounted() {
    },
    computed: {
        isMobileComp(): boolean {
            return (this.$vuetify.display.width <= 600);
        }
    }
};
</script>

<style scoped>

#defaultLayoutMain {
    width: 100%;
    height: 100%;
}

#desktopAppBar {
    /* LAYOUT */
    width: 100%;
    height: 64px;
    display: flex;
    padding-left: 0px;
    padding-right: 0px;
    align-items: center;
    justify-content: center;
    /* STYLE */
    background-color: rgba(var(--v-theme-background));
}

#desktopAppBarContent {
    gap: 12px;
    width: 100%;
    display: flex;
    max-width: 1100px;
    margin-right: 12px;
    margin-left: 12px;
}

</style>
