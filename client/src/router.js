import VueRouter from 'vue-router'
import Login from './components/Login'
import Home from './components/Home'
import Register from './components/Register'
// 1. import routes
// These can be imported from other files
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
    { path: '/home', component: Home, },
    { path: '/login', component: Login },
    { path: '/register', component: Register }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export default new VueRouter({
  routes // short for `routes: routes`
})
