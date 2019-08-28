<template>
  <div id="app">
    <router-view style="margin-bottom:55px;"/>
  <div  class="tabbar">
      <div @click="selActive">
        <mt-tabbar v-model="active">
          <mt-tab-item id="tab1" :style="currentIndex[0].isSelect?'color:#87d0e3':'color:#cdcdcd'"  @click.native="changeState(0)">
            <img slot="icon" :src="currentIndex[0].isSelect?require('./assets/index2.png'):require('./assets/index.png')">
            首页
          </mt-tab-item>
          <mt-tab-item id="tab2"  :style="currentIndex[1].isSelect?'color:#87d0e3':'color:#cdcdcd'"  @click.native="changeState(1)">
            <img slot="icon" :src="currentIndex[1].isSelect?require('./assets/list2.png'):require('./assets/list.png')">
            产品
          </mt-tab-item>
          <mt-tab-item id="tab3"  :style="currentIndex[2].isSelect?'color:#87d0e3':'color:#cdcdcd'" @click.native="changeState(2)">
            <img slot="icon" :src="currentIndex[2].isSelect?require('./assets/cart2.png'):require('./assets/cart.png')">
            购物车
          </mt-tab-item>
          <mt-tab-item id="tab4"  :style="currentIndex[3].isSelect?'color:#87d0e3':'color:#cdcdcd'"  @click.native="changeState(3)">
            <img slot="icon" :src="currentIndex[3].isSelect?require('./assets/my2.png'):require('./assets/my.png')">
            我的
          </mt-tab-item>
        </mt-tabbar>
      </div>
    </div>
  </div>
</template>

<script>

// import index from './components/index.vue'
export default {
  data(){
    return{
      active:'tab1',
      currentIndex:[
         {isSelect:true},
         {isSelect:false},
         {isSelect:false},
         {isSelect:false}
       ],
      }
    },
    methods:{
      changeState(n){
                  //1:n当前按钮下标
                  //2:创建循环数据
          for(var i=0;i<this.currentIndex.length;i++){
          //3:如果当前下标与参数下标一致
          if(n==i){
            this.currentIndex[i].isSelect=true;
          }else{
            this.currentIndex[i].isSelect=false;
          }
        }        
      },
      selActive(){
        if(this.active=='tab1'){
          this.$router.push('/')
        }else if(this.active=='tab2'){
          this.$router.push('/list')
        }else if(this.active=='tab3'){
          this.$router.push('/cart')
        }else{
          this.$router.push('/my')
        }
      },
      route(){
        // console.log(n)
        // if(n==1){
        //   console.log(n)
        //   this.$router.push('/login')
        // }else if(n==2){
        //   console.log(n)
        //   this.$router.push('/list')
        // }else if(n==3){
        // console.log(n)
        //   this.$router.push('/cart')
        // }else{
        //   this.$router.push('/my')
        // }active
        
        
      }
      
    },
  name: 'app',
  components: {
    
  },

}
</script>

<style>
html,body{
  margin:0;
  padding:0;
}
.tabbar{
  /* height:100px; */
  width:100%;
position:fixed;
bottom:0px;
left:0px;
right:0px;
z-index:100;
}
/* #app { */
  
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
/* } */
</style>
