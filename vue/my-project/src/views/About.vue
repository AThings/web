<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="$store.commit('add',3)">加一</button>
    <button @click="$store.commit('reduce')">减一</button>
    {{ count }}
  </div>
</template>

<script>
import store from '@/store.js'
import { mapState } from 'vuex';

export default {

  computed:{
    ...mapState(['count']),
    number:function(){
      return store.state.count
    }
  }
}
</script>

