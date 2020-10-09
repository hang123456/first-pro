<template>
    <div class='tabarItem' @click='routerlink' >
        <a v-if='isActive' href="javascript:;" class='activeImg'><slot name='activeImg'></slot></a>
        <a v-else  href="javascript:;" class='unactiveImg'><slot name='unactiveImg'></slot></a>
        <div :style='activeFont'><slot name='textF'></slot></div>
    </div>
</template>

<script>
export default {
    name: 'tabarItem',
    props: {
        path: String,
        color: {
            type: String,
            default: 'yellow'
        }  
    },
    data(){
        return {
            // isActive: true
        }
    },
    methods:  {
    routerlink(){
            this.$router.replace(this.path).catch(err => err)
        }
    },
    computed:{ isActive(){
                  return this.$route.path.indexOf(this.path) !== -1
    },
        activeFont(){
            return this.$route.path.indexOf(this.path) !== -1 ? {color: this.color} : {}
        }
    }    

}
</script>

<style scoped>
.tabarItem {
    text-align: center;
    font-size: 14px;
    height: 49px;
     flex: 1;
 }
.tabarItem img {
    vertical-align: center;
     width: 20px;
     height: 20px;
 }

</style>