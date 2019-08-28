import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import qs from 'qs'
Vue.prototype.qs=qs
import Vant from 'vant'
import 'vant/lib/index.css'
//引入axios
import axios from './axios'
Vue.config.productionTip = false
import MintUI from "mint-ui" //完整引入mint-ui库
import "mint-ui/lib/style.css" //mint-ui 样式文件
Vue.use(Vant);
//将mint-ui库所有组件注册vue实例中
Vue.use(MintUI);        
new Vue({
  router,
  render: h => h(App),
  // store
}).$mount('#app')


