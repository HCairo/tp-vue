<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const { login } = useUserStore()
const router = useRouter()

const username = ref('')
const password = ref('')
const error = ref('')

const loginUser = async () => {
  try {
    if (!username.value || !password.value) {
      error.value = 'Please enter both username and password'
      return
    }

    const response = await fetch('http://localhost/nwl_api/api/login.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: username.value,
        password: password.value
      })
    })

    if (response.ok) {
      const userData = await response.json()
      login(userData.user)
      router.push('/form')
    } else {
      error.value = 'Invalid username or password'
    }
  } catch (error) {
    console.error('Error logging in:', error)
    // Handle error
    error.value = 'An error occurred while logging in'
  }
}
</script>

<template>
  <div id="login">
    <h1>Log In To Your Account</h1>
    <form id="loginForm" @submit.prevent="loginUser">
      <label for="loginUsername">Username</label>
      <input type="text" id="loginUsername" name="loginUsername" v-model="username" required />

      <label for="loginPassword">Password</label>
      <input type="password" id="loginPassword" name="loginPassword" v-model="password" required />

      <input type="submit" value="Login" />
      <p v-if="error">{{ error }}</p> <!-- Display error message -->
    </form>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  #login {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}

form {
  max-width: 300px;
  margin: 0 auto;
}
input[type='text'],
input[type='password'] {
  width: 100%;
  padding: 10px;
  margin: 5px 0 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
input[type='submit'] {
  background-color: #997db8;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
input[type='submit']:hover {
  background-color: #997db8;
}
</style>