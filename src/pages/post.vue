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
    </div>
</div>
</template>

<script lang='ts'>
import type { PrismicDocument } from '@prismicio/client/*';


export default {
    name: 'PostPage',
    data() {
        return {
            doc: null as PrismicDocument | null,
        }
    },
    async mounted() {
        this.doc = await this.fetchDocument();
    },
    methods: {
        async fetchDocument() : Promise<PrismicDocument> {
            const response: { results: Array<PrismicDocument> } = (
                await this.$prismic.client.getByUIDs(
                    "blogpost",
                    [(this.$route.params.uid as string)]
                )
            );
            return (
                response.results[0]
            );
        }
    }
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
    gap: 24px;
}

</style>
