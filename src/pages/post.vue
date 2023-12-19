<template>
<div id="mainPostPage">
    <div
    v-if="doc"
    id="content">
        <v-btn
        icon
        class="align-self-start"
        @click="$router.push('/posts')">
            <v-icon>
                mdi-arrow-left
            </v-icon>
        </v-btn>
        <MyHeading
        id="postTitle"
        :value="doc.data.title[0]"/>
        <MyRichtext :value="doc.data.richtext"/>
    </div>
</div>
</template>

<script lang='ts'>
import MyHeading from "@/components/myprismic/myHeading.vue";
import MyRichtext from "@/components/myprismic/myRichtext.vue";
import type { PrismicDocument } from '@prismicio/client/*';
import { PrismicEmbed } from '@prismicio/vue';

export default {
    name: 'PostPage',
    components: {
        PrismicEmbed,
        MyRichtext,
        MyHeading,
    },
    data() {
        return {
            doc: null as PrismicDocument | null,
        };
    },
    async mounted() {
        this.doc = await this.fetchDocument();
        console.log(this.doc);
    },
    methods: {
        async fetchDocument(): Promise<PrismicDocument> {
            const response: {
                results: Array<PrismicDocument>;
            } = (await this.$prismic.client.getByUIDs("blogpost", [(this.$route.params.uid as string)]));
            return (response.results[0]);
        }
    },
};
</script>

<style scoped>

#mainPostPage {
    display: flex;
    padding: 24px;
    justify-content: center;
}

#content {
    display: flex;
    gap: 24px;
    min-width: 0;
    align-items: center;
    flex-direction: column;
}

</style>
