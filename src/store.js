import Vue from 'vue'
import Vuex from 'vuex'
import data from '@/data'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    accountData: {},
    pimsData: {},
    scheduleOptions: {},
    reminderPlanOptions: {}
  },
  mutations: {

  },
  actions: {
    getAccountData () {
      this.accountData = data.account
      return this.accountData
    },
    getPimsData () {
      this.pimsData = data.pimsData
      return this.pimsData
    },
    getScheduleOptions () {
      this.scheduleOptions = data.scheduleOptions
      return this.scheduleOptions
    }
  }
})
