# GetInterview
面试题,面试经验总结

## HTML
#### 一.写出 form 的属性和属性分别的作用
```
<form> 元素 表示了文档中的一个区域，这个区域包含有交互控制元件，用来向web服务器提交信息。
```
* 属性及其作用

1>.accept-charset
	一个空格分隔或逗号分隔的列表，这个列表包括了服务器支持的字符编码。
2>.action
	一个处理这个form信息的程序所在的URL(这个值可以被 `<button>` 或者 `<input>` 元素中的 formaction 属性重载)
3>.autocomplete
	用于指示 input 元素是否能够拥有一个默认值，这个默认值是由浏览器自动补全的。
4>.enctype
	当 method 属性值为 post 时, enctype 是提交form给服务器的内容的 MIME 类型 。
	可能的值: application/x-www-form-urlencoded: 如果属性未指定时的默认值;
				multipart/form-data: 这个值用于一个 type 属性设置为 "file" 的 `<input>` 元素
5>.method
	浏览器使用这种 HTTP 方式来提交 form
6>.name
	这个form的名字
7>.target
	名字或者说关键字，用来指示在提交表单之后，在哪里显示收到的回复.
	(_self, _parent, _top) (_blank)
	
#### 二.input 的属性和作用
```
<input> 元素用于为基于Web的表单创建交互式控件，以便接受来自用户的数据。
```
* 属性及其作用
1>.type
	控件类型的显示。如果这个属性没有指定，默认的类型是 text.
2>.accept
	如果该元素的 type 属性的值是file,则该属性表明了服务器端可接受的文件类型；否则它将被忽略.
3>.autofocus
	自动获得焦点	
4>.disabled
	这个布尔属性表示此表单控件不可用。
5>.multiple
	这个属性仅在type属性为email或file的时候生效 ; 否则被忽视.
6>.pattern
	检查控件值的正则表达式
7>.placeholder
	提示用户输入框的作用
8>.readonly
9>.required					

#### 三.浏览器缓存
浏览器缓存是浏览器端用于在本地保存数据并进行快速读取以避免重复资源请求的传输机制的统称.
浏览器的缓存实现机制种类较多,一般可以认为九种: HTTP文件缓存, LocalStorage, SessionStorage, indexDB, Web SQL, Cookie, CacheStorage, Application Cache, Flash缓存

#### 四.浏览器是如何解析


## CSS
#### 一.border-box 属性和区别,主要涉及height和width区别.画图
box-sizing 属性用于更改用于计算元素宽度和高度的默认的 CSS 盒子模型。
```
/* 关键字 值 */
box-sizing: content-box; 默认值,标准盒子模型.width与height只包括内容宽高
box-sizing: border-box; width和height属性包括内容,内边距和边框,但是不包括外边距
```

#### 二.写出position的所有属性和他们的作用
CSS position属性用于指定一个元素在文档中的定位方式
position: 
static | (此时 top, right, bottom, left 和 z-index 属性无效。)
relative | 相对定位,不脱离文档流
absolute | 绝对定位,脱离文档流(绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。)
fixed | 固定定位,脱离文档流(通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置.当元素祖先的 transform  属性非 none 时，容器由视口改为该祖先.)
sticky | 粘性定位是相对定位和固定定位的混合。元素在跨越特定阈值前为相对定位，之后为固定定位。(粘性定位常用于定位字母列表的头部元素)

#### 三.居中的几种方案
```
垂直居中的问题
方式一:(已知宽高)
main {
	position: absolute;
	top: 50%;
	left: 50%;
	margin-top: -3em; /* 6/2 = 3 */ 
	margin-left: -9em; /* 18/2 = 9 */ 
	width: 18em;
	height: 6em;
}

方式二:main {
	position: absolute; 
	top: calc(50% - 3em);
	left: calc(50% - 9em); 
	width: 18em;
	height: 6em;
}

方式三:main {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
}

方式四: 基于视口单位的解决方案
main {
	width: 18em;
	padding: 1em 1.5em;
	margin: 50vh auto 0; 
	transform: translateY(-50%);
}
```

