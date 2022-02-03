import { createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import Todos from '@/views/todos.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Todos',
    component: Todos
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
