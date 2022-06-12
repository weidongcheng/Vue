<template>
  <div>
    <li :style="{opacity}">欢迎学习Vue</li>
    <li>news001 <input teype="text"/></li>
    <li>news002 <input teype="text"/></li>
    <li>news003 <input teype="text"/></li>
  </div>
</template>

<script>
  export default {
    name:'News',
    data(){
      return{
        opacity:1
      }
    },
    // mounted() {
    //   this.timer = setInterval(() =>{
    //     console.log('@')
    //     this.opacity -= 0.01
    //     if(this.opacity <=0) this.opacity = 1
    //   },16)
    // },
    // beforeDestroy() {
    //   // console.log('News组件即将被销毁')
    //   clearInterval(this.timer)
    // }
    // 激活
    activated() {
      console.log('News组件被激活了')
      this.timer = setInterval(() =>{
        console.log('@')
        this.opacity -= 0.01
        if(this.opacity <=0) this.opacity = 1
      },16)
    },
    deactivated() {
      console.log('News组件失活了')
      clearInterval(this.timer)
    }
  }
</script>