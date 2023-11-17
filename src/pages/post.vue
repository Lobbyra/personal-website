<template>
<div>
    <div v-if="doc">
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

</style>
