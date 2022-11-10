<template>
  <div 
    class="border m-3"
    @click="changeMain"
  >
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
  },
  methods: {
    changeMain() {
      console.log(this.video)
      this.$store.dispatch('changeMain', this.video)
    }
  },

}
</script>

<style>

</style>