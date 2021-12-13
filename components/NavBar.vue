<template>
  <nav>
    <nuxt-link to="/">Home</nuxt-link>
    <nuxt-link to="/products">Products</nuxt-link>
    <nuxt-link to="/about">About</nuxt-link>
    <nuxt-link to="/admin">Admin</nuxt-link>
    <nuxt-link v-if="!loggedIn" to="/login">Login</nuxt-link>
    <a v-else type="button" @click="logout">Logout</a>
  </nav>
</template>

<script>
export default {
  computed: {
    loggedIn() {
      return this.$store.getters['authentication/loggedIn']
    },
  },
  created() {
    if (process.client) {
      const authToken = localStorage.getItem('auth_token')
      if (authToken) {
        this.$store.dispatch('authentication/setAuthToken', authToken)
      }
    }
  },
  methods: {
    logout() {
      if (process.client) {
        localStorage.removeItem('auth_token')
      }
      this.$store.dispatch('authentication/logout')
      this.$router.push({ name: 'index' })
    },
  },
}
</script>

<style scoped>
</style>