<template>
  <div id="app" >
    <div :class="{home:$route.path==='/home'}">
      <router-view/>
      <footer-nav v-if="$route.meta.isShowFooterGuide "/>
    </div>

  </div>
</template>

<script>
  import FooterNav from './components/footerTab/footerTab'
export default {
  name: 'App',
  components:{
    FooterNav
  }
}
</script>

<style scoped lang="stylus" rel="stylesheeet/stylus">
#app
  padding-top .88rem
.home
  padding-top .5rem
</style>
