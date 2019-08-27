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
    <div class="banner_div">
        <mt-swipe :auto="2000">
            <mt-swipe-item v-for="(elem,i) of bannerimg" :key="i">
                    <img :src="elem.cimgurl" alt="" class="img" @click="router">
            </mt-swipe-item>
        </mt-swipe>
    </div>
    <!-- 搜索框 -->
    <div>
        <mt-search v-model="value" cancel-text="搜索" placeholder="请输入您要搜索的商品名称">
        </mt-search>
    </div>
    
    <!-- 热门列表 -->
</div>
</template>
<script>
export default {
    data(){
        return{
            bannerimg:[],
            value:''
        }
    },
    methods:{
        load(){
            //获取全部商品列表数据
            this.axios.get("/api/allProduct").then(result=>{
            window.console.log(result.data.data,'111')
            }).catch(err=>{window.console.log(err)})
            //获取轮播图数据
            this.axios.get("/api/banner").then(result => {
                this.bannerimg = result.data.data;
                window.console.log(this.bannerimg)
                window.console.log(this.bannerimg[0].cimgurl,333)
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
.img{
    width:100%;
    height:100%;
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
/*轮播指示器 lunbozhishiqi*/
.mint-swipe>.mint-swipe-indicators{
    bottom:365px;
}
.mint-swipe{
    height:200px !important;
}
@media screen and (min-width:330px) and (max-width:380px) {
    .banner_div>.mint-swipe>.mint-swipe-indicators{
        bottom:339px;
    }
    .mint-swipe{
        height:250px !important;
    }
}
@media screen and (min-width:381px) and (max-width:420px) {
    .banner_div>.mint-swipe>.mint-swipe-indicators{
        bottom:325px;
    }
}
@media screen and (min-width:421px) and (max-width:880px) {
    .banner_div>.mint-swipe>.mint-swipe-indicators{
        bottom:175px;
    }
}
@media screen and (min-width:881px) and (max-width:1100px) {
    .banner_div>.mint-swipe>.mint-swipe-indicators{
        bottom:72px;
    }
}
/*搜索框的高*/
.mint-search{
    height:52px !important;
}
</style>

