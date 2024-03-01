<script setup>
    defineProps({ 
        categories: {
            type: Array,
            default: () => []
        }
    })
</script>

<template>
        <h2>Category Table</h2>
        <table>
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Color</th>
                    <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr 
                v-for="(item, index) in categories"
                :key="index"
                >
                    <td>{{ item.id }}</td>
                    <td>{{ item.catName }}</td>
                    <td>{{ item.catColor }}</td>
                    <td>
                        <p>
                            {{item.catDescription}}
                        </p>
                    </td>
                    <td>
                        <button>
                            Éditer
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
</template>