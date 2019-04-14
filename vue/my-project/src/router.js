import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Conn from './views/connect.vue'
import ConnectCom1 from '@/components/ConnectCom1'
import ConnectCom2 from '@/components/ConnectCom2'
import Errorpage from './views/Error.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      alias:'/h'
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },{
      path: '/connect',
      name:'connect',
      component:Conn,
      children:[
        {
          path:'ConnectCom1',
          name:'ConnectCom1',
          component:ConnectCom1
        },
        {
          path:'ConnectCom2/:usrname/:usrage',
          name:'ConnectCom2',
          component:ConnectCom2
        },
        {
          path:'backtest2/:usrname/:usrage',
          redirect:"ConnectCom2/:usrname/:usrage"
        }
      ]
    },{
      path:'/backhome',
      redirect:'/'
    },
    {
      path:'*',
      component:Errorpage
    }
  ]
})
