import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    videoList: [],
    videoMain: null,
    searchTitle: null,
  },
  getters: {
    mainVideo(state) {
      return state.videoMain;
    },
  },
  mutations: {
    VIDEO_PUSH(state, videoItem) {
      state.videoList = videoItem;
      state.videoMain = videoItem[0];
      return state;
    },
    SEARCH_TITLE_METHOD(state, searchItem) {
      state.searchTitle = searchItem;
      // console.log(searchItem);
      return searchItem;
    },
    CHANGE_MAIN(state, changeMain) {
      console.log(state.videoMain[0]);
      state.videoMain = changeMain;
      console.log(state.videoMain[0]);
      return state;
    },
  },
  actions: {
    videoPush(context, response) {
      context.commit("VIDEO_PUSH", response);
    },
    searchTitleMethod(context, searchTitle) {
      context.commit("SEARCH_TITLE_METHOD", searchTitle);
    },
    changeMain(context, changeMain) {
      context.commit("CHANGE_MAIN", changeMain);
    },
  },
  modules: {},
});
