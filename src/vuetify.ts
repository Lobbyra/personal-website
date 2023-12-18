import '@mdi/font/css/materialdesignicons.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { md } from 'vuetify/iconsets/md';
import { mdi } from 'vuetify/iconsets/mdi';
import 'vuetify/styles';

let theme = "";
switch (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    case true:
        theme = "dark"
        break;
    case false:
        theme = "light"
        break;
}

export const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: theme,
        themes: {
            light: {
                colors: {
                    background: "#FFFFFF",
                    onBackground: "#000000",
                }
            },
            dark: {
                colors: {
                    background: "#121212",
                    onBackground: "#FFFFFF",
                }
            },
        }
    },
    icons: {
        defaultSet: 'mdi',
        sets: {
          md,
          mdi
        },
      },
});
