<template>
    <div>
        <h1>this is Music.vue</h1>
    </div>
</template>
<script>
export default {
    created(){
        this.$emit('routerChange','music','音乐')
    }
}
</script>
