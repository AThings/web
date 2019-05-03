<template>
    <div>
        <ul>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556457796267&di=5f5c43ccff098662420182f72798e550&imgtype=0&src=http%3A%2F%2Fpic31.nipic.com%2F20130804%2F7487939_090818211000_2.jpg" alt="">
            <li v-for="(item,index) of list" :key="index" class="movieView">
                <div class="content">
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
                console.log(response);
                this.list = response.data.subjects;
            })
            .catch((error)=>{
                
            })
            .then(()=>{
                this.setImages();
            });
        },
        setImages(){
            var box = document.getElementsByClassName('content');
            for(var i=0;i<this.list.length;i++){
                var img = document.createElement('img');
                img.src=this.list[i].images.small;
                box[i].append(img);
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
