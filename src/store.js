import Vue from 'vue'
import Vuex from 'vuex'
import data from '@/data'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    wizardData: {}
  },
  mutations: {

  },
  actions: {
    getWizardData () {
      this.wizardData = data
      return this.wizardData
    }
  }
})
