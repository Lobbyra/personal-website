import i18n, { I18N_DEFAULT_LOCALE, I18N_SUPPORTED_LOCALES } from '../i18n/i18n';

export default function localePresenceProtection(to: any)
                                        : string {
    // # Verify the presence of local in URL
    const path: string = to.path;
    const paths: string[] = path.split('/');
    const availableLocales = I18N_SUPPORTED_LOCALES;

    paths.splice(0, 1);
    // ## If the path === the root of the app
    if (path == '/') {
        return (`/${I18N_DEFAULT_LOCALE}${to.fullPath}`);
    }
    // ## Check locale presence
    if (paths.length > 0 && availableLocales.includes(paths[0]) === false) {
        return (`/${I18N_DEFAULT_LOCALE}${to.fullPath}`);
    }
    // ## Set I18N from locale specified
    const locale = to.params.locale; // 1
    if (i18n.global.locale !== locale) { // 4
        i18n.global.locale = locale;
    }
    return ("");
}
