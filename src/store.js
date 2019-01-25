import Vue from 'vue'
import Vuex from 'vuex'
import data from '@/data'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accountData: {}
  },
  mutations: {

  },
  actions: {
    getData () {
      this.accountData = data.account
      return this.accountData
    }
  }
})
