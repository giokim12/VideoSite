<template>
  <div class=" m-3">
    <div>
      <div class="d-flex justify-content-center m-3 searchbar">
        <img class="mr-3 gios-face" alt="Vue logo" src="./assets/jiofeelsogood.gif" width="40" height="60">
        <h1>VueTube</h1>
      </div>
      <div>
        <SearchBar class="d-flex justify-content-center col-lg-8"/>
      </div>
      <div class="row m-3">
        <VideoMain class="col-lg-8"/>
        <VideoList class="col-lg-3"/>
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
