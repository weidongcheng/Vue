<template>
    <div>
        <Student name="李四" sex="女"/>
    </div>
</template>
<script>
    //引入School组件
    import Student from "@/components/Student";
    export default {
        name:'App',
        components: {Student}
    }
</script>