<template>
  <div>
    검색창임
    <input 
      type="text" 
      v-model="searchTitle"
      @keyup.enter="getVideoList"
    >
    <button 
      class="btn btn-danger"
      @click="getVideoList"
    >
      검색
    </button>
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
        maxResults: 5,
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