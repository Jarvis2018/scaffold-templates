<template>
  <el-breadcrumb>
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item
      v-for="match in currentMatched"
      :key="match.path">
      {{match.meta.title}}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'Breadcrumb',
  props: ['route'],
  data () {
    return {
    }
  },
  computed: {
    // 当前匹配的路由
    currentMatched () {
      const matched = this.$route.matched.filter(item => {
        if (item.meta.title && item.path && item.path !== '/') {
          return item
        }
      })
      return matched
    }
  }
}
</script>
