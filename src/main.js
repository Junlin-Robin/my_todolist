/* 
  该文件是整个项目入口文件
*/

// 引入Vue
import Vue from 'vue'

// 引入app组件，是所有组件的父组件
import App from './App.vue'

// 关闭生产提示
Vue.config.productionTip = false

//引入Vue-router
import VueRouter from 'vue-router';

//应用插件
Vue.use(VueRouter);


//！！！需要在import时store，先注册vuex。
//引入vuex
// import Vuex from "vuex";
//全局注册vuex插件
// Vue.use(Vuex);


//引入store
import store from "./store/index"


//引入路由器
import router from './router/index.js';


//引入Echarts
import * as echarts from 'echarts';
//全局注册
Vue.prototype.$echarts = echarts;



// 常见Vue实例对象
new Vue({
  render: h => h(App),
  //路由器配置项
  router:router,
  //vuex配置项
  store:store,
  beforeCreate(){
    Vue.prototype.$bus = this;
  },
}).$mount('#app')
