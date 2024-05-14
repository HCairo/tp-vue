import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const isAuthenticated = ref(false) // Initial authentication status is false
  const userId = ref(null) // Initialize userId to null
  const username = ref('') // Initialize username to an empty string

  // Computed property to check if the user is authenticated
  const isLoggedIn = computed(() => isAuthenticated.value)

  // Method to log in the user
  function login(userData) {
    isAuthenticated.value = true
    userId.value = userData.userId
    username.value = userData.username
    // You can perform additional actions here, such as storing user data in localStorage
  }

  // Method to log out the user
  function logout() {
    isAuthenticated.value = false
    userId.value = null
    username.value = ''
    // Clear any stored user data, such as localStorage
  }

  return {
    isAuthenticated,
    userId,
    username,
    isLoggedIn,
    login,
    logout
  }
})
