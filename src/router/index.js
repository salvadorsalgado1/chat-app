import Vue from 'vue'
import Router from 'vue-router'
import Welcome from '@/components/Welcome'
import Chat from '@/components/Chat'
import Options from '@/components/Options'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path:'/',
      name:'Options',
      component: Options
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: Welcome,
      props:true
    },
    {
      path:'/chat',
      name:'Chat',
      component: Chat,
      props:true,
      beforeEnter:(to,from,next)=>{
        if(to.params.name){
          next()
        }else{
          next({
            name:'Welcome'
          })
        }
      }
    },
    
  ]
})
