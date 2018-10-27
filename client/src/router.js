import VueRouter from 'vue-router'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'
import Landingas from "./components/Landingas"



const routes = [
  { path: '/home', component: Home, },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: "/", component: Landingas }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export default new VueRouter({
  routes // short for `routes: routes`
})
