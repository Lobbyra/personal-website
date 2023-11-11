<template>
<div id="mainHome">
    <div v-if="isMobileComp == true">
        <HomeMobile/>
    </div>
    <div
    id="deskContent"
    v-if="isMobileComp == false">
        <div id="introContent">
            <div id="name">
                <div id="firstName">
                    <span class="dmSansBig">
                        jérémy
                    </span>
                </div>
                <div
                id="lastName"
                class="align-self-end">
                    <span class="dmSansBig">
                        caudal
                    </span>
                </div>
            </div>
            <div id="chipList">
                <MyChip
                outlined
                color="#F7DF1E">
                    <img
                    alt="vue icon"
                    class="chipIcon mr-2"
                    src="@/assets/jsIcon.svg">
                    <span class="preventSelect">
                        JavaScript
                    </span>
                </MyChip>
                <a href="https://vuejs.org/" target="_blank">
                    <MyChip
                    outlined
                    color="#41B883">
                        <img
                        alt="vue icon"
                        class="chipIcon mr-1"
                        src="@/assets/vueIcon.svg">
                        <span class="preventSelect">
                            VueJS
                        </span>
                    </MyChip>
                </a>
                <a href="https://nestjs.com/" target="_blank">
                    <MyChip
                    outlined
                    color="#E0234E">
                        <img
                        alt="vue icon"
                        class="chipIcon mr-1"
                        src="@/assets/nestjsIcon.svg">
                        <span class="preventSelect">
                            NestJS
                        </span>
                    </MyChip>
                </a>
                <MyChip
                icon
                outlined
                color="#F34F29">
                    <img
                    class="chipIcon"
                    alt="vue icon"
                    src="@/assets/gitIcon.svg">
                </MyChip>
                <MyChip
                icon
                outlined
                color="#2396ED">
                    <img
                    class="chipIcon"
                    alt="vue icon"
                    src="@/assets/dockerIcon.svg">
                </MyChip>
                <MyChip
                icon
                outlined
                color="#FF9900">
                    <img
                    alt="vue icon"
                    class="chipIcon"
                    src="@/assets/awsIcon.svg">
                </MyChip>
                <MyChip
                icon
                outlined
                color="#1E4B8F">
                    <img
                    class="chipIcon"
                    alt="vue icon"
                    src="@/assets/cIcon.png">
                </MyChip>
            </div>
            <div id="introTxt">
                <span>
                    {{ $t("intro") }}
                </span>
            </div>
            <div id="btnList">
                <MyBtn>
                    <a
                    target="_blank"
                    class="btnContent"
                    href="https://www.linkedin.com/feed/">
                        <img
                        alt="vue icon"
                        class="chipIcon"
                        src="@/assets/linkedinIcon.svg">
                        <span class="preventSelect preventWordBreak">
                            ME CONTACTER
                        </span>
                    </a>
                </MyBtn>
                <MyBtn>
                    <a
                    target="_blank"
                    class="btnContent"
                    href="/fr/cv.pdf">
                        <div class="btnContent">
                            <img
                            alt="vue icon"
                            class="chipIcon"
                            src="@/assets/docIcon.svg">
                            <span class="preventSelect preventWordBreak">
                                TÉLÉCHARGER MON CV
                            </span>
                        </div>
                    </a>
                </MyBtn>
                [cicd test]
            </div>
        </div>
        <div id="introIllu">
            <img
            id="mainLogoSvg"
            src="@/assets/homeMainIllu.svg" alt="main illu logo">
        </div>
    </div>
</div>
</template>

<script lang='ts'>

import HomeMobile from "@/components/home/mobile.vue";
import MyBtn from "@/components/myBtn.vue";
import MyChip from "@/components/myChip.vue";

export default {
    name: 'HomePage',
    components: {
        MyBtn,
        MyChip,
        HomeMobile,
    },
    data() {
        return {
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

@media only screen and (min-width: 600px) {
    #mainHome {
        display: flex;
        align-items: center;
        height: calc(100vh - 150px);
    }
}

#deskContent {
    margin-top: 75px;
    padding-left: 12px;
    padding-right: 12px;
    display: flex;
    width: 100%;
    max-width: 1200px;
    gap: 12px;
    margin: 0 auto;
    justify-content: space-between;
}

#mainLogoSvg {
    width: 300px;
}

.chipBorder {
    border: 2px #41B883 solid;
}

.iconSized {
    width: 20px;
}

#name {
    display: flex;
    flex-direction: column;
    margin-bottom: -15px;
}

#firstName {
    margin-right: 150px;
}

#lastName {
    margin-top: -30px;
}

.dmSansBig {
    font-family: 'DM Sans', sans-serif;
    font-size: 125px;
    letter-spacing: 6px;
}

#introContent {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

#chipList {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.chipIcon {
    width: 22px;
}

#btnList {
    display: flex;
    gap: 20px;
    flex-wrap: nowrap;
}

.btnContent {
    display: flex;
    gap: 10px;
}

#introContent {
    max-width: 60%;
}

#introIllu {
    max-width: 40%;
}

a {
    text-decoration: inherit;
    color: inherit;
    display: flex;
}

#introTxt {
    text-align: justify;
    text-justify: inter-word;
}

</style>
