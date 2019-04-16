<template>
  <div id="app">
    <navigation></navigation>
    
    <!-- <div id="nav">
      <router-link to="/">Book</router-link> |
      <router-link to="/Movie">Movie</router-link> |
      <router-link to="/Music">Music</router-link> |
      <router-link to="/Photo">Photo</router-link>
    </div> -->
  </div>
</template>

<script>
import navigation from '@/components/Navigation.vue'
export default {
  components:{
    navigation
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
</style>
