<template>
    <div class="school">
        <h1>学校名称:{{name}}</h1>
        <h1>学校地址:{{address}}</h1>
    </div>
</template>

<script>
    export default {
        name:'School',
        data(){
            return{
                name:'尚硅谷',
                address:'北京昌平'
            }
        }
    }
</script>

<style scoped>
    .school{
        background-color: gray;
    }
</style>