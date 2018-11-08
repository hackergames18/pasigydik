<template>
  <div>
    <form class="form-signin" @submit.prevent="handleSubmit">
      <div class="text-center mb-4">
        <h1 class="h3 mb-3 font-weight-normal">Register</h1>
        <p>You're one step from getting in touch with a doctor!</p>

      </div>

      <div class="form-label-group">
        <input type="email" id="inputEmail" v-model="email" class="form-control" placeholder="Email address" required autofocus>
        <label for="inputEmail">Email address</label>
      </div>

      <div class="form-label-group">
        <input type="password" id="inputPassword" v-model="password" class="form-control" placeholder="Password" required>
        <label for="inputPassword">Password</label>
      </div>

      <div class="form-check form-check-inline">
        <input type="radio" value="patient" id="patientRadio" v-model="userType" class="form-control" checked>
        <label for="patientRadio">I'm a patient</label>
      </div>

      <div class="form-check form-check-inline">
        <input type="radio" value="doctor" id="doctorRadio" v-model="userType" class="form-control">
        <label for="doctorRadio">I'm a doctor</label>
      </div>

      <button class="btn btn-lg btn-primary btn-block">Register</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/firestore'

// const firestoreApp = firebase.firestore()
  export default {
    data() {
      return {
        email: '',
        password: '',
        userType: ''
      }
    },
    methods: {
      handleSubmit() {
        if (this.email === '' || this.password === '' || this.userType === '') {
          console.log('you cant enter empty fields')
          return
        }
        // TODO: Uncomment this when page is ready
        // this.$store.dispatch('auth/register', {email: this.email, password: this.password})
        this.$router.push({ path: '/onboarding' })
        // firebase.auth().createUserWithEmailAndPassword(this.email, this.password).catch(function(error) {
        //   var errorCode = error.code;
        //   console.log(errorCode)
        //   var errorMessage = error.message;
        //   console.log(errorMessage)
        // });
      }
    },
  }
</script>

<style lang="scss" scoped>
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
