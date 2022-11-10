<template>
  <div class="border m-3">
    <img :src="video.snippet.thumbnails.default.url" alt="">
    {{ video.snippet.title }}
  </div>
</template>

<script>
export default {
  name:'VideoListItem',
  props: {
    video: Object,
  },
  created() {
    console.log(this.video.snippet)
  }
}
</script>

<style>

</style>