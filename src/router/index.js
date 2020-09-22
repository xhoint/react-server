import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../views/Index.vue'

import user from '../views/user'


import getuser from '../views/getuser'
import role from '../views/role'
Vue.use(VueRouter)

const routes = [
  {
    name: 'Index',
    path: '/index',
    component: Index,
   
    children: [
      {
        name: 'getuser',
        path: 'getuser',
        component: getuser
      },
      {
        name: 'role',
        path: 'role',
        component: role
      },
    ]
  },
  {
    name: 'user',
    path: '/user',
    component: user, 
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
