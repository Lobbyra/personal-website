<template>
<div class="d-flex">
    <PrismicImage :field="value"/>
</div>
</template>

<script lang='ts'>
import type { RTImageNode } from '@prismicio/client/*';
import type { PropType } from '@vue/runtime-core';

export default {
    name: 'MyImage',
    props: {
        value: {
            type: Object as PropType<RTImageNode>,
            required: true,
        }
    },
    data() {
        return {
        }
    },
    mounted() {
    },
};
</script>

<style scoped>

img {
    max-width: 100%;
}

</style>
