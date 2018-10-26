import Vue from 'vue'
import App from './App.vue'
// import store from './store/index'
import router from './router'

Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
