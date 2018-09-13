import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
    uk: {
        message: {
            hello: 'Привіт App'
        }
    },
    ru: {
        message: {
            hello: 'Привет App'
        }
    },
    en: {
        message: {
            hello: 'Hello App'
        }
    }
}

export default new VueI18n({
    locale: 'uk',
    fallbackLocale: 'uk',
    messages,
})