<template>
<div class="mt-5 d-flex flex-column">
    <PrismicEmbed
    id="embedMain"
    :field="value.oembed"/>
</div>
</template>

<script lang='ts'>
import type { RTEmbedNode } from '@prismicio/client/*';
import { PrismicEmbed } from '@prismicio/vue';
import type { PropType } from '@vue/runtime-core';

export default {
    name: "MyEmbed",
    props: {
        value: {
            type: Object as PropType<RTEmbedNode>,
            required: true,
        }
    },
    data() {
        return {};
    },
    mounted() {
        console.log(this.value);
    },
    components: { PrismicEmbed }
};
</script>

<style scoped>

#embedMain {
    max-width: 100%;
    overflow: scroll;
}

</style>
