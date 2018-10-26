import Vue from 'vue'
import App from './App.vue'
// import store from './store/index'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  render: h => h(App)
})
