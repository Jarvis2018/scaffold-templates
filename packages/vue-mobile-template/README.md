# vue-mobile-template

> vue H5项目模板，UI框架基于<a href="https://youzan.github.io/vant/#/zh-CN/">vant</a>

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### 构建测试环境
```
yarn build:qa
```

### 构建生产环境
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### 环境变量
```
NODE_ENV // build环境
VUE_APP_TARGET // 构建环境
VUE_APP_PATH_NAME // path name (项目部署目录)
```

## vconsole
> 默认只在测试环境，开发环境和生产环境关闭

## 内置样式

### flex布局
> 提示

当我们写这些跟flex相关的类名时，总应该把m-flex-row或者m-flex-col写在class多个类名的左边，因为m-flex-row,m-flex-col是一个集合类，如果你不想要其中的某个属性，可以通过右边的类名覆盖它。

1.总超级

.m-flex-row,.m-flex-col

2.子元素

.m-flex-row--top,.m-flex-row--left,.m-flex-row--wrap,.m-flex-row--center

.m-flex-col--start


### 文字省略
m-line-1,m-line-2,m-line-3,m-line-4,m-line-5五个类名在文字超出内容盒子时，分别只显示一行、两行、三行、四行、五行+省略号。

```html
<div class="m-line-1">
    是日也，天朗气清，惠风和畅，仰观宇宙之大，俯察品类之盛，所以游目骋怀，足以极视听之娱，信可乐也
</div>
```

## 内外边距
项目中定义了一套内外边距的类名，调用简单，类似m-padding-x、m-margin-left-x等，这里的x取值规则如下：

0-60之间的偶数

类名的取值有如下：

* m-padding-x
* m-padding-left-x
* m-padding-top-x
* m-padding-right-x
* m-padding-bottom-x


* m-margin-x
* m-margin-left-x
* m-margin-top-x
* m-margin-right-x
* m-margin-bottom-x
