import '@mdi/font/css/materialdesignicons.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { md } from 'vuetify/iconsets/md';
import { mdi } from 'vuetify/iconsets/mdi';
import 'vuetify/styles';

export const vuetify = createVuetify({
    components,
    directives,
    theme: {
        defaultTheme: "light",
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
