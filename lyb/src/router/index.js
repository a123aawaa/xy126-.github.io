import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import lyb from '@/components/lyb'
import xly from '@/components/xly'
import login from  '@/components/login'
import lygl from  '@/components/lygl'


Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect:'/lyb',
      component: Home,
      children:[
      {
      	path:'lyb',
      	component:lyb
      },{
      	path:'xly',
      	component:xly
      }
      ]
    },{
	    path:'/login',
      component:login
    },{
	     path:'lygl',
      component:lygl
    }
  ]
})
