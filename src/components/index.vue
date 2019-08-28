<template>
<div>
    <div>
        <img src="../assets/logo.png" alt="" style="height:43px;">
        <router-link to="detail">
            <span class="font">登录</span>
        </router-link>
        <router-link to="detail">
            <span class="font">注册</span>
        </router-link>
    </div>
    
    <!-- 轮播图 -->
    <div>
        <van-swipe :autoplay="3000" indicator-color="white">
            <van-swipe-item  v-for="(elem,i) of images" :key="i">
                <img :src="elem.cimgurl" alt="" @click="router" style="width:100%">
            </van-swipe-item>
        </van-swipe>
    </div>
    <!-- 搜索框 -->
    <div>
        <van-search
            v-model="value"
            placeholder="请输入搜索的商品"
            show-action
            shape="round"
            >
            <div slot="action" @click="onSearch">搜索</div>
        </van-search>
    </div>
    
    <!-- 热门列表 -->
    <div class="produces">
            <div v-for="(elem,i) of wagashiSingle" :key="i">
                <router-link :to="'/'+elem.url+'/'+elem.pid">
                    <img :src="elem.img_main" alt="">
                    <p>
                        <span>{{elem.title}}</span>
                        <span  v-text="`¥${elem.price.toFixed(2)}`"></span>
                    </p>
                </router-link>
            </div>
        </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            images:[],
            value:'',
            wagashiSingle:[]
        }
    },
    methods:{
        onSearch(){
             console.log(11111)
        //   console.log(value.trim())
        //   if(!value.trim()){
        //     alert("请输入搜索关键字")
        //   }else{
        //     // console.log(`/search/${this.search_input}`)
        //     this.$router.push(`/search/${value}`)
        //     // console.log(this.search_input)
        //     this.axios.get("/api/search",{params:{"titleSearch":this.search_input}}).then(result=>{
        //       console.log(1)
        //       console.log(result.data.data)
        //     })
        //   }
        },
        load(){
            //获取wagashi列表数据
            this.axios.get("/api/wagashiSingle").then(result=>{
                console.log(2)
                console.log(result.data.data)
                this.wagashiSingle=result.data.data;
                })
            //获取轮播图数据
            this.axios.get("/api/banner").then(result => {
                this.images = result.data.data;
                window.console.log(this.images)
                window.console.log(this.images[0].cimgurl,333)
            });
        },
        router(){
            //点击轮播图跳转详情页
            this.$router.push('/detail')
        }
    },
    created(){
        this.load();
    },
    components:{
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
    .produces div img{
        width:100%;
    }
    .produces div span:first-child{
        font-size:90%;
        display: block;
        float: left;
        margin:5px;
    }
    .produces div span:last-child{
        font-size:90%;
        color:#6bc4df;
        display: block;
        clear: both;
        float: right;
        margin:5px;
    }
.font{
    text-decoration: none;
    color:#6bc4df;
    display: block;
    float:right;
    padding:15px 15px 10px 15px;
}
</style>
<style>

/*搜索框的高*/
.mint-search{
    height:52px !important;
}
</style>

