import categories from '../mock/categories'
import * as mocks from '../mock/users'
import Vue from 'vue';

const state = {
  categories: {},
  doctors: {},
  users: {},
  user: mocks.mockUsers['firstUseruid']
  // user: null
};

const getters = {
  getDoctors: state => state.doctors,
  getCategories: state => Object.keys(state.categories).map(id => state.categories[id]),
  getUser: state => state.user,
  getUsers: state => Object.keys(state.users).map(id => state.users[id])
};

const actions = {
  initilaizeMockUsers({commit}) {
    const data = mocks.mockUsers
    commit('setMockUsers', {...mocks.mockUsers})
  },
  initializeCategories({ commit }) {
    commit('setCategories', categories)
  },
  async register({ commit }, {email, password, type }) {
  },
  login({ commit, getters }, { email, password }) {
    const users = getters.getUsers
    let foundUser = null
    users.forEach(user => {
      if (user.email === email && user.password === password) {
        foundUser = user
      }
    });
    console.log(foundUser)
    commit('setUser', foundUser)
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
    Vue.set(state, 'users', users)
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
