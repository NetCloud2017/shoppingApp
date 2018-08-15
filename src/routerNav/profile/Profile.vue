<template>
  <div class="profileCan">
    <profile-head/>
    <section>
      <div class="profile-pic">
        <img src="//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png" alt="">
      </div>
      <div class="buttons">
        <div>
          <i class="shoujiIcon"></i>
          <span>手机号码登录</span>
        </div>
        <div>
          <i class="emailIcon"></i>
          <span>邮箱账号登录</span>
        </div>
        <div>
          <span>手机号快捷注册> <i class="jiantou"></i></span>
        </div>
      </div>
    </section>
    <footer>
      <span><i> &nbsp;</i>微信</span>|
      <span><i>&nbsp; </i>QQ</span>|
      <span><i> &nbsp;</i>微博</span>
    </footer>
  </div>
</template>

<script>
  import EmailLogin from '../login/EmailLogin'
  import PhoneLogin from '../login/PhoneLogin'
  import Register from '../login/Register'
  import ProfileHead from '../../components/profileHead/profileHead'
  export default {
    components: {ProfileHead},
    name: "profile",
    components:{
      ProfileHead,
      EmailLogin,
      PhoneLogin,
      Register,
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheeet/stylus">
  .profileCan
    background #F2F5F4
    height 12.46rem
  .profile-pic
    padding 1.6rem
    text-align center
    img
     height  .45rem
     transform translateY(0.1rem) scale(2)

  .buttons
    display flex
    flex-flow column nowrap
    align-items center
    padding 0 .4rem
    div
      width 6.7rem
      text-align center
      font-size .3rem
      margin-top .5rem
    div:nth-child(1)
      border 1px solid #b4282d
      height .92rem
      background #b4282d
      line-height .92rem
      i
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png)
    div:nth-child(2)
      border 1px solid #b4282d
      height .92rem
      line-height .92rem
  footer
    position absolute
    /*这里的脱离的文档流就没有宽度了*/
    text-align center
    bottom 1rem
    width 100%
    span
      font-size .3rem
      display inline-block
      padding 0 20px

</style>
