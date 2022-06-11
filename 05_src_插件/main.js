
//引入Vue
import Vue from "vue";

//引入App组件
import App from "./App";
//引入插件
import plugins from "@/plugins";
//关闭生产提示
Vue.config.productionTip = false
//应用（使用）插件并传递参数
Vue.use(plugins,1,2,3)

new Vue({
    el:"#app",
    render:h=>h(App)
})