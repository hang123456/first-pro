<template>
<div class="fenzhuang">
    <router-view></router-view>
<tab-bar>
<tabar-item path='/home'>
        <img slot="activeImg" src="~assets/logo.png" alt="" />
        <img slot="unactiveImg" src="~assets/logo.png" alt="" />
        <div slot="textF">首页</div>
      </tabar-item>
      <tabar-item path='/fenlei'>
        <img slot="activeImg" src="~assets/logo.png" alt="" />
        <img slot="unactiveImg" src="~assets/logo.png" alt="" />
        <div slot="textF">分类</div> </tabar-item>
        <tabar-item path='/cart'>
        <img slot="activeImg" src="~assets/logo.png" alt="" />
        <img slot="unactiveImg" src="~assets/logo.png" alt="" />
        <div slot="textF">购物车</div> </tabar-item>
        <tabar-item path='/profile'>
        <img slot="activeImg" src="~assets/logo.png" alt="" />
        <img slot="unactiveImg" src="~assets/logo.png" alt="" />
        <div slot="textF">我的</div>
      </tabar-item>
</tab-bar>
</div>
</template>
<script>
import tabBar from "../common/tabBar";
import tabarItem from "../common/tabarItem";
export default {
    name: 'fenzhuang',
    components: {
       tabBar,
       tabarItem,
     },
}
</script>

<style scoped>

</style>