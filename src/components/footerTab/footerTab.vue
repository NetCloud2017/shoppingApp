<template>
    <div>

      <!--在无网络的情况下点击不了，并且报错 Unable to preventDefault inside passive event listener due to target being treated as passive-->
      <footer class="footer_guide border-1px">
        <!--这里拿路由用了 this.$route.path 报错导致下面的样式会不起效 ，应用$route.path 就可以拿到-->
        <a href="javascript:;" class="guide_item" v-for="(item ,index) in navList" :key="index " :class="{on:$route.path=== item.path}" @click="goTo( item.path)">
          <span class="item_icon">
            <i class="iconfont" :class="item.fonts"></i>
          </span>
          <span>{{item.title}}</span>
        </a>
      </footer>
    </div>
</template>

<script>
  export default {
    name: "footer-tab",
    data(){
      return{
        navList:[
          { title: '首页', path: '/home', fonts:'icon-shouye' },
          { title: '识物', path: '/textile' , fonts:'icon-fangkuaidagou-weixuanzhong'},
          { title: '分类', path: '/kinds' , fonts:'icon-chouti'},
          { title: '购物车', path: '/shopcart',fonts:'icon-gouwuche'},
          { title: '个人', path: '/profile', fonts:'icon-renwu' }
        ]
      }
    },
    methods:{
      goTo (path){
        this.$router.replace(path)
      },
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheeet/stylus">
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height  1rem
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #b4282d
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
