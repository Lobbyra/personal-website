<template>
<div
id="postsPageMain"
@scroll="scrollUpdateData($event)">
    <SearchBar
    :value="search"
    @change="updateSearch($event)"
    :placeholder="$t('searchPostPlaceholder')"/>
    <div id="postCardsList">
        <div class="postCard" v-for="doc in documentslist">
            <PostCard :short="false" :doc="doc"/>
        </div>
    </div>
    <div
    id="emptyResults"
    v-if="documentslist.length === 0">
        <div id="notFoundEmoji">
            <span id="notFoundEmojiSpan">
                {{ notFoundEmojiComp }}
            </span>
        </div>
        <div id="notFoundTxt">
            {{ $t('searchPostNotFound') }}
        </div>
    </div>
</div>
</template>

<script lang='ts'>
import SearchBar from '@/components/lib/searchBar.vue';
import PostCard from "@/components/postCard.vue";
import { fetchPosts } from "@/lib/fetchers/fetchPosts";
import type { PrismicDocument } from '@prismicio/client/*';
import { PrismicImage, PrismicRichText } from '@prismicio/vue';

export default {
    name: "PostsPage",
    components: {
        PrismicRichText,
        PrismicImage,
        PostCard,
        SearchBar,
    },
    data() {
        return {
            search: "" as string,
            documentslist: new Array<PrismicDocument>(),
            pages: 1 as number,
            scrollUpdateLock: false as boolean,
        };
    },
    async mounted() {
        console.log();
        this._fetchPosts();
    },
    methods: {
        updateSearch(searchStr: any) {
            if (typeof searchStr != "string") {
                return ;
            }
            this.search = searchStr;
            fetchPosts(this.$prismic, this.search, this.pages)
            .then((val) => {
                this.documentslist = val.results;
                this.pages = 1;
            })
        },
        async _fetchPosts() {
            this.documentslist = this.documentslist.concat(
                (
                    await fetchPosts(
                        this.$prismic,
                        this.search,
                        this.pages
                    )
                ).results
            )
        },
        async scrollUpdateData(event: any) {
            if (this.scrollUpdateLock == true) {
                return ;
            }
            if (event.target.scrollTop != event.target.scrollTopMax) {
                return ;
            }
            this.scrollUpdateLock = true;
            this.pages++;
            await this._fetchPosts();
            this.scrollUpdateLock = false;
        }
    },
    computed: {
        notFoundEmojiComp(): string {
            this.documentslist;
            const emojis: Array<string> = [
                "(◑‿◐)",
                "(ツ)",
                "(－_－) zzZ",
                "(●´⌓`●)",
                "乁( ͡° ͜ʖ ͡°)ㄏ",
                "(╯°□°）╯",
                "ಠ_ಠ",
                "┬─┬ノ(ಠ_ಠノ)",
                "( °□°) ︵ ┻━┻",
            ];
            return (
                emojis[Math.round(Math.random() * 10) % emojis.length]
            )
        }
    }
};
</script>

<style scoped>

#postsPageMain {
    gap: 24px;
    height: calc(100vh - 64px);
    padding: 24px;
    display: flex;
    margin: 0 auto;
    overflow: auto;
    max-width: 1100px;
    flex-direction: column;
    scrollbar-width: none;
    -ms-overflow-style: none;
}

#postsPageMain::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}

#postCardsList {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    flex-direction: column;
}

#emptyResults {
    margin-top: 50px;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-size: 20px;
    gap: 24px;
    align-content: center;
}

#notFoundEmoji {
    font-size: 100px;
    font-family: 'DM Sans', sans-serif;
}

@media only screen and (max-width: 600px) {
    #notFoundEmoji {
        font-size: 50px;
        font-family: 'DM Sans', sans-serif;
    }
}


#notFoundEmojiSpan {
    color: grey;
}

</style>
