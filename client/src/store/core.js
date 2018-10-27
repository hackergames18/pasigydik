import categories from '../mock/categories'
import mockUsers from '../mock/users'

const state = {
  categories: [],
  doctors: {},
  users: {},
  user: null
};

const getters = {
  getDoctors: state => state.doctors,
  getCategories: state => state.categories,
  getUser: state => state.user,
  getUsers: state => state.users
};

const actions = {
  initilaizeMockUsers({commit}) {
    commit('setMockUsers', mockUsers)
  },
  initializeCategories({ commit }) {
    commit('setCategories', categories)
  },
  async register({ commit }, {email, password, type }) {
  },
  async login({ commit, getters }, { email, password }) {
    console.log(getters)
    console.log(getters.getUser())
    return
    console.log(users)
    let foundUser = null
    users.forEach(user => {
      if (user.email === email && user.password === password) {
        foundUser = user
      }
    });
  }
};

const mutations = {
  ['setCategories'](state, categories) {
    state.categories = categories;
  },
  ['setUser'](state, user) {
    state.user = user;
  },
  ['setMockUsers'](state, users) {
    state.users = users;
  },
};

export default {
  namespaced: false,
  state,
  getters,
  actions,
  mutations,
};
