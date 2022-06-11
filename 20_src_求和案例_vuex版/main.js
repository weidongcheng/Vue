//引入Vue
import Vue from "vue";
//引入Store
import store from './store'
//引入App组件
import App from "./App";
//关闭生产提示
Vue.config.productionTip = false

new Vue({
    el:"#app",
    store,
    render:h=>h(App)
})
