<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <button @click="go">测试一下go</button>
    </div>
  </div>
</template>

<script>
  export default {
    name:'Banner',
    methods:{
      back(){
        //后退
        this.$router.back()
      },
      forward(){
        //前进
        this.$router.forward()
      },
      go(){
        //正数:前进几步，负数:后退几步
        this.$router.go(-2)
      }
    }
  }
</script>