<template>
<div id="mainHeading">
    <component is="valu">
        {{ value }}
    </component>
</div>
</template>

<script lang='ts'>
import type { RTHeading1Node, RTHeading2Node, RTHeading3Node, RTHeading4Node, RTHeading5Node, RTHeading6Node } from '@prismicio/client/*';
import type { PropType } from '@vue/runtime-core';

export default {
    name: 'MyHeading',
    props: {
        value: {
            type: Object as PropType<
                RTHeading1Node |
                RTHeading2Node |
                RTHeading3Node |
                RTHeading4Node |
                RTHeading5Node |
                RTHeading6Node
            >,
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

#mainHeading {
    font-family: "DM sans";
}

</style>
