<template>
  <div>
    <h1>
      TODO一覧です。
    </h1>
    <ul>
      <li
        v-for="todo in todoStore.state.todos"
        :key="todo.id"
      >
        {{ todo.id }}
        {{ todo.title }}
        {{ todo.description }}
        {{ todo.status }}
        {{ todo.createdAt }}
        {{ todo.updatedAt }}
      </li>
    </ul>
    <router-link to="/new">
      新規作成
    </router-link>
  </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'
import { todoKey } from '@/store/todo'

const todoStore = (()=>{
  const todoStore = inject(todoKey)
  if (! todoStore) throw new Error('todoStore is not provided')
return todoStore
})()
</script>
