<template>
    <div>list
        <div class="produces">
            <div v-for="(elem,i) of list" :key="i">
                <img :src="elem.img_main" alt="">
                <p>
                    <span>{{elem.title}}</span>
                    <span  v-text="`¥${elem.price.toFixed(2)}`"></span>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            list:[{price:0}]
        }
    },
    methods:{
        load(){
            //获取全部商品列表数据
            this.axios.get("/api/allProduct").then(result=>{
            window.console.log(result.data.data,'111')
            this.list=result.data.data;
            }).catch(err=>{window.console.log(err)})
        }
    },
    created(){
        this.load()
    }
}
</script>
<style scoped>
    .produces{
        width:100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
    .produces>div{
        margin-top:15px;
        margin-left:1%;
        margin-right:1%;
        width:47.2%;
        border:1px solid #eee;
        border-radius: 4px;
    }
    .produces>div>img{
        width:100%;
    }
    .produces>div span:first-child{
        font-size:90%;
        display: block;
        float: left;
        margin:5px;
    }
    .produces>div span:last-child{
        font-size:90%;
        color:#6bc4df;
        display: block;
        clear: both;
        float: right;
        margin:5px;
    }
</style>
