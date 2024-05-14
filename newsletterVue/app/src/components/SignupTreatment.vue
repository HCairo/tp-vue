<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const username = ref('')
const password = ref('')
const error = ref('')

const signupUser = async () => {
  try {
    const response = await fetch('http://localhost/nwl_api/api/signup.php', {
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
      router.push('/login')
    } else {
      error.value = 'Signup failed'
    }
  } catch (error) {
    console.error('Error signing up:', error)
    error.value = 'An error occurred. Please try again later.'
  }
}
</script>

<template>
  <div id="signup">
    <h1>Sign Up To Get Full Access</h1>
    <form id="signupForm" @submit.prevent="signupUser">
      <label for="signupUsername">Username</label>
      <input type="text" id="signupUsername" name="signupUsername" v-model="username" required />

      <label for="signupPassword">Password</label>
      <input type="password" id="signupPassword" name="signupPassword" v-model="password" required />

      <input type="submit" value="Sign Up" />
      <p v-if="error">{{ error }}</p>
    </form>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  #signup {
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
