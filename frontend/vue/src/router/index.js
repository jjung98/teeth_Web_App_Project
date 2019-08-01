import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import SideMenu from '@/components/SideMenu'
import Developing from '@/components/Developing'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/home', component: Home},
    {path: '/main', component: SideMenu},
    {path: '*', component: Developing}
  ]
})

export default router
