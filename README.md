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

## 网络

## 前端框架
#### 一.spa 应用的路由设计
参考书[大型JavsScript应用最佳实践指南]中p.94的中寻址和导航


#### 二.vue的双向绑定和生命周期
AngularJS 使用双向绑定，Vue 在不同组件间强制使用单向数据流。这使应用中的数据流更加清晰易懂。
生命周期: beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeDestroy, destroyed

## 前端工具
#### 一.gulp 和 webpack 的主要作用
gulp是构建工具，webapck是模块依赖解决方案
[参考资料](https://www.zhihu.com/question/45536395?sort=created)



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

