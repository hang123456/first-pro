<template>
  <div class="cart">
    <nav-bar class="nav-bar">
      <h2 slot="center">购物车({{ $store.state.product.length }})</h2>
    </nav-bar>
    <cart-item :product="product"></cart-item>
    <bottom-check class='bottomCheck'></bottom-check>
  </div>
</template>
<script>
import navBar from "components/common/navBar";
import bottomCheck from './bottomCheck'

import cartItem from "./cartItem";
export default {
  name: "cart",
  data() {
    return {
      product: [],
    };
  },
  components: {
    navBar,
    cartItem,
    bottomCheck
  },
  created() {
    this.product = this.$store.state.product;
  },
};
</script>

<style scoped>
.cart {
  /* position: relative; */
  height: 100vh;
}
.nav-bar {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  /* margin-bottom: 44px; */
  width: 100%;
  height: 44px;
  background-color: hotpink;
  color: #fff;
}
.nav-bar h2 {
  line-height: 44px;
  margin: 0;
}
.bottomCheck {
    position: absolute;
    bottom: 49px;
    left: 0;
    right: 0;
}
</style>