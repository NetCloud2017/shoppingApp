<template>
  <div class="shopcart">
    <profil-head/>
    <div class="content">
      <div class="discount">
        <div>30天无忧退货</div>
        <div>48小时快递退款</div>
        <div>满88元免邮费</div>
      </div>
      <div class="backImg">
        <div class="bg-icon"></div>
        <span>去添加点什么吧</span>
        <div @click='$router.replace("/login")' class="login">登录</div>
      </div>

    </div>

  </div>
</template>
<script>
  import ProfilHead from '../../components/profileHead/profileHead'
  export default {
    name: "shop-cart",
    components:{
      ProfilHead
    }

  }
</script>

<style scoped lang="stylus" rel="stylesheeet/stylus">

  .content
    background #f4f4f4
    height 12rem
    position relative
    .discount
      justify-content space-around
      font-size .25rem
      padding-top .3rem
      display flex
    .backImg
      position absolute
      top 40%
      left 35%
      color #333
      .bg-icon
        width 2rem
        height 2rem
        background url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png')
        background-size 2rem 2rem
      .login
        width 4.5rem
        height 1rem
        color #fff
        margin-top 25px
        text-align center
        line-height 1rem
        background #b4282d
        position absolute
        left - 55%

</style>
