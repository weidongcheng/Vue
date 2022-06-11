/*
 该文件为整个文件的入口文件
 */

//引入Vue
import Vue from 'vue'
//引入App组件，他是所有组件的父组件
import App from './App.vue'

// 关闭Vue的生产提示
Vue.config.productionTip = false

//创建Vue的实例对象
new Vue({
  el:"#app",
  // template:`<h1>你好啊</h1>`
  //将App组件放入容器
  render: h => h(App),

  //完整写法
  // render(createElement){
  //   return createElement(App)
  // }

})
