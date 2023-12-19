<template>
<div>
    <ul>
        <li>
            {{ value.text }}
        </li>
    </ul>
</div>
</template>

<script lang='ts'>
import type { RTListItemNode } from '@prismicio/client/*';
import type { PropType } from '@vue/runtime-core';

export default {
    name: 'MyListItem',
    props: {
        value: {
            type: Object as PropType<RTListItemNode>,
            required: true,
        }
    },
    data() {
        return {
        }
    },
    mounted() {
        console.log(this.value);
        
    },
};
</script>

<style scoped>
</style>
    