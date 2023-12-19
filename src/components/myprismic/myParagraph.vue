<template>
<div>
    <p>
        {{ value.text }}
    </p>
</div>
</template>

<script lang='ts'>
import type { RTParagraphNode } from '@prismicio/client/*';
import type { PropType } from '@vue/runtime-core';

export default {
    name: '',
    props: {
        value: {
            type: Object as PropType<RTParagraphNode>,
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

p {
    font-size: 18px;
}

</style>
