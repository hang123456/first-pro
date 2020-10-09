<template>
<div class="home-items">
    <div v-for='item in recommends' :key='item.link'  class="tab-imgs">
       <a :href="item.link">
           <img :src="item.image" alt="">
           <div>{{ item.title }}</div>
       </a>

    </div>
</div>

</template>


<script>
export default {
    name: 'homeItem',
    props: {
        recommends: {
            type: Array,
            default(){
                return []
            }
        }
    }
}
</script>

<style scoped>
    .home-items {
        display: flex;
        width: 100%;
        padding: 10px 0 20px;
        font-size: 12px;
        text-align: center;
        border-bottom: 10px solid #eee;
    }
    .tab-imgs {
        flex: 1;
    }
    .tab-imgs a img {
        width: 68px;
        height: 68px;
        margin-bottom: 8px;
    }
</style>