<template>
    <div>
        <h1>this is connect.vue</h1>
        <router-link :to="{name:'ConnectCom1',params:{name:'lisi',age:'13'}}">test1</router-link> | 
        <router-link to="/connect/ConnectCom2/zhangsan/12">test2</router-link> |
        <router-link to="/connect/backtest2/fengjialue/20">back test2</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
