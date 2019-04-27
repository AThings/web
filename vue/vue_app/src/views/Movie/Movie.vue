<template>
    <div>
        <ul>
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
