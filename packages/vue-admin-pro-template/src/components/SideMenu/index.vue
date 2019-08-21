<script>
import path from 'path'
import MenuItemContent from './MenuItemContent.vue'
export default {
  name: 'SideMenu',
  inheritAttrs: false,
  props: {
    routes: {
      type: Array,
      default: () => []
    }
  },
  components: {
    MenuItemContent
  },
  methods: {
    // 递归创建元素
    recursionCreateElement (routes) {
      return routes.map((item, index) => {
        if (!item.hidden && item.children && item.children.length > 1) {
          return (
            <el-submenu index={this.resolvePath(item.path)}>
              <menu-item-content slot="title" title={item.meta.title} icon={item.meta.icon} href={item.path}/>
              {this.recursionCreateElement(item.children)}
            </el-submenu>
          )
        } else if (!item.hidden && item.children && item.children.length === 1 && !item.children[0].hidden) {
          return (
            <el-menu-item index={this.resolvePath(item.path)} route={{ path: item.path }}>
              <menu-item-content title={item.children[0].meta.title} icon={item.children[0].meta.icon} href={item.path}/>
            </el-menu-item>
          )
        } else if (!item.hidden) {
          return (
            <el-menu-item index={this.resolvePath(item.path)} route={{ path: item.path }}>
              <menu-item-content title={item.meta.title} icon={item.meta.icon} href={item.path}/>
            </el-menu-item>
          )
        }
      })
    },
    resolvePath (routePath) {
      return path.resolve('', routePath)
    }
  },
  render (h) {
    let $attrs = this.$attrs
    return (
      <el-menu attrs={ $attrs }>
        {
          this.recursionCreateElement(this.routes)
        }
      </el-menu>
    )
  }
}
</script>
