<template>
<div id="postsPageMain">
    <SearchBar
    :value="search"
    @change="updateSearch($event)"
    :placeholder="$t('searchPostPlaceholder')"/>
    <div id="postCardsList">
        <div
        class="postCard"
        v-if="documentslist"
        v-for="doc in documentslist">
            <PostCard :short="isMobileComp" :doc="doc"/>
        </div>
    </div>
    <div
    id="emptyResults"
    v-if="documentslist && documentslist.length === 0">
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
            documentslist: null as null | Array<PrismicDocument>,
            pages: 1 as number,
            scrollUpdateLock: false as boolean,
        };
    },
    async mounted() {
        this._fetchPosts();
        window.addEventListener('scroll', this.scrollUpdateData);
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
            if (this.documentslist) {
                this.documentslist = this.documentslist.concat(
                    (
                        await fetchPosts(
                            this.$prismic,
                            this.search,
                            this.pages
                        )
                    ).results
                )
            } else {
                this.documentslist = (
                    await fetchPosts(
                        this.$prismic,
                        this.search,
                        this.pages
                    )
                ).results
            }
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
        isMobileComp(): boolean {
            return (this.$vuetify.display.width <= 600);
        },
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

.postCard {
    min-width: 0;
    max-width: 100%;
}

#postsPageMain {
    gap: 24px;
    display: flex;
    margin: 0 auto;
    max-width: 1100px;
    padding-top: 24px;
    padding-left: 24px;
    padding-right: 24px;
    padding-bottom: 24px;
    flex-direction: column;
}

#postsPageMain::-webkit-scrollbar { 
    display: none;  /* Safari and Chrome */
}

#postCardsList {
    gap: 24px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
}

#emptyResults {
    gap: 24px;
    display: flex;
    font-size: 20px;
    margin-top: 50px;
    text-align: center;
    margin-bottom: 50px;
    align-content: center;
    flex-direction: column;
    justify-content: center;
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
