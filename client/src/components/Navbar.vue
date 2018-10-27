<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="#">
      <span class="text-primary">cure</span>lla.com
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <!-- <li class="nav-item active">
            <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
          </li> -->
        <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Advice</a>
          </li>
        <li class="nav-item">
            <a class="nav-link" href="#">FAQ</a>
          </li>
        <li class="nav-item">
            <a class="nav-link" href="#">Reviews</a>
          </li>
        <!-- TODO - Dividerio reikia (|) -->
        <li class="nav-item">
          <router-link class="nav-link" to="login">Login</router-link>
          </li>
        <li class="nav-item">
          <router-link class="nav-link signup-link" to="register">Sign up</router-link>
            <!-- <a class="nav-link" href="#">Sign up</a> -->
          </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  background-color: #f7f7f7;
}
.navbar-brand {
  font-size: 2em;
  padding-left:100px;
}
.signup-link {
  color: #2191fb !important;
}
</style>
