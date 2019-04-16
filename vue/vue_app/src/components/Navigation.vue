<template>
    <div :class="active">
        <header>
            <span @click="routerPush(navList[0])">首页</span>
            <h3>{{ title }}</h3>
        </header>
        <div class="view">
            <router-view @routerChange="change"/>
        </div>
        <nav>
            <ul>
                <!-- <li @click="$router.push('/')">书籍</li>
                <li @click="$router.push('/Movie')">电影</li>
                <li @click="$router.push('/Music')">音乐</li>
                <li @click="$router.push('/Photo')">图片</li> -->
                <li v-for="item of navList" :key="item.id" @click="routerPush(item)" v-bind:class="{liHover:item.name==active}">
                    {{ item.title }}
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>

export default {
    data(){
        return {
            navList:[
                {
                    name:"book",
                    title:"书籍",
                    id:"101",
                    path:"/"
                },
                {
                    name:"movie",
                    title:"电影",
                    id:"102",
                    path:"/Movie"
                },
                {
                    name:"music",
                    title:"音乐",
                    id:"103",
                    path:"/Music"
                },
                {
                    name:"photo",
                    title:"照片",
                    id:"104",
                    path:"/Photo"
                }
            ],
            title:"",
            active:''
        }
    },
    methods:{
        routerPush(item){
            this.$router.push(item.path);
            this.title = item.title;
            this.active = item.name;
        },
        change(name,title){
            this.active = name;
            this.title = title;
        }
    },
    created(){
        
    }
}
</script>

<style scoped>
    .book header,.book nav{
        background-color: rgb(33, 150, 243);
    }
    .movie header,.movie nav{
        background-color: rgb(12, 209, 62);
    }
    .music header,.music nav{
        background-color: rgb(236, 26, 156);
    }
    .photo header,.photo nav{
        background-color: rgb(23, 5, 184);
    }
    header,nav{
        height: 1rem;
        width :100%;
        position: fixed;
        
    }
    header{
        top:0;
        color:white;
    }
    header span{
        float:left;
        height:100%;
        display: flex;
        align-items: center;
        margin:0 10px;
    }
    header h3{
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%,-50%);
    }
    nav{
        bottom: 0;
        display: flex;
        align-items: center; 
        color: rgb(167, 170, 170);
    }
    nav ul{
        display: flex;
        width:100%;
        justify-content: space-around;
    }
    nav ul li{
        cursor: pointer;
        display: block;
    }
    .liHover{
        color:white;
    }
    .view{
        position: fixed;
        top:1rem;
        bottom: 1rem;
        overflow: scroll;
        width:100%;
    }
</style>
