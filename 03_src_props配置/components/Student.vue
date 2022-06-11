<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>学生姓名:{{name}}</h2>
        <h2>学生性别:{{sex}}</h2>
        <h2>学生年龄:{{myAge+1}}</h2>
        <button @click="updateAge">尝试修改年龄</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data(){
            console.log(this)
            return{
                msg:'我是一个尚硅谷的学生',
                myAge:this.age
            }
        },
        methods:{
            updateAge(){
                this.myAge++
            }
        },
        props:['name','sex','age'], //简单声明接收

        //接收的同时对类型进行限制
        // props:{
        //     name:String,
        //     sex:String,
        //     age:Number
        // }

        //接收的同时对类型进行限制，对默认值的指定+必要性的限制
        // props:{
        //     name:{
        //         type:String,//name的类型字符串
        //         required:true,//名字是必传的
        //     },
        //     sex:{
        //         type:String,
        //         required: true
        //     },
        //     age:{
        //         type:Number,
        //         default:99//默认值
        //     }
        // }
    }
</script>

