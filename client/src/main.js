import Vue from 'vue'
import App from './App.vue'
// import store from './store/index'
import 'bootstrap/dist/css/bootstrap.css'

import router from './router'
import VueRouter from 'vue-router'
import * as firebase from 'firebase';
import {firestore} from 'firebase' 

import store from './store'

const app = firebase.initializeApp({
  apiKey: "AIzaSyCMEhgWDfoA-5Z88c9vyJJPiIF4jGQ9kbc",
  authDomain: "livedoctor-9a4ac.firebaseapp.com",
  databaseURL: "https://livedoctor-9a4ac.firebaseio.com",
  projectId: "livedoctor-9a4ac",
  storageBucket: "livedoctor-9a4ac.appspot.com",
  messagingSenderId: "100108556171"
})

// firestore().collection("users").get().then(function(querySnapshot) {
//   querySnapshot.forEach(function(doc) {
//       // doc.data() is never undefined for query doc snapshots
//       console.log(doc.id, " => ", doc.data());
//   });
// });

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
