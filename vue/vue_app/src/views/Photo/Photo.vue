<template>
    <div>
        <h1>this is Photo.vue</h1>
    </div>
</template>
<script>
export default {
    created(){
        this.$emit('routerChange','photo','照片')
    }
}
</script>
