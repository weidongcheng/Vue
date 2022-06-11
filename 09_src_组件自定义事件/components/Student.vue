<template>
    <div class="student">
        <h2>学生姓名:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <h2>当前求和为: {{num}}</h2>
        <button @click="add">点位num++</button>
        <button @click="sendStudentName">把学生名给App</button>
        <button @click="unbind">解绑atguigu事件</button>
        <button @click="death">销毁当前Student组件实例（vc）</button>
    </div>
</template>

<script>

    export default {
        name:'Student',
        data(){
            return{
                name:'张三',
                sex:'男',
                num:0
            }
        },
        methods:{
            add(){
                console.log("add被调用了")
              this.num++
            },
            sendStudentName(){
                //触发Student组件实例对象身上的atguigu事件
                this.$emit('atguigu',this.name,666,888,900)
                // this.$emit('click')
                // this.$emit('demo')
            },
            unbind(){
                this.$off('atguigu')//解绑一个自定义事件
                // this.$off(['atguigu','demo'])//解绑多个自定义事件
                // this.$off()//解绑所有自定义事件
            },
            death(){
                this.$destroy()//销毁了当前Student组件实例，销毁后所有Student的实例的自定义事件全都不奏效了。
            }
        }
    }
</script>
<style lang="less">
    .student{
        background-color: pink;
        padding: 5px;
        margin-top: 30px;
    }
</style>

