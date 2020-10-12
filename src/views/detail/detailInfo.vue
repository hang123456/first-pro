<template>
  <div class="detailInfo">
      <p>{{swiperInfo}} </p>
      <div class="price-info">
          <div class='lastprice'>{{ lowprice }}</div>
      <div class='lowprice'>{{ lastprice }}</div>
      </div>
     <div class='infos'>
      <span>{{ cfav }}</span>
      <span>{{ nums }}</span>
      <span>{{ fasts }}</span>
     </div>
  </div>
</template>
<script>
export default {
  name: "detailInfo",
  props: {
    swiperInfo: "",
    lastprice: "",
    lowprice: "",
    cfav: "",
    nums: "",
    fasts: "",
  },
  methods: {},
};
</script>
<style	scoped>
.detailInfo {
    position: relative;
    width: 100%;
    height: 125px;
    border-bottom: 1px solid #999;
}
p {
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 2;
overflow: hidden;
font-size:16px;
font-weight: 700;
padding: 0 3px;
}
.price-info{ 
position: absolute;
top: 60px;
left: 0; 
}
.lastprice {
float: left;
color: hotpink;
font-size: 22px;
}
.lowprice {
    padding-top: 5px;
    float: left;
    text-decoration: line-through;
}
.infos {
position:absolute;
top: 95px;
left: 0;
right: 0;
}
.infos span {
    font-size: 14px;
    color: rgb(197,194,194);
}
.infos span:nth-child(2) {
    padding: 0 50px;
}

</style>