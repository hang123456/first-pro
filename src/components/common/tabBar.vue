<template>
    <div class='tabbar'>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'tabBar'
}

</script>

<style scoped>

.tabbar {
    display: flex;
    height: 49px;
    width: 100%;
    background-color: #F6F6F6;
    position: fixed;
    left: 0;
    bottom: 0;
    right: 0;
    box-shadow: 0 -2px 2px rgba(0,0, 0, .3);
}


</style>