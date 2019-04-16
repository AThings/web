<template>
    <div>
        <h1>this is Book.vue</h1>
    </div>
</template>

<script>

export default {
    created(){
        this.$emit('routerChange','book','书籍')
    }
}
</script>
