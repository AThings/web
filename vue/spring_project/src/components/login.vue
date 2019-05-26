<template>
    <div class="wrapper">
        <header class="header">登录</header>
        <form action="post">
            用户名: <input type="text">
            密码: <input type="password">
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .wrapper{
        width:50%;
        height:50%;
        position:fixed;
        left:50%;
        top:50%;
        transform: translate(-50%,-50%);

        /* border:1px solid black; */
        border-radius: 10px;

        box-shadow: 10px 10px  5px #888888;
        overflow: hidden;

    }
    .header{
        width: 100%;
        height: 20px;

        background: #000;
        color: white;

    }
</style>



