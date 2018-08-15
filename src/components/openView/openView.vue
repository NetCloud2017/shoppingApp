<template>
  <div class="g-bd">
    <div class="g-row">
      <img src="//yanxuan.nosdn.127.net/53df1ead033706dcd7da9a91c8977b83.jpg">
      <img src="//yanxuan.nosdn.127.net/143424244e87fb8eed45c6984c769a63.jpg">
    </div>
    <div class="g-row">
      <img src="//yanxuan.nosdn.127.net/06a2d444a39e1dfe621b7f0d317de7b4.jpg">
      <div class="download-app"></div>
    </div>
    <router-link to="/home" class="linkTo">继续使用触屏版浏览 ></router-link>
  </div>
</template>

<script>
    export default {
        name: "open-view"
    }
</script>

<style scoped lang="stylus" rel="stylesheeet/stylus">
  .g-bd
    font-size 0
    position relative
  .linkTo
    font-size 14px
    text-align center
    position absolute
    color white
    right 32%
    bottom 1.7rem
    z-index 99
  img
   width 7.5rem
</style>
