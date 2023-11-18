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
            class="d-flex align-center"
            href="https://github.com/Lobbyra">
                <v-icon
                size="large"
                :color="$vuetify.theme.current.colors.onBackground">
                    mdi-github
                </v-icon>
            </a>
            <v-spacer/>
            <v-btn
            fab
            @click="changeTheme()"
            elevation="0"
            :icon="isLightThemeComp ? 'md:light_mode' : 'md:dark_mode'"/>
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
    <div id="slot">
        <slot/>
    </div>
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
    methods: {
        changeTheme() {
            this.$emit(
                "changeTheme",
                this.isLightThemeComp ? "dark" : "light"
            )
        }
    },
    computed: {
        isLightThemeComp() {
            return (this.$vuetify.theme.current.dark == false);
        },
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
    position: fixed;
    overflow: scroll;
    z-index: 100;
    /* STYLE */
    background-color: rgba(var(--v-theme-background));
}

#desktopAppBarContent {
    gap: 12px;
    width: 100%;
    display: flex;
    max-width: 1100px;
    margin-left: 12px;
    margin-right: 12px;
}

#slot {
    padding-top: 64px;
}

</style>
