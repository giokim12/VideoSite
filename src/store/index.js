import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    videoList: [],
    videoMain: [],
    searchTitle: null,
  },
  getters: {
    mainVideo(state) {
      return state.videoList[0];
    },
  },
  mutations: {
    VIDEO_PUSH(state, videoItem) {
      state.videoList = videoItem;
      return state;
    },
    SEARCH_TITLE_METHOD(state, searchItem) {
      state.searchTitle = searchItem;
      console.log(searchItem);
      return searchItem;
    },
  },
  actions: {
    videoPush(context, response) {
      context.commit("VIDEO_PUSH", response);
    },
    searchTitleMethod(context, searchTitle) {
      context.commit("SEARCH_TITLE_METHOD", searchTitle);
    },
  },
  modules: {},
});
