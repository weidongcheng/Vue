<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDOM" ref="btn">点我提示上方DOM元素</button>
        <School ref="sch"/>
    </div>
</template>
<script>
    //引入School组件
    import School from "@/components/Student";
    export default {
        name:'App',
        components: {School},
        data(){
            return{
                msg:'欢迎学习Vue'
            }
        },
        methods:{
            showDOM(){
                console.log(this.$refs.title)//真实DOM元素
                console.log(this.$refs.btn)//真实DOM元素
                console.log(this.$refs.sch)//School的组件实例对象(vc)
            }
        }
    }
</script>