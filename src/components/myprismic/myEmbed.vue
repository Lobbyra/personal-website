<template>
<div>
    E : {{ value }}
</div>
</template>

<script lang='ts'>
import type { RTEmbedNode, RTNode } from '@prismicio/client/*';
import type { PropType } from '@vue/runtime-core';

export default {
    name: 'MyEmbed',
    props: {
        value: {
            type: Object as PropType<RTEmbedNode>,
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
</style>
