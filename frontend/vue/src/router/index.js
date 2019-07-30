import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Second from '@/components/Second'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/home', components: {a: Home}},
    {path: '*', component: Second}
  ]
})

export default router
