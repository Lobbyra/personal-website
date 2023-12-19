<template>
<div id="mainHeading">
    <component
    :is="getComp"
    id="mainComponent">
        {{ value.text }}
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
    computed: {
        getComp(): string {
            return (
                this.value.type[0] + this.value.type[this.value.type.length - 1]
            )
        }
    }
};
</script>

<style scoped>

#mainHeading {
    font-family: "DM sans";
}

h1 {
    font-size: 42px;
}

h2 {
    font-size: 32px;
}

h3 {
    font-size: 25px;
}

h4 {
    font-size: 20px;
}

h5 {
    font-size: 16px;
}

h6 {
    font-size: 12px;
}
</style>
