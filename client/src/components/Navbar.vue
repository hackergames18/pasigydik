<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="#">
      <router-link class="text-dark" to="/"><span class="text-primary">cure</span>lla.com</router-link>

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
        <!-- <li class="nav-item">
            <a class="nav-link" href="#">Advice</a>
          </li> -->
        <li class="nav-item">
            <a class="nav-link" href="#">FAQ</a>
          </li>
        <!-- <li class="nav-item">
          <a class="nav-link" href="#">Reviews</a>
        </li> -->
        <li class="nav-item">
          <router-link to="home" class="nav-link" href="#">Search</router-link>
        </li>
        <!-- TODO - Dividerio reikia (|) -->
        <div v-if="!user">
        <li class="nav-item">
            <router-link class="nav-link" to="login">Login</router-link>
            </li>
        <li class="nav-item">
            <router-link class="nav-link signup-link" to="register">Sign up</router-link>
          </li>
    </div>
    <div v-else>
      <li class="nav-item">

            <router-link to="appointments" class="nav-link" href="#">My appointments</router-link>
          </li>
      <li class="nav-item">
            <a class="nav-link" @click="logout" href="#">Logout</a>
          </li>
    </div>
    </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({ user: "getUser" }),
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
      this.$router.push("/");
    },
  },
};
</script>

<style scoped lang="scss">
$default-color: #2191fb;
$link-color: #5f6060;

.navbar {
  background-color: #f7f7f7;
}

.action-link {
  color: $default-color !important;
}

.nav-link {
  color: $link-color !important;
}

.navbar-brand {
  font-size: 2em;
  padding-left: 100px;
}

.signup-link {
  color: #2191fb !important;
}
</style>