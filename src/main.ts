import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'

import { createPrismic } from '@prismicio/vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import './assets/main.css'
import i18n from './i18n/i18n'
import { storeTheme } from './stores/theme'
import { vuetify } from './vuetify'

const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

const app = createApp(App)

app.use(pinia);

export const sTheme = storeTheme();

app.use(router);

app.use(i18n);

app.use(vuetify);

app.use(
    createPrismic(
        {
            endpoint: 'https://jecaudal.cdn.prismic.io/api/v2'
        }
    )
);

app.mount('#app')
