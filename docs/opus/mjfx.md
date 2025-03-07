---
order: 2
---

# 面经分享移动端+PC端

## 项目地址

PC端：[https://gitee.com/haojiashan/h5-mj-pc](https://gitee.com/haojiashan/h5-mj-pc)
移动端:https://gitee.com/haojiashan/interview-sharing---mobile-app

## 项目介绍

开发面试经验分享的网页PC端和移动端，上面有很多的面试经历，可以去看面试真题。

## PC端作品截图

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; width: 100%;">
    <img src="/mj/login.jpg" alt="" style="width: 100%; height: auto;">
    <img src="/mj/mjindex.jpg" alt="" style="width: 100%; height: auto;">
    <img src="/mj/mjgl.jpg" alt="" style="width: 100%; height: auto;">
    <img src="/mj/mjtj.jpg" alt="" style="width: 100%; height: auto;">
</div>

## 移动端作品截图

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; width: 100%;">
    <img src="/mj-app/login.jpg" alt="" style="width: 100%; height: auto;">
    <img src="/mj-app/mjlb.jpg" alt="" style="width: 100%; height: auto;">
    <img src="/mj-app/mjxq.jpg" alt="" style="width: 100%; height: auto;">
    <img src="/mj-app/user.jpg" alt="" style="width: 100%; height: auto;">
</div>

## 项目技术栈

### PC端框架

- **Vue2.6**：用于构建用户界面的渐进式框架。
- **echartsr**：用于实现主页的表格图渲染。
- **ElementUI**：基于Vue2的UI组件库。

### PC端技术

- **Axios**：用于接收以及发送接口API。
- **Vuex**：快速持久化存储token。
- **Webpack打包优化**：加载 CDN 链接优化echarts、element-ui 等。
- **ESlint规范**：开发同一个项目的团队，每个成员的代码风格都应该一致。。

### 移动端框架

- **Vue2.6**：用于构建用户界面的渐进式框架。
- **PostCSS**：用于实现移动端尺寸适配(vw,rem)。
- **Vant**：基于移动端的UI组件库。

### 移动端技术

- **Axios**：用于接收以及发送接口API。
- **KeepAlive**：利用它来完成滑动记忆的效果。
- **Webpack打包优化**：加载 CDN 链接优化vant等。
- **ESlint规范**：开发同一个项目的团队，每个成员的代码风格都应该一致。。

## 主要职责

在该项目中，我主要负责前端代码开发工作，具体包括以下几个方面：

### 接口对接

- 根据黑马提供的API文档，完成了前端与后端的数据交互。
- 确保数据传输的准确性和稳定性，无错误发生。


### 功能实现

- 根据需求功能，完成了比如注册/登陆，页面列表的渲染收藏喜欢功能的实现等等。
- 确保功能符合产品要求，用户体验流畅。

### 代码优化

- 添加登陆校验/token存储/添加请求响应拦截器/以及导航守卫等等。
- 确保代码结构清晰，易于维护和扩展。

### 问题解决

- 利用报告文件,配合CDN,解决打包文件过大的问题。
- 利用样式穿透解决颜色渲染问题。

通过以上工作，我成功地完成了面经分享网站的开发，确保了项目模拟上线和用户的良好体验。
