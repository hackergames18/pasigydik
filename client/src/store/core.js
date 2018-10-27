import categories from '../mock/categories'
import * as mocks from '../mock/users'
import mockDoctors from '../mock/doctors'
import Vue from 'vue';

const state = {
  categories: {},
  doctors: {},
  users: {},
  user: mocks.mockUsers['firstUseruid']
  // user: null
};

const getters = {
  getDoctors: state => Object.keys(state.doctors).map(id => state.doctors[id]),
  getCategories: state => Object.keys(state.categories).map(id => state.categories[id]),
  getUser: state => state.user,
  getUsers: state => Object.keys(state.users).map(id => state.users[id])
};

const actions = {
  initilaizeMockUsers({commit}) {
    const mockUsers = mocks.mockUsers
    commit('setMockUsers', mockUsers)
    commit('setMockDoctors', mockDoctors)
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
  },
  logout({ commit }) {
    commit('setUser', null)
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
  ['setMockDoctors'](state, doctors) {
    state.doctors = doctors
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
