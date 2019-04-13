<template>
  <div id="app">
    <fengjialue lp="fengjialue"/>
    
  </div>
</template>

<script>
import fengjialue from './components/fengjialue.vue'
import Vue from 'vue/dist/vue.esm.js'


export default {
  name: 'app',
  components: {
    fengjialue
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
