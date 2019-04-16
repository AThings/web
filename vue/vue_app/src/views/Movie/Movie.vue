<template>
    <div>
        <ul>
            <li v-for="(item,index) of list" :key="index" class="movieView">
                <div class="content" @on-load="getimage(item.images.small)">
                    <canvas></canvas>
                    <!-- <img :src="item.images.small" alt="" crossOrigin = "Anonymous"> -->
                    {{ item.title }}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    created(){
        this.$emit('routerChange','movie','电影');
        console.log('movie');
        this.getData();
    },
    data(){
        return {
            list:[],
            API_kua:API_PROXY
        }
    },
    methods:{
        getData(){
            axios.get(API_PROXY+'https://api.douban.com/v2/movie/in_theaters').then((response)=>{
                console.log(response)
                this.list = response.data.subjects;
            })
            .catch((error)=>{
                console.log(error)
            })
            .then(()=>{

            });
        },
        getimage(url){
            console.log("1");
            var imgs = new Image();
            imgs.crossOrigin = "Anonymous"; //注意存放顺序
            imgs.src = ""+url; 
            imgs.onload = function () {
                var canvas = document.createElement('canvas');
                canvas.width = imgs.width;
                canvas.height = imgs.height;
                var ctx = canvas.getContext("2d");
                ctx.drawImage(imgs, 0, 0, imgs.width, imgs.height);
                var img1 = new Image();
                img1.src = canvas.toDataURL("image/png");
                alert("s")
            }

            imgs.onerror = function () {
                alert("error")
            }
        }
    }
}
</script>

<style scoped>
    .movieView{
        border-bottom: 1px solid rgb(104, 99, 99);
        margin :5px 10px;
    }
</style>
