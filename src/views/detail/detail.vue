<template>
  <div class="detail">
    <nav-bar class="='nav-bar">
      <div slot="left" class="left" @click="backRoute">
        <div class="aaa"></div>
      </div>
      <div slot="center" class="center">
        <span
          v-for="(item, index) in titles"
          :key="index"
          :class="{ isActive: thisIndex === index }"
          @click="spanChance(index)"
          >{{ item }}</span
        >
      </div>
      <div slot="right" class="='eight"></div>
    </nav-bar>
    <scorll class='content' ref='scrollss'>
        <detail-swiper :swiperImage="swiperImage"></detail-swiper>
        <detail-info
          :swiperInfo="swiperInfo"
          :lastprice="lastprice"
          :lowprice="lowprice"
          :cfav="cfav"
          :nums="nums"
          :fasts="fasts"
        ></detail-info>
        <div class="detailDesc">{{ detailDesc }}</div>
    </scorll>
    <detail-bottom class='detail-bottom' @btnBottom='btnBottom'></detail-bottom>
  </div>
</template>
<script>
import navBar from "components/common/navBar";
import detailSwiper from "./detailSwiper";
import detailInfo from "./detailInfo";
import scorll from "../scorll";
import detailBottom from './detailBottom'

import { getDetail } from "network/getDetail";
export default {
  name: "detail",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      thisIndex: 0,
      isIid: null,
      swiperImage: [],
      swiperInfo: "",
      lastprice: "",
      lowprice: "",
      cfav: "",
      nums: "",
      fasts: "",
      detailDesc: "",
    };
  },
  components: {
    navBar,
    detailSwiper,
    detailInfo,
    scorll,
    detailBottom
  },
  created() {
    this.isIid = this.$route.params.iid;
    getDetail(this.isIid).then((res) => {
      this.swiperImage = res.result.itemInfo.topImages;
      console.log(res);
      this.swiperInfo = res.result.itemInfo.title;
      this.lowprice = res.result.itemInfo.lowNowPrice;
      this.lastprice = res.result.itemInfo.oldPrice;
      this.nums = res.result.columns[0];
      this.cfav = res.result.columns[1];
      this.fasts = res.result.columns[2];
      this.detailDesc = res.result.detailInfo.desc;
    });
  },
  methods: {
    spanChance(index) {
      this.thisIndex = index;
    },
    backRoute() {
      this.$router.back();
    },
    btnBottom(){
      const product = {}
      product.img = this.swiperImage[0]
      product.title = this.swiperInfo
      product.desc = this.detailDesc
      product.price =  this.lowprice
      product.iid = this.isIid
      product.isCheck = true
      this.$store.commit('addProcudt',product)
      this.refresh()
    },
    refresh(){
           this.$refs.scrollss.refresh()
    }
  },
};
</script>
<style	scoped>
.detail {
  background-color: #fff;
  position: relative;
  z-index: 999;
  height: 100vh;
}
.content {
    overflow: hidden;
    position: absolute;
    height: calc(100vh - 93px);
    bottom: 49px;
    top: 44px;
    left: 0;
    right: 0;
}
.detail-bottom {
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 9999;
}
.left .aaa {
  margin-left: 15px;
  margin-top: 14px;
  width: 15px;
  height: 15px;
  border-top: 1px solid #999999;
  border-right: 1px solid #999999;
  transform: rotate(-135deg);
}
.center {
  text-align: center;
  line-height: 44px;
  display: flex;
  justify-content: space-around;
}
.center span {
  flex: 1;
}
.isActive {
  color: red;
}
.nav-bar {
  position: relative;
  background-color: #fff;
}
.detailDesc {
  height: 40px;
  width: 100%;
  text-align: center;
  line-height: 40px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  border-bottom: 5px solid #999;
}
</style>