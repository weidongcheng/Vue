<template>
  <li class="item" @click="handleDelete">{{content}}</li>
</template>

<script>
export default {
  props: ['content', 'index'],
  methods: {
    handleDelete () {
      this.$emit('delete', this.index)
    }
  }
}
</script>


<style scoped>
  .item {
    color: green;
  }
</style>
