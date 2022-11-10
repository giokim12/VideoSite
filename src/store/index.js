import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    videoList: [],
  },
  getters: {},
  mutations: {
    VIDEO_PUSH(state, videoItem) {
      state.videoList = videoItem;
      return state;
    },
  },
  actions: {
    videoPush(context, response) {
      context.commit("VIDEO_PUSH", response);
    },
  },
  modules: {},
});
