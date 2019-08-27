<template>
  <div id="app">
    <router-view style="margin-bottom:55px;"/>
  <div  class="tabbar">
      <div @click="selActive">
        <mt-tabbar v-model="active">
          <mt-tab-item id="tab1" style="color:#87d0e3;">
            <!-- <button
              :selectedImg="require('./assets/index2.png')"
              :noemalImg="require('./assets/index.png')">
            </button> -->
            <img slot="icon" src="./assets/index2.png">
            首页
          </mt-tab-item>
          <mt-tab-item id="tab2" style="color:#87d0e3;">
            <img slot="icon" src="./assets/list2.png">
            产品
          </mt-tab-item>
          <mt-tab-item id="tab3" style="color:#87d0e3;">
            <img slot="icon"  src="./assets/cart2.png">
            购物车
          </mt-tab-item>
          <mt-tab-item id="tab4" style="color:#87d0e3;">
            <img slot="icon" src="./assets/my2.png">
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
      }
    },
    methods:{
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
