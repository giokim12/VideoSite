<template>
  <div class="border border-danger m-3">
    <h1>VIDEO LIST</h1>
    <VideoListItem
      v-for="(video, idx) in videoList"
      :key="idx"
      :video="video"
    />
  </div>
</template>

<script>
import VideoListItem from '@/components/VideoListItem'

export default {
    name: 'VideoList',
    components: {
      VideoListItem,
    },
    methods: {
      // getVideoList() {
      //   let URL = `https://www.googleapis.com/youtube/v3/search`
      //   const API_KEY = 'AIzaSyBmdy_t2Hfynr5ptIqHKFYe3OApPn6ID6c'
      //   let params = {
      //     key: API_KEY,
      //     type: 'video',
      //     part: 'snippet',
      //     q: this.$store.state.searchTitle,
      //     maxResults: 5,
      //   }
      //   axios.get(URL, { params })
      //     .then((response) => {
      //       console.log(response.data.items)
      //       this.$store.dispatch('videoPush', response.data.items)
      //     })
      //     .catch((error) => {
      //       console.log(error)
      //     })
      // }
    },
    computed: {
      videoList() {
        // console.log(this.$store.state.videoList)
        return this.$store.state.videoList
      },
      searchTitle() {
        return this.$store.state.searchTitle
      }
    }
}
</script>

<style>

</style>