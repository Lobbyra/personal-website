<template>
<div id="mainPostPage">
    <div
    v-if="doc"
    id="content">
        <iframe src="https://giphy.com/embed/ThrM4jEi2lBxd7X2yz" width="480" height="480" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/thisgifishaunted-halloween-working-happy-ThrM4jEi2lBxd7X2yz">via GIPHY</a></p>
        {{ doc.uid }}
        <v-btn @click="$router.push('/posts')">
            RETOUR A LA LISTE
        </v-btn>
        <!-- <PrismicEmbed :field="doc.data.richtext[13]"/> -->
        <MyRichtext :value="doc.data.richtext"/>
    </div>
</div>
</template>

<script lang='ts'>
import MyRichtext from "@/components/myprismic/myRichtext.vue";
import type { PrismicDocument } from '@prismicio/client/*';
import { PrismicEmbed } from '@prismicio/vue';

export default {
    name: 'PostPage',
    components: {
        PrismicEmbed,
        MyRichtext,
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
    justify-content: center;
}

#content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 24px;
}

</style>
