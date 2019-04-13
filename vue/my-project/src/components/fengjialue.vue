<template>
  <div id="test">
    <h1>Hello every one,I Like {{ lp }}</h1>
  </div>
</template>

<script>
export default {
  name: 'FengJiaLue',
  props: {
    lp: String
  }
}
</script>