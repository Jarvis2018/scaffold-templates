<template>
  <div>
    <h1>404</h1>
    <el-button @click="handleGoHome">返回首页</el-button>
  </div>
</template>

<script>
export default {
  name: 'Global404',
  methods: {
    handleGoHome () {
      this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
