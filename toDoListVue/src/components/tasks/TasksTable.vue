<script setup>
import { defineProps, ref, onMounted } from 'vue'

const props = defineProps({
  tasks: {
    type: Array,
    default: () => []
  },
  categoryOptions: {
    type: Array,
    default: () => []
  },
  colorOptions: {
    type: Array,
    default: () => []
  }
})

const editingTask = ref(null)
const editedTask = ref({
  id: null,
  name: '',
  category: '',
  color: '',
  description: ''
})

const editTask = (index) => {
  editingTask.value = index
  // On copie/colle la task dans notre form
  Object.assign(editedTask.value, props.tasks[index])
}

const saveEditedTask = () => {
  // Mise a jour de la task
  Object.assign(props.tasks[editingTask.value], editedTask.value)

  // Sauvegarde dans LocalStorage
  localStorage.setItem('tasks', JSON.stringify(props.tasks))

  // Reset
  cancelEdit()
}

const cancelEdit = () => {
  editingTask.value = null
  // Reset
  Object.assign(editedTask.value, {
    id: null,
    name: '',
    category: '',
    color: '',
    description: ''
  })
}

const deleteTask = (index) => {
  props.tasks.splice(index, 1)
}

const toggleCompleted = (index) => {
  Vue.set(props.tasks[index], 'completed', !props.tasks[index].completed);
  localStorage.setItem('tasks', JSON.stringify(props.tasks))
}
</script>

<template>
    <div>
      <h2>Tasks</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Category</th>
            <th scope="col">Color</th>
            <th scope="col">Description</th>
            <th scope="col">Completed</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(task, index) in tasks" :key="task.id">
            <td>{{ task.id }}</td>
            <td>{{ task.name }}</td>
            <td>{{ task.category }}</td>
            <td :style="{ backgroundColor: task.color }"></td>
            <td>{{ task.description }}</td>
            <td>
              <input type="checkbox" v-model="task.completed" @change="toggleCompleted(index)">
            </td>
            <td>
              <button @click="editTask(index)">Edit</button>
              <button @click="deleteTask(index)">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
  
      <!-- Edit Task Form -->
      <div v-if="editingTask !== null">
        <h3>Edit Task</h3>
        <form @submit.prevent="saveEditedTask">
          <label for="edit-name">Name</label>
          <input type="text" id="edit-name" v-model="editedTask.name" required>
          <!-- Category select -->
          <label for="edit-category">Category</label>
          <select id="edit-category" v-model="editedTask.category" required>
            <option v-for="(item, index) in categoryOptions" :key="index" :value="item.value">{{ item.name }}</option>
          </select>
        
          <!-- Color select -->
          <label for="edit-color">Color</label>
          <select id="edit-color" v-model="editedTask.color" required>
            <option v-for="(item, index) in colorOptions" :key="index" :value="item.value">{{ item.name }}</option>
          </select>
          <label for="edit-description">Description</label>
          <input type="text" id="edit-description" v-model="editedTask.description" required>
          <button type="submit">Save Changes</button>
          <button @click="cancelEdit">Cancel</button>
        </form>
      </div>
    </div>
  </template>

<style scoped>
*{
  font-family: 'Noto-Sans', sans-serif;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
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

/* Button styles */
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
  background-color: #B9B8D3;
}

button:hover {
  background-color: #333;
  color: #fff;
}

/* Form styles */
form {
  margin-top: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input[type="text"],select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-bottom: 10px;
}

input[type="text"]:focus {
  outline: none;
  border-color: #6457A6;
}

button[type="submit"], button[type="button"] {
  background-color: #6457A6; /* Green */
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  margin-right: 10px;
}

button[type="submit"]:hover, button[type="button"]:hover {
  background-color: #333;
}

.completed {
  text-decoration: line-through;
}
</style>
