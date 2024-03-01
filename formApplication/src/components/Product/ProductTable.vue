<script setup>
import {defineProps, computed} from 'vue'
const props = defineProps({ 
        products: {
            type: Array,
            default: () => []
        },
        price: {
            type: Number,
            default: 10
        },
        vta: {
            type: Number,
            default: 20
        }
    })
        /* 
            Utlisation d'une Computed  avec les données issus du template
            !!! SYNTAXE PARTICULIERE
            Double Fonction fléché
            La première fonction permet "d'injecter" 
            les arguments de la fonction à la seconde 
        */
const vtaCalculation = computed(() => (price, vta) => {
            let tax = (price / 100) * vta
            return price + tax})
        /* 
            Utlisation Computed  avec les données local du composant
            injecté via les props     
        */
const vtaCalculationLocal = computed (() => {
    let tax = (props.price / 100) * props.vta
    return props.price + tax})
</script>

<template>
        <h2>Products Table</h2>
        <p style="display: none;">{{ vtaCalculationLocal }}</p>
        <table>
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price HT</th>
                    <th scope="col">TVA</th>
                    <th scope="col">Prix TTC</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                <tr 
                v-for="(item, index) in products"
                :key="index"
                >
                    <td>{{ item.id }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.category }}</td>
                    <td>
                        <p>
                            {{item.description}}
                        </p>
                    </td>
                    <td>{{ item.price }} €</td>
                    <td>{{ item.vta }} %</td>
                    <!-- Appel à une fonction computed -->
                    <td>{{ vtaCalculation(item.price, item.vta) }} €</td>
                    <td>
                        <button>
                            Éditer
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
</template>