<template>
  <div 
    class = "mb-3 overflow-hidden recommended-videos"
    @click="changeMain"
  >
    <img :src="video.snippet.thumbnails.default.url" alt="" class="rounded">
    <div>
      <div class="font-weight-bold ml-2">
        {{ video.snippet.title }}
      </div>
      
      <br>
      <div class ="d-flex ml-2" >
      채널명:   
        <div class="font-weight-light">
          {{ video.snippet.channelTitle }}
        <!-- {{ video.snippet.channelTitle }} -->
        </div>
      </div>
    </div>
    
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
      // console.log(this.video)
      this.$store.dispatch('changeMain', this.video)
    }
  },

}
</script>

<style>
.recommended-videos {
  display:-webkit-box; 
  word-wrap:break-word; 
  -webkit-line-clamp:1; 
  /* -webkit-box-orient:vertical;  */
  overflow:hidden; 
  text-overflow:ellipsis;
}
</style>