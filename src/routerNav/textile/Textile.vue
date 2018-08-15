<template>
  <div class="textileCan">
    <profile-head/>
    <section>
      <div class="swiper">
        <div class="swiper-container" v-if="textile.banner">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in textile.banner" :key="index">
              <img :src="item.picUrl">
            </div>
          </div>
        </div>
      </div>
      <div class="clothings">
        <ul class="clothList" ref="clothList">
          <li class="listCan" v-for="(item ,index ) in textile.column" :key="index">
            <img :src="item.picUrl" alt="">
            <span>{{item.title}}</span>
          </li>
        </ul>
      </div>
    </section>
    <section class="commend" v-if="textile.recommendOne">
      <header>
        <h3>为你推荐</h3>
      </header>
      <article class="article">
        <div class='comPic'>
          <img  :src="textile.recommendTwo.picUrl" alt="">
          <div>
            <div class="picTitle">
              <span>
                {{textile.recommendThree.nickname}}
              </span>
              <span>
                {{textile.recommendThree.title}}
              </span>
            </div>
            <span>{{ textile.recommendThree.subTitle}} </span>
          </div>
        </div>
        <div class="comTwo">
          <div class="text">
            <div  class="author">
              <img :src="textile.recommendTwo.avatar"/>
              <span>{{textile.recommendTwo.title}}</span>
            </div>
            <div class="title">
              {{textile.recommendTwo.title}}
            </div>
            <span>
             {{ textile.recommendThree.subTitle}}
            </span>
          </div>
          <div class="pic">
            <img :src="textile.recommendTwo.picUrl" alt="">
          </div>
        </div>
        <div class="comTwo">
          <div class="text">
            <div  class="author">
              <img :src="textile.recommendTwo.avatar"/>
              <span> {{textile.recommendTwo.title}} </span>
            </div>
            <div class="title">
              {{textile.recommendTwo.title}}
            </div>
            <span>
             {{ textile.recommendThree.subTitle}}
            </span>
          </div>
          <div class="pic">
            <img :src="textile.recommendTwo.picUrl" alt="">
          </div>
        </div>
      </article>
      <article class="article">
        <div class='comPic'>
          <img  :src="textile.recommendTwo.picUrl" alt="">
          <div>
            <div class="picTitle">
              <span>
                {{textile.recommendThree.nickname}}
              </span>
              <span>
                {{textile.recommendThree.title}}
              </span>
            </div>
            <span>{{ textile.recommendThree.subTitle}} </span>
          </div>
        </div>
        <div class="comTwo">
          <div class="text">
            <div  class="author">
              <img :src="textile.recommendTwo.avatar"/>
              <span>{{textile.recommendTwo.title}}</span>
            </div>
            <div class="title">
              {{textile.recommendTwo.title}}
            </div>
            <span>
             {{ textile.recommendThree.subTitle}}
            </span>
          </div>
          <div class="pic">
            <img :src="textile.recommendTwo.picUrl" alt="">
          </div>
        </div>
        <div class="comTwo">
          <div class="text">
            <div  class="author">
              <img :src="textile.recommendTwo.avatar"/>
              <span> {{textile.recommendTwo.title}} </span>
            </div>
            <div class="title">
              {{textile.recommendTwo.title}}
            </div>
            <span>
             {{ textile.recommendThree.subTitle}}
            </span>
          </div>
          <div class="pic">
            <img :src="textile.recommendTwo.picUrl" alt="">
          </div>
        </div>
      </article>
    </section>
    <section class="tenC">
      <header>
        <h3>十点一刻</h3>
      </header>
      <div class="topicCan">
        <div class="topicAll" ref="topic">
          <div class="topic">
            <h3 class="title">-- 今天话题 --</h3>
            <div>你有那些租房经历</div>
            <div>聊聊你用过的租房神器</div>
            <div>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
              <span>人参与话题</span>
            </div>
          </div>
          <div class="more">
            <div >查看全部话题 <i class="iconfont icon-yuanjiantou1"></i></div>
          </div>
        </div>
      </div>

    </section>
    <section class="select" v-if="textile.recommendOne">
      <header>
        <h3>为你推荐</h3>
      </header>
      <article class="article">
        <div class='comPic'>
          <img  :src="textile.recommendTwo.picUrl" alt="">
          <div>
            <span>{{ textile.recommendThree.subTitle}} </span>
          </div>
        </div>
        <div class="comTwo">
          <div class="text">
            <div class="title">
              {{textile.recommendTwo.title}}
            </div>
          </div>
          <div class="pic">
            <img :src="textile.recommendTwo.picUrl" alt="">
          </div>
        </div>
        <div class="comTwo">
          <div class="text">
            <div class="title">
              {{textile.recommendTwo.title}}
            </div>
          </div>
          <div class="pic">
            <img :src="textile.recommendTwo.picUrl" alt="">
          </div>
        </div>
      </article>
    </section>
    <section class="moreTextile">
      <header>
        <div></div>
        <div>更多精彩</div>
        <div></div>
      </header>
      <div class="textileCan">
        <ul>
          <li class="textileItem"  v-for="(item,index) in  textile.findMore" :key="index">
            <img :src="item.itemPicUrl" alt="">
            <div class="brief">{{item.subTitle}}</div>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'
  import ProfileHead from '../../components/profileHead/profileHead'
  export default {
    name: "textile",
    components:{
      ProfileHead
    },
    data (){
      return {

      }
    },
    mounted (){
      this.$store.dispatch('getTextile')
      this.initScroll()
    },
    computed:{
      ...mapState(['textile'])
    },
    methods:{
      initScroll(){
        this.computedWidthAndScroll('clothList',50,'.clothings')
        this.computedWidthAndScroll('topic',30,'.topicCan')

      },
      computedWidthAndScroll(refEle,split,watchEle){
        const ul=this.$refs[refEle]
        const childs=ul.children
        let w =0
        for(let i= 0 ;i< childs.length;i++){
          w+=childs[i].clientWidth
        }
        const spli=  split *(childs.length-1)
        ul.style.width= w + spli + 'px'
        new BScroll( watchEle,{
          click:true,
          scrollX: true
        })
      },
    },
    watch:{
      textile(){
        this.$nextTick(()=>{
          this.initScroll()
           new Swiper('.swiper-container', {
             loop: true,
             spaceBetween: 12,
             //加这些配置后再加上 img的   width: 100%;position: relative;
             //才可以两翼留白 和 带左右两边的图片的边
             slidesPerView: 1.13,
             centeredSlides: true,
             onInit: function (swiper) {
               swiper.slides[1].className = 'swiper-slide swiper-slide-active'
             },
             autoplay: {
               autoplay:true,
               delay: 3000
             },
           })
        })
      }
    }

  }
</script>

<style scoped lang="stylus" rel="stylesheeet/stylus">
  .textileCan
    width 7.5rem
    overflow hidden
    background #f4f4f4
   .swiper
     margin-bottom .5rem
     .swiper-slide
       img
          width: 100%;
          position: relative;
          /*width 6.7rem*/
          /*height 3.85rem*/
   .clothings
     width 7.5rem
     overflow hidden
     .clothList
       display flex
       flex-flow row nowrap
      .listCan
        margin-left .3rem
        display flex
        flex-flow column nowrap
        align-items center
        img
          width 1.64rem
          margin-bottom .3rem
          height 1.64rem
        span
          display inline-block
          width 1.64rem
          text-align center
          white-space nowrap
          text-overflow ellipsis
          overflow hidden



   .commend
     background #fff
     width 7.1rem
     padding 0 .2rem .5rem
     header
       height 1.1rem
       text-align center
       line-height 1.1rem
     .article
        .comPic
          border .01rem solid #f4f4f4
          height 5.74rem
          img
            width 100%
            height 3.86rem
          .picTitle
            margin .05rem 0
            display flex
            flex-flow column nowrap
            color #000
            span
              width 3rem
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
              display inline-block
              height .5rem
            span:nth-child(1)
              hieght .5rem
              margin-bottom .1rem
              font-size .4rem
          span
            width 5rem
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
            display inline-block
            height .3rem



            /*span*/
              /*color #eef*/
              /*white-space nowrap*/
              /*overflow hidden*/
              /*text-overflow ellipsis*/
        .comTwo
          display flex
          border .01rem solid #f4f4f4
          flex-flow row nowrap
          align-items center
          margin .3rem 0
          .text
            width 3.58rem
            padding .6rem .3rem 0 .2rem
            height 2.72rem
            overflow hidden
            .author
              font-size .2rem
              color #333
              display flex
              flex-flow row nowrap
              align-items center
              img
                width .6rem
                height .6rem
                border-radius 50%
              span
                margin-bottom -0.1rem
                margin-left .4rem
            .title
              font-size .3.5rem
              margin .3rem

             span
               display inline-block
               width 3.5rem
               height .4rem
               color  #7f7f7f
               white-space nowrap
               overflow hidden
               text-overflow ellipsis
          .pic
            img
              width 2.8rem
              height 2.72rem

   .tenC
     background #fff
     width 6.9rem
     height 5.3rem
     padding 0 .3rem .4rem
     header
      height 1.1rem
      text-align center
      line-height 1.1rem
      font-size .32rem
      color #333
     .topicAll
      display flex
      flex-flow row nowrap
      text-align center
      .topic
        flex  none
        padding .38rem .4rem .79rem
        width 5rem
        height 2.94rem
        display flex
        flex-flow column nowrap
        text-align center
        background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/tenFifteen-2a1d0ea11b.png") no-repeat
        background-size 100% 100%
        margin-right .3rem
        .title
          font-size .3rem
          color #333
        div
          margin .3rem 0
        div:nth-of-type(1)
          font-size .4rem
          font-weight bold
      .more
          border .1rem  solid #e6e6e6
          flex  none
          padding .38rem .4rem .79rem
          width 5rem
          height 2.5rem
          display flex
          flex-flow column nowrap
          text-align center
          line-height 2.5rem

  .select
    background #fff
    width 7.1rem
    padding 0 .2rem .5rem
    header
      height 1.1rem
      text-align center
      line-height 1.1rem
    .article
      .comPic
        border .01rem solid #f4f4f4
        height 5.74rem
        img
          width 100%
          height 3.86rem
        div
          margin-top .6rem
          font-size .4rem
          width 5rem
          white-space nowrap
          overflow hidden
          text-overflow ellipsis
          display inline-block
          height .5rem

      .comTwo
        display flex
        border .01rem solid #f4f4f4
        flex-flow row nowrap
        align-items center
        margin .3rem 0
        .text
          width 3.58rem

          height 2.5rem
          overflow hidden
          display flex
          flex-flow row nowrap
          align-items center
          .title
            font-size .3.5rem
            margin .3rem
        .pic
          img
            width 2.8rem
            height 2.5rem
  .moreTextile
    width 7.1rem
    padding 0 .2rem .5rem
    margin-top .5rem
    header
      display flex
      flex-flow row column
      align-items center
      justify-content space-between
      div:nth-child(odd)
          border 0.01rem solid #333
          width 2.5rem
    .textileCan
        .textileItem
          padding .24rem
          width 6.42rem
          height 4.5rem
          background #fff
          margin-bottom .4rem
          img
            width 6.42rem
            height 3.6rem
          div
            padding .28rem 0
            font-size .3rem


</style>
