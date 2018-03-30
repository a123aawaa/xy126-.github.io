import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import lyb from '@/components/lyb'
import xly from '@/components/xly'


Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/',
      name: 'Home',
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
    }
  ]
})
