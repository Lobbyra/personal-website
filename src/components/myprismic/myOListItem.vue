<template>
<div>
    <ol>
        <li :value="olIndex">
            {{ value.text }}
        </li>
    </ol>
</div>
</template>

<script lang='ts'>
import type { RTOListItemNode } from '@prismicio/client/*';
import type { PropType } from '@vue/runtime-core';

export default {
    name: 'MyOListItem',
    props: {
        value: {
            type: Object as PropType<RTOListItemNode>,
            required: true,
        },
        olIndex: {
            type: Number,
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
