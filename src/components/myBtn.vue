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
    border-radius: 5px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
    padding-bottom: 10px;
    border: 2px #000000 solid;
    transition: all 0.2s;
}

.mainBtn:hover {
    cursor: pointer;
    background-color: #00000010;
}

</style>
