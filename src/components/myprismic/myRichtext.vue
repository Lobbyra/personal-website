<template>
<div id="mainRich">
    <component
    :key="index"
    :value="elem"
    v-for="(elem, index) in value"
    :is="rtTypeCompName.get(elem.type)"/>
</div>
</template>

<script lang='ts'>
import MyEmbed from "@/components/myprismic/myEmbed.vue";
import MyHeading from "@/components/myprismic/myHeading.vue";
import MyImage from "@/components/myprismic/myImage.vue";
import MyListItem from "@/components/myprismic/myListItem.vue";
import MyOListItem from "@/components/myprismic/myOListItem.vue";
import MyParagraph from "@/components/myprismic/myParagraph.vue";
import MyPreformatted from "@/components/myprismic/myPreformatted.vue";
import type { PropType } from '@vue/runtime-core';

export default {
    name: 'MyRichtext',
    components: {
        MyHeading,
        MyParagraph,
        MyEmbed,
        MyListItem,
        MyOListItem,
        MyImage,
        MyPreformatted,
    },
    props: {
        value: {
            type: Array as PropType<Array<any>>,
            required: true,
        },
    },
    data() {
        return {
            rtTypeCompName: new Map([
                ["heading1", "myHeading"],
                ["heading2", "myHeading"],
                ["heading3", "myHeading"],
                ["heading4", "myHeading"],
                ["heading5", "myHeading"],
                ["heading6", "myHeading"],
                ["paragraph", "myParagraph"],
                ["embed", "myEmbed"],
                ["list-item", "myListItem"],
                ["o-list-item", "myOListItem"],
                ["image", "myImage"],
                ["preformatted", "myPreformatted"],
            ]) as Map<string, string>,
        }
    },
    mounted() {
    },
};
</script>

<style scoped>

#mainRich {
    max-width: 900px;
}

</style>
