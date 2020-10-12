<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
    name: "scorll",
    props: {
      probeType: {
        type: Number,
        default: 0
      },
      pullUpLoad: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        scroll: null,
        message: '哈哈哈'
      }
    },
    mounted() {
      // 1.创建BScroll对象
      this.scroll = new BScroll(this.$refs.wrapper, {
        click: true,
        probeType: 3,
        pullUpLoad: true
      })
      
        this.scroll.on('scroll', (position) => {
        this.$emit('scroll', position)
      })
      // 2.监听滚动的位置
   

      // 3.监听上拉事件
      this.scroll.on('pullingUp', () => {
        //   console.log('我触底了');
         this.scroll.finishPullUp()
        this.$emit('pullingUp')
      })
    },
    methods: {
      scrollTo(x, y, time=300) {
       this.scroll && this.scroll.scrollTo(x, y, time)
      },
    getPosition(){
      return this.scroll.on('scroll', (position) => {
      return position.y
      })
    },
      finishPullUp() {
        this.scroll  && this.scroll.finishPullUp()
      },
      refresh(){
        console.log('---');
        this.scroll.refresh()
      },
      
    }
  }
</script>

<style scoped>

</style>
