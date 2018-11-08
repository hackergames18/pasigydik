import categories from '../mock/categories'
import * as mocks from '../mock/users'
import mockDoctors from '../mock/doctors'
import mockAppointments from '../mock/appointments'
import Vue from 'vue'

const state = {
  categories: {},
  doctors: {},
  users: {},
  user: mocks.mockUsers['firstUseruid'],
  // appointments: {}, TODO: uncomment later and add appointments from firestore
  appointments: mockAppointments,
  appointment: {}
  // user: null
};

const getters = {
  getDoctors: state => Object.keys(state.doctors).map(id => state.doctors[id]),
  getCategories: state => Object.keys(state.categories).map(id => state.categories[id]),
  getUser: state => state.user,
  getUsers: state => Object.keys(state.users).map(id => state.users[id]),
  getAppointments: state => Object.keys(state.appointments).map(id => {
    console.log(state.user.id)
    if (state.appointments[id].patientId === state.user.id) {
      return state.appointments[id]
    }
  })
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
  },
  createAnAppointment({ commit }, payload) {
    const {appointmentTime, doctor, payment} = payload
    // Check if doctor doesn't have an appointment registered at that time already

    // Check if payment has been completed successfully (or maybe do it later in the process?)
      // If the appointment already existed with the same user id and same doctor id for that time,
      // update the appointment as paid

    // Add new appointment to the state and to the firestore database

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
