<template>
<div
class="chipClass"
:style="mainStyleComp">
    <slot/>
</div>
</template>

<script lang='ts'>
export default {
    name: 'MyChip',
    props: {
        icon: Boolean,
        color: {
            type: String,
            default: "#C4C4C4"
        },
        borderWidth: {
            type: Number,
            default: 3
        },
        outlined: Boolean,
        height: {
            type: Number,
            default: 18
        },
        borderRadius: {
            type: Number,
            default: 2
        }
    },
    data() {
        return {
        }
    },
    mounted() {
    },
    computed: {
        mainStyleComp() {
            let style: any = {};
            const fullHeight = this.height + this.borderWidth + (10 * 2);
            style.height = `${fullHeight}px`
            if (this.icon === true) {
                style.padding = "10px";
                style.width = `${fullHeight}px`;
                style["border-radius"] = ((fullHeight + (10 * 2)) / 2) + "px";
            } else {
                style["padding-left"] = "20px";
                style["padding-right"] = "20px";
                style["border-radius"] = (fullHeight) + "px";
            }
            style["background-color"] = `${this.color}22`;
            style.border = `${this.borderWidth}px ${this.color} solid`;
            return (style);
        }
    }
};
</script>

<style scoped>

.chipClass {
    display: flex;
    justify-content: center;
    align-items: center;
}

</style>
