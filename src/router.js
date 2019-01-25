import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/pages/PageHome'

Vue.use(Router)

function loadPage (page) {
  return () => import(/* webpackChunkName: "page-[request]" */ `@/pages/Page${page}Setup.vue`)
}

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: PageHome
    },
    {
      path: '/account',
      name: 'account',
      component: loadPage('Account')
    }
  ]
})
