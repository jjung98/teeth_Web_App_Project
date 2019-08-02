import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import SideMenu from '@/components/SideMenu'
import Developing from '@/components/Developing'
import Login from '@/components/Login'
import LoginBerfore from '@/components/LoginBefore'
import Compo1 from '@/components/Component1'
import Compo2 from '@/components/Component2'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/home', component: Home},
    {path: '/main',
      component: SideMenu,
      children: [{path: '/', component: LoginBerfore}]},
    {path: '/login', component: Login},
    {path: '*', component: Developing},
    {path: '/component',
      component: Compo1,
      children: [{path: '/', component: Compo2}]}
  ]
})

export default router
