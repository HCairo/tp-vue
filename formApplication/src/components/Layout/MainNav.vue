<script setup>

import { defineProps } from 'vue'

const props = defineProps({
            navItems: {
                type: Array,
                required: false,
                default: function () {
                    return null
                }
            },
            showUserNav: {
                type: Boolean,
                required: false,
                default: function () {
                    return false
                }
            },
            userNavItems: {
                type: Array,
                required: false,
                default: function () {
                    return null
                }
            }
        })
</script>

<template>
    Hello
</template>