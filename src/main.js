import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './config'

Vue.config.productionTip = false

new Vue({
    i18n,
    components: {},
    router,
    render: h => h(App),
}).$mount('#app')
