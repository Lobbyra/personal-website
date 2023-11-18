<template>
<div id="postCard">
    <div
    v-if="short == false"
    id="cardTitleWrapper">
        <div class="cardTitleTitleWrapper">
            <div id="cardTitle">
                {{ doc?.data.title[0].text || ""}}
            </div>
            <div
            class="tagsList"
            id="shortVersionTags"
            v-if="doc?.tags.length > 0">
                <v-chip
                v-for="i in doc?.tags"
                :color="_selectColor(i, chipsPalette)">
                    #{{ i }}
                </v-chip>
            </div>
        </div>
        <v-spacer/>
        <div class="align-self-center">
            <span id="dateSpan">
                {{ getFormatedDateComp }}
            </span>
        </div>
    </div>
    <div
    v-if="short == true"
    id="shortCardTitleWrapper">
        <div id="cardTitle">
            <span>
                {{ doc?.data.title[0].text || "A title must be here"}}
            </span>
        </div>
        <div
        class="tagsList"
        id="shortVersionTags">
            <v-chip
            size="small"
            variant="outlined"
            :color="_selectColor(i, chipsPalette)"
            v-for="i in doc?.tags">
                #{{ i }}
            </v-chip>
        </div>
    </div>
    <v-divider/>
    <div
    id="cardContent"
    v-if="short == false">
        <img
        id="cardIllu"
        alt="post illustration"
        :src="doc?.data.illustration.url">
        <div id="cardText">
            <div
            id="introTxt"
            v-if="doc?.data.introtxt[0]">
                {{ doc?.data.introtxt[0].text || "" }}
            </div>
            <div class="d-flex align-self-end">
                <v-btn
                elevation="0"
                @click="gotoPost(doc!.uid!)"
                :color="$vuetify.theme.current.dark == false ? 'black' : 'white'">
                    {{ $t("gotoPost") }}
                </v-btn>
            </div>
        </div>
    </div>
    <div
    v-if="short == true"
    id="shortCardContent">
        <img
        id="cardIllu"
        alt="post illustration"
        class="align-self-center"
        :src="doc?.data.illustration.url">
        <div id="introTxt">
            <span>
                {{ getIntroTxtComp || "" }}
            </span>
        </div>
        <v-btn
        color="black"
        @click="gotoPost(doc!.uid!)">
            {{ $t("read") }}
        </v-btn>
    </div>
</div>
</template>

<script lang='ts'>

import { selectColor } from '@/lib/colorFromString';
import { TEXTONDARKPALETTE, TEXTONLIGHTPALETTE } from '@/lib/palettes';
import type { PrismicDocument } from '@prismicio/client/*';
import type { PropType } from 'vue';

export default {
    name: 'PostCard',
    props: {
        doc: {
            type: Object as PropType<PrismicDocument>,
            required: true,
        },
        short: {
            type: Boolean,
            default: true,
        }
    },
    data() {
        return {
            chipsPalette: [] as Array<string>
        }
    },
    beforeMount() {
        this.chipsPalette = this.$vuetify.theme.current.dark ? TEXTONDARKPALETTE : TEXTONLIGHTPALETTE
    },
    mounted() {
        console.log(this.doc);
    },
    methods: {
        _selectColor(inputString: string, palette: Array<string>) {
            return (selectColor(inputString, palette))
        },
        gotoPost(id: string) {
            this.$router.push(`/posts/${id}`);
        },
    },
    computed: {
        getIntroTxtComp(): string {
            if (this.doc?.data.introtxt[0] == undefined) {
                return ("");
            }
            const maxSizedText: string = (
                (this.doc?.data.introtxt[0].text as string).slice(0, 100)
            );
            if (maxSizedText.length == 100) {
                return (maxSizedText + "...");
            }
            return (maxSizedText);
        },
        getFormatedDateComp(): string {
            const date: Date = new Date(this.doc.last_publication_date);
            return (
                date.toLocaleDateString("fr-FR")
            );
        }
    }
};
</script>

<style scoped>

#postCard {
    /* LAYOUT */
    gap: 12px;
    display: flex;
    padding: 18px;
    max-height: 300px;
    position: relative;
    transition: 0.4s;
    flex-direction: column;
    /* STYLE */
    border: 3px solid #00000000;
    border-radius: 7px;
    background-color: #c4c4c430;
}

#postCard:hover {
    transform: scale(1.005) translateY(-5px);
    box-shadow: 8px 8px 20px rgba(33,33,33,.12); 
    border: 3px solid #00000020;
}


#cardTitle {
    font-size: 20px;
    min-width: 0;
    max-width: 820px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
}


#cardTitleWrapper {
    gap: 8px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}

#cardTitleTitleWrapper {
    gap: 12px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}


#shortCardTitleWrapper {
    display: flex;
    gap: 10px;
    flex-direction: column;
}

#cardIllu {
    /* LAYOUT */
    width: 170px;
    height: 170px;
    flex-shrink: 0;
    transition: 0.4s;
    /* STYLE */
    border-radius: 5px;
    object-fit: cover;
}

#cardIllu:hover {
    transform: scale(1.5);
    border-radius: 10px;
    box-shadow: 0 0 17px rgba(33,33,33,.5);
}

#shortCardContent {
    display: flex;
    flex-direction: column;
    gap: 18px;
}

.tagsList {
    gap: 8px;
    display: flex;
    overflow: hidden;
    flex-wrap: nowrap;
}

#cardContent {
    gap: 18px;
    width: 100%;
    display: flex;
    max-height: 100%;
    flex-wrap: nowrap;
}

#cardText {
    width: 100%;
    display: flex;
    max-height: 170px;
    gap: 12px;
    flex-direction: column;
    justify-content: space-between;
}

#introTxt {
    text-overflow: ellipsis;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 5; /* Set the number of lines before the ellipsis */
    -webkit-box-orient: vertical;
}


#dateSpan {
    color: rgba(var(--v-theme-onBackground), 0.5);
}

</style>
