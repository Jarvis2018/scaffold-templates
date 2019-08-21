<template>
  <div class="basic-layout">
    <el-container :class="{ 'app-aside--fixed': fixedAside }">
      <el-aside width="auto" class="app-aside" v-if="navMode === 'left'">
        <side-menu
          :routes="routes"
          router
          :default-active="$route.path"
          :collapse="isCollapse"/>
      </el-aside>
      <el-main class="app-main" :class="{ 'marginTop': fixedHeader }">
        <el-header class="app-header" :class="{ 'app-header--fixed': fixedHeader }">
          <header-items :mode="navMode" @toggle="toggleCollapse"/>
        </el-header>
        <div class="app-content"><router-view/></div>
        <el-footer height="auto" class="app-footer">
          <global-footer></global-footer>
        </el-footer>
      </el-main>
    </el-container>

    <el-button
      type="primary"
      icon="el-icon-setting"
      class="btn-setting"
      @click="dialogVisible = true">
    </el-button>
    <el-dialog
      :visible.sync="dialogVisible"
      width="30%">
      <el-form>
        <el-form-item label="固定 Header">
          <el-switch v-model="fixedHeader"></el-switch>
        </el-form-item>
        <el-form-item label="固定侧边菜单">
          <el-switch v-model="fixedAside"></el-switch>
        </el-form-item>
        <el-form-item label="导航模式">
          <el-radio-group v-model="navMode">
            <el-radio label="left">左侧导航</el-radio>
            <el-radio label="top">顶部导航</el-radio>
          </el-radio-group>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
const SideMenu = () => import('@/components/SideMenu/index.vue')
const HeaderItems = () => import('@/components/HeaderItems/index.vue')
const GlobalFooter = () => import('@/components/GlobalFooter/index.vue')
export default {
  name: 'BasicLayout',
  components: {
    SideMenu,
    HeaderItems,
    GlobalFooter
  },
  data () {
    return {
      isCollapse: false,
      fixedHeader: true,
      fixedAside: true,
      dialogVisible: false,
      /**
       * 导航模式：left,top
       * 默认left左侧导航
        */
      navMode: 'left'
    }
  },
  computed: {
    routes () {
      return this.$router.options.routes
    }
  },
  methods: {
    toggleCollapse (value) {
      this.isCollapse = value
    }
  }
}
</script>
<style lang="scss" scoped>
  .basic-layout {
    background-color: #f0f2f5;
    .el-menu {
      width: 200px;
    }
    .el-menu--collapse {
      width: 64px;
    }
    .el-main {
      padding: 0;
    }

    /*仅固定aside*/
    .app-aside--fixed {
      height: 100vh;
      .app-header {
        position: sticky;
      }
      .app-main {
        margin-top: 0;
      }
    }
    /*仅固定header*/
    .app-header--fixed {
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 1;
    }
    .marginTop {
      margin-top: 60px;
    }
    .app-header {
      padding: 0;
      height: 60px;
      line-height: 60px;
      background-color: #ffffff;
      box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    }
    .app-aside {
      height: 100vh;
      overflow: auto;
      background: #ffffff;
    }
    .app-content {
      padding: 0 20px;
    }
    .app-footer {
      overflow: hidden;
      background-color: #f0f2f5;
      color: rgba(0, 0, 0, 0.65);
    }
    .btn-setting {
      position: absolute;
      top: 240px;
      right: 18px;
      z-index: 100;
    }
  }
</style>
