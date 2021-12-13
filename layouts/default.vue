<template>
  <div>
    <h1>Nuxt Store</h1>
    <nav-bar></nav-bar>
    <nuxt />
    <footer>
      <hr />
      Copyright Vue Academy 2021
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
  }
}
</script>

<style>
/* Master Styles */
h1 {
  color: #42b983;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 250%;
  margin: 0px;
}
h2,
h3 {
  color: #435466;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
}
body {
  margin: 2em;
  margin-top: 0.5em;
}
body,
input[text],
button {
  color: #888;
  font-family: Cambria, Georgia;
}
a {
  cursor: pointer;
  cursor: hand;
}
button {
  font-family: Arial;
  background-color: #eee;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  cursor: hand;
}
button:hover {
  background-color: #cfd8dc;
}
button:disabled {
  background-color: #eee;
  color: #aaa;
  cursor: auto;
}
footer {
  padding-top: 10px;
  clear: both;
}
.left {
  float: left;
}

.right {
  float: right;
}

/* Navigation link styles */
nav a {
  padding: 5px 10px;
  text-decoration: none;
  margin-top: 10px;
  display: inline-block;
  background-color: #eee;
  border-radius: 4px;
}
nav a:visited,
a:link {
  color: #607d8b;
}
nav a:hover {
  color: #039be5;
  background-color: #cfd8dc;
}
nav a.nuxt-link-exact-active {
  color: #fff;
  background-color: #42b983;
}

/* everywhere else */
* {
  font-family: Arial, Helvetica, sans-serif;
}

*[disabled] {
  cursor: not-allowed;
}

.home {
  position: relative;
}

/* loading spinner */
.loading {
  display: inline-block;
  overflow: hidden;
  height: 1.3em;
  margin-top: -0.3em;
  line-height: 1.5em;
  vertical-align: text-bottom;
}

.loading::after {
  display: inline-table;
  white-space: pre;
  text-align: left;
  content: '◎◎◎\A◉◎◎\A◎◉◎\A◎◎◉';
  animation: spin 1s steps(4) infinite;
}

@keyframes spin {
  to {
    transform: translateY(-6em);
  }
}
</style>