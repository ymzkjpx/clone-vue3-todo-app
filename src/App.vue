<template>
  <router-view />
</template>

<script lang="ts">
import TodoStore, { todoKey } from '@/store/todo'
import { defineComponent, provide } from 'vue'

export default defineComponent({
  setup(){
    provide(todoKey, TodoStore)
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
