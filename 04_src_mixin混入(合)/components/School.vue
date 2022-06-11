<template>
    <div>
        <h2 @click="showName">学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>

<script>
    // import {mixin,mixin2} from "@/mixin";

    export default {
        name:'Student',
        data(){
            return{
                name:'尚硅谷',
                address:'北京',
                x:666 //如果与混入的属性一样，优先取当前组件实例对象的值
            }
        },
        // mixins:[mixin,mixin2],
        //生命周期钩子和混入共存
        mounted() {
            console.log("你好啊！！！！！")
        }
    }
</script>

