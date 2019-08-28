//将引入axios库单独保存一个文件中
//减少main.js代码量
//1：引入vue实例
import Vue from "vue"
//2：引入axios库
import axios from "axios"
//3：发送请求时保存session信息
axios.defaults.withCredentials=true
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//4：设置请求基础路径
// axios.defaults.baseURL="http://127.0.0.1:3000"
// axios.defaults.baseURL="http://192.168.3.39:80"
// axios.defaults.baseURL="http://localhost:80"
// axios.defaults.baseURL="http://192.168.43.251:80"
axios.defaults.baseURL="http://192.168.3.39:80"
// axios.defaults.baseURL="https://www.tianqiapi.com"
//5：将axios注册vue实例
Vue.prototype.axios=axios