<template>
  <div class="register">
    <h2 class="text-center">注册</h2>
    <p>注册</p>
    <el-form :model="userInfo">
      <el-form-item>
        <el-input type="email" v-model="userInfo.email" placeholder="邮箱"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="email" v-model="userInfo.password" placeholder="至少六位数密码，区分大小写"></el-input>
      </el-form-item>
      <el-form-item>
        <el-input type="email" v-model="userInfo.passwordAgain" placeholder="确认密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 50%">注册</el-button>
        <el-button type="text" class="float-right" @click="handleGoLogin">使用已有帐户登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data () {
    return {
      userInfo: {
        email: '',
        password: '',
        passwordAgain: ''
      }
    }
  },
  methods: {
    handleGoLogin () {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .register {
    width: 388px;
    margin: 0 auto;
    padding-top: 72px;
  }
</style>
