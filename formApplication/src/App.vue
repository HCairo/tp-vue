<script setup>

import {ref, onUpdated} from 'vue'
import MainLayout from './components/Layout/MainLayout.vue'
import MainNav from './components/Layout/MainNav.vue'
import ProductsTable from "./components/Product/ProductTable.vue"

const products = ref([
  {
    id: 1,
    name: "Cookie",
    category: "Biscuit",
    description: "Very sweet, very good",
    price: 20,
    vta: 20
  },
  {
    id: 2,
    name: "Chocolat",
    category: "Sweet",
    description: "Good enough",
    price: 4.99,
    vta: 20
  }
])

// Data Product

const name = ref ("Miel")
const description = ref("Oh qu'ils sont bons !")
const price = ref(99)
const vta= ref(20)
const category= ref("Sweet")

// Data Category

const catName = ref(null)
const catColor = ref(null)
const catDescription = ref(null)
const catColorOptions = ref([
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
const categories = ref([
  {
    catName: 'default',
    catColor: 'text-bg-info',
    catDescription: 'Default Category'
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
    catMame: catName.value,
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
            <label for="name" class="form-label">Nom</label>
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
            <label for="price" class="form-label">Prix</label>
            <input 
                type="number"
                class="form-control" 
                id="price"
                name="price"
                min="1"
                aria-describedby="price-help"
                v-model="price"
                required
            >
            <label for="vta" class="form-label">TVA</label>
            <input 
                type="number"
                class="form-control" 
                id="vta"
                name="vta"
                aria-describedby="vta-help"
                v-model="vta"
                required
            >
            <label for="category" class="form-label">Catégorie</label>
            <select 
                id="category"
                class="form-select" 
                v-model="category"
                required
            >
              <option value="meat">Viande</option>
              <option value="vegetable">Légume</option>
              <option value="drink">Boisson</option>
              <option value="sweet">Confiserie</option>
            </select>
            <label for="description" class="form-label">Description</label>
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
        class="col-6"
        :products="products"  
      />
    <hr>
        <h2>CATEGORIES FORM</h2>
        <form @submit.prevent="submitCategoryForm">
            <label for="cat-name" class="form-label">Name</label>
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
            <label for="cat-color" class="form-label">Color</label>
            <select 
                id="cat-color"
                class="form-select" 
                v-model="catColor"
                required
            >
              <option v-for="(item, index) in catColorOptions" :key="index" :value="item.value">
                {{ item.name }}
              </option>
            </select>
            <label for="cat-description" class="form-label">Description</label>
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
        <h2>CATEGORIES TABLE</h2>
        <!-- IMPORTER LE TABLEAU D'AFFICHAGE DES CATEGORIES -->
  </main-layout>
</template>

<style scoped>

</style>