import { createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'
import Todos from '@/views/TodosPage.vue'
import HelloWorld from '@/components/HelloWorld.vue'
import AddTodo from '@/views/AddTodo.vue'

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
  },
  {
    path: '/new',
    name: 'AddTodo',
    component: AddTodo
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
})

export default router
