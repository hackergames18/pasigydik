<template>
  <div id="app">

  <Navbar></Navbar>

    <main role="main">
        <div class="container-fluid">
          <router-view></router-view>
        </div>

    </main>

  </div>
</template>

<script>
import Home from './components/Home'
import Navbar from "./components/Navbar";

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  created() {
    this.$store.dispatch("initializeCategories");
    this.$store.dispatch("initilaizeMockUsers");
  },
  components: { Home, Navbar },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Production Sans";
  src: url("./assets/fonts/product_sans_bold.ttf") format("truetype");
}

#app {
  // font-family: "Open Sans", sans-serif;
  font-family: "Product Sans", sans-serif;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #353b3c;
  min-height: 100vh;
}

body {
  background-color: #f7f7f7;
}

h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
:root {
  --jumbotron-padding-y: 3rem;
}

.jumbotron {
  padding-top: var(--jumbotron-padding-y);
  padding-bottom: var(--jumbotron-padding-y);
  margin-bottom: 0;
  background-color: #fff;
}
@media (min-width: 768px) {
  .jumbotron {
    padding-top: calc(var(--jumbotron-padding-y) * 2);
    padding-bottom: calc(var(--jumbotron-padding-y) * 2);
  }
}

.jumbotron p:last-child {
  margin-bottom: 0;
}

.jumbotron-heading {
  font-weight: 300;
}

.jumbotron .container {
  max-width: 40rem;
}

footer {
  padding-top: 3rem;
  padding-bottom: 3rem;
}

footer p {
  margin-bottom: 0.25rem;
}
.cta {
    margin: 10px;
    padding: 10px;
    font-weight: bold;
    background-color: #2191fb;
    color: #ffffff !important;
  }
</style>
