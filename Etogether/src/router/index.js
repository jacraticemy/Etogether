import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import homePage from '../components/pages/homePage'
import billZone from '../components/pages/billZone'
import scoreInquiry from '../components/pages/scoreInquiry'
import onProgramming from '../components/pages/onProgramming'
import courseCenter from '../components/pages/courseCenter'
import downloadCenter from '../components/pages/downloadCenter'
import login from '../components/pages/login'
import register from '../components/pages/register'
import search from '../components/pages/search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/billZone',
      name: 'billZone',
      component: billZone
    },
    {
      path: '/scoreInquiry',
      name: 'scoreInquiry',
      component: scoreInquiry
    },
    {
      path: '/onProgramming',
      name: 'onProgramming',
      component: onProgramming
    },
    {
      path: '/courseCenter',
      name: 'courseCenter',
      component: courseCenter
    },
    {
      path: '/downloadCenter',
      name: 'downloadCenter',
      component: downloadCenter
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/search',
      name: 'search',
      component: search
    }
  ]
})
