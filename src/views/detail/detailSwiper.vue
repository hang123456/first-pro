<template>
        <swiper class='swiperItems'>
            <swiper-item v-for='(item,index) in swiperImage' :key='index' >
                <img :src="item" alt="">
            </swiper-item>
        </swiper>
    
</template>
<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
     export default {
        name:'detailSwiper',
        props: {
          swiperImage: {
              type: Array,
              default(){
                  return []
              }
          } 
        },
        components:{
           Swiper,
           SwiperItem
        },
        methods:{
            
        }
    }
</script>
<style	scoped>
 .swiperItems {
     height: 300px;
     overflow: hidden;
 }
</style>