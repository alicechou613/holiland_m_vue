import Vue from 'vue'
import Router from 'vue-router'

import index from './components/index.vue'
import list from './components/list.vue'
import cart from './components/cart.vue'
import my from './components/my.vue'
import detail from './components/detail.vue'

Vue.use(Router)

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new Router({
  routes: [
    {path: '/',component: index},//首页
    {path: '/index',component: index},//首页
    {path: '/detail',component: detail},//商品页
    {path: '/list',component: list},//列表页
    {path: '/cart',component: cart},//购物车页
    {path: '/my',component: my},//我的页
    ],
})
