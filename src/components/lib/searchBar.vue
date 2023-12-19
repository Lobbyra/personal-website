<template>
    <div
    id="searchBar"
    :style="barStyleComp">
        <v-icon id="searchIcon">
            md:search
        </v-icon>
        <input
        type="text"
        name="search"
        id="searchInput"
        @input=""
        v-model="localValue"
        :autofocus="autofocus"
        :placeholder="placeholder"
        @blur="isSearchFocused = false; $emit('blur')"
        @focus="isSearchFocused = true; $emit('focus')">
    </div>
</template>

<script lang='ts'>

import type { StyleValue } from 'vue';

export default {
    name: 'SearchBar',
    props: {
        autofocus: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
        },
        value: {
            type: String,
            required: true,
        },
        inputDelay: {
            type: Number,
            default: 100,
        },
    },
    data() {
        return ({
            localValue: this.value,
            typingTimer: {} as any,
            isSearchFocused: false as boolean,
        });
    },
    mounted() {
        var searchInput: HTMLInputElement | null;

        searchInput = document.getElementById(
            'searchInput',
        ) as HTMLInputElement;
        if (searchInput == null) {
            console.error("searchBar: searchInput DOMElement not found");
            return;
        }
        searchInput.addEventListener(
            "input",
            (e: any) => {
                clearTimeout(this.typingTimer);
                if (e.data === null) {
                    this.sendInput();
                }
                if (searchInput != null && searchInput.value) {
                    this.typingTimer = setTimeout(
                        this.sendInput,
                        this.inputDelay,
                    );
                }
            }
        );
    },
    methods: {
        sendInput() {
            this.$emit("change", this.localValue);
        },
    },
    computed: {
        barStyleComp(): StyleValue {
            if (this.isSearchFocused === true) {
                return ({
                    "background-color": "transparent",
                    "border": "grey 2px solid",
                });
            }
            return ({});
        }
    }
};
</script>

<style scoped>

#searchBar {
    /* LAYOUT */
    height: 46px;
    display: flex;
    gap: 8px;
    padding-top: 4px;
    padding-left: 8px;
    padding-right: 8px;
    align-items: center;
    padding-bottom: 4px;
    border: 2px solid transparent;
    /* STYLE */
    border-radius: 50px;
    transition: all 0.2s;
    background-color: rgba(var(--v-theme-onBackground), 0.1);
}

#searchIcon {
    padding: 12px;
    padding-left: 14px;
}

#searchInput {
    outline: none;
    color: rgb(var(--v-theme-onBackground));
    width: 100%;
}
</style>
