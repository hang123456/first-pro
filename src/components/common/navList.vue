<template>
    <div class="nav-list">
      <nav-list-item v-for='item in goodss' :goodss='item' :key='item.link'  />
    </div>
</template>

<script>


import navListItem from './navListItem'
export default {
    name: 'navList',
    components: {
        navListItem
    },
    props: {
        goodss: {
            type: Array,
            default(){
                return  []
            }
        }
    },
    data(){
        return {

        }
    }
}

</script>

<style scoped>
 .nav-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
 } 
</style>