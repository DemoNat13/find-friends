import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bitcoinCurr: null,
  },
  getters: {
  },
  mutations: {
    setBitcoinCurr(state, data) {
      state.bitcoinCurr = data;
    },
  },
  actions: {
    callSetBitcoinCurr({ commit }, obj) {
      commit('setBitcoinCurr', obj);
    },
  },
  modules: {
  },
});
