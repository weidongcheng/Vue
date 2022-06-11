
//引入Vue
import Vue from "vue";

//引入App组件
import App from "./App";
//引入混入
import {mixin,mixin2} from "@/mixin";

//关闭生产提示
Vue.config.productionTip = false
//全局混入
Vue.mixin(mixin)
Vue.mixin(mixin2)

new Vue({
    el:"#app",
    render:h=>h(App)
})