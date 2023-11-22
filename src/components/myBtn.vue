<template>
<div class="mainBtn">
    <slot/>
</div>
</template>

<script lang='ts'>

export default {
    name: 'MyBtn',
    data() {
        return {
        }
    },
    mounted() {
    },
};
</script>

<style scoped>

.mainBtn {
    padding-top: 10px;
    border-radius: 5px;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 10px;
    transition: all 0.2s;
    border: 2px solid rgb(var(--v-theme-onBackground));
}

.mainBtn:hover {
    cursor: pointer;
    background-color: rgba(var(--v-theme-background).10);
}

</style>
