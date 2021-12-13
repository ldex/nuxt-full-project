<template>
  <div>
    <h2>About</h2>
    <p style="margin-bottom: 80px">This is the about page.</p>
  </div>
</template>

<script>
export default {
  head() {
    return {
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js',
        },
      ],
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap',
        },
      ],
    }
  },
}
</script>

<style scoped>
h2 {
  font-family: 'Permanent Marker', sans-serif;
}
</style>