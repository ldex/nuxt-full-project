<template>
  <div>
    <h2>{{ title }}</h2>
    <p>Welcome to our store!</p>
  </div>
</template>

<script>
export default {
  layout: 'bottom-menu',
  data() {
    return {
      title: 'Home'
    }
  },
}
</script>
