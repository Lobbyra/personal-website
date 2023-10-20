<template>
<div id="mainMobileHome">
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
    <div id="introIllu">
        <img
        id="mainLogoSvg"
        alt="main illu logo"
        src="@/assets/homeMainIllu.svg">
    </div>
    <div id="introTxt">
        <span>
            {{ $t("intro") }}
        </span>
    </div>
    <div id="chipListTxt">
        <div class="d-flex justify-center">
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
        </div>
        <div class="d-flex justify-center">
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
        </div>
        <div class="d-flex justify-center">
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
        </div>
    </div>
    <div id="iconChipList">
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
                <span class="preventSelect">
                    ME CONTACTER
                </span>
            </a>
        </MyBtn>
        <MyBtn>
            <a
            href="/cv.pdf"
            target="_blank"
            class="btnContent">
                <div class="btnContent">
                    <img
                    alt="vue icon"
                    class="chipIcon"
                    src="@/assets/docIcon.svg">
                    <span class="preventSelect">
                        TÉLÉCHARGER MON CV
                    </span>
                </div>
            </a>
        </MyBtn>
    </div>
</div>
</template>

<script lang='ts'>

import MyBtn from "@/components/myBtn.vue";
import MyChip from "@/components/myChip.vue";

export default {
    name: 'HomeMobile',
    components: {
        MyBtn,
        MyChip,
    },
    data() {
        return {
        }
    },
    mounted() {
    },
};
</script>

<style scoped>

#mainMobileHome {
    display: flex;
    flex-direction: column;
    gap: 24px;
    padding-bottom: 12px;
}

#name {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    margin-bottom: -15px;
}

#firstName {
    margin-right: 150px;
}

#lastName {
    margin-top: -30px;
    margin-right: -12px;
}

.dmSansBig {
    font-family: 'DM Sans', sans-serif;
    font-size: 100px;
    letter-spacing: 6px;
}

#introIllu {
    max-width: 100%;
    display: flex;
    justify-content: center;
    width: 100%;
}

#mainLogoSvg {
    width: 200px;
}

#introTxt {
    padding-left: 35px;
    padding-right: 35px;
    text-align: justify;
    text-justify: inter-word;
}

#chipListTxt {
    display: flex;
    flex-direction: column;
    gap: 14px;
}

#iconChipList {
    padding-top: 10px;
    display: flex;
    justify-items: center;
    gap: 12px;
    margin: 0 auto;
}

.chipIcon {
    width: 22px;
}

#btnList {
    display: flex;
    gap: 20px;
    flex-direction: column;
    padding-left: 35px;
    padding-right: 35px;
    flex-wrap: nowrap;
}

.btnContent {
    display: flex;
    justify-content: center;
    gap: 10px;
}


</style>
