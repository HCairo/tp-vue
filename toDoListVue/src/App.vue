<script setup>
import { ref, onMounted } from 'vue'
import MainLayout from './components/layout/MainLayout.vue'
import MainNav from './components/layout/MainNav.vue'
import TasksTable from './components/tasks/TasksTable.vue'
import TasksForm from './components/form/TasksForm.vue'

// Tasks
const tasks = ref([])

// LocalStorage
onMounted(() => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'))
  if (storedTasks) {
    tasks.value = storedTasks
  }
})

// Save tasks to LocalStorage
function saveTasksToLocalStorage() {
  localStorage.setItem('tasks', JSON.stringify(tasks.value))
}
</script>

<template>
    <main-layout>
      <main-nav/>
      <h2>Add a task</h2>
      <TasksForm />
      <TasksTable :tasks="tasks" :category-options="categoryOptions" :color-options="colorOptions" />
      <hr>
    </main-layout>
</template>

<style scoped>
* {
  font-family: 'Noto-Sans', sans-serif;
}
</style>