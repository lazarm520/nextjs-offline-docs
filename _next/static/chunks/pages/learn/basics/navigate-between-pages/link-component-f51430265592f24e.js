(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5320],{32965:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/basics/navigate-between-pages/link-component",function(){return c(35390)}])},35390:function(a,b,c){"use strict";c.r(b),c.d(b,{meta:function(){return l},"default":function(){return n}});var d=c(24246),e=c(27378),f=c(65977),g=c(85416),h=c(24945);function i(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function j(a){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}function k(a,b){return(k=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}var l={title:"Navigate Between Pages",courseId:"basics",lessonId:"navigate-between-pages",stepId:"link-component",subtitle:"Link Component"},m={meta:l},n=function(a){"use strict";!function(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&k(a,b)}(q,a);var b,c,e,n,o,p=(n=q,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}(),function(){var a,b,c,d,e=j(n);if(o){var f=j(this).constructor;d=Reflect.construct(e,arguments,f)}else d=e.apply(this,arguments);return b=this,(c=d)&&("object"==((a=c)&&"undefined"!=typeof Symbol&&a.constructor===Symbol?"symbol":typeof a)||"function"==typeof c)?c:(function(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a})(b)});function q(a){var b;return!function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}(this,q),(b=p.call(this,a)).layout=function(a){var b=a.children;return(0,d.jsx)(g.Z,{meta:l,children:b})},b}return b=q,c=[{key:"render",value:function(){var a=this.props,b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.jsxs)(f.XJ,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},m,c),components:b,children:[(0,d.jsxs)(f.XJ,{name:"p",components:b,children:["When linking between pages on websites, you use the ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"<a>"})," HTML tag."]}),(0,d.jsxs)(f.XJ,{name:"p",components:b,children:["In Next.js, you use the ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"Link"})," Component from ",(0,d.jsx)(f.XJ,{name:"a",components:b,parentName:"p",props:{href:"/docs/api-reference/next/link"},children:(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"a",children:"next/link"})})," to wrap the ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"<a>"})," tag. ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"<Link>"})," allows you to do client-side navigation to a different page in the application."]}),(0,d.jsxs)(f.XJ,{name:"h3",components:b,children:["Using ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"h3",children:"<Link>"})]}),(0,d.jsxs)(f.XJ,{name:"p",components:b,children:["First, open ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"pages/index.js"}),", and import the ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"Link"})," component from ",(0,d.jsx)(f.XJ,{name:"a",components:b,parentName:"p",props:{href:"/docs/api-reference/next/link"},children:(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"a",children:"next/link"})})," by adding this line at the top:"]}),(0,d.jsx)(f.XJ,{name:"pre",components:b,props:{className:"language-js"},children:(0,d.jsxs)(f.XJ,{name:"code",components:b,parentName:"pre",props:{className:"language-js"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token keyword module"},children:"import"})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token maybe-class-name"},children:"Link"})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token keyword module"},children:"from"})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token string"},children:"'next/link'"}),"\n"]})}),(0,d.jsxs)(f.XJ,{name:"p",components:b,children:["Then find the ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"h1"})," tag that looks like this:"]}),(0,d.jsx)(f.XJ,{name:"pre",components:b,props:{className:"language-jsx"},children:(0,d.jsxs)(f.XJ,{name:"code",components:b,parentName:"pre",props:{className:"language-jsx"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"<"}),"h1"]})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token attr-name"},children:"className"}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token attr-value"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"="}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"\""}),"title",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"\""})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token plain-text"},children:"\n  Learn "}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"<"}),"a"]})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token attr-name"},children:"href"}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token attr-value"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"="}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"\""}),"https://nextjs.org",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"\""})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token plain-text"},children:"Next.js!"}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"</"}),"a"]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token plain-text"},children:"\n"}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"</"}),"h1"]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),"\n"]})}),(0,d.jsx)(f.XJ,{name:"p",components:b,children:"And change it to:"}),(0,d.jsx)(f.XJ,{name:"pre",components:b,props:{className:"language-jsx"},children:(0,d.jsxs)(f.XJ,{name:"code",components:b,parentName:"pre",props:{className:"language-jsx"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"<"}),"h1"]})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token attr-name"},children:"className"}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token attr-value"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"="}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"\""}),"title",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"\""})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token plain-text"},children:"\n  Read"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token punctuation"},children:"{"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token string"},children:"' '"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token punctuation"},children:"}"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token plain-text"},children:"\n  "}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"<"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token class-name"},children:"Link"})]})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token attr-name"},children:"href"}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token attr-value"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"="}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"\""}),"/posts/first-post",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"\""})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token plain-text"},children:"\n    "}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"<"}),"a"]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token plain-text"},children:"this page!"}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"</"}),"a"]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token plain-text"},children:"\n  "}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"</"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token class-name"},children:"Link"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token plain-text"},children:"\n"}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"</"}),"h1"]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),"\n"]})}),(0,d.jsx)(f.XJ,{name:"blockquote",components:b,children:(0,d.jsxs)(f.XJ,{name:"p",components:b,parentName:"blockquote",children:[(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"{' '}"})," adds an empty space, which is used to divide text over multiple lines."]})}),(0,d.jsxs)(f.XJ,{name:"p",components:b,children:["Next, open ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"pages/posts/first-post.js"})," and replace its content with the following:"]}),(0,d.jsx)(f.XJ,{name:"pre",components:b,props:{className:"language-jsx"},children:(0,d.jsxs)(f.XJ,{name:"code",components:b,parentName:"pre",props:{className:"language-jsx"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token keyword module"},children:"import"})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token maybe-class-name"},children:"Link"})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token keyword module"},children:"from"})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token string"},children:"'next/link'"}),"\n\n",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token keyword module"},children:"export"})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token keyword module"},children:"default"})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token keyword"},children:"function"})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token function"},children:(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token maybe-class-name"},children:"FirstPost"})}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token punctuation"},children:"("}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token punctuation"},children:")"})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token punctuation"},children:"{"}),"\n  ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token keyword"},children:"return"})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token punctuation"},children:"("}),"\n    ",(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"<"})}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token plain-text"},children:"\n      "}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"<"}),"h1"]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token plain-text"},children:"First Post"}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"</"}),"h1"]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token plain-text"},children:"\n      "}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"<"}),"h2"]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token plain-text"},children:"\n        "}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"<"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token class-name"},children:"Link"})]})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token attr-name"},children:"href"}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token attr-value"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"="}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"\""}),"/",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"\""})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token plain-text"},children:"\n          "}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"<"}),"a"]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token plain-text"},children:"Back to home"}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"</"}),"a"]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token plain-text"},children:"\n        "}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"</"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token class-name"},children:"Link"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token plain-text"},children:"\n      "}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"</"}),"h2"]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token plain-text"},children:"\n    "}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"</"})}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),"\n  ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token punctuation"},children:")"}),"\n",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token punctuation"},children:"}"}),"\n"]})}),(0,d.jsxs)(f.XJ,{name:"p",components:b,children:["As you can see, the ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"Link"})," component is similar to using ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"<a>"})," tags, but instead of ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"<a href=\"…\">"}),", you use ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"<Link href=\"…\">"})," and put an ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"<a>"})," tag inside."]}),(0,d.jsx)(f.XJ,{name:"p",components:b,children:"Let’s check to see if it works. You should now have a link on each page, allowing you to go back and forth:"}),(0,d.jsx)(h.Z,{shadow:!0,alt:"Links",oversize:!1,src:"/static/images/learn/navigate-between-pages/links.gif",width:495,height:172})]})}}],i(b.prototype,c),e&&i(b,e),q}(e.Component);n.isMDXComponent=!0}},function(a){a.O(0,[7582,7879,6337,642,5315,5149,4945,9774,2888,179],function(){return a(a.s=32965)}),_N_E=a.O()}])