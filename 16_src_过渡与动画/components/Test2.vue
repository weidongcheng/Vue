<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group name="hello" appear>
            <h1 v-show="!isShow" key="1">你好啊！</h1>
            <h1 v-show="isShow" key="2">尚硅谷！</h1>
        </transition-group>

    </div>
</template>

<script>
    export default {
        data(){
            return{
                isShow:true
            }
        }
    }
</script>
<style scoped>
    h1{
        background-color: orange;
    }

    /* 进入的起点和离开的终点*/
    .hello-enter,.hello-leave-to{
        transform: translateX(-100%);
    }
    /* 进入和离开的过程 */
    .hello-enter-active,.hello-leave-active{
        transition: 1s linear;
    }
    /* 离开的起点和进入的终点 */
    .hello-enter-to,.hello-leave{
        transform: translateX(0);
    }



</style>