<template>
  <div class="fenzhuang">
    <tab-bar>
      <tabar-item path="/home">
        <img slot="activeImg" src="~assets/img/tabbar/home_active.svg" alt="" />
        <img slot="unactiveImg" src="~assets/img/tabbar/home.svg" alt="" />

        <div slot="textF">首页</div>
      </tabar-item>
      <tabar-item path="/fenlei">
        <img
          slot="activeImg"
          src="~assets/img/tabbar/category_active.svg"
          alt=""
        />
        <img slot="unactiveImg" src="~assets/img/tabbar/category.svg" alt="" />
        <div slot="textF">分类</div>
      </tabar-item>
      <tabar-item path="/cart">
        <img
          slot="activeImg"
          src="~assets/img/tabbar/shopcart_active.svg"
          alt=""
        />
        <img slot="unactiveImg" src="~assets/img/tabbar/shopcart.svg" alt="" />

        <div slot="textF">购物车</div>
      </tabar-item>
      <tabar-item path="/profile">
        <img
          slot="activeImg"
          src="~assets/img/tabbar/profile_active.svg"
          alt=""
        />
        <img slot="unactiveImg" src="~assets/img/tabbar/profile.svg" alt="" />
        <div slot="textF">我的</div>
      </tabar-item>
    </tab-bar>
  </div>
</template>
<script>
import tabBar from "../common/tabBar";
import tabarItem from "../common/tabarItem";
export default {
  name: "fenzhuang",
  components: {
    tabBar,
    tabarItem,
  },
};
</script>

<style scoped>
</style>