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
      return state.videoMain[0];
    },
  },
  mutations: {
    VIDEO_PUSH(state, videoItem) {
      state.videoList = videoItem;
      state.videoMain = videoItem;
      return state;
    },
    SEARCH_TITLE_METHOD(state, searchItem) {
      state.searchTitle = searchItem;
      // console.log(searchItem);
      return searchItem;
    },
    CHANGE_MAIN(state, changeMain) {
      console.log(state.videoMain)
      state.videoMain = changeMain.snippet;
      console.log(state.videoMain)
      return changeMain;
    }
  },
  actions: {
    videoPush(context, response) {
      context.commit("VIDEO_PUSH", response);
    },
    searchTitleMethod(context, searchTitle) {
      context.commit("SEARCH_TITLE_METHOD", searchTitle);
    },
    changeMain(context, changeMain) {
      context.commit("CHANGE_MAIN", changeMain)
    }
  },
  modules: {},
});
