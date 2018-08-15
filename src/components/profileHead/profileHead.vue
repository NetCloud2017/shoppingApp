<template>
    <div>
      <header class="profileHead" v-if="$route.fullPath==='/profile' || $route.fullPath==='/textile'" >
        <i @click="$router.replace('/home')"
           class="homeIcon">
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png" alt="">
        </i>
        <i @click="$router.replace('/home')"
           class="textIcon">
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png" alt="">
        </i>
        <i @click="$router.push('/search')"
           class=" searchIcon ">
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png" alt="">
        </i>
        <i @click="$router.replace('/shopcart')"
           class="shopcartIcon">
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png" alt="">
        </i>
      </header>
      <header v-if="$route.path==='/home'" class="homeHeader">
        <i>
          <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png" alt="">
        </i>
        <div>
         <i>
           <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png" alt="">
         </i>
         <span> 搜索商品</span>
        </div>
      </header>
      <header v-if="$route.path==='/kinds'" class="kindsHeader">
        <div>
          <i>
            <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s342878591a-9af1a97852.png" alt="">
          </i>
          <span>搜索商品</span>
        </div>
      </header>
      <header v-if="$route.path==='/shopcart'" class="shopcartHead">
        <h3>购物车</h3>
        <span @click="$router.replace('/login')" class="ticket">领劵</span>
      </header>
    </div>
</template>

<script>
  export default {
    name: "profile-head",
    data(){
      return {
        show:false
      }
    },
  }
</script>

<style scoped lang="stylus" rel="stylesheeet/stylus">
  .shopcartHead
  .homeHeader
  .kindsHeader
  .profileHead
    position fixed
    top 0
    left 0
    width 7.1rem
    height .87rem
    background #fff
    line-height .87rem
    font-size 0
    padding 0 .16rem 0 .24rem
    border-bottom .01rem solid #f4f4f4
    z-index 999
    display flex
    align-items center
    >i
      height .44rem
      display inline-block
      overflow hidden
      position relative
      img
        position absolute
        transform translate(-.85rem , -2.76rem) scale(0.5)

  .profileHead
    i:nth-child(1)
      width  .48rem
      height .44rem
    i:nth-child(2)
      width  5.09rem
      img
        transform translate(1.4rem , -3.3rem) scale(0.5)
    i:nth-child(3)
      width 10%
      img
        transform translate(-.85rem , -5.4rem) scale(0.5)
    i:nth-child(4)
      width  10%
      img
        transform translate(-.85rem , -2.1rem) scale(0.5)
  .homeHeader
    padding .16rem .2rem
    height .56rem
    border none
    > i
      width 1.65rem
      margin-right .3rem
      img
       transform translate(-.85rem , -3.3rem) scale(0.5)
    div
      width 5rem
      display flex
      flex-flow row nowrap
      align-items center
      justify-content center
      background rgba(0,0,0,0.2)
      height .5rem
      border-radius .03rem
      i
        width .5rem
        height .5rem
        display inline-block
        overflow hidden
        position relative
        img
          transform translate(-1.06rem , -5.05rem) scale(0.4)
      span
        height .5rem
        font-size .3rem
        line-height .5rem
        color #333
  .kindsHeader
    padding 0 .3rem
    width 6.9rem
    div
      width 6.9rem
      display flex
      flex-flow row nowrap
      align-items center
      justify-content center
      background rgba(0,0,0,0.2)
      height .5rem
      border-radius .03rem
      i
        width .5rem
        height .5rem
        display inline-block
        overflow hidden
        position relative
        img
          transform translate(-1.06rem , -5.05rem) scale(0.4)
      span
        height .5rem
        font-size .3rem
        line-height .5rem
        color #333

  .shopcartHead
    width 6.9rem
    padding 0 .3rem
    line-height .88rem
    text-align center
    font-size .38rem
    justify-content space-between
    h3
      position relative
      left 2.9rem
    .ticket
      font-size .3rem
      color #b4282d


</style>
