<template>
<div id="postsPageMain">
    <div id="postCardsList">
        <div class="postCard" v-for="doc in documentslist">
            <PostCard :short="false" :doc="doc"/>
        </div>
    </div>
</div>
</template>

<script lang='ts'>
import PostCard from "@/components/postCard.vue";
import type { PrismicDocument } from '@prismicio/client/*';
import { PrismicImage, PrismicRichText } from '@prismicio/vue';

export default {
    name: "PostsPage",
    components: {
        PrismicRichText,
        PrismicImage,
        PostCard,
    },
    data() {
        return {
            documentslist: new Array<PrismicDocument>(),
        };
    },
    async mounted() {
        this.documentslist = (await this.$prismic.client.get()).results;
    },
};
</script>

<style scoped>

#postsPageMain {
    margin: 0 auto;
    max-width: 1100px;
    padding: 24px;
}

#postCardsList {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    flex-direction: column;
}

</style>
