import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import SideMenu from '@/components/SideMenu'
import Developing from '@/components/Developing'
import Login from '@/components/Login'
import LoginBerfore from '@/components/LoginBefore'
import Compo1 from '@/components/Component1'
import Compo2 from '@/components/Component2'
import Dementia from '@/components/DementiaEncyclopedia'
import SignUp from '@/components/SignUp'
import SelfDiagnosis from '@/components/Self-diagnosisForDementia'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: Home},
    {path: '/main',
      component: SideMenu,
      children: [{path: '/', component: LoginBerfore}]},
    {path: '/login', component: Login},
    {path: '/dementia',
      component: Dementia,
      children: [
        {path: '/', component: SideMenu, children: [{path: '/', component: LoginBerfore}]},
        {path: '/#part1'}]},
    {path: '*', component: Developing},
    {path: '/component',
      component: Compo1,
      children: [{path: '/', component: Compo2}]},
    {path: '/sign', component: SignUp},
    {path: '/selfDiagnosis',
      component: SelfDiagnosis,
      children: [{path: '/', component: SideMenu, children: [{path: '/', component: LoginBerfore}]}]}
  ]
})

export default router
