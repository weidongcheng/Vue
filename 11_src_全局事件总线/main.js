
//引入Vue
import Vue from "vue";

//引入App组件
import App from "./App";
//关闭生产提示
Vue.config.productionTip = false

new Vue({
    el:"#app",
    render:h=>h(App),
    beforeCreate() {
        Vue.prototype.$bus = this//安装全局事件总线
    }
})