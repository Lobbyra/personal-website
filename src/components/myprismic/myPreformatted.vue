<template>
<div id="mainPre">
    <pre>
        <code :class="getLangComp">{{ getContentComp }}</code>
    </pre>
</div>
</template>

<script lang='ts'>
import type { RTPreformattedNode } from '@prismicio/client/*';
import type { PropType } from '@vue/runtime-core';
import hljs from 'highlight.js';

export default {
    name: 'MyPreformatted',
    props: {
        value: {
            type: Object as PropType<RTPreformattedNode>,
            required: true,
        }
    },
    data() {
        return {
        }
    },
    beforeCreate() {
    },
    mounted() {
        hljs.highlightAll();
    },
    computed: {
        getContentComp(): string {
            return (
                this.value.text.slice(
                    this.value.text.indexOf("\n") + 1
                )
            );
        },
        getLangComp(): string {
            return (
                "language-" +
                this.value.text.slice(
                    0,
                    this.value.text.indexOf("\n")
                )
            );
        },
    }
};
</script>

<style scoped>

#mainPre {
    min-width: none;
}

.hljs {
    padding: 24px;
    border-radius: 7px;
    border: 2px solid rgba(var(--v-theme-onBackground), 0.1);
    background: rgba(var(--v-theme-onBackground), 0.05);
}

</style>
