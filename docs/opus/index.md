# 智慧园区(后台管理)

## 项目地址

[https://gitee.com/haojiashan/heimazhishu](https://gitee.com/haojiashan/heimazhishu)



## 项目介绍

面向园区管理的企业级后台系统,涵盖楼宇管理、企业入驻、车辆计费、合同管理、员工权限分配等核心功能,采用模块化开发,实现前后端分离,通过动态路由和全局指令实现细粒度权限控制。

## 作品截图

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; width: 100%;">
    <img src="/admin/login.jpg" alt="" style="width: 100%; height: 100%;">
    <img src="/admin/workbenchn.jpg" alt="" style="width: 100%; height: auto;">
    <img src="/admin/building.jpg" alt="" style="width: 100%; height: auto;">
    <img src="/admin/hetongxiangqing.jpg" alt="" style="width: 100%; height: auto;">
</div>

## 项目技术栈

### 框架

- **Vue2.6**：用于构建用户界面的渐进式框架。
- **Vue-admin-template**：基于这个后台管理框架开发。
- **echartsr**：用于实现主页的表格图渲染。
- **ElementUI**：基于Vue3的UI组件库。

### 前端技术

- **Vuex**：用于存储token以及记住密码。
- **Axios**：用于接收以及发送接口API。
- **js-cookie**：管理Token。

## 项目亮点
### 1.核心功能开发:

- 主导登陆/企业/楼宇/行车/员工/角色管理模块开发，完成企业信息CRUD、合同管理、分页搜索等核心
功能支持日均千级数据高效交互。


### 2.动态权限体系:

- 设计基于RBAC的权限模型，实现动态路由加载与按钮级权限控制（菜单/操作权限分离），通过Vuex
持久化存储用户权限数据，鉴权响应速度提升40%。


### 3.工程化优化:

- 封装Axios请求拦截器统一处理Token鉴权与错误响应，拦截率100%,结合Vuex+Cookie持久化
Token通过Webpack配置优化首屏加载速度，Lighthouse评分提升至92/100。


### 4.复杂交互实现:

- 定制化上传组件支持多格式文件校验（图片/文档格式校验+5MB限制），结合Element UI实现动态表
单校验（手机号正则校验+自定义校验规则）。


通过以上工作，我成功地完成了智慧园区(后台管理)的开发，确保了项目模拟上线和用户的良好体验。

## 项目演示(迅雷网盘)

[https://pan.xunlei.com/s/VOKg2sxPlgy34KCC_es1BwCqA1?pwd=3f47#](https://pan.xunlei.com/s/VOKg2sxPlgy34KCC_es1BwCqA1?pwd=3f47#)

