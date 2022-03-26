(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9227],{67045:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/basics/dynamic-routes/polishing-index-page",function(){return c(23569)}])},23569:function(a,b,c){"use strict";c.r(b),c.d(b,{meta:function(){return l},"default":function(){return n}});var d=c(24246),e=c(27378),f=c(65977),g=c(85416),h=c(24945);function i(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function j(a){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}function k(a,b){return(k=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}var l={title:"Dynamic Routes",courseId:"basics",lessonId:"dynamic-routes",stepId:"polishing-index-page",subtitle:"Polishing the Index Page"},m={meta:l},n=function(a){"use strict";!function(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&k(a,b)}(q,a);var b,c,e,n,o,p=(n=q,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}(),function(){var a,b,c,d,e=j(n);if(o){var f=j(this).constructor;d=Reflect.construct(e,arguments,f)}else d=e.apply(this,arguments);return b=this,(c=d)&&("object"==((a=c)&&"undefined"!=typeof Symbol&&a.constructor===Symbol?"symbol":typeof a)||"function"==typeof c)?c:(function(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a})(b)});function q(a){var b;return!function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}(this,q),(b=p.call(this,a)).layout=function(a){var b=a.children;return(0,d.jsx)(g.Z,{meta:l,children:b})},b}return b=q,c=[{key:"render",value:function(){var a=this.props,b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.jsxs)(f.XJ,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},m,c),components:b,children:[(0,d.jsxs)(f.XJ,{name:"p",components:b,children:["Next, let’s update our index page (",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"pages/index.js"}),"). We need to add links to each post page using the ",(0,d.jsx)(f.XJ,{name:"a",components:b,parentName:"p",props:{href:"/docs/api-reference/next/link"},children:(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"a",children:"Link"})})," component."]}),(0,d.jsxs)(f.XJ,{name:"p",components:b,children:["Open ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"pages/index.js"})," and add the following imports at the top of the file for ",(0,d.jsx)(f.XJ,{name:"a",components:b,parentName:"p",props:{href:"/docs/api-reference/next/link"},children:(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"a",children:"Link"})})," and ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"Date"}),":"]}),(0,d.jsx)(f.XJ,{name:"pre",components:b,props:{className:"language-js"},children:(0,d.jsxs)(f.XJ,{name:"code",components:b,parentName:"pre",props:{className:"language-js"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token keyword module"},children:"import"})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token maybe-class-name"},children:"Link"})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token keyword module"},children:"from"})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token string"},children:"'next/link'"}),"\n",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token keyword module"},children:"import"})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token known-class-name class-name"},children:"Date"})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token keyword module"},children:"from"})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token string"},children:"'../components/date'"}),"\n"]})}),(0,d.jsxs)(f.XJ,{name:"p",components:b,children:["Then, near the bottom of the ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"Home"})," component in the same file, replace the ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"li"})," tag with the following:"]}),(0,d.jsx)(f.XJ,{name:"pre",components:b,props:{className:"language-jsx"},children:(0,d.jsxs)(f.XJ,{name:"code",components:b,parentName:"pre",props:{className:"language-jsx"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"<"}),"li"]})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token attr-name"},children:"className"}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token script language-javascript"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token script-punctuation punctuation"},children:"="}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"{"}),"utilStyles",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"."}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token property-access"},children:"listItem"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"}"})]})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token attr-name"},children:"key"}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token script language-javascript"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token script-punctuation punctuation"},children:"="}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"{"}),"id",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"}"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token plain-text"},children:"\n  "}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"<"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token class-name"},children:"Link"})]})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token attr-name"},children:"href"}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token script language-javascript"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token script-punctuation punctuation"},children:"="}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"{"}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token template-string"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token template-punctuation string"},children:"`"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token string"},children:"/posts/"}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token interpolation"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token interpolation-punctuation punctuation"},children:"${"}),"id",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token interpolation-punctuation punctuation"},children:"}"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token template-punctuation string"},children:"`"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"}"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token plain-text"},children:"\n    "}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"<"}),"a"]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token punctuation"},children:"{"}),"title",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token punctuation"},children:"}"}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"</"}),"a"]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token plain-text"},children:"\n  "}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"</"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token class-name"},children:"Link"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token plain-text"},children:"\n  "}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"<"}),"br"]})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"/>"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token plain-text"},children:"\n  "}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"<"}),"small"]})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token attr-name"},children:"className"}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token script language-javascript"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token script-punctuation punctuation"},children:"="}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"{"}),"utilStyles",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"."}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token property-access"},children:"lightText"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"}"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token plain-text"},children:"\n    "}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"<"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token class-name"},children:"Date"})]})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token attr-name"},children:"dateString"}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token script language-javascript"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token script-punctuation punctuation"},children:"="}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"{"}),"date",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"}"})]})," ",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"/>"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token plain-text"},children:"\n  "}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"</"}),"small"]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token plain-text"},children:"\n"}),(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token tag"},children:[(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token tag"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"</"}),"li"]}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:">"})]}),"\n"]})}),(0,d.jsxs)(f.XJ,{name:"p",components:b,children:["If you go to ",(0,d.jsx)(f.XJ,{name:"a",components:b,parentName:"p",props:{href:"http://localhost:3000"},children:"http://localhost:3000"}),", the page now has links to each article:"]}),(0,d.jsx)(h.Z,{shadow:!0,alt:"Links",oversize:!1,src:"/static/images/learn/dynamic-routes/links.png",width:576,height:236}),(0,d.jsx)(f.XJ,{name:"blockquote",components:b,children:(0,d.jsxs)(f.XJ,{name:"p",components:b,parentName:"blockquote",children:["If something is not working, make sure your code ",(0,d.jsx)(f.XJ,{name:"a",components:b,parentName:"p",props:{href:"https://github.com/vercel/next-learn/tree/master/basics/dynamic-routes-starter"},children:"looks like this"}),"."]})}),(0,d.jsxs)(f.XJ,{name:"p",components:b,children:["That’s it! Before we wrap up this lesson, let’s talk about some tips for ",(0,d.jsx)(f.XJ,{name:"a",components:b,parentName:"p",props:{href:"/docs/routing/dynamic-routes"},children:"dynamic routes"})," on the next page."]})]})}}],i(b.prototype,c),e&&i(b,e),q}(e.Component);n.isMDXComponent=!0}},function(a){a.O(0,[7582,7879,6337,642,5315,5149,4945,9774,2888,179],function(){return a(a.s=67045)}),_N_E=a.O()}])