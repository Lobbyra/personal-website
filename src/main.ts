import { createApp } from 'vue'
import * as App from './App.vue'
import router from './router/index'

import './assets/main.css'
import i18n from './i18n/i18n'
import { vuetify } from './vuetify'

const app = createApp(App.default)

app.use(router);

app.use(i18n);

app.use(vuetify);

app.mount('#app')
