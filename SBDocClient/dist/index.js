webpackJsonp([1],{129:function(t,e,n){(function(t,e){var i=n(8),o=n(68);t.use(o);var a=new t({el:"#app",data:{dis:[{title:"DOClever是我目前用到过最好的一个接口管理平台",name:"iOS开发者李续续"},{title:"有了DOClever，和前端的沟通都顺畅了很多",name:"JAVA程序员张洋"},{title:"使用DOClever可以让我和后端的数据无缝衔接，再也停不下来",name:"前端工程师李彩凤"}],isLogin:!!e.get("id"),opts:{start:0,dir:"v",duration:500,beforeChange:function(t,e){a.bShowNext=6!=e},afterChange:function(t,e){}},bShowNext:!0},components:{mainnav:i},methods:{start:function(){this.isLogin?location.href="project/project.html":location.href="login/login.html"},moveNext:function(){this.$refs.example.$fullpage.moveNext()}}})}).call(e,n(3),n(2))},68:function(t,e,n){(function(e){!function(e,n){t.exports=n()}(0,function(){"use strict";function t(e,n,i){e&&e.forEach(function(e){var o=e.context;o&&o.$emit.apply(o,[n].concat(i)),t(e.children,n,i)})}function n(t,e,n,i){t.addEventListener?t.addEventListener(e,n,!!i):t.attachEvent("on"+e,n,!!i)}var i=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),a=function(){function e(t,n,o){var a=this;i(this,e);var s=this;this.assignOpts(n),this.vnode=o,this.vm=o.context,this.curIndex=this.opts.start,this.startY=0,this.opts.movingFlag=!1,this.el=t,this.el.classList.add("fullpage-wp"),this.parentEle=this.el.parentNode,this.parentEle.classList.add("fullpage-container"),this.pageEles=this.el.children,this.total=this.pageEles.length,this.initScrollDirection(),this.initEvent(t),window.setTimeout(function(){a.resize(),0==s.curIndex?s.toogleAnimate(s.curIndex):s.moveTo(s.curIndex,!1)},0)}return o(e,[{key:"resize",value:function(){this.width=this.opts.width||this.parentEle.offsetWidth,this.height=this.opts.height||this.parentEle.offsetHeight;for(var t=0;t<this.pageEles.length;t++){var e=this.pageEles[t];e.setAttribute("data-id",t),e.classList.add("page"),e.style.height=this.height+"px"}}},{key:"setOptions",value:function(t){this.assignOpts(t,this.opts)}},{key:"toogleAnimate",value:function(e){t(this.vnode.children,"toogle.animate",e)}},{key:"assignOpts",value:function(t,n){n=n||e.defaultOptions,t=t||{};for(var i in t)t.hasOwnProperty(i)&&(n[i]=t[i]);this.opts=n}},{key:"initScrollDirection",value:function(){"v"!==this.opts.dir&&this.el.classList.add("fullpage-wp-h")}},{key:"initEvent",value:function(t){var e=this,i=this;if(i.prevIndex=i.curIndex,"ontouchstart"in document)t.addEventListener("touchstart",function(t){if(i.opts.movingFlag)return!1;i.startX=t.targetTouches[0].pageX,i.startY=t.targetTouches[0].pageY}),t.addEventListener("touchend",function(t){if(i.opts.movingFlag)return!1;var e=(i.curIndex,i.opts.dir),n="v"===e?(t.changedTouches[0].pageY-i.startY)/i.height:(t.changedTouches[0].pageX-i.startX)/i.width,o=n>i.opts.der?-1:n<-i.opts.der?1:0,a=o+i.curIndex;i.moveTo(a,!0)});else{var o=!1;n(t,"mousedown",function(t){if(i.opts.movingFlag)return!1;o=!0,i.startX=t.pageX,i.startY=t.pageY}),n(t,"mouseup",function(t){o=!1}),n(t,"mousemove",function(t){if(t.preventDefault(),i.opts.movingFlag||!o)return!1;var e=(i.curIndex,i.opts.dir),n="v"===e?(t.pageY-i.startY)/i.height:(t.pageX-i.startX)/i.width,a=n>i.opts.der?-1:n<-i.opts.der?1:0,s=a+i.curIndex;i.moveTo(s,!0)});var a=void 0,s=!0;n(t,"mousewheel",function(t){if(console.log("mousewheel"),i.opts.movingFlag)return!1;if(s){s=!1,clearTimeout(a),a=setTimeout(function(){s=!0},1200);var e=(i.curIndex,i.opts.dir),n="v"===e?t.deltaY:t.deltaX,o=n>i.opts.der?1:n<-i.opts.der?-1:0,r=o+i.curIndex;i.moveTo(r,!0)}})}n(t,"webkitTransitionEnd",function(){i.opts.afterChange(i.prevIndex,i.nextIndex),i.opts.movingFlag=!1}),n(window,"resize",function(){t.offsetHeight!=i.height&&e.resize()})}},{key:"move",value:function(t){var e="0px",n="0px";"v"===this.opts.dir?n=t+"px":e=t+"px",this.el.style.cssText+=";-webkit-transform : translate3d("+e+", "+n+", 0px);transform : translate3d("+e+", "+n+", 0px);"}},{key:"moveTo",value:function(t,e){var n=this,i=this;if(Math.min(Math.max(t,0),i.total)!=i.curIndex){if(t>=0&&t<i.total)this.curIndex=t;else{if(!i.opts.loop)return void(i.curIndex=t<0?0:i.total-1);t=i.curIndex=t<0?i.total-1:0}var o="v"===i.opts.dir?t*-i.height:t*-i.width;i.nextIndex=t,i.opts.movingFlag=!0;if(!1===i.opts.beforeChange(i.prevIndex,i.nextIndex))return i.opts.movingFlag=!1,!1;e?i.el.classList.add("anim"):i.el.classList.remove("anim"),i.move(o);var a=function(){i.opts.afterChange(i.prevIndex,i.nextIndex),i.opts.movingFlag=!1};window.setTimeout(function(){i.prevIndex=t,n.toogleAnimate(t),e||a()},i.opts.duration)}}},{key:"movePrev",value:function(){this.moveTo(this.curIndex-1,!0)}},{key:"moveNext",value:function(){this.moveTo(this.curIndex+1,!0)}}]),e}();a.defaultOptions={start:0,duration:500,loop:!1,dir:"v",der:.1,movingFlag:!1,beforeChange:function(t){},afterChange:function(t){}};var s=function(){function t(e,n,o){i(this,t);var a=this,s=o.context,r=n.value;e.style.opacity="0",s.$on("toogle.animate",function(t){t===+e.parentNode.getAttribute("data-id")?a.addAnimated(e,r):(e.style.opacity="0",a.removeAnimated(e,r))})}return o(t,[{key:"addAnimated",value:function(t,e){var n=e.delay||0;t.classList.add("animated"),window.setTimeout(function(){t.style.opacity="1",t.classList.add(e.value)},n)}},{key:"removeAnimated",value:function(t,e){var n=t.getAttribute("class");n&&n.indexOf("animated")>-1&&t.classList.remove(e.value)}}]),t}(),r={install:function(t,e){t.directive("fullpage",{inserted:function(t,e,n){var i=e.value||{};t.$fullpage=new a(t,i,n)},componentUpdated:function(t,e,n){var i=e.value||{};t.$fullpage.setOptions(i)}}),t.directive("animate",{inserted:function(t,e,n){var i=e||{};t.$animate=new s(t,i,n)}})}};return window.Vue&&(window.VueFullpage=r,e.use(r)),r})}).call(e,n(3))}},[129]);