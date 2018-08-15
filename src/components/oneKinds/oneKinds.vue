<template>
    <div class="scroll">
      <section class="oneKindsCan">
        <header>
          <img  v-lazy="someone.bannerUrl" alt="">
        </header>
        <section class="goodList">
          <header>
            <div></div>
            <div>{{someone.name}}分类</div>
            <div></div>
          </header>
          <div class="listCan">
            <ul class="goodTable" ref="goodTable">
              <li class="goodItem" v-for="(itemCate,indexCate) in  someone.subCateList" :key="indexCate">
                <img v-lazy="itemCate.wapBannerUrl" alt="">
                <div class="goodTitle">
                  {{someone.name}}
                </div>
              </li>
            </ul>
          </div>
        </section>
      </section>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: "one-kinds",
    props:{
      index:Number,
      navList:Array
    },
    computed:{
      someone (){
        return this.navList[this.index]
      }
    },
    methods:{
      initScroll(){
        this.computedWidthAndScroll('goodTable',40,'.scroll')
      },
      computedWidthAndScroll(refEle,split,watchEle){
        const ul=this.$refs[refEle]
        const childs=ul.children

        let w =0
        for(let i= 0 ;i< childs.length;i++){
          w+=childs[i].clientHeight
        }
        w=w/3
        const spli=  split *(childs.length-1)
        ul.style.height= w + spli + 'px' +300
        new BScroll( watchEle,{
          click:true,
          scrollX: true
        })
      },
    },
    watch:{
      index (){
        this.$nextTick(()=>{
          this.initScroll()
         })
      },
      // navList:{   // 为什么用这个不行呢？
      //   deep:true,
      //   handler: function (){
      //     this.$nextTick(()=>{
      //       this.initScroll()
      //     })
      //   }
      // }
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheeet/stylus">
  @import "../../common/stylus/mixins.styl"
  .scroll
    height 11.46rem
    overflow hidden
    .oneKindsCan
      width 5.28rem
      header
        img
          width 5.28rem
          height 1.92rem
      .goodList
        width 100%
        header
          display flex
          flex-flow row column
          align-items center
          justify-content center
          height 1.08rem
          div:nth-child(odd)
            border 0.01rem solid #333
            width 1rem
          div:nth-of-type(2)
            margin 0 .5rem
        .listCan
          .goodTable
            display flex
            flex-flow row wrap
            justify-content space-around
            font-size 0
            width 5.28rem
            text-align center
            .goodItem
              width 1.44rem
              height 2.16rem
              text-align center
              line-height .35rem
              margin-right .34rem
              img
                width 1.44rem
                height 1.44rem
                border-radius 50%
                transform scale(.7)
              .goodTitle
                width 1.44rem
                height .72rem
                font-size .3rem
            li:nth-of-type(3n)
              margin-right 0rem

</style>
