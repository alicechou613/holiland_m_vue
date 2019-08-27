<template>
    <div>
        <!-- 轮播 -->
        <div>
            <mt-swipe :show-indicators="false">
                <mt-swipe-item v-for="(elem,i) of img_lg" :key="i">
                   <img :src="elem" alt="" style="width:100%;margin-top:-50px;"> 
                </mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- 商品详情 -->
        <div class="detail_font">
            <p>{{wagashi.title}}</p>
            <p style="float:right;"  v-text="`¥${wagashi.price.toFixed(2)}`"></p>
            <p style="clear:both;">规格：</p>
            <p v-show="pattr!=''">{{wagashi.pattr}}</p>
        </div>
        <!-- 商品详情图 -->
        <div>
            <img :src="elem" alt="" v-for="(elem,i) of img_body" :key="i" style="width:100%;margin-top:-5px;">
        </div>
        <!-- 购买 -->
        <div class="buy" v-show="add==false" @click="open">
            <!-- 点击购买 -->
            <div>
                <div>加入购物车</div>
                <div>立即购买</div>
            </div>
        </div>
         <!-- 弹出的选择框 -->
        <div class="sel"  v-show="add==true">
            <div style="height:170px;display:flex">
                <div style="height:150px;width:170px;margin:10px 10px 0 10px;">
                    <img :src="wagashi.img_main" alt="" style="width:100%">
                </div>
                <div class="myfont">
                    <div class="close" @click="close">×</div>
                    <p style="clear:both;">{{wagashi.title}}</p>
                    <p v-text="`¥${wagashi.price.toFixed(2)}`"></p>
                </div>
            </div>
            <div style="padding:0 15px;">
                <p style="padding:5px;">规格:</p>
                <div v-for="(elem,i) of pattr" :key="i" style="float:left;border:1px solid #87d0e3;padding:5px;margin:5px;">{{elem}}</div>
            </div>
            <div class="div_count">
                <div>数量:</div>
                <div>+</div>
                <div>{{count}}</div>
                <div>-</div>
            </div>
            <div>
                <div>下一步</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            id:'',
            add:false,//添加商品的选择窗口是否开启。
            wagashi:{price:0},
            img_lg:[],
            img_body:[],
            pattr:[],
            attr:0,//选择了哪一种口味
            count:1,//商品数量
            // lg:0,//左边图显示的第几张
            // styles:{
            //     width:'',
            //     marginLeft:''
                // marginLeft:-this.lg*485+'px'
            // }
        }
    },
    methods:{
        close(){
            this.add=false;
        },
        open(){
            this.add=true;
        },
        load(){
            // console.log(this.$route.params.id)
                    this.id=this.$route.params.id
                    this.axios.get("/api/wagashi",{
                        params: {
                            "type": this.id
                    }}).then(result=>{
                        this.wagashi=result.data.data[0];
                window.console.log(this.wagashi)
                this.img_lg=this.wagashi.img_lg.split(',')
                this.count=this.img_lg.length
                    // var width=485*this.img_lg.length+"px"
                // this.styles.width=width;
                //   console.log(this.count)
                this.img_body=this.wagashi.img_body.split(',')
                this.pattr=this.wagashi.pattr.split(',')
                window.console.log(this.pattr)
                    this.count=1;
            })
        }
    },
    created(){
        this.load()
    }
}
</script>
<style scoped>
p{margin:0px;}
.buy{
    position: fixed;
    width:100%;
    height:40px;
    bottom:55px;
    background: #fff;
}
.buy>div:first-child{
    display: flex;
   height:40px;
    justify-content: space-around;
}
.buy>div>div{
     width:45%;
     margin:3px 0 3px 0;
    height:28px;
    text-align: center;
    padding: 3px 0 0 0;
    color:#fff;
}
.buy>div>div:first-child{
    background: #87d0e3;
}
.buy>div>div:last-child{
    background: #57ca5c;
}
.sel{
    position: fixed;
    width:100%;
    height:385px;
    bottom:55px;
    background: #fff;
    border:1px solid #ccc;
    border-bottom: none;
    box-sizing:border-box;
}
.myfont{
    font-size:120%;
    margin-top:10px;
}
.myfont>p{
    margin:10px;
}
.myfont>p:first-child{
    text-align: left;
}
.myfont>p:last-child{
    margin-top:25px;
    color:#87d0e3;
    text-align: right;
}
.detail_font{
    margin:15px 10px;
}
.detail_font>p{
    margin:5px;
    color:#2093cc;
}
.div_count{
    height:50px;
    clear: both;
    padding:10px 20px;
    box-sizing: border-box;
}
.div_count>div{
    float:right;
}
.div_count>div:first-child{
    float:left;
    padding-top:3px;
}
.div_count>div:first-child~div{
    height:30px;
    width:30px;
    border:1px solid #ccc;
    text-align: center;
    box-sizing:border-box;
    padding-top:3px;
}
.close{
    float:right;
    height:30px;
    width:30px;
    border:1px solid #87d0e3;
    border-radius:50%;
    text-align:center;
    margin-right:10px;
    margin-bottom:10px;
    padding-top:1px;
    box-sizing:border-box;
    color:#87d0e3;
}
.sel>div:last-child{
    height:35px;
}
.sel>div:last-child>div{
    height:29px;
    margin:3px;
    border-radius: 4px;
    background: #87d0e3;
    color:#fff;
    text-align: center;
    box-sizing: border-box;
    padding-top:3px;
}
</style>

