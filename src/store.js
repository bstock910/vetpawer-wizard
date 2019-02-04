import Vue from 'vue'
import Vuex from 'vuex'
import data from '@/data'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accountData: {},
    scheduleOptions: {}
  },
  mutations: {

  },
  actions: {
    getAccountData () {
      this.accountData = data.account
      return this.accountData
    },
    getScheduleOptions () {
      this.scheduleOptions = data.scheduleOptions
      return this.scheduleOptions
    }
  }
})
