import Vue from 'vue'
import Router from 'vue-router'
import PageHome from '@/pages/PageHome'
import PageNotFound from '@/pages/PageNotFound'

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
    },
    {
      path: '/scheduling',
      name: 'scheduling',
      component: loadPage('Scheduling')
    },
    {
      path: '*',
      name: 'notFound',
      component: PageNotFound
    }
  ]
})
