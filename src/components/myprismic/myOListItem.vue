<template>
<div>
    O : {{ value }}
</div>
</template>

<script lang='ts'>
import type { RTNode } from '@prismicio/client/*';
import type { PropType } from '@vue/runtime-core';

export default {
    name: 'MyOListItem',
    props: {
        value: {
            type: Object as PropType<RTNode>,
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
