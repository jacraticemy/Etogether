import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/HomePage.vue'
import MyInfo from '../components/MyInfo.vue'
import MoreNotice from '../components/MoreNotice.vue'
import ResourceSharing from '../components/ResourceSharing.vue'
import discuss from '../components/discuss.vue'
import grades from '../components/grades.vue'
import Assessment from '../components/Assessment.vue'
import changeKey from '../components/changeKey.vue'
import signIn from '../components/signIn.vue'
import signTeacher from '../components/signTeacher.vue'
import signleave from '../components/signleave.vue'
import MsignIn from '../components/MsignIn.vue'
import release from '../components/release.vue'
import release2 from '../components/release2.vue'
import newsDetail from '../components/common/newsDetail.vue'
import login from '../components/login.vue'
import MyAllNews from '../components/MyAllNews.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },{
      path: '/HomePage',
      name: 'HomePage',
      component: HomePage
    },{
      path: '/MyInfo',
      name: 'MyInfo',
      component: MyInfo
    },{
      path:'/MoreNotice',
      name:MoreNotice,
      component:MoreNotice
    },{
      path:'/ResourceSharing',
      name:ResourceSharing,
      component:ResourceSharing
    },{
      path:'/discuss',
      name:discuss,
      component:discuss
    },{
      path:'/grades',
      name:grades,
      component:grades
    },{
      path:'/Assessment',
      name:Assessment,
      component:Assessment
    },{
      path:'/changeKey',
      name:changeKey,
      component:changeKey
    },{
      path:'/signIn',
      name:signIn,
      component:signIn
    },{
      path:'/signTeacher',
      name:signTeacher,
      component:signTeacher
    },{
      path:'/signleave',
      name:signleave,
      component:signleave
    },{
      path:'/MsignIn',
      name:MsignIn,
      component:MsignIn
    },{
      path:'/release',
      name:release,
      component:release
    },{
      path:'/release2',
      name:release2,
      component:release2
    },{
      path:'/newsDetail',
      name:newsDetail,
      component:newsDetail
    },{
      path:'/MyAllNews',
      name:MyAllNews,
      component:MyAllNews
    }

    
  ]
})
