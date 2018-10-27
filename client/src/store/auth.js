// import {auth} from 'firebase'
// import mockUsers from '../mock/users'
// const initialState = {
//   authenticating: false,
//   error: false,
//   user: null,
//   users: {}
// };

// const getters = {
//   isAuthenticated: state => !!state.user,
//   getUser: state => state.user,
//   getUsers: state => state.users
// };

// const actions = {
//   initilaizeMockUsers({commit}) {
//     commit('setMockUsers', {...mockUsers})
//   },
//   login({ commit, state }, { email, password }) {
//     console.log(getters)
//     console.log(state.users)
//     // return
//     console.log(users)
//     let foundUser = null
//     users.forEach(user => {
//       if (user.email === email && user.password === password) {
//         foundUser = user
//       }
//     });
//     commit('setUser', foundUser)
//     // console.log(email, password)
//     // auth().signInWithEmailAndPassword(email, password).catch()
//     await auth().signInWithEmailAndPassword(email, password).catch(function(error) {
//       // Handle Errors here.
//       var errorCode = error.code;
//       console.log(errorCode)
//       var errorMessage = error.message;
//       console.log(errorMessage)
//       // ...
//       throw error
//     });
//     // commit('setUser', auth().currentUser)
//     try {
//       let user = await auth().signInWithEmailAndPassword(email, password)
//       auth().currentUser
//       commit('setUser', auth().currentUser)
//     } catch (error) {
//       console.log('error happened while loggin in')
//       console.log(error)
//       throw error
//     }
//   },
//   register({ commit }, {email, password, type }) {
//     commit('addUser')
//   },
//   async logout({ commit }) {
//    commit('setUser', null)
//   },
//   logout({ commit }) {
//     return auth.logout()
//       .then(() => commit(LOGOUT))
//       .finally(() => commit(REMOVE_TOKEN));
//   },
// };

// const mutations = {
//   ['setUser'](state, user) {
//     state.user = user;
//   },
//   ['setMockUsers'](state, users) {
//     state.users = users;
//   },
// };

// export default {
//   namespaced: true,
//   state: initialState,
//   getters,
//   actions,
//   mutations,
// };
