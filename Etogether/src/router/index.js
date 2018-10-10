import Vue from 'vue'
import Router from 'vue-router'

import homePage from '../components/pages/homePage/homePage'
import billZone from '../components/pages/billZone/billZone'
import testRegister from '../components/pages/billZone/testRegister'
import testRegisterCap from '../components/pages/billZone/testRegisterCap'
import testRegisterMem from '../components/pages/billZone/testRegisterMem'
import stimulationTest from '../components/pages/billZone/stimulationTest'
import stimulationTestResult from '../components/pages/billZone/stimulationTestResult'
import scoreInquiry from '../components/pages/scoreInquiry/scoreInquiry'
import scoreResult from '../components/pages/scoreInquiry/scoreResult'
import onProgramming from '../components/pages/onProgramming/onProgramming'
import courseCenter from '../components/pages/courseCenter/courseCenter'
import courseDetail from '../components/pages/courseCenter/courseDetail'
import downloadCenter from '../components/pages/downloadCenter/downloadCenter'
import login from '../components/pages/login/login'
import register from '../components/pages/register/register'
import registerStu from '../components/pages/register/registerStu'
import registerTea from '../components/pages/register/registerTea'
import search from '../components/pages/search/search'
import personalInfo from '../components/pages/personalInfo/personalInfo.vue'
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
      path: '/testRegister',
      name: 'billZone',
      component: testRegister
    },
    {
      path: '/testRegisterCap',
      name: 'testRegisterCap',
      component: testRegisterCap
    },
    {
      path: '/testRegisterMem',
      name: 'testRegisterMem',
      component: testRegisterMem
    },
    {
      path: '/stimulationTest',
      name: 'stimulationTest',
      component: stimulationTest
    },
    {
      path: '/stimulationTestResult',
      name: 'stimulationTestResult',
      component: stimulationTestResult
    },
    {
      path: '/scoreInquiry',
      name: 'scoreInquiry',
      component: scoreInquiry
    },
    {
      path: '/scoreResult',
      name: 'scoreResult',
      component: scoreResult
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
      path: '/courseDetail',
      name: 'courseDetail',
      component: courseDetail
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
      path: '/registerStu',
      name: 'registerStu',
      component: registerStu
    },
    {
      path: '/registerTea',
      name: 'registerTea',
      component: registerTea
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/personalInfo',
      name: 'personalInfo',
      component: personalInfo
    }
  ]
})