## JS
#### 一.这里有一个 url https://baijiahao.baidu.com/s?id=1583617694892288463&wfr=spider&for=pc 写一个函数 获取 query 的参数和值存放在一个对象中。
```
function getQueryString (url) {
            // 获取问好后面内容
            let newURL = url.split('?')[1];
            // 保存查询对象
            let args = [];
            // 取得内容每一项
            let items = newURL.length ? newURL.split('&') : [];
            let item = null, key = null, value = null;
            for (let i = 0, len = items.length; i < len; i++) {
                item = items[i].split('=');
                console.log(item);
                key = decodeURIComponent(item[0]);
                value = decodeURIComponent(item[1]);
                if (key.length) {
                    args[key] = value;
                }
            }
            return args;
        }
```

#### 二.快排，快排的性能
需要花时间再研究
```
function quickSort (arr) {
	 if (arr.length <= 1) {
	     return arr;
	 }
	 var left = [];
	 var right = [];
	 var base = arr[0];
	 for (var i = 1, len = arr.length; i < len; i++) {
	     // 判断条件
	     if (arr[i] > base) {
	         right.push(arr[i]);
	     } else {
	         left.push(arr[i]);
	     }
	 };
	 return quickSort(left).concat(base, quickSort(right));
 }
 console.log(quickSort([2, 3, 33, -1, 0, 2]));
```

#### 三.手写一个倒计时功能 
考虑点补零操作/倒计时中定时器的使用setTimeout();
1.[参考一](https://github.com/helloyou2012/google-io-countdown)
2.[参考二](https://zhuanlan.zhihu.com/p/20832837)

#### 四.手写一个深浅 clone 有什么优化的方案？
[参考资料](https://github.com/wengjq/Blog/issues/3)


#### 五.闭包和继承,手写继承的几种方式
闭包是指有权访问另一个函数作用域中变量的函数.
创建闭包的常见方式,就是在一个函数内部创建另一个函数.

#### 六.编写add函数 然后 add(1)(2)(3)(4) 输出10 再考虑拓展性
[参考](https://segmentfault.com/q/1010000004342477)

#### 七.利用JS中对象到原始值的转换规则
当一个对象转换成原始值时，先查看对象是否有valueOf方法，如果有并且返回值是一个原始值，
那么直接返回这个值，否则没有valueOf或返回的不是原始值，那么调用toString方法，返回字符串表示.

#### 八.jquery 的 on bind 有啥区别
```
on()和bind()的函数签名如下:
bind(type, [data], fn)  
on(type,[selector],[data],fn) 
```

#### 九.原生 js 实现 jq on 的功能
DOM2级事件模型中规定了事件流的三个阶段：捕获阶段、目标阶段、冒泡阶段，低版本IE（IE8及以下版本）不支持捕获阶段
捕获事件流：Netscape提出的事件流，即事件由页面元素接收，逐级向下，传播到最具体的元素。
冒泡事件流：IE提出的事件流，即事件由最具体的元素接收，逐级向上，传播到页面。


#### 十.事件的委托（代理 Delegated Events）的原理以及优缺点
委托（代理）事件是那些被绑定到父级元素的事件，但是只有当满足一定匹配条件时才会被挪。这是靠事件的冒泡机制来实现的.
[js事件相关的参考资料](http://www.w3cmark.com/2016/439.html)


#### 十一.移动端touch延迟,如何解决
 





## 网络
#### 一.说一下 xss 和 crsf 的含义和区别 怎么解决 xss 问题的
xss: XSS攻击全称跨站脚本攻击
类型: 存储型XSS、反射型XSS、DOM-XSS。
防御: XSS防御—输入输出的过滤和数据转义; X-XSS-Protection 这个head消息头设置主要是用来防止浏览器中的反射性XSS问题的发生.
[参考资料](https://juejin.im/entry/58a598dc570c35006b5cd6b4)

crsf: 跨站请求伪造
一次CSRF攻击的步骤：
	登录受信任的网站A，并在本地生成cookie
	在不登出A的情况下，访问危险网站B
防御的方法：
	Cookie Hashing 所有的表单都包含一个伪随机值
	验证码
	不同的表单包含一个不同的伪随机值


#### 二.axios取消重复请求
用axios的 cancelToken 取消重复的请求

google cloud(用亚马逊的也可以搭建的) 有免费一年的服务 自己搭个 ss 的梯子 速度快还稳定

#### 三.白名单机制
使用黑名单和白名单处理（即“不允许哪些敏感信息”或“只允许哪些信息”，白名单的效果更好但局限性高）；


#### 四.DNS解析的过程


## 前端框架
#### 一.spa 应用的路由设计
参考书[大型JavsScript应用最佳实践指南]中p.94的中寻址和导航


#### 二.vue的双向绑定和生命周期
AngularJS 使用双向绑定，Vue 在不同组件间强制使用单向数据流。这使应用中的数据流更加清晰易懂。
生命周期: beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeDestroy, destroyed

#### 三.vue 通信方式
清楚组件关系: 父子组件, 非父子组件

父子通信: 
	父传子: props
	子传父: 自定义事件

非父子通信:
	事件总线(bus)	

大型数据管理: vuex (它像一副眼镜,你需要使用的时候,你自然知道)


#### 四.vue 的路由怎么实现的 vue 的挂载怎么实现的 el 和 $mount 有啥区别
对于大多数单页面应用，都推荐使用官方支持的 vue-router 库。其实还有其他路由库(如 Page.js 或者 Director);

以vue-router为例讲解路由实现:
1>.使用 router-link 组件来导航.   
2>.router-view路由匹配到的组件将渲染在这里   
3>.定义路由
4>.路由挂载


Vue的`$mount()`为手动挂载，在项目中可用于延时挂载（例如在挂载之前要进行一些其他操作、判断等），之后要手动挂载上。new Vue时，el和`$mount`并没有本质上的不同。


#### 五.vue的独立构建与运行时构建
[参考资料](独立构建 与 运行时构建)
	

## 实际案例问题
#### 一.页面搜索功能的实现
1.前端实现js实时搜索

2.通过后端搜索, 前端显示数据

[参考链接](https://www.cnblogs.com/zhwl/p/3586253.html)

#### 二.一个列表，假设有100000个数据，这个该怎么办？
思考的问题: 该处理是否必须同步完成; 数据是否必须按顺序完成.

1.分页的原理，就是每次服务器端返回一定数目的数据

2.懒加载

3.数组分块技术
基本思路是为要处理的项目创建一个队列,然后使用定时器取出,然后使用定时器取出下一个要处理的项目进行处理,接着再设置另一个定时器.


#### 三.图文混排技术实现
[参考资料](https://www.cnblogs.com/flyromance/p/5042187.html)


#### 四.运营商劫持如何解决

	

## 前端工具
#### 一.gulp 和 webpack 的主要作用
gulp是构建工具，webapck是模块依赖解决方案
[参考资料](https://www.zhihu.com/question/45536395?sort=created)

## 后端
#### 一.node的事件机制




## 非技术问题
#### 一.主要的工作流程
前端是一个承前启后的岗位.
基本的流程是，领导或甲方提出需求，然后产品分析需求，并且根据需求画出原型图，然后根据原型图出设计稿。
出完设计稿团队评审，过后交与前端制作静态页面，然后静态页面，交与设计审核，过后交给开发人员，进行动态数据的添加。
添加完之后，发布测试环境，产品测试领导审核，成功后，直接发布产品环境。或进行版本迭代。
这是整个的一个设计，开发，部署的流程。

[参考链接](https://www.zhihu.com/question/32039469)




https://maimai.cn/article/detail?fid=274522832&from=single_feed&share_user=http%3A%2F%2Fi9.taou.com%2Fmaimai%2Fp%2F5143%2F8950_72_N2Bsq5UlYacTbq-a160


1.https://juejin.im/post/59ec3d50f265da431c6f7339

2.



https://juejin.im/post/59ec3d50f265da431c6f7339

http://caisk.cn/?from=groupmessage&isappinstalled=0#/dairy

