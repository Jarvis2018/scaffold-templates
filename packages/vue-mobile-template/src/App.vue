<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  beforeUpdate () {
    this.hideLoading()
  },
  methods: {
    hideLoading () {
      document.getElementById('y-loading').style.display = 'none'
    }
  }
}
</script>

<style lang="scss" scoped>
@import './styles/common/var.scss';
#app {
  min-height: 100vh;
  width: 100vw;
  height: 100vh;
  background-color: $bg-color;
}
</style>
