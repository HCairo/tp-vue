<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const userId = ref('')
const email = ref('')
const address = ref('')
const city = ref('')
const postcode = ref('')
const phone = ref('')
const error = ref('')

const router = useRouter()

// Placeholder userId; in a real application, this should be set dynamically
userId.value = 1

const submitForm = async () => {
  try {
    const formData = {
      userId: userId.value,
      email: email.value,
      address: address.value,
      city: city.value,
      postcode: postcode.value,
      phone: phone.value
    }

    const response = await fetch('http://localhost/nwl_api/api/formNL.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })

    if (response.ok) {
      // Reset form fields
      email.value = ''
      address.value = ''
      city.value = ''
      postcode.value = ''
      phone.value = ''
      // Redirect to a thank you page or homepage
      router.push('/thank-you')
    } else {
      const responseData = await response.json()
      // Display error message if request fails
      error.value = responseData.message || 'Failed to submit the form. Please try again later.'
    }
  } catch (err) {
    console.error('Error submitting form:', err)
    // Display error message if request fails
    error.value = 'An error occurred while submitting the form. Please try again later.'
  }
}
</script>

<template>
  <div id="newsletter">
    <h1>Get Notified About New Articles</h1>
    <form @submit.prevent="submitForm">
      <input type="hidden" id="userId" name="userId" v-model="userId" />

      <label for="email">Email</label>
      <input type="email" id="email" name="email" v-model="email" required />

      <label for="address">Address</label>
      <input type="text" id="address" name="address" v-model="address" required />

      <label for="city">City</label>
      <input type="text" id="city" name="city" v-model="city" required />

      <label for="postcode">Postcode</label>
      <input type="text" id="postcode" name="postcode" v-model="postcode" required />

      <label for="phone">Phone Number</label>
      <input type="tel" id="phone" name="phone" v-model="phone" required />

      <input type="submit" value="Contact Me" />
      <p v-if="error">{{ error }}</p> <!-- Display error message -->
    </form>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  #form {
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
input[type='email'],
input[type='tel'],
input[type='address'] {
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