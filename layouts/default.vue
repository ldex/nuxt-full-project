<template>
  <div>
    <h1>Nuxt Store</h1>
    <nav-bar></nav-bar>
    <nuxt keep-alive />
    <footer>
      <hr />
      Copyright Vue Academy 2022
    </footer>
  </div>
</template>

<script>
export default {
  head: {
    titleTemplate: '%s - Nuxt Store',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'We have all the products you need!',
      },
    ],
  },
  errorCaptured(error) {
      console.error('Catching error in layout: ', error.message);
      return true;
  },

}
</script>

<style>
</style>