<template>
    <div class="school">
        <h2>学校名称:{{name}}</h2>
        <h2>学校地址:{{address}}</h2>
    </div>
</template>

<script>
    //引入pubsub
    import pubsub from 'pubsub-js'
    export default {
        name:'Student',
        data() {
            return {
                name: '尚硅谷',
                address: '北京',
            }
        },
        mounted() {
            // console.log('School',this)
            // this.$bus.$on('hello',(data)=>{
            //     console.log('我是School组件，收到了数据',data)
            // })
            //订阅hello消息
            this.pubId = pubsub.subscribe('hello',(msg,data)=>{
                console.log("有人发布了hello消息，hello消息的回调执行了",msg,data)
                // console.log(this)
            })
        },
        beforeDestroy() {
            //解绑hello自定义事件
            // this.$bus.$off('hello')
            //取消订阅的消息
            pubsub.unsubscribe(this.pubId)
        }

    }
</script>
<style scoped>
    .school{
        background-color: skyblue;
        padding: 5px;
    }
</style>

