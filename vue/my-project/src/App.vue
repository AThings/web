<template>
  <div id="app">
    <div>
      <button @click="gohome">首页</button> |
      <button @click="forward">前进</button> |
      <button @click="back">后退</button>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/connect">connect</router-link> |
      <router-link to="/backhome">backhome</router-link> |
      <router-link to="/h">aliashome</router-link>
    </div>
    <div class="vue_view">
      <transition name="fade">
        <router-view/>
      </transition>
    </div>
    
  </div>
</template>

<script>
export default {
  methods:{
    gohome:function(){
      this.$router.push("/");
    },
    forward:function(){
      this.$router.go(1);
    },
    back:function(){
      this.$router.go(-1);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.vue_view{
  position: relative;
}
.fade-enter{
  position: absolute;
  top:0;
  width:100%;
  transform: translateX(-100%);
}
.fade-enter-active{
  position: absolute;
  top:0;
  transition: all 1s ease;
}
.fade-enter-to{
  position: absolute;
  top:0;
  width:100%;
  transform: translateX(0);
}
.fade-leave{
  position: absolute;
  top:0;
  width:100%;
  transform: translateX(0);
}
.fade-leave-active{
  position: absolute;
  top:0;
  transition: all 1s ease;
}
.fade-leave-to{
  position: absolute;
  top:0;
  width:100%;
  transform: translateX(100%);
}
</style>
