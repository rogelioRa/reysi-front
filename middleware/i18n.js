export default function (cntx) {
  const defaultLocale = cntx.app.i18n.fallbackLocale
  if (cntx.isHMR) {
    return
  }
  const locale = localStorage.getItem('lang')
    ? localStorage.getItem('lang')
    : defaultLocale
  if (!cntx.store.state.locales.includes(locale)) {
    return
  }
  console.log(locale, 'here locale i18n')
  cntx.store.commit('setLang', locale)
  cntx.app.i18n.locale = cntx.store.state.locale
}
