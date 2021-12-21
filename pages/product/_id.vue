<template>
  <h2 v-if="$fetchState.pending">Fetching product...</h2>
  <h2 v-else-if="$fetchState.error" class="errorMessage">Error while fetching product!</h2>
  <div v-else>
    <h2>{{ product.name }}</h2>
    <img
      :src="
        product.imageUrl
          ? product.imageUrl
          : 'https://placeimg.com/200/200/tech'
      "
      width="200"
      style="float: right"
    />
    <h3>{{ product.description }}</h3>
    <p>Price: {{ product.price }}</p>
    <p>Fixed price? {{ product.fixedPrice }}</p>
    <p>Discontinued? {{ product.discontinued }}</p>
    <p>Modified date: {{ product.modifiedDate }}</p>
    <p>
      <button v-if="loggedIn" @click="deleteConfirm">Delete</button>
    </p>
  </div>
</template>

<script>
export default {
  async fetch() {
    const id = this.$nuxt.context.params.id
    await this.$store.dispatch('products/fetchProduct', id)
  },
  head() {
    return {
      title: this.product.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Product details for: ' + this.product.name,
        },
      ],
    }
  },
  computed: {
    product() {
      return this.$store.state.products.product
    },
    loggedIn() {
      return this.$store.getters['authentication/loggedIn']
    },
  },
  methods: {
    deleteConfirm() {
      if (window.confirm('Are you sure ??')) {
        this.deleteProduct(this.product.id)
          .then(() => {
            this.$router.push({ name: 'products' })
          })
          .catch((error) => {
            this.$nuxt.error(error)
          })
      }
    },
    deleteProduct(id) {
      return this.$store.dispatch('products/deleteProduct', id)
    },
  },
}
</script>

<style lang="css" scoped></style>
