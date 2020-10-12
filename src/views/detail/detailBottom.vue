<template>
  <div class="detail-bottom">
    <a href="javascript:;"><i></i><span>客服</span></a>
    <a href="javascript:;"><i></i><span>店铺</span></a>
    <a href="javascript:;"><i></i><span>收藏</span></a>
    <a href="javascript:;" @click='btnBottom'><i></i><span>加入购物车</span></a>
    <a href="javascript:;" @click='buyT'><i></i><span>购买</span></a>
  </div>
</template>
<script>
export default {
  name: "detailBottom",
  methods: {
    btnBottom(){
      this.$emit('btnBottom')
    },
    buyT(){
      this.btnBottom()
      this.$router.push('/cart')
    }
  },
};
</script>
<style	scoped>
.detail-bottom {
  height: 49px;
  width: 100%;
  display: flex;
}
.detail-bottom a {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.detail-bottom a:first-child i {
  display: block;
  background: url("~assets/img/detail/detail_bottom.png") 0 -37px/100%;
  width: 1rem;
  height: 1rem;
  margin: 0.12rem auto;
}
.detail-bottom a:nth-child(2) i {
  display: block;
  background: url("~assets/img/detail/detail_bottom.png") 0 -70px/100%;
  width: 1rem;
  height: 1rem;
  margin: 0.12rem auto;
}
.detail-bottom a:nth-child(3) i {
  display: block;
  background: url("~assets/img/detail/detail_bottom.png") 0 -135px/100%;
  width: 20px;
  height: 20px;
  margin: 0.12rem auto;
}
.detail-bottom a:nth-child(-n + 3) {
  padding-top: 5px;
  flex: 16.666%;
}
.detail-bottom a:nth-child(n + 4) {
  flex: 25%;
  background-color: pink;
}
.detail-bottom a:nth-child(4) {
  line-height: 49px;
  height: 49px;
  text-align: center;
  background-color: orange;
}
.detail-bottom a:nth-child(5) {
  line-height: 49px;
  height: 49px;
  text-align: center;
  background-color: red;
}
</style>