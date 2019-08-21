<template>
  <div class="user-layout">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'UserLayout'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .user-layout {
    height: 100vh;
    background-image: url("../assets/images/background.svg");
    background-repeat: no-repeat;
    background-color: #f0f2f5;
    background-size: 100%;
    background-position: center 110px;
    overflow: auto;
  }
</style>
