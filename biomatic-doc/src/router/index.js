import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Border from '@/components/atomic/Border'
import BoxPosition from '@/components/atomic/BoxPosition'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/atomic/border',
      name: 'AtomicBorder',
      component: Border
    },
    {
      path: '/atomic/box-position',
      name: 'AtomicBoxPosition',
      component: BoxPosition
    }
  ]
})
