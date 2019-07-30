import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Second from '@/components/Second'

Vue.use(VueRouter)

/*
export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
*/

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/home', component: HelloWorld},
    {path: '*', component: Second}
  ]
})

export default router
