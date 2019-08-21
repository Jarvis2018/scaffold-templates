<template>
  <div class="login">
    <h2>登录</h2>
    <el-form :model="userInfo">
      <el-form-item>
        <el-input
          placeholder="用户名：随便填"
          prefix-icon="el-icon-user"
          v-model="userInfo.name">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          placeholder="密码：随便填"
          prefix-icon="el-icon-user"
          v-model="userInfo.password">
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox class="float-left">自动登录</el-checkbox>
        <el-button type="text" class="float-right">忘记密码</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" style="width: 100%" :loading="loading" @click="handleLogin">登录</el-button>
      </el-form-item>
      <el-form-item>
        <el-button type="text" class="float-right" @click="handleRegister">注册账户</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { getUseInfo } from '@/api/user.js'
import { setToken } from '@/utils/auth.js'

export default {
  name: 'Login',
  data () {
    return {
      userInfo: {
        name: '',
        password: ''
      },
      loading: false
    }
  },
  methods: {
    handleRegister () {
      this.$router.push('/user/register')
    },
    handleLogin () {
      // this.loading = true
      // getUseInfo(this.userInfo).then(res => {
      //   let data = res.data.data
      //   setToken(data.token)
      //   this.loading = false
      //   this.$router.push({ path: '/' })
      // }).catch(() => {
      //   this.loading = false
      // })
      setToken('admin')
      this.$router.push({ path: '/' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .login {
    width: 388px;
    margin: 0 auto;
    padding-top: 72px;
    text-align: center;
  }
</style>
