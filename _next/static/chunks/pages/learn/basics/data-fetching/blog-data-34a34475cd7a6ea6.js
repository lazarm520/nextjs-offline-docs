(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1822],{2576:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/basics/data-fetching/blog-data",function(){return c(91483)}])},91483:function(a,b,c){"use strict";c.r(b),c.d(b,{meta:function(){return l},"default":function(){return n}});var d=c(24246),e=c(27378),f=c(65977),g=c(85416),h=c(24945);function i(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function j(a){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}function k(a,b){return(k=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}var l={title:"Pre-rendering and Data Fetching",courseId:"basics",lessonId:"data-fetching",stepId:"blog-data",subtitle:"Blog Data"},m={meta:l},n=function(a){"use strict";!function(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&k(a,b)}(q,a);var b,c,e,n,o,p=(n=q,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}(),function(){var a,b,c,d,e=j(n);if(o){var f=j(this).constructor;d=Reflect.construct(e,arguments,f)}else d=e.apply(this,arguments);return b=this,(c=d)&&("object"==((a=c)&&"undefined"!=typeof Symbol&&a.constructor===Symbol?"symbol":typeof a)||"function"==typeof c)?c:(function(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a})(b)});function q(a){var b;return!function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}(this,q),(b=p.call(this,a)).layout=function(a){var b=a.children;return(0,d.jsx)(g.Z,{meta:l,children:b})},b}return b=q,c=[{key:"render",value:function(){var a=this.props,b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.jsxs)(f.XJ,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},m,c),components:b,children:[(0,d.jsx)(f.XJ,{name:"p",components:b,children:"We’ll now add blog data to our app using the file system. Each blog post will be a markdown file."}),(0,d.jsxs)(f.XJ,{name:"ul",components:b,children:[(0,d.jsxs)(f.XJ,{name:"li",components:b,parentName:"ul",children:["Create a new top-level directory called ",(0,d.jsx)(f.XJ,{name:"strong",components:b,parentName:"li",children:(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"strong",children:"posts"})})," (this is not the same as ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"li",children:"pages/posts"}),")."]}),(0,d.jsxs)(f.XJ,{name:"li",components:b,parentName:"ul",children:["Inside ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"li",children:"posts"}),", create two files: ",(0,d.jsx)(f.XJ,{name:"strong",components:b,parentName:"li",children:(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"strong",children:"pre-rendering.md"})})," and ",(0,d.jsx)(f.XJ,{name:"strong",components:b,parentName:"li",children:(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"strong",children:"ssg-ssr.md"})}),"."]})]}),(0,d.jsxs)(f.XJ,{name:"p",components:b,children:["Now, copy the following code to ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"posts/pre-rendering.md"}),":"]}),(0,d.jsx)(f.XJ,{name:"pre",components:b,props:{className:"language-md"},children:(0,d.jsxs)(f.XJ,{name:"code",components:b,parentName:"pre",props:{className:"language-md"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token hr punctuation"},children:"---"}),"\ntitle: 'Two Forms of Pre-rendering'\n",(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token title important"},children:["date: '2020-01-01'\n",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"---"})]}),"\n\nNext.js has two forms of pre-rendering: ",(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token bold"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"**"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token content"},children:"Static Generation"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"**"})]})," and ",(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token bold"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"**"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token content"},children:"Server-side Rendering"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"**"})]}),". The difference is in ",(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token bold"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"**"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token content"},children:"when"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"**"})]})," it generates the HTML for a page.\n\n",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token list punctuation"},children:"-"})," ",(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token bold"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"**"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token content"},children:"Static Generation"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"**"})]})," is the pre-rendering method that generates the HTML at ",(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token bold"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"**"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token content"},children:"build time"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"**"})]}),". The pre-rendered HTML is then ",(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token italic"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"_"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token content"},children:"reused"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"_"})]})," on each request.\n",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token list punctuation"},children:"-"})," ",(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token bold"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"**"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token content"},children:"Server-side Rendering"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"**"})]})," is the pre-rendering method that generates the HTML on ",(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token bold"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"**"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token content"},children:"each request"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"**"})]}),".\n\nImportantly, Next.js lets you ",(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token bold"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"**"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token content"},children:"choose"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"**"})]})," which pre-rendering form to use for each page. You can create a \"hybrid\" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.\n"]})}),(0,d.jsxs)(f.XJ,{name:"p",components:b,children:["Then, copy the following code to ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"posts/ssg-ssr.md"}),":"]}),(0,d.jsx)(f.XJ,{name:"pre",components:b,props:{className:"language-md"},children:(0,d.jsxs)(f.XJ,{name:"code",components:b,parentName:"pre",props:{className:"language-md"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token hr punctuation"},children:"---"}),"\ntitle: 'When to Use Static Generation v.s. Server-side Rendering'\n",(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token title important"},children:["date: '2020-01-02'\n",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"---"})]}),"\n\nWe recommend using ",(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token bold"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"**"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token content"},children:"Static Generation"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"**"})]})," (with and without data) whenever possible because your page can be built once and served by CDN, which makes it much faster than having a server render the page on every request.\n\nYou can use Static Generation for many types of pages, including:\n\n",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token list punctuation"},children:"-"})," Marketing pages\n",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token list punctuation"},children:"-"})," Blog posts\n",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token list punctuation"},children:"-"})," E-commerce product listings\n",(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token list punctuation"},children:"-"})," Help and documentation\n\nYou should ask yourself: \"Can I pre-render this page ",(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token bold"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"**"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token content"},children:"ahead"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"**"})]})," of a user's request?\" If the answer is yes, then you should choose Static Generation.\n\nOn the other hand, Static Generation is ",(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token bold"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"**"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token content"},children:"not"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"**"})]})," a good idea if you cannot pre-render a page ahead of a user's request. Maybe your page shows frequently updated data, and the page content changes on every request.\n\nIn that case, you can use ",(0,d.jsxs)(f.XJ,{name:"span",components:b,parentName:"code",props:{className:"token bold"},children:[(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"**"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token content"},children:"Server-Side Rendering"}),(0,d.jsx)(f.XJ,{name:"span",components:b,parentName:"span",props:{className:"token punctuation"},children:"**"})]}),". It will be slower, but the pre-rendered page will always be up-to-date. Or you can skip pre-rendering and use client-side JavaScript to populate data.\n"]})}),(0,d.jsx)(f.XJ,{name:"blockquote",components:b,children:(0,d.jsxs)(f.XJ,{name:"p",components:b,parentName:"blockquote",children:["You might have noticed that each markdown file has a metadata section at the top containing ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"title"})," and ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"date"}),". This is called YAML Front Matter, which can be parsed using a library called ",(0,d.jsx)(f.XJ,{name:"a",components:b,parentName:"p",props:{href:"https://github.com/jonschlinkert/gray-matter"},children:"gray-matter"}),"."]})}),(0,d.jsxs)(f.XJ,{name:"h3",components:b,children:["Parsing the Blog Data on ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"h3",children:"getStaticProps"})]}),(0,d.jsxs)(f.XJ,{name:"p",components:b,children:["Now, let’s update our index page (",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"p",children:"pages/index.js"}),") using this data. We’d like to:"]}),(0,d.jsxs)(f.XJ,{name:"ul",components:b,children:[(0,d.jsxs)(f.XJ,{name:"li",components:b,parentName:"ul",children:["Parse each markdown file and get ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"li",children:"title"}),", ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"li",children:"date"}),", and file name (which will be used as ",(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"li",children:"id"})," for the post URL)."]}),(0,d.jsx)(f.XJ,{name:"li",components:b,parentName:"ul",children:"List the data on the index page, sorted by date."})]}),(0,d.jsxs)(f.XJ,{name:"p",components:b,children:["To do this on pre-render, we need to implement ",(0,d.jsx)(f.XJ,{name:"a",components:b,parentName:"p",props:{href:"/docs/basic-features/data-fetching#getstaticprops-static-generation"},children:(0,d.jsx)(f.XJ,{name:"inlineCode",components:b,parentName:"a",children:"getStaticProps"})}),"."]}),(0,d.jsx)(h.Z,{shadow:!0,alt:"Index Page",oversize:!1,src:"/static/images/learn/data-fetching/index-page.png",width:623,height:474}),(0,d.jsx)(f.XJ,{name:"p",components:b,children:"Let’s do it on the next page!"})]})}}],i(b.prototype,c),e&&i(b,e),q}(e.Component);n.isMDXComponent=!0}},function(a){a.O(0,[7582,7879,6337,642,5315,5149,4945,9774,2888,179],function(){return a(a.s=2576)}),_N_E=a.O()}])