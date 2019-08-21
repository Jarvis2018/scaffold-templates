<template>
  <el-dropdown @command="handleCommand">
    <div class="avatar">
      <img :src="url" class="user-img" alt="">
      <span class="user-name">{{name}}</span>
    </div>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="logout">退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'Avatar',
  props: {
    url: {},
    name: {}
  },
  methods: {
    handleCommand (command) {
      switch (command) {
        case 'logout':
          this.$emit('logout')
          break
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .avatar {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0 12px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.025);
    }
    .user-img {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }
    .user-name {
      font-size: 14px;
    }
  }
</style>
