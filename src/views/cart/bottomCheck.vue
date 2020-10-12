<template>
  <div class="bottom-check">
    <div class="left" ><span @click='allCheck' :class='{acticeted: isAll}'></span><i>全选</i></div>
    <div class="center">合计￥{{ tatolPrice }}</div>
    <div class="right">去结算:{{ tatolPrice }}</div>
  </div>
</template>
<script>
export default {
  name: "bottomCheck",
  data() {
    return {
        isAll:true,
      products: {
        type: Array,
        default() {
          return [];
        },
      },
    };
  },
  created() {
    this.products = this.$store.state.product;
  },
  methods: {
      allCheck(){
             this.isAll = !this.isAll
      }
  },
  computed: {
    tatolPrice() {
      return this.products
        .filter((item) => {
          return item.isCheck;
        })
        .reduce((p, i) => {
          return p + i.price * i.count;
        }, 0).toFixed(2);
    },
  },
};
</script>
<style	scoped>
.bottom-check {
  line-height: 36px;
  text-align: center;
  display: flex;
  width: 100%;
  height: 36px;
}
.left {
  position: relative;
  width: 60px;
  height: 100%;
}
.left span {
  display: inline-block;
  border-radius: 50%;
  position: absolute;
  left: 5px;
  top: 10px;
  width: 15px;
  height: 15px;
  margin-right: 10px;
  border: 2px solid #999;
}
.left i {
  font-style: normal;
  position: absolute;
  top: 0;
  left: 25px;
}
.center {
  flex: 1;
}
.right {
  width: 125px;
  height: 100%;
  background-color: red;
  color: #fff;
  font-size: 16px;
}
.acticeted {
    background-color: red;
}
</style>