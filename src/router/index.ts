import { createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import Todos from '@/views/top-todos.vue'
import HelloWorld from '@/components/HelloWorld.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Todos',
    component: Todos
  },
  {
    path: '/hello-world',
    name: 'HelloWorld',
    component: HelloWorld
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
