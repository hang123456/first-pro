<template>
<div class="home">
    <nav-bar class='navbars'>
        <div slot="center">购物车</div>
    </nav-bar>
    <tab-control :title="['热门','流行','精选']" @tabarNum='tabarNums' ref='tabCont1' v-show='isTabShow' class='fixed' />
    <scorll class='scroll' ref='scorll'
    @scroll='backTop' 
    @pullingUp='pullingUp' >
     <home-swiper :banner='banner' @tabBarLoad='tabBarLoad' />
    <home-images :recommends='recommends' />
    <feature />
    <tab-control :title="['热门','流行','精选']" @tabarNum='tabarNums' ref='tabCont2' />
    <nav-list :goodss='goods[goodsType].list' />
    </scorll>
    <back-top-image class='backImage' v-show="isBackTop" @click.native='backTopBtn'></back-top-image>
</div>
</template>
<script>
import navBar from 'components/common/navBar'
import homeSwiper from './homeSwiper'
import homeImages from './homeImages'
import feature from './feature'
import tabControl from 'components/context/tabControl'
import navList from 'components/common/navList'
import backTopImage from './backTopImage'
import scorll from './scorll'



import {getHomeMultidata,tabBarNav} from 'network/home'
export default {
    name: 'home',
    components: {
        navBar,
        homeSwiper,
        homeImages,
        feature,
        tabControl,
        navList,
        scorll,
        backTopImage
    },
    data(){
       return {
        banner: [],
        recommends: [],
        isBackTop: false,
        isTabShow: false,
        goodsType: 'pop',
        offSetTopY: 0,
        leaveHome:0,
          goods: {
           'pop': {page: 0,list:[]},
           'new': {page: 0,list:[]},
           'sell': {page: 0,list:[]}
       }
        }
    },
    created() {
       this.getHomeMultidatas()
       this.tabBarNav('new')
       this.tabBarNav('sell')
       this.tabBarNav('pop')

    },
    activated(){
        this.$refs.scorll.scrollTo(0,this.leaveHome,0)
    },
    deactivated(){
        this.leaveHome = this.$refs.scorll.getPosition().y
    },
    mounted(){
        const refrsh = this.debounded(this.$refs.scorll.refresh,200)
          this.$bus.$on('imageLoad',() => {
           refrsh()
       })
    },
    methods: {
        debounded(func,delay){
            let timer = null
            return function(...agu){
                if(timer) clearTimeout(timer)
              timer =  setTimeout(() => {
                   func.apply(this,agu)
               },delay)
            }
        },
        tabBarLoad(){
           this.offSetTopY  =this.$refs.tabCont2.$el.offsetTop
           console.log(this.offSetTopY);
        },
        getHomeMultidatas(){
        getHomeMultidata()
        .then(res => {
            /*
            打印一下返回的数据
            */
            // console.log(res)
         this.banner = res.data.banner.list
         this.recommends = res.data.recommend.list
        })
        },
        tabBarNav(type){

        const page = this.goods[type].page + 1
        tabBarNav(type, page).then( res => {
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1
            // console.log(res);
        })
        },
        tabarNums(index){
                switch(index){
                case 0: this.goodsType = 'pop'
                break
                case 1: this.goodsType = 'new'
                break
                case 2: this.goodsType = 'sell'
                }
                this.$refs.tabCont2.curretIndex = index
                this.$refs.tabCont1.curretIndex = index
        },
        backTop(position){
            this.isBackTop = (-position.y) >= 1000
            this.isTabShow = (-position.y) >= this.offSetTopY
        },
        backTopBtn(){
           this.$refs.scorll.scrollTo(0,0,500)
        },
        pullingUp(){
            // console.log('加载更多');
            this.tabBarNav(this.goodsType)
        }      
     }
}
</script>

<style scoped>
 .home {
     padding-top: 44px;
     position: relative;
 }
 .navbars {
     background-color: pink;
     color: #fff;
     position: fixed;
     z-index: 999;
     top: 0;
     left: 0;
     right: 0;
 }
  .scroll {
    overflow: hidden;
    position: absolute;
    height: calc(100vh - 93px);
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
  }
  .backImage {
      position: fixed;
      bottom: 50px;
      right: 10px;
  }
  .fixed{
      background-color: #fff;
      position: absolute;
      top: 44px;
      left: 0;
      right: 0;
      z-index: 666;
  }
</style>