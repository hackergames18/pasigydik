<template>
  <div>
    <form class="form-signin" @submit.prevent="handleSubmit">
      <div class="text-center mb-4">
        <!-- <img class="mb-4" src="../../assets/brand/bootstrap-solid.svg" alt="" width="72" height="72"> -->
        <h1 class="h3 mb-3 font-weight-normal">Sign in</h1>
        <p>Our doctors are here to help.</p>
      </div>

      <div class="form-label-group">
        <input type="email" id="inputEmail" v-model="email" class="form-control" placeholder="Email address" required autofocus>
        <label for="inputEmail">Email address</label>
      </div>

      <div class="form-label-group">
        <input type="password" id="inputPassword" v-model="password" class="form-control" placeholder="Password" required>
        <label for="inputPassword">Password</label>
      </div>

      <!-- <div class="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me"> Remember me
        </label>
      </div> -->
      <button class="btn btn-lg btn-primary btn-block btn-action" type="submit">Sign in</button>
      <p class="mt-5 mb-3 text-muted text-center">&copy; 2018</p>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase';
import { mapGetters } from 'vuex'

  export default {
    data() {
      return {
        email: 'zigmas@slusnys.com',
        password: 'zigmas'
      }
    },
    created(){
      console.log(this.$store.getters.getUsers[0])
    },
    computed: {
      ...mapGetters({user:'getUser'})
    },
    methods: {
      handleSubmit: function () {
        if (this.email === '' || this.password === '') {
          console.log('you cant enter empty fields')
          return
        }
        this.$store.dispatch('login', {
          email: this.email, password: this.password
        })
        if (this.user) {
          this.$router.push('home')
        }
        // firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
        //   // Handle Errors here.
        //   var errorCode = error.code;
        //   console.log(errorCode)
        //   var errorMessage = error.message;
        //   console.log(errorMessage)
        //   // ...
        // });
        // console.log(this.currentUser.email)
        // if (this.currentUser) {
        //   this.$route.push({ path: 'home' })
        // }
      }
    }
  }
</script>

<style scoped>
  .btn-action {
    background-color: #2191fb;
  }
  .form-signin {
  width: 100%;
  max-width: 420px;
  padding: 15px;
  margin: auto;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group > input,
.form-label-group > label {
  padding: var(--input-padding-y) var(--input-padding-x);
}

.form-label-group > label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0; /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  cursor: text; /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: calc(var(--input-padding-y) + var(--input-padding-y) * (2 / 3));
  padding-bottom: calc(var(--input-padding-y) / 3);
}

.form-label-group input:not(:placeholder-shown) ~ label {
  padding-top: calc(var(--input-padding-y) / 3);
  padding-bottom: calc(var(--input-padding-y) / 3);
  font-size: 12px;
  color: #777;
}

/* Fallback for Edge
-------------------------------------------------- */
@supports (-ms-ime-align: auto) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

/* Fallback for IE
-------------------------------------------------- */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}
</style>
