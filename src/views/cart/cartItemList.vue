<template>
  <div class="cart-item-list">
    <div class="left">
      <btn-check class="btn" :isactive='product.isCheck' @click.native='btnChecked'></btn-check>
      <img :src="product.img" alt="" />
    </div>
    <div class="right">
      <p>{{ product.title }}</p>
      <p>{{ product.desc }}</p>
      <p>
        <span>￥{{ product.price }}</span>
        <span>x{{ product.count }}</span>
      </p>
    </div>
  </div>
</template>
<script>
import btnCheck from "./btnCheck";

export default {
  name: "cartItemList",
  components: {
    btnCheck,
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
      btnChecked(){
          this.product.isCheck = !this.product.isCheck
      }
  }
};
</script>
<style	scoped>
.cart-item-list {
  height: 120px;
  display: flex;
  flex-wrap: nowrap;
  border-bottom: 1px solid #999;
  margin-top: 10px;
}
.left {
  position: relative;
}
.btn {
  position: absolute;
  top: 40px;
  left: 0;
}
.cart-item-list:last-child {
  border: none;
}
.left {
  flex: 34%;
}
.left img {
  position: absolute;
  top: 0;
  left: 25px;
  border-radius: 5px;
  width: 80px;
  height: 100px;
}
.right {
  position: relative;
  flex: 66%;
}
.right p:first-child {
  font-weight: 700;
  position: absolute;
  display: inline-block;
  top: -15px;
  left: 5px;
  height: 20px;
  width: 210px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.right p:nth-child(2) {
  position: absolute;
  display: inline-block;
  top: 15px;
  left: 5px;
  height: 20px;
  width: 210px;
  font-size: 14px;
  color: #999;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.right p:last-child {
  width: 205px;
  position: absolute;
  top: 60px;
  left: 5px;
  height: 50px;
}
.right p:last-child span:first-child {
  color: orange;
  font-size: 22px;
  float: left;
}
.right p:last-child span:last-child {
  padding-right: 5px;
  float: right;
}
</style>