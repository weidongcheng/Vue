<template>
  <div>
    <School/>
    <Student/>
  </div>
</template>

<script>
  //引入组件
import School from '@/components/Student'
import Student from "@/components/Student";

export default {
  name: 'App',
  components: {
    Student,
    School
  }
}
</script>

