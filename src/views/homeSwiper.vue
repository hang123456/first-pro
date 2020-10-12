<template>
   <div class="home-swiper">
       <swiper>
           <swiper-item v-for='item in banner' :key='item.link' >
               <a :href="item.link">
                   <img :src="item.image" alt="" @load='tabBarLoad'>
               </a>
           </swiper-item>
       </swiper>
   </div>    
</template>

<script>
import {Swiper, SwiperItem} from 'components/common/swiper'
export default {
    name: 'homeSwiper',
    data(){
        return {
          isAgain: false
        }
    },
     methods: {
         tabBarLoad(){
            if(!this.isAgain){
                this.isAgain = true
                 this.$emit('tabBarLoad')
            }
         }
     },
     
    props: {
        banner: {
            type: Array,
            default(){
                return []
            }
        }
    },
     components: {
      Swiper,
      SwiperItem
     }
    
}
</script>

<style scoped>

</style>