// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store'
import './mock/mockServer'
import {Button} from 'mint-ui'
//图片懒加载
import VueLazyload from 'vue-lazyload'
import loading from './common/imgs/loading.gif'
Vue.config.productionTip = false
//import './fiters' // 加载时间过滤器
import './filters'
/* eslint-disable no-new */
// 注册全局组件标签
Vue.component(Button.name, Button)  // <mt-button>
Vue.use(VueLazyload, { // 内部自定义一个指令lazy
  loading
})
new Vue({
  el: '#app',
  components: { App,store },
  template: '<App/>',
  router, //使用上vue-router
  store // 使用上vuex
})
