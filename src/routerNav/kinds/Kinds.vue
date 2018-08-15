<template>
  <div class="kindsWrap">
    <profile-head/>
    <section class="kindsCan">
      <div class="leftList">
        <ul class="navList" ref="leftList">
          <li class="oneNav" :class="{on:index===currentIndex}"  @click="selectIndex(index)"
              v-for="(item,index) in navList" :key="index">
            <span  @click="change">{{item.name}}</span>
          </li>
        </ul>
      </div>
      <div class="rightList" v-if="navList.length">
        <one-kinds :navList="navList" :index="index"/>
      </div>
    </section>
  </div>
</template>

<script>
  import ProfileHead from '../../components/profileHead/profileHead'
  import 'swiper/dist/css/swiper.min.css'
  import BScroll from 'better-scroll'
  import OneKinds from '../../components/oneKinds/oneKinds'
  import {mapState} from 'vuex'
  export default {
    name: "kinds",
    data(){
      return {
        index:0,
        isOn:false,
        currentIndex:0
      }
    },
    components:{
      ProfileHead,
      OneKinds
    },
    mounted(){
      console.log(this.navList);
      this.$store.dispatch('getNav')
    },
    computed:{
      ...mapState(['navList'])
    },
    methods:{
      selectIndex(index){
        this.currentIndex=index
        this.index =index
      },
      change(){
        this.isOn=true
      },
      initScroll(){
        this.computedWidthAndScroll('leftList',25,'.leftList')
      },
      computedWidthAndScroll(refEle,split,watchEle){
        const ul=this.$refs[refEle]
        const childs=ul.children
        let w =0
        for(let i= 0 ;i< childs.length;i++){
          w+=childs[i].clientHeight
        }
        const spli=  split *(childs.length-1)
        ul.style.height= w + spli + 'px'
        new BScroll( watchEle,{
          click:true,
        })
      },
    },
    watch:{
      navList(){
        this.$nextTick(()=>{
          this.initScroll()
        })
      }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheeet/stylus">
.kindsWrap
  width 7.5rem
  overflow hidden
  .kindsCan
    display flex
    flex-flow row nowrap
    overflow hidden
    position relative
    .leftList
      width 1.62rem
      height 11.46rem
      overflow hidden
      border-right .001rem  solid #e1e1e1
      .oneNav
        text-align center
        font-size .3rem
        line-height .5rem
        color #333
        margin-top .4rem
        overflow hidden
        width 1.61rem
        border-left .05rem solid #fff
      .on
        color #b4282d
        border-left .05rem solid #b4282d
    .rightList
      padding .3rem .3rem .21rem
      width 5.27rem
      position absolute
      left 1.62rem
      height 11.46rem
      overflow hidden

</style>
