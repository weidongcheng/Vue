<template>
  <div>
    <li>news001 <input teype="text"/></li>
    <li>news002 <input teype="text"/></li>
    <li>news003 <input teype="text"/></li>
  </div>
</template>

<script>
  export default {
    name:'News',
    beforeDestroy() {
      console.log('News组件即将被销毁')
    }
  }
</script>