## 时时工具包-微信小程序工具

### 安装方式

```shell
npm install @kjts20/tool-weixin-mp
```

### 功能说明

-   请求封装为 httpServer 形式
-   仓库封装为 store 调用
-   事件实例化: Event
-   跳转: goto、back
-   自定义 wxs
-   自定义脚手架
-   同一定义样式

### 前序说明

#### 下载依赖

-   `npm install @kjts20/tool`

#### 初始化小程序

-   使用 TS、scss 为小程序编程语言
-   使用 Tdesign 作为 UI 组件库

### 小程序初始化操作

#### 一、本地化 wxs 与脚手架

-   `./node_modules/.bin/weixin-mp-eject`

#### 二、修改根目录（可选）

-   修改./package.json 的 scripts 中的 project 指令，把 miniprogram 修改为自定义项目名称

#### 三、修改环境变量

-   修改./cli/common.js 中的环境配置（allEnv 变量，填充好 appId、host 等）

#### 四、初始化项目(生成项目配置文件、tsconfig.json)

-   `npm run initp`

#### 五、构建 npm

-   工具 -> 构建 npm

#### 六、切换环境（生成环境变量）

-   `npm run env:dev`

#### 七、在 app.[j|t]s 中初始化项目配置

-   在 App 前面（非 App 内部）添加如下代码

```ts
import { startApp, hideApp } from '@/lib/index';
// 启动app
startApp();
```

-   在 App 的钩子函数 onHide 添加代码：`hideApp();`

```ts
App<IAppOption>({
    ...
    onHide() {
        hideApp();
    }
});
```

#### 八、导入公共样式

-   在 app.[wx|sc]ss 中底一行添加如下样式

```css
@import './miniprogram_npm/@kjts20/tool/wx.wxss';
@import './style/wr-iconfont/iconfont.wxss';

.t-tabs__item--active {
    font-weight: 400 !important;
}
```

#### 九、配置 cli/common.js 中的 swaggerApi 字段，设置文档路径与基础信息获取接口

-   修改./package.json 的 scripts 中的 document 指令，把 miniprogram 修改为自定义项目名称
-   修改 ./cli/config/document.js 文件，修改文档组路径信息、系统基础信息的 url

```shell
npm run document
```

### 开发说明

#### 创建表单页面

请求名称从请求的 service 文件中查找，请求添加名称一般是：xxxAdd，分页请求名称一般是：xxxGetPage

```
// yarn page:form [请求添加名称] [路径名称]
yarn page:form sysMessageAdd  /pages/index3

// yarn page:paging [请求分页名称] [路径名称]
yarn page:form sysMessageGetPage  /pages/index3
//
```

### 注意事项

#### 页面路径变化需要执行： `npm run route` 进行更新路由文件（包括 tabar 列表）

#### app.json 内容变化为了保证格式一致性，也需要执行 `npm run route` 进行更新路由文件与 app.json 文件

#### app.json 中自定义 tabbar 时候，图标使用的 icon 字段

```ts
"tabBar": {
    "custom": true,
    "list": [
        {
            "selectedColor": "#000000",
            "text": "测试",
            "pagePath": "pages/index/index",
            "icon": "home"
        },
        {
            "selectedColor": "#000000",
            "text": "测试2",
            "pagePath": "pages/logs/logs",
            "icon": "user"
        }
    ]
}
```

#### 初始化的部分包含 tabbar，如果不需要需要自定去除

··
