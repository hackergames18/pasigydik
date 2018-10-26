import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from 'vuex/dist/logger';

import auth from './auth';
// import core from './core';
// import requests from './requests';
// import password from './password';
// import signup from './signup';
// import contracts from './contracts';
// import responses from './responses';

const debug = process.env.NODE_ENV !== 'production';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    // core,
    auth,
    // requests,
    // // password,
    // signup,
    // contracts,
    // responses
  },
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
