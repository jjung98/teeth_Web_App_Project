import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import SideMenu from '@/components/SideMenu'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/main', component: Home},
    {path: '*', component: SideMenu}
  ]
})

export default router
