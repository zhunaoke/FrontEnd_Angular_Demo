本工程给出了一个前后端分离时前端的架构系统
主要采取 nodeJs+express+angularJs+bootStrap模式的结构，利用了bower工具；

本工程具体实现的功能是：

1、实现登陆、退出功能,有设置cookie及cookie的保存时间；
2、实现了页面路由的控制；
3、实现如何通过nodejs从后端给出的接口中取数据，以及angularjs是怎样将数据填充到页面中的；


具体运行步骤：
1、确保安装了编辑器webstorm,及nodejs;
2、打开webstorm编辑器，打开该工程文件；
3、在Terminal 下进行如下步骤：
    1:npm install bower -g :------>全局安装bower
    2:bower install :------>bower安装需要的库文件
    3:npm install :------>npm安装需要的nodejs插件
 4、配置一个nodejs的启动文件：具体要求是：选择nodejs的执行文件：nodejs的安装目录下的node.exe，
   选择工程路径到bin下，选择要运行的js文件即 bin目录下的www.js文件；
 5、点击运行按钮运行node工程；
 6、在浏览器中输入："http://localhost:3000";

 备注：后续会将自动化的构建工具gulp加进去，敬请期待


