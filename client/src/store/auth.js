import {auth} from 'firebase'

const initialState = {
  authenticating: false,
  error: false,
  user: null
};

const getters = {
  isAuthenticated: state => !!state.user,
  getUser: state => state.user
};

const actions = {
  async login({ commit }, { email, password }) {
    try {
      await auth().signInWithEmailAndPassword(email, password)
      const user = await auth().currentUser
      commit('setUser', user)
    } catch (error) {
      console.log('error happened while loggin in')
      console.log(error)
      throw error
    }
  },
  async register({ commit }, {email, password, type }) {
    try {
      await auth().createUserWithEmailAndPassword(email, password)
      commit('setUser', auth().currentUser)
    } catch (error) {
      console.log('error registering')
      console.log(error)
      throw error
    }
  },
  async logout({ commit }) {
    try {
      await auth().signOut()
      commit('setUser', null)
    } catch (error) {

    }
  },
  logout({ commit }) {
    return auth.logout()
      .then(() => commit(LOGOUT))
      .finally(() => commit(REMOVE_TOKEN));
  },
  initialize({ commit }) {
    const token = localStorage.getItem(TOKEN_STORAGE_KEY);

    if (token) {
      commit(SET_TOKEN, token);
    } else {
      commit(REMOVE_TOKEN);
    }
  },
  async loadUser({ commit, state }) {
    if (state.user) {
      return state.user
    }
    const { data } = await auth.getAccountDetails()
    commit('SET_USER', data)
  }
};

const mutations = {
  ['setUser'](state, user) {
    state.user = user;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  actions,
  mutations,
};
