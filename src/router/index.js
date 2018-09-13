import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '../App.vue'
import i18n from '../config'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/:lang',
            component: App,
            beforeEnter: (to, from, next) => {
                const lang = to.params.lang;
                setI18nLanguage(lang).then(() => next())
            }
        }
    ]
})

function setI18nLanguage(lang) {
    if (i18n.locale !== lang) {
        i18n.locale = lang
        return Promise.resolve(lang)
    }
    return Promise.resolve(lang)
}