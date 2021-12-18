<template>
  <div>
    <h2>Login (type anything...)</h2>
    <form @submit.prevent="login">
      <div>
        <label for="userName">Username</label>
        <input
          id="userName"
          v-model="credentials.userName"
          type="userName"
          name="userName"
        />
      </div>
      <div>
        <label for="password">Password</label>
        <input
          id="password"
          v-model="credentials.password"
          type="password"
          name="password"
          autocomplete="current-password"
        />
      </div>
      <div>
        <button type="submit" :disabled="!credentials.userName || !credentials.password">Login</button>
        <span v-if="error" class="errorMessage">{{ error }}</span>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      credentials: {
        userName: '',
        password: '',
      },
      error: null,
    }
  },
  methods: {
    login() {
      this.$store
        .dispatch('authentication/login', this.credentials)
        .then(() => {
          this.$router.push({ name: 'admin' })
        })
        .catch((error) => {
          this.error = 'Unsuccessful login: ' + error.response
        })
    },
  },
}
</script>

<style lang="css" scoped>
.errorMessage {
  color: red;
}
</style>