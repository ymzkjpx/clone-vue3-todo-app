import { InjectionKey, reactive, readonly } from 'vue'
import { Params, Todo, TodoState, TodoStore } from '@/store/todo/types'

const mockTodo: Todo[] = [
  {
    id: 1,
    title: 'todo1',
    description: 'at first',
    status: 'waiting',
    createdAt: new Date('2022-02-01'),
    updatedAt: new Date('2022-02-01')
  },
  {
    id: 2,
    title: 'todo2',
    description: 'at second',
    status: 'waiting',
    createdAt: new Date('2022-02-02'),
    updatedAt: new Date('2022-02-02')
  },
  {
    id: 3,
    title: 'todo3',
    description: 'at third',
    status: 'waiting',
    createdAt: new Date('2022-02-03'),
    updatedAt: new Date('2022-02-03')
  }
]

const state: TodoState = reactive<{ todos: Todo[] }>({
  todos: mockTodo
})

const initializeTodo = (todo: Params) => {
  const date = new Date()
  return {
    id: date.getTime(),
    title: todo.title,
    description: todo.description,
    status: todo.status,
    createdAt: date,
    updatedAt: date
  } as Todo
}

const getTodo = (id: number) => {
  const todo = state.todos.find((todo) => todo.id === id)
  if (!todo) {
    throw new Error(`cannot find todo by id : ${id}`)
  }
  return todo
}

const addTodo = (todo: Params) => {
  state.todos.push(initializeTodo(todo))
}

const updateTodo = (id: number, todo: Todo) => {
  const index = state.todos.findIndex((todo) => todo.id === id)
  if (index === -1) {
    throw new Error(`cannot find todo by id : ${id}`)
  }
  state.todos[index] = todo
}

const deleteTodo = (id: number) => {
  state.todos = state.todos.filter((todo) => todo.id !== id)
}

export const todoStore: TodoStore = {
  state: readonly(state),
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo
}

export default todoStore
export const todoKey: InjectionKey<TodoStore> = Symbol('todo')
