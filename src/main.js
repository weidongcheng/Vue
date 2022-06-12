//引入Vue
import Vue from "vue";
//引入App组件
import App from "./App";

//完整引入
//引入ElementUI组件库
// import ElementUI from 'element-ui';
//引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css';

//按需引入
import { Button,Row,DatePicker} from 'element-ui';

Vue.component('atguigu-button', Button);
Vue.component('atguigu-row', Row);
Vue.component('atguigu-date-picker', DatePicker);

//关闭生产提示
Vue.config.productionTip = false

//应用ElementUI
// Vue.use(ElementUI)

new Vue({
    el:"#app",
    render:h=>h(App)
})
