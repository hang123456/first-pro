<template>
  <div id="app">
    <keep-alive exclude="detail"><router-view></router-view></keep-alive>
    <fenzhuang></fenzhuang>
  </div>
</template>

<script>
import fenzhuang from 'components/context/fenzhuang'
export default {
  name: 'App',
  components: {
    fenzhuang
  }
}

</script>

<style>
 @import  'assets/css/base.css';
</style>
