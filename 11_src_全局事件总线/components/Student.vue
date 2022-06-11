<template>
    <div class="student">
        <h2>学生姓名:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <button @click="sendStudentName">把学生名传给School组件</button>
    </div>
</template>

<script>

    export default {
        name:'Student',
        data(){
            return{
                name:'张三',
                sex:'男',
            }
        },
        mounted() {
            // console.log('Student',this.x)
        },
        methods:{
            sendStudentName(){
                this.$bus.$emit('hello',this.name)
            }
        },
        beforeDestroy() {
            this.$bus.$off('hello')
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

