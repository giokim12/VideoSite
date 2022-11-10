<template>
  <div>
    <div class="input-group m-3">
      <input 
        v-model="searchTitle"
        @keyup.enter="getVideoList"
        width="1000px"
        type="text" class="form-control" placeholder="Search Video" 
        aria-label="Search Video" aria-describedby="button-addon2"
      >
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="getVideoList" ><b-icon icon="search" font-scale="1.4"></b-icon></button>
      </div>
    </div>
    <!-- <input 
      type="text" 
      v-model="searchTitle"
      @keyup.enter="getVideoList"
      width="1000px"
    > -->
    <!-- <button 
      class="btn btn-danger ml-2"
      @click="getVideoList"
    >
      검색
    </button> -->
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SearchBar',
  data() {
    return {
      searchTitle: null,
    }
  },
  methods: {
    getVideoList() {
      let URL = `https://www.googleapis.com/youtube/v3/search`
      const API_KEY = 'AIzaSyBmdy_t2Hfynr5ptIqHKFYe3OApPn6ID6c'
      let params = {
        key: API_KEY,
        type: 'video',
        part: 'snippet',
        q: this.searchTitle,
        maxResults: 20,
      }
      axios.get(URL, { params })
        .then((response) => {
          // console.log(response.data.items)
          this.$store.dispatch('videoPush', response.data.items)
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // searchTitleMethod() {
    //   // console.log('aaa')
    //   // console.log(this.searchTitle)
    //   this.$store.dispatch('searchTitleMethod', this.searchTitle)
    // }
  }
}
</script>

<style>

</style>