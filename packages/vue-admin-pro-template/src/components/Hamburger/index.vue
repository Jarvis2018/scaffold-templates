<template>
    <div class="hamburger" @click.stop="handleClick">
      <i class="el-icon-s-fold" v-show="!collapse"></i>
      <i class="el-icon-s-unfold" v-show="collapse"></i>
    </div>
</template>

<script>
export default {
  name: 'Hamburger',
  props: {
    value: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      collapse: this.value
    }
  },
  watch: {
    value (value) {
      this.collapse = value
      this.handleToggle()
    }
  },
  methods: {
    handleClick () {
      this.collapse = !this.collapse
      this.handleToggle()
    },
    handleToggle () {
      this.$emit('change', this.collapse)
      this.$emit('input', this.collapse)
    }
  }
}
</script>

<style scoped lang="scss">
  .hamburger {
    display: inline-block;
    font-size: 22px;
    cursor: pointer;
    padding: 0 24px;
    &:hover {
      background-color: rgba(0, 0, 0, 0.025);
     }
  }
</style>
