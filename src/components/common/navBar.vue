<template>
    <div class="nav-bar">
        <div class="left" ><slot name='left'></slot></div>
        <div class="center"><slot name='center'></slot></div>
        <div class="right" ><slot name='right'></slot></div>
    </div>
</template>

<script>
export default {
    name: 'navBar'    
}
</script>

<style scoped>
   .nav-bar {
       display: flex;
       height: 44px;
       /* position: fixed;
       top: 0;
       left: 0;
       right: 0; */
       box-shadow: 0 1px 3px rgba(100,100,100,.1);
       line-height: 44px;
       text-align: center;
   }
   .nav-bar .center {
       flex: 1;
   }
   .nav-bar .left {
       width: 60px;
   }
   .nav-bar .right {
       width: 60px;
   }
</style>