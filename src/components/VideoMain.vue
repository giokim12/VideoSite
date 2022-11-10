<template>
  <div class="border border-warning m-3">
    <h1>VIDEO MAIN</h1>
    <iframe
      v-if="videoMain"
      id='player'
      type='text/html'
      width='100%'
      height='640'
      :src="'http://www.youtube.com/embed/'+videoMain.id.videoId"
      frameBorder='0'
    />
    <!-- {{ videoMain }} -->
  </div>
</template>

<script>

export default {
  name: 'VideoMain',
  computed: {
    videoMain() {
      console.log(this.$store.getters.mainVideo)
      return this.$store.getters.mainVideo
    }
  }
}
</script>

<style>

</style>