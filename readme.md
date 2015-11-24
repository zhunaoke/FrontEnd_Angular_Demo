本工程给出了一个前后端分离时前端的架构系统
主要采取 nodeJs+express+angularJs+bootStrap模式的结构，利用了bower工具；

本工程具体实现的功能是：

1、实现登陆、退出功能,有设置cookie及cookie的保存时间；
2、实现了页面路由的控制；
3、实现如何通过nodejs从后端给出的接口中取数据，以及angularjs是怎样将数据填充到页面中的；
4、使用轻量级的前端自动化构建工具gulp对工程进行自动化构建；

具体运行步骤：
1、确保安装了编辑器webstorm,及nodejs;
2、打开webstorm编辑器，打开该工程文件；
3、在Terminal 下进行如下步骤：
    1:npm install bower -g :------>全局安装bower
    2:npm install gulp -g:-------->全局安装gulp自动化构建工具
    3:npm install bower --save-dev:安装到本项目工程中
    4:npm install gulp --save-dev:安装到本项目工程中
    5:bower install :------>bower安装需要的库文件
    6:npm install :------>npm安装需要的nodejs插件
    7:gulp:------->执行gulp命令，进行css/js/img等的压缩(index.html里已使用压缩后的文件名)
 4、配置一个nodejs的启动文件：具体要求是：选择nodejs的执行文件：n安装目录下的node.exe，
   选择工程路径到bin下，选择要运行的js文件即 bin目录下的www.js文件；
 5、点击运行按钮运行node工程；
 6、在浏览器中输入："http://localhost:3000";


备注：目前没有将angularjs相关的js文件进行压缩，看网上说可以通过下列地址中所说的方法进行整改：
http://blog.csdn.net/kaosini/article/details/38421521?utm_source=tuicool&utm_medium=referral
 但是经测试后，我发现使用$cookies拿不到cookie中的内容，此整改方法还需待改进研究，后续深究后再解决此问题；


