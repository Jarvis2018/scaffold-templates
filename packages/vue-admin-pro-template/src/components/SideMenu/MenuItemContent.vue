<script>
import { isExternal } from '@/utils/validate'
export default {
  name: 'MenuItemContent',
  functional: true,
  props: ['title', 'icon', 'href'],
  render (h, context) {
    const { icon, title, href } = context.props
    let vnode = []

    if (icon) {
      vnode.push(<i class="el-icon-"><svg-icon icon-class={icon}></svg-icon></i>)
    }
    if (title) {
      if (isExternal(href)) {
        vnode.push(<a href={href} slot="title" class="item-href">{title}</a>)
      } else {
        vnode.push(<span slot="title" >{title}</span>)
      }
    }
    return vnode
  }
}
</script>

<style scoped>
  .item-href {
    text-decoration: none;
    color: inherit;
  }
</style>
