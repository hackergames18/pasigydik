import VueRouter from 'vue-router'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'
import Landingas from "./components/Landingas"
import Onboarding from "./components/Onboarding"
import MyAppointments from "./components/MyAppointments"
import WebRTC from "./components/Webrtc"
import store from './store'

const requireAuthentication = (to, from, next) => {
  if (!store.getters['getUser']) {
    next('/login')
  } else {
    next()
  }
}

const routes = [
  { path: '/home', component: Home, beforeEnter: requireAuthentication },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/onboarding', component: Onboarding },
  { path: '/',
    component: Landingas,
    beforeEnter: (to, from, next) => {
      console.log('hehe')
      if (store.getters['getUser']) {
        next('/home')
      } else {
        next()
      }
    }
  },
  { path: "/appointments", component: MyAppointments },
  { name: 'consult', path: '/consult/:id', component: WebRTC }
]

export default new VueRouter({
  routes // short for `routes: routes`
})
