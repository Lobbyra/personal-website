import { defineStore } from "pinia";

let theme = "";
switch (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    case true:
        theme = "dark"
        break;
    case false:
        theme = "light"
        break;
}

export const storeTheme = defineStore(
    'theme',
    {
        state: () => {
            return (
                {
                    theme: theme
                }
            );
        },
        getters: {
            getTheme: (state) => state.theme
        },
        actions: {
            changeTheme(theme: string) {
                this.theme = theme;
            }
        },
        persist: true
    }
)
