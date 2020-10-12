<template>
  <div class="cart-item">
    <scroll class="content" ref="reflash">
    
      <cart-item-list
        v-for="(item, index) in product"
        :key="index"
        :product="item"
      ></cart-item-list>
    </scroll>
  </div>
</template>
<script>

import cartItemList from "./cartItemList"


import scroll from "../scorll";
export default {
  name: "cartItem",
  props: {
      product: {
    type: Array,
    default() {
      return [];
    },
 }
  },
  components: {
    cartItemList,
    scroll,
  },
  activated() {
    this.$refs.reflash.refresh();
  },
};
</script>
<style	scoped>
.cart-item {
  /* background-color: #fff; */
  height: calc(100% - 129px);
}
.cart-item .content {
  /* position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0; */
  /* margin-top: 44px; */
  height: 100%;
  overflow: hidden;
}
</style>