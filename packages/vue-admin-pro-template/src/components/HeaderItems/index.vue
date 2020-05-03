<template>
  <div :class="currentMode">
    <hamburger v-if="mode === 'left'" v-model="isCollapse" @change="handleToggle"/>

    <breadcrumb/>

    <avatar
      class="header__avatar"
      :url="url"
      :name="userName"
      @logout="handleLogout"/>
  </div>
</template>

<script>
import Hamburger from '@/components/Hamburger/index.vue'
import Avatar from '@/components/Avatar/index.vue'
import Breadcrumb from '@/components/Breadcrumb/index.vue'
import url from '../../assets/images/avatar.png'
import { removeToken } from '@/utils/auth.js'
import { Logout } from '../../api/user'

export default {
  name: 'HeaderItems',
  components: {
    Hamburger,
    Avatar,
    Breadcrumb
  },
  props: {
    mode: {
      type: String,
      default: 'left'
    }
  },
  data () {
    return {
      isCollapse: false,
      url: url,
      userName: '测试'
    }
  },
  computed: {
    //  当前布局模式
    currentMode () {
      const className = 'nav--' + this.mode
      return ['header-items', className]
    }
  },
  methods: {
    // 折叠侧边栏
    handleToggle () {
      this.$emit('toggle', this.isCollapse)
    },
    // 注销登录
    handleLogout () {
      // Logout().then(() => {
      removeToken()
      this.$router.push({ name: 'login' })
      // })
    }
  }
}
</script>

<style scoped>
  .header-items {
    z-index: 999;
    display: flex;
    align-items: center;
  }
  .nav--top {
    padding: 0 20px;
  }
  .header__avatar {
    position: absolute;
    right: 0;
  }
</style>
