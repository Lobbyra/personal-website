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
            href="/"
            class="lBtn">
                <img
                id="lLogo"
                src="@/assets/l.svg" 
                alt="jeremy caudal logo"
                v-if="$vuetify.theme.current.dark == false">
                <img
                id="lLogo"
                src="@/assets/lBlack.svg" 
                alt="jeremy caudal logo"
                v-if="$vuetify.theme.current.dark == true">
            </a>
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
            <div id="linkLists">
                <a href="/">
                    <div class="headerLink">
                        {{ $t('home') }}
                    </div>
                </a>
                <a href="/posts">
                    <div class="headerLink">
                        {{ $t('homeBlog') }}
                    </div>
                </a>
            </div>
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
    z-index: 100;
    display: flex;
    position: fixed;
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
    margin-left: 12px;
    margin-right: 12px;
}

#slot {
    padding-top: 64px;
}

.lBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 4px;
    width: 40px;
    height: 40px;
    border-radius: 20px;
    background-color: rgba(var(--v-theme-on-background), 1);
}

#lLogo {
    transition: 0.4s;
    width: 17px;
}

#lLogo:hover {
    transform: scale(1.15);
}

.headerLink {
    font-size: 25px;
    display: flex;
    align-items: center;
    font-family: "DM sans";
    transition: all 0.2s;
}

.headerLink:hover {
    box-shadow:
    inset 0 -0.15em white,
    inset 0 -0.2em #000;
}

#linkLists {
    display: flex;
    flex-wrap: nowrap;
    gap: 24px;
}

</style>
