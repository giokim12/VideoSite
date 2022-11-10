<template>
  <div class="border border-success m-3">
    <div>
        <div class="searchbar">
        <img alt="Vue logo" src="./assets/logo.png">
        <h1>VueTube</h1>
        <SearchBar/>
      </div>
      <div class="row">
        <VideoMain class="col-6 col-lg-8"/>
        <VideoList class="col-6 col-lg-3"/>
      </div>
    </div>
  </div>
  
</template>

<script>
import SearchBar from '@/components/SearchBar'
import VideoMain from '@/components/VideoMain'
import VideoList from '@/components/VideoList'

export default {
  name: 'App',
  components: {
    VideoMain,
    VideoList,
    SearchBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
