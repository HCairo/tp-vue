<script setup>
import {ref, onUpdated, defineProps, onMounted} from 'vue'
import MainLayout from './components/layout/MainLayout.vue'
import MainNav from './components/layout/MainNav.vue'
import TasksTable from './components/tasks/TasksTable.vue'

// Tasks
const tasks = ref([])
const name = ref (null)
const description = ref(null)
const category = ref(null)
const color = ref(null)
const colorOptions = ref([
  {
    name: '',
    value: ''
  },
  {
    name: 'Red',
    value: '#FF6B6B'
  },
  {
    name: 'Blue',
    value: '#C4D7F2'
  },
  {
    name: 'Green',
    value: '#7DCE82'
  },
  {
    name: 'Yellow',
    value: '#FFE66D'
  },
  {
    name: 'Orange',
    value: '#F5A65B'
  },
  {
    name: 'Pink',
    value: '#FFA5AB'
  },
])
const categoryOptions = ref([
  {
    name: '',
    value: ''
  },
  {
    name: 'Technology',
    value: 'Technology'
  },
  {
    name: 'Studies',
    value: 'Studies'
  },
  {
    name: 'Daily',
    value: 'Daily'
  },
  {
    name: 'Groceries',
    value: 'Groceries'
  },
  {
    name: 'Sport',
    value: 'Sport'
  },
  {
    name: 'Objectives',
    value: 'Objectives'
  },
])

onMounted(() => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'))
  if (storedTasks) {
    tasks.value = storedTasks
  }
})

const saveTasksToLocalStorage = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks.value))
}

function submitTaskForm() {
  tasks.value.push({
    id: tasks.value.length + 1,
    name: name.value,
    description: description.value,
    category: category.value,
    color: color.value
  })

  saveTasksToLocalStorage()
}

onUpdated(() => {
  console.log(name.value)
  console.log(description.value)
})
</script>

<template>
    <main-layout>
      <main-nav/>
      <h2>Add a task</h2>
        <form @submit.prevent="submitTaskForm">
            <label for="name">Name</label>
            <!-- v-model permet de "bind" un input avec une data
            Le Bind est bi-directionnel, si on modifie l'input la data est modifiée,
            si on modifie la data, la valeur de l'input est modifiée. -->
            <input 
              type="text"
              class="form-control" 
              id="name"
              name="name"
              aria-describedby="name-help"
              v-model="name"
              required
            >
            <label for="category">Category</label>
            <select 
                id="category"
                class="form-select" 
                v-model="category"
                required
            >
              <option v-for="(item, index) in categoryOptions" :key="index" :value="item.value">
                {{ item.name }}
              </option>
            </select>
            <label for="color">Color</label>
            <select 
                id="color"
                class="form-select" 
                v-model="color"
                required
            >
              <option v-for="(item, index) in colorOptions" :key="index" :value="item.value">
                {{ item.name }}
              </option>
            </select>
            <label for="description">Description</label>
            <textarea 
                class="form-control" 
                id="description" 
                name="description"
                rows="3"
                v-model="description"
            >
            </textarea>
          <button type="submit">Save</button>
        </form>
        <TasksTable :tasks="tasks" :category-options="categoryOptions" :color-options="colorOptions" />
    <hr>
    </main-layout>
</template>

<style scoped>
*{
  font-family: 'Noto-Sans', sans-serif;
}

form {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],
textarea,
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

input[type="text"]:focus,
textarea:focus,
select:focus {
  outline: none;
  border-color: #6457A6;
}

button[type="submit"] {
  background-color: #6457A6;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

button[type="submit"]:hover {
  background-color: #6457A6;
}

/* Table styles */
table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #6457A6;
  color: white;
}

button {
  padding: 8px 16px;
  background-color: #759FBC;
  color: #333;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  margin-right: 5px;
}

button.edit {
  background-color: #EF2D56;
}

button:hover {
  background-color: #333;
  color: #fff;
}
</style>