<template>
<div class="home">
    <nav-bar class='navbars'>
        <div slot="center">购物车</div>
    </nav-bar>
    <home-swiper :banner='banner' />
    <home-images :recommends='recommends' />
    <feature />
    <tab-control :title="['热门','流行','精选']" />
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
        <li>11</li>
        <li>12</li>
        <li>13</li>
        <li>14</li>
        
    </ul>
</div>
</template>
<script>
import navBar from 'components/common/navBar'
import homeSwiper from './homeSwiper'
import homeImages from './homeImages'
import feature from './feature'
import tabControl from 'components/context/tabControl'
import {getHomeMultidata,tabbarnav} from 'network/home'
export default {
    name: 'home',
    components: {
        navBar,
        homeSwiper,
        homeImages,
        feature,
        tabControl
    },
    data(){
       return {
        banner: [],
        recommends: [],
          goods: {
           'pop': {page: 0,list:[]},
           'new': {page: 0,list:[]},
           'sell': {page: 0,list:[]}
       }

        }
       
       
    },
    created() {
       this.getHomeMultidatas()
       this.tabbarnavs()
    },
    methods: {
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
         tabbarnavs(){
        tabbarnav()
        .then(res => {
            /*
            打印一下返回的数据
            */
            console.log(res)
       
        })
        }

    
     }
}
</script>

<style scoped>
 .home {
     padding-top: 44px;
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
  
</style>