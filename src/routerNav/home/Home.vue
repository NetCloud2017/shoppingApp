<template>
  <div class="homeCan">
    <profile-head/>
    <!--better-scroll-->
    <nav >
      <div class='home-nav'>
        <ul class="navList" ref="navList" >
          <!--in这个符号的两边都要空格 否则报错  常常被忽略(Emitted value instead of an instance of Error) -->
          <li v-for="(item,index) in homeData.headCateList" :key="index">
            <span>
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>

    </nav>
    <!--swiper-->
    <div class="scroll-pic">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for=" (i ,index) in  homeData.focusList" :key="index">
            <a href="javascript:" class="link_to_good" >
              <div class="good_container">
                <img :src=" i.picUrl">
              </div>
            </a>
          </div >
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination">
          <!--<span class="my-bullet" :class="{myBulletActive :index === isShow}" v-for="(i,index) in  homeData.focusList" :key="index"></span>-->
        </div>
      </div>
      <div class="g-grow">
        <div class="item" v-for="(item,index) in homeData.policyDescList" :key="index">
          <img v-lazy="item.icon">
          <span>{{item.desc}}</span>
        </div>
      </div>
    </div>
    <section class="directsupply">
      <header>
        <h3>品牌制造商直供<i class="iconfont icon-yuanjiantou1"></i></h3>
      </header>
      <div class="goodlist">
        <div>
          <div>ck制造商</div>
          <div>25元起</div>
          <div>上新</div>
        </div>
        <div>
          <div>Nine West 制造商</div>
          <div>209元起</div>
          <div>上新</div>
        </div>
        <div>
          <div>海外制造商</div>
          <div>9.9元起</div>
          <div>上新</div>
        </div>
        <div>
          <div>Ralph Lauren制造商</div>
          <div>19元起</div>
        </div>
      </div>
    </section>
    <section class="firstOn">
      <header>
        <h2>新品首发</h2>
        <div class="lookForAll"><a href="#">查看全部> </a></div>
      </header>
      <div class="firstOnList">
        <ul class="onesCan" ref="firstList">
          <li class="oneOnList" v-for="(item , index) in homeData.newItemList" :key="index">
            <div class="onePic">
              <img v-lazy="item.primaryPicUrl" alt="">
            </div>
            <div class="oneText">
              <div class="bgMark">
                <span>new</span>
              </div>
              <div class="goodTitle">{{item.name}}</div>
              <div class="commend">{{item.simpleDesc}}</div>
              <div class="price">{{item.retailPrice}}￥</div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="hotGoods">
      <header>
        <h2>人气推荐▪好物精选</h2>
        <div class="lookForAll"><a href="#">查看全部> </a></div>
      </header>
      <div class="firstOnList hotOnList">
        <ul class="onesCan" ref="hotList">
          <li class="oneOnList" v-for="(item,index) in homeData.topicList" :key="index">
            <div class="onePic">
              <img v-lazy="item.itemPicUrl" alt="">
            </div>
            <div class="oneText">
              <div class="bgMark">
                <span></span>
              </div>
              <div class="goodTitle">{{item.title}}</div>
              <div class="commend">{{item.priceInfo}}元起</div>
              <div class="price">{{item.subtitle}}</div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <section class="timeShop">
      <div class="dowmTime">
        <h3>严选限时购</h3>
        <div class="timeTo">
          <span>{{time.hour}}</span>
          <span><span>:</span></span>
          <span>{{time.min}}</span>
          <span><span>:</span></span>
          <span>{{time.sec}}</span>
        </div>
        <div>下一场18:00开始</div>
      </div>
      <div class="timePro">
        <div>
          <span>￥888</span>
          <span>￥888</span>
        </div>
      </div>
    </section>
    <section class="welfare">
      <div>

      </div>
    </section>
    <section class="profTitle">
      <header>
        <h3>专题精选 <i class="iconfont icon-yuanjiantou1"></i></h3>
      </header>
      <div class="profScroll">
        <div ref="picText" class="picText">
          <div class="picOne" v-for="(item,index) in homeData.topicList" :key="index">
            <img v-lazy="item.itemPicUrl" alt="">
            <div>
              <div>
                <span>{{item.title}}</span>
                <span class="profPrice">{{item.priceInfo}}元起</span>
              </div>
              <span>{{item.subtitle}}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="allGoods">
      <section class="goodThings" v-for="(item, index) in homeData.cateList" :key="index" >
        <header>
          <h3>{{item.name}}好物<i class="iconfont icon-yuanjiantou1"></i> </h3>
        </header>
        <div class="goods">
          <ul class="goodsCan">
            <li class="goodOne" v-for="(itemGoodGrid, indexGoodGrid) in item.itemList" :key="indexGoodGrid">
              <div class="onePic">
                <span class="goodColor"></span>
                <img :src="itemGoodGrid.listPicUrl" alt="">
                <span class="picAlt"></span>
              </div>
              <div class="oneText">
                <div class="bgMark">
                  <span></span>
                </div>
                <div class="goodTitle">{{itemGoodGrid.simpleDesc}}</div>
                <div class="commend">{{itemGoodGrid.name}} </div>
                <div class="price">{{itemGoodGrid.couponPrice}}￥ </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
    <span class="swiper-pagination-custom swiper-pagination-customs-active"></span>
  </div>

</template>
<script>
  import Swiper from 'swiper'
  import 'swiper/dist/css/swiper.min.css'
  import ProfileHead from '../../components/profileHead/profileHead'
  import BScroll  from 'better-scroll'
  import {mapState} from 'vuex'
  export default {
    name: "home",
    data (){
      return {
        time:{},
        isShow:0
      }
    },
    computed:{
      ...mapState(['homeData'])
    },
    mounted (){
      this.initScroll()
      this.$store.dispatch('getHome')
      this.countDown()
    },
    methods:{
      //计算宽度
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
      countDown(){
        let d=new Date();
        d.setHours(18)
        d.setMinutes(0)
        d.setSeconds(0)
        let d2;
        let hour;
        let min;
        let sec;
        setInterval(()=> {
          d2=new Date();
          hour=parseInt((d.getTime()-d2.getTime())/1000/3600)
          min=parseInt(((d.getTime()-d2.getTime())/1000/60)-hour*60)
          sec=parseInt(((d.getTime()-d2.getTime())/1000)-hour*3600-min*60)
          if(hour<10){
            hour='0'+hour
          }
          if(min<10){
            min ='0'+min
          }
          if(sec<10){
            sec='0'+sec
          }
          this.time={hour, min ,sec }
        },1000)
      },
      initScroll(){
        // 参数1 计算子元素的父元素的ref名  参数2 间隙  ，参数3 BScroll 的第一个参数
        this.computedWidthAndScroll('navList',32.5,'.home-nav')
        this.computedWidthAndScroll('hotList',32.5,'.firstOnList')
        this.computedWidthAndScroll('firstList',32.5,'.hotOnList')
        this.computedWidthAndScroll('picText',20,'.profScroll')
      }
    },
    watch:{
      homeData(){
        this.$nextTick(()=>{
          this.initScroll()
          // let _this=this
          new Swiper('.swiper-container', {
            loop: true,
            initialSlide :0,
            observer:true,//修改swiper自己或子元素时，自动初始化swiper
            observeParents:true,
            pagination: {
              el: '.swiper-pagination',
              type: 'custom',
              bulletClass : 'my-bullet',
              bulletActiveClass: 'my-bullet-active',
              renderCustom: function (swiper, current, total) {
                // _this.isShow =current
                var customPaginationHtml = "";

                //还是有一点小问题当 一下子啦到最左的时候current 数值不准了
                //   Swiper的分页器是靠mounted()挂载到Vue组件上而不是直接写在template里
                // ，所以在style scoped中写的样式无法作用到分页器的点上。解决办法是把重写的样式写在scoped之外
                for (var i = 0; i < total; i++) {
                  //判断哪个分页器此刻应该被激活
                  if (i === (current - 1)) {
                    customPaginationHtml += '<span class="my-bullet my-bullet-active"></span>';
                  } else {
                    customPaginationHtml += '<span class="my-bullet"></span>';
                  }
                }
                return customPaginationHtml;
              },
            },
            autoplay: {
              autoplay:true,
              delay: 3000
            },
          })
        })
      }
    },
    components:{
      ProfileHead
    }
  }
