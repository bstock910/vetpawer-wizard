import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VTooltip from 'v-tooltip'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false

Vue.use(VTooltip)
Vue.use(VModal)

require('./assets/scss/style.scss')

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
