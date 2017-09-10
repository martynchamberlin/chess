import Vue from 'vue';
import Vuex from 'vuex';

import games from './games/games.store/index';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    games,
  },
  strict: process.env.NODE_ENV !== 'production',
});

export default store;