</script>
<span class="swiper-pagination-bullet"></span>
<style scoped lang="stylus" rel="stylesheeet/stylus">
  @import "../../common/stylus/mixins.styl"
  .homeCan
    background #f4f4f4
    width 7.5rem
    overflow hidden
    .home-nav
      padding 0 .3rem
      overflow hidden
      background #fff
      color #333
      position fixed
      top .88rem
      left 0
      z-index 99
      .navList
        display flex
        flex-flow row nowrap

        li
          border-bottom 1px solid #fff
          span
            white-space nowrap
            font-size  .3rem
            text-align center
            line-height .5rem
        .on
          color  #b4282d
          border-bottom 1px solid  #b4282d
        li:nth-child(n+2)
          margin-left .65rem
          padding 0 .08rem
    .scroll-pic
      width 7.5rem
      height 4rem
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            .good_container
              display block
              width 100%
              text-align center
              padding-bottom 10px
              font-size 0
              img
                display inline-block
                width 100%
                height 100%
        .swiper-pagination
          width 5rem
          height .08rem
          left 50%
          z-index 88
          transform translate(-2.5rem ,0)
          /*.swiper-pagination-custom*/
            /*margin 0 .05rem*/
            /*width .35rem*/
            /*height .04rem*/
            /*background #f4f4f4*/
          /*.swiper-pagination-customs-active*/
            /*background #b4282d*/
      .g-grow{
        display: flex;
        flex-flow row nowrap
        justify-content: space-between;
        align-items: center;
        width: 100%;
        background #fff
        .item{
          width: 33%;
          height: .8rem;
          line-height .8rem
          img{
            width: .3rem;
            vertical-align middle
          }
          span{
            font-size .2rem
            white-space nowrap
            vertical-align middle
          }
        }
      }
    .directsupply
      margin-top 1rem
      background #fff
      padding .1rem .1rem
      clearFix()
      header
        text-align center
        font-size .4rem
        height 1.2rem
        line-height 1.2rem
    .goodlist
      font-size 0
    .goodlist>div
      float left
      width 3.4rem
      height 3rem
      padding .1rem
      font-size .3rem
      &:nth-child(1){
        background: #f4f4f4 url("//yanxuan.nosdn.127.net/bcca932aeb9d818dcf6d3a4804f7311b.png") no-repeat;
        background-size: 100%;
        margin-right .05rem
        margin-bottom .05rem
      }
      &:nth-child(2){
        background: #f4f4f4 url("//yanxuan.nosdn.127.net/dd604acce92e61616a0fa2498cf0fd35.png") no-repeat;
        background-size: 100%;
        margin-bottom .05rem
      }
      &:nth-child(3){
        background: #f4f4f4 url("//yanxuan.nosdn.127.net/f57d460dde6e737f2bacd9f67cb73a41.png") no-repeat;
        background-size: 100%;
        margin-right .05rem
      }
      &:nth-child(4){
        background: #f4f4f4 url("//yanxuan.nosdn.127.net/52aa744559c6fc951e63f98229f36367.png") no-repeat;
        background-size: 100%;

      }
      div
        margin-bottom 10px


    .firstOn,.hotGoods
      margin-top 10px
      background #fff
      header
        background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap-d4f7b37e32.png") no-repeat
        background-size 7.5rem 2.6rem
        height 2.6rem
        text-align center
        color #8BA0B6
        display flex
        flex-flow column nowrap
        justify-content center
        align-items center
        margin-bottom .3rem
        h2
          font-size .4rem
          margin-bottom .3rem
        .lookForAll
          width 2.4rem
          height .56rem
          line-height .56rem
          background #D8E5F1

      .firstOnList
        height 4.6rem
        width 7.5rem
        overflow hidden
        .onesCan
          display flex
          flex-flow row nowrap
          .oneOnList
            margin-left .3rem
            width 2.8rem
          .onePic
            width 2.8rem
            height 2.8rem
            background #f4f4f4
            margin-bottom .05rem
            img
              width 2.8rem
              height 2.8rem
          .oneText
            display flex
            flex-flow column nowrap

            >div
              padding .07rem .15rem
              overflow hidden
              white-space nowrap
              text-overflow ellipsis
            .bgMark
              padding-left .1rem
    .hotGoods
      header
        color  #B4A078
        background url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/bitmap2-d626e0b52a.png") no-repeat
        background-size 7.5rem 2.6rem
        a
          color  #B4A078
    .timeShop
      background #fff
      width 6.54rem
      height 3.2rem
      padding .3rem .4rem .3rem .56rem
      margin-bottom .26rem
      margin-top .26rem
      display flex
      justify-content space-between
      .dowmTime
        display flex
        flex-flow column nowrap
        justify-content center
        h3
          font-size .4rem
          height 1rem
          line-height 1rem
          letter-spacing .2rem
        .timeTo
          margin-bottom .3rem
          >span:nth-child(odd)
            display inline-block
            width .5rem
            height .5rem
            line-height .5rem
            color#fff
            background rgba(0,0,0,0.8)
            text-align center
            font-size  .3rem
          span:nth-child(even)
            font-size  .3rem
            width .15rem
            height  .46rem
            display inline-block
      .timePro
        position relative
        background url("http://yanxuan.nosdn.127.net/2f2c1e633c491d3042b191956939aadf.png") no-repeat
        background-size 2rem 2rem
        div
          width 1rem
          height 1rem
          border-radius .5rem
          background  rgba(244,143,24,.95)
          text-align center
          display flex
          flex-flow column nowrap
          justify-content center
          position absolute
          bottom 0
          right 0
          span
            color #fff
            font-size .2rem
            margin .05rem 0


    .welfare
      width 7.5rem
      height 3rem
      background url("http://yanxuan.nosdn.127.net/a3ea2d1108c94c7dece05eddf95f6df5.jpg") no-repeat
      background-size 7.5rem 3rem
      margin-bottom .5rem
    .profTitle
      background #fff
      height 5.63rem
      margin-bottom .3rem
      header
        height 1.1rem
        text-align center
        line-height 1.1rem
      .picText
        margin 0 .2rem
        height 4.53rem
        padding 0 .3rem .36rem .3rem
        overflow hidden
        display flex
        flex-flow row nowrap
        >div
          width 5.75rem
          height 4.17rem
          flex none
          margin-left .2rem

          img
            width 100%
            heigth 3.22rem
            margin-bottom .1rem
          >div div
            margin .1rem 0
          .profPrice
            float right
            color  #b4282d

    .allGoods
      .goodThings
        background #fff
        margin-bottom .3rem
        header
          height 1.1rem
          text-align center
          line-height 1.1rem
        .goods
          .goodsCan
            font-size 0
            clearFix()
            .goodOne
              padding-left .2rem
              float left
              .onePic
                width 3.45rem
                height 4.14rem
                position relative
                text-align center
                background #f4f4f4
                .goodColor
                  position absolute
                  left .05rem
                  top 0.05rem
                  width .3rem
                  border 1px solid #b4a078
                  color #b4a078
                img
                  width 3.45rem
                  height 4.14rem
              .oneText
                  div
                    width 2.8rem
                    font-size .3rem
                    margin .1rem 0
                    white-space nowrap
                    text-overflow ellipsis
                    overflow hidden


</style>
<style>

  .scroll-pic .swiper-pagination .my-bullet{
/*在这里加上去的样式也有问题 ,原来是行内元素*/
    display:inline-block;
    margin : .1rem 0.1rem ;
    width: .35rem;
    height: .06rem;
    background: #f4f4f4;
  }
  .scroll-pic .swiper-pagination .my-bullet-active{
   background: #b4282d;
  }

</style>
