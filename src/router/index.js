import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import ThreadsPage from '@/pages/Threads.page'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Threads',
      component: ThreadsPage
    },
    // {
    //   path: '/threads',
    //   name: 'Threads',
    //   component: ThreadsPage
    // }
  ]
})
