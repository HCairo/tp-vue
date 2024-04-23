<script setup>

import {ref, onUpdated} from 'vue'
import MainLayout from './components/Layout/MainLayout.vue'
import MainNav from './components/Layout/MainNav.vue'
import ProductsTable from "./components/Product/ProductTable.vue"
import CategoryTable from "./components/Category/CategoryTable.vue"

const products = ref([
  {
    id: 1,
    name: "Cookie",
    category: "Biscuit",
    description: "Very sweet, very good",
    price: 8.99,
    vta: 20
  },
  {
    id: 2,
    name: "Chocolat",
    category: "Sweet",
    description: "Good enough",
    price: 2.99,
    vta: 20
  }
])

const categories = ref([
  {
    id: 1,
    catName: 'Biscuit',
    catColor: '#4059AD',
    catDescription: 'Rayon sucrerie'
  }
])

// Data Product

const name = ref (null)
const description = ref(null)
const price = ref(null)
const vta= ref(20)
const category= ref(null)
const categoryOptions = ref([
  {
    name: '',
    value: ''
  },
  {
    name: 'Viande',
    value: 'Meat'
  },
  {
    name: 'Boisson',
    value: 'Drink'
  },
  {
    name: 'Legume',
    value: 'Vegetable'
  },
  {
    name: 'Confiserie',
    value: 'Sweet'
  },
  {
    name: 'Epice',
    value: 'Spice'
  },
  {
    name: 'Biscuit',
    value: 'Cracker'
  },
])

// Data Category

const catName = ref(null)
const catColor = ref(null)
const catDescription = ref(null)
const catColorOptions = ref([
{
    name: '',
    value: ''
  },
  {
    name: 'Blue',
    value: '#4059AD'
  },
  {
    name: 'Red',
    value: '#D11149'
  },
  {
    name: 'Vert',
    value: '#B5C9C3'
  },
  {
    name: 'Yellow',
    value: '#FAFF81'
  },
  {
    name: 'Orange',
    value: '#F1BF98'
  }
])

function submitProductForm() {
  products.value.push({
    id: products.value.length + 1,
    name: name.value,
    category: category.value,
    description: description.value,
    price: price.value,
    vta: vta.value
  })
}

function submitCategoryForm() {
  categories.value.push({
    id: categories.value.length + 1,
    catName: catName.value,
    catColor: catColor.value,
    catDescription: catDescription.value
  })
  console.log(categories.value)
}

onUpdated(() => {
  console.log(name.value)
  console.log(description.value)
  console.log(price.value)
})
</script>

<template>
  <main-layout>
    <main-nav/>
        <h2>Product Form</h2>
        <form @submit.prevent="submitProductForm">
            <label for="name">Nom</label>
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
            <label for="price">Prix</label>
            <input 
                type="number"
                class="form-control" 
                id="price"
                name="price"
                step="0.1"
                aria-describedby="price-help"
                v-model="price"
                required
            >
            <label for="vta">TVA</label>
            <input 
                type="number"
                class="form-control" 
                id="vta"
                name="vta"
                aria-describedby="vta-help"
                v-model="vta"
                required
            >
            <label for="category">Catégorie</label>
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
      <products-table
        :products="products"  
      />
    <hr>
    <h2>Category Table</h2>
        <form @submit.prevent="submitCategoryForm">
            <label for="cat-name">Name</label>
            <!-- v-model permet de "bind" un input avec une data
            Le Bind est bi-directionnel, si on modifie l'input la data est modifiée,
            si on modifie la data, la valeur de l'input est modifiée. -->
            <input 
              type="text"
              class="form-control" 
              id="cat-name"
              name="cat-name"
              aria-describedby="name-help"
              v-model="catName"
              required
            >
            <label for="cat-color">Color</label>
            <select 
                id="cat-color"
                class="form-select" 
                v-model="catColor"
                required
                style="background: catColorOptions(catColor);"
            >
              <option v-for="(item, index) in catColorOptions" :key="index" :value="item.value">
                {{ item.name }}
              </option>
            </select>
            <label for="cat-description" >Description</label>
            <textarea 
                class="form-control" 
                id="cat-description" 
                name="cat-description"
                rows="3"
                v-model="catDescription"
            >
            </textarea>
          <button type="submit">Save</button>
        </form>
        <category-table :categories="categories"/>
  </main-layout>
</template>

<style scoped>
  *{
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    text-align: center;
  }

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    padding: 10px;
    width: 50%;
    margin: 0 auto;
  }

  input{
    padding: 10px;
    border-radius: 8px;
  }

  select{
    padding: 20px;
    background: white;
    border-radius: 8px;
  }

  textarea{
    border-radius: 8px;
    resize: none;
  }

  label{
    font-weight: 600;
    font-size: 1.2em;
  }
</style>