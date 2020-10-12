<template>
    <div class="btn-check" >
       <img src="~assets/img/detail/cart.png" alt="" :class='{active: isactive}' >
    </div>
</template>
<script>
     export default {
        name:'btnCheck',
      props: {
          isactive: {
              type:Boolean,
              default(){
                  return false
              }
          }
      }
        // created(){
        //     this.isactive = !this.$store.state.product.isCheck
        // },
        // methods: {
        //     ischange(){
        //         this.isactive = !this.isactive
        //         this.$store.state.product.isCheck = !this.$store.state.product.isCheck
        //     }
        // }
    }
</script>
<style	scoped>
  img {
      border-radius: 50%;
      width: 20px;
      height: 20px;
  }
  .active {
      background-color: red;
  }
</style>