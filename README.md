<h1 align="center">Spug</h1>

<div align="center">

Spug是面向中小型企业设计的轻量级无Agent的自动化运维平台，整合了主机管理、主机批量执行、主机在线终端、应用发布部署、在线任务计划、配置中心、监控、报警等一系列功能。

</div>

- 官网地址：https://www.spug.dev
- 使用文档：https://www.spug.dev/docs/about-spug/
- 更新日志：https://www.spug.dev/docs/change-log/
- 常见问题：https://www.spug.dev/docs/faq/

## 演示环境

演示地址：https://demo.spug.dev
```
演示账号: admin 
演示密码：spug
```


## 特性

- **批量执行**: 主机命令在线批量执行
- **在线终端**: 主机支持浏览器在线终端登录
- **文件管理**: 主机文件在线上传下载
- **任务计划**: 灵活的在线任务计划
- **发布部署**: 支持自定义发布部署流程
- **配置中心**: 支持KV、文本、json等格式的配置
- **监控中心**: 支持站点、端口、进程、自定义等监控
- **报警中心**: 支持短信、邮件、钉钉、微信等报警方式
- **优雅美观**: 基于 Ant Design 的UI界面
- **开源免费**: 前后端代码完全开源


## 环境

* Python 3.6+
* Django 2.2
* Node 12.14
* React 16.11

## 安装

[官方文档](https://spug.dev/docs/install/)

更多使用帮助请参考 [使用文档](https://www.spug.dev/docs/host-manage/)。

## 推荐项目
[Yearning — MYSQL 开源SQL语句审核平台](https://github.com/cookieY/Yearning)


## 报错
1、
```
  File "/root/spug/spug_api/venv/lib64/python3.6/site-packages/django/db/backends/mysql/operations.py", line 146, in last_executed_query
    query = query.decode(errors='replace')
AttributeError: 'str' object has no attribute 'decode'
```
解决办法：
注释掉下面两行
```
if query is not None:
          query = query.decode(errors='replace')
```
2、 python manage.py makemigrations初始化数据库，提示No changes detected
在app下创建migrations文件夹