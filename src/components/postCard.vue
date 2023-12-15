<template>
<div id="postCard">
    <div
    id="cardHeader"
    v-if="short == false">
        <div id="cardDataWrapper">
            <div id="cardTitle">
                {{ doc?.data.title[0].text || "A title must be here" }}
            </div>
            <div
            id="tagList"
            v-if="doc?.tags.length > 0">
                <v-chip
                :key="index"
                v-for="(i, index) in doc?.tags"
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
        <div id="tagList">
            <v-chip
            size="small"
            :key="index"
            v-for="(item, index) in doc?.tags"
            :color="_selectColor(item, chipsPalette)">
                #{{ item }}
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
                variant="outlined"
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
                {{ doc?.data.introtxt[0].text || "" }}
            </span>
        </div>
        <v-btn
        color="black"
        variant="outlined"
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
    min-width: 0;
    display: flex;
    padding: 18px;
    transition: 0.4s; 
    flex-direction: column;
    /* STYLE */
    border-radius: 7px;
    border: 3px solid #00000000;
    background-color: #c4c4c430;
}

#postCard:hover {
    border: 3px solid #00000020;
    transform: scale(1.005) translateY(-5px);
    box-shadow: 8px 8px 20px rgba(33,33,33,.12); 
}

#cardHeader {
    min-width: 0;
    display: flex;
}

#cardTitle {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}

#cardDataWrapper {
    gap: 12px;
    min-width: 0;
    display: flex;
    flex-direction: column;
}

#shortCardTitleWrapper {
    gap: 10px;
    display: flex;
    flex-direction: column;
}


#cardIllu {
    /* LAYOUT */
    width: 170px;
    height: 170px;
    flex-shrink: 0;
    transition: 0.4s;
    /* STYLE */
    object-fit: cover;
    border-radius: 5px;
}

#cardIllu:hover {
    border-radius: 10px;
    transform: scale(1.5);
    box-shadow: 0 0 17px rgba(33,33,33,.5);
}

#shortCardContent {
    gap: 18px;
    display: flex;
    flex-direction: column;
}

#tagList {
    gap: 8px;
    min-width: 0;
    display: flex;
    flex-wrap: wrap;
}

#cardContent {
    gap: 18px;
    width: 100%;
    display: flex;
    max-height: 100%;
    flex-wrap: nowrap;
}

#cardText {
    gap: 12px;
    width: 100%;
    display: flex;
    max-height: 170px;
    flex-direction: column;
    justify-content: space-between;
}

#introTxt {
    overflow: hidden;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 5; /* Set the number of lines before the ellipsis */
    -webkit-box-orient: vertical;
}


#dateSpan {
    color: rgba(var(--v-theme-onBackground), 0.5);
}

</style>
