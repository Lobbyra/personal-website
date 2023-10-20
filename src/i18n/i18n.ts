import { createI18n, type LocaleMessages } from "vue-i18n";
import { enMessages } from "./locales/en";
import { frMessages } from "./locales/fr";

export const I18N_DEFAULT_LOCALE="fr";
export const I18N_FALLBACK_LOCALE="en";
export const I18N_SUPPORTED_LOCALES=["fr", "en"];

const messages = {
    fr: frMessages,
    en: enMessages,
}

const i18n = createI18n({
    locale: I18N_DEFAULT_LOCALE,
    fallbackLocale: I18N_FALLBACK_LOCALE,
    messages: messages,
});

export default i18n;
