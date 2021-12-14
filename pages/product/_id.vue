<template>
  <div>
    <section v-if="error">
      {{ error.message }}
    </section>
    <section v-else>
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
    </section>
  </div>
</template>

<script>
export default {
  // asyncData(context) {
  //   context.loading = true;
  //   const id = context.params.id;
  //   return context.$axios
  //     .get('https://storerestservice.azurewebsites.net/api/products/' + id)
  //     .then((response) => {
  //       return {
  //         product: response.data,
  //       };
  //     })
  //     .catch((error) => {
  //       context.error = error;
  //     })
  //     .finally(() => (context.loading = false));
  // },
  data() {
    return {
      error: null,
    }
  },
  async fetch({ store, params, error }) {
    const id = params.id
    try {
      await store.dispatch('products/fetchProduct', id)
    } catch (e) {
      error({
        statusCode: 503,
        message: 'Unable to fetch product #' + id,
      })
    }
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
            this.$router.push({ name: 'error', params: { error } })
          })
      }
    },
    deleteProduct(id) {
      return this.$store.dispatch('products/deleteProduct', id)
    }
  },
}
</script>

<style lang="css" scoped></style>
