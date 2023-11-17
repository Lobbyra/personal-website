<template>
<div id="postCard">
    <div
    v-if="short == false"
    id="cardTitleWrapper">
        <div id="cardTitle">
            <span id="cardTitleSpan">
                {{ doc?.data.title[0].text }}
            </span>
        </div>
        <div
        class="tagsList"
        id="shortVersionTags"
        v-if="doc?.tags.length > 0">
            <v-chip
            size="small"
            variant="outlined"
            v-for="i in doc?.tags">
                #{{ i }}
            </v-chip>
        </div>
        <v-spacer/>
        <div>
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
                {{ doc?.data.title[0].text }}
            </span>
        </div>
        <div
        class="tagsList"
        id="shortVersionTags">
            <v-chip
            size="small"
            variant="outlined"
            v-for="i in doc?.tags">
                #{{ i }}
            </v-chip>
        </div>
    </div>
    <v-divider/>
    <div
    id="cardContent"
    v-if="short == false">
        <PrismicImage
        id="cardIllu"
        :field="doc?.data.illustration"/>
        <div id="cardText">
            <div id="introTxt">
                <span>
                    {{ getIntroTxtComp }}
                </span>
            </div>
            <div class="d-flex align-self-end">
                <v-btn
                color="black"
                @click="gotoPost(doc!.uid!)">
                    {{ $t("gotoPost") }}
                </v-btn>
            </div>
        </div>
    </div>
    <div
    v-if="short == true"
    class="d-flex flex-column">
        <PrismicImage
        id="cardIllu"
        class="align-self-center"
        :field="doc?.data.illustration"/>
        <div id="introTxt">
            <span>
                {{ getIntroTxtComp }}
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
        }
    },
    mounted() {
        console.log(this.doc);
    },
    methods: {
        gotoPost(id: string) {
            this.$router.push(`/posts/${id}`);
        }
    },
    computed: {
        getIntroTxtComp(): string {
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
    padding: 12px;
    flex-direction: column;
    /* STYLE */
    border-radius: 7px;
    background-color: #c4c4c420;
}

#cardTitle {
    font-size: 20px;
    min-width: 0;
}

#cardTitleSpan {
    text-overflow: ellipsis;
    overflow: hidden;
}


#cardTitleWrapper {
    gap: 8px;
    display: flex;
    align-items: center;
}

#shortCardTitleWrapper {
    display: flex;
    flex-direction: column;
}

#cardIllu {
    /* LAYOUT */
    max-width: 170px;
    max-height: 170px;
    /* STYLE */
    border-radius: 5px;
}

.tagsList {
    gap: 8px;
    display: flex;
    overflow: hidden;
    flex-wrap: nowrap;
}

#cardContent {
    gap: 12px;
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
}

#cardText {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

#dateSpan {
    color: #00000050;
}

</style>
