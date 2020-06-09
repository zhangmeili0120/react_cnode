# react-cnode实战项目（2020-6-5）
## 资源参考
- https://github.com/motao314/React_cNode
## 技术栈
- react
- react-router-dom
- redux
- react-redux
- redux-thunk
- axios
- antd

## create-react-app 项目 引入antd
antd官网最新提供的：在 create-react-app 中使用，引入less后会报错。找到一个插件 **[craco-antd](https://www.npmjs.com/package/craco-antd)**

craco-antd包括：支持less 通过craco-less;  babel-plugin-import 按需引入antd;  很方便的方式去配置主题
### 安装依赖
```
yarn add @craco/craco craco-less craco-antd antd
```
### 自定义主题颜色
> [这有一份所有主题配置列表文件](https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less)

自定义主题有2种方式:

一. 根目录下的文件 antd.customize.less 中配置

在你的文件根目录下新建文件 antd.customize.less
```javascript
@primary-color: #1da57a;
@link-color: #1da57a;
```

二. 根目录下的 craco.config.js 配置 customizeTheme 对象

在你的文件根目录下新建文件 craco.config.js


```javascript
const CracoAntDesignPlugin = require("craco-antd");
 
module.exports = {
  plugins: [
    {
      plugin: CracoAntDesignPlugin,
      options: {
        customizeTheme: {
          "@primary-color": "#1DA57A",
          "@link-color": "#1DA57A"
        }
      }
    }
  ]
};
```

### 修改css文件
修改 src/App.css，在文件顶部引入 antd/dist/antd.css。

`@import '~antd/dist/antd.less';`

### 引入 button 组件
```javascript
import React from 'react';
import { Button } from 'antd';
import './App.less';

const App = () => (
  <div className="App">
    <Button type="primary">Button</Button>
  </div>
);

export default App;
```
可以看到页面上的button是从默认的蓝色的变成了绿色的，然后可以愉快的开始业务编码了。

## 数据来源
[仿写页面-cnode官网](https://cnodejs.org)

[cnode数据-官方开放api](https://cnodejs.org/api)

## 业务编码之...

### 页面
- 首页（主题列表）
- 主题详情
- 用户详情
- 关于 (静态数据)
- 教程 (静态数据)

### 路由
- 项目需要划分2块路由，全局路由(首页/关于/教程/用户页/主题详情) 和 首页路由(全部/精华/问答/分享/招聘/测试)
- 全局路由先匹配出首页面 (attention, 这里不可用exact): <Route path="/index" component = {HomePage} />
- 首页面HomePage 再 展示出路由渲染首页面下不同类型的页面 <Route path="/index/:type" component={HomeList} />


## 版本 branchs
- simpleVersion 未使用redux
- reduxVersion1 使用redux + class
- reduxVersion2 使用redux + hooks