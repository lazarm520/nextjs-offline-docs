(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4890],{23816:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/learn/foundations/how-nextjs-works/buildtime-and-runtime",function(){return c(11486)}])},35306:function(a,b,c){"use strict";c.d(b,{Z:function(){return p}});var d=c(24246),e=c(79892),f=c.n(e);c(27378);var g=function(a){var b=a.color;return(0,d.jsx)("svg",{viewBox:"0 0 24 24",width:"16",height:"16",children:(0,d.jsx)("g",{fill:b||"#111111",children:(0,d.jsx)("path",{d:"M12,0A12,12,0,1,0,24,12,12.035,12.035,0,0,0,12,0Zm4.95,15.536L15.536,16.95,12,13.414,8.464,16.95,7.05,15.536,10.586,12,7.05,8.464,8.464,7.05,12,10.586,15.536,7.05,16.95,8.464,13.414,12Z",fill:b||"#111111"})})})},h=c(97556),i=c(77430),j=c(26303);function k(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=new Array(b);c<b;c++)d[c]=a[c];return d}function l(a){return(0,d.jsxs)("div",{className:"jsx-dd7ad94e93d3b01d",children:[a.children,(0,d.jsx)(f(),{id:"dd7ad94e93d3b01d",children:"div.jsx-dd7ad94e93d3b01d{background:#fafafa;\nborder:1px solid #eaeaea;\nborder-radius:8px;\npadding:0 16px 16px 16px;\nmargin-top:2rem;\nmargin-bottom:4rem;\ncounter-reset:answer-list}"})]})}function m(a){var b=a.value,c=a.onChange,e=a.selected,g=a.readOnly,h=a.children;return(0,d.jsxs)("label",{className:f().dynamic([["7c5fd976a77c896e",[g?"":"cursor: pointer;"]]])+" "+"f5".concat(g?" disabled":""),children:[(0,d.jsx)("input",{type:"radio",value:b,name:"answer",onChange:c,disabled:g,defaultChecked:e,className:f().dynamic([["7c5fd976a77c896e",[g?"":"cursor: pointer;"]]])}),(0,d.jsx)("span",{className:f().dynamic([["7c5fd976a77c896e",[g?"":"cursor: pointer;"]]]),children:h}),(0,d.jsx)(f(),{id:"7c5fd976a77c896e",dynamic:[g?"":"cursor: pointer;"],children:"input.__jsx-style-dynamic-selector{display:none}\ninput.__jsx-style-dynamic-selector:checked+span.__jsx-style-dynamic-selector{color:#111;\nborder-color:#111;\nbox-shadow:0 0 0 3px #c1c1c1;\nfont-weight:600}\nlabel.__jsx-style-dynamic-selector{display:block;\nmargin:0.5rem 0;\n".concat(g?"":"cursor: pointer;","\n        }\nlabel.__jsx-style-dynamic-selector span.__jsx-style-dynamic-selector:before{counter-increment:answer-list;\ncontent:counter(answer-list, upper-alpha) '. ';\ndisplay:inline-block;\nwidth:1.5rem}\nspan.__jsx-style-dynamic-selector{color:#666;\ndisplay:block;\npadding:0.5rem 1rem;\nborder-radius:7px;\nborder:1px solid #666;\nbackground:white;\n-webkit-transition:box-shadow 0.2s ease;\ntransition:box-shadow 0.2s ease}\n.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector+span.__jsx-style-dynamic-selector{border-color:#eaeaea}\n.disabled.__jsx-style-dynamic-selector input.__jsx-style-dynamic-selector:checked+span.__jsx-style-dynamic-selector{color:unset;\nfont-weight:500;\nbackground:white;\nborder-color:#111}")})]})}function n(a){var b=a.correct,c=a.selected;return b||c?(0,d.jsxs)("span",{className:"jsx-bebc3d1a0cbd6a11",children:[b?(0,d.jsx)(h.Z,{color:"#0070f3"}):(0,d.jsx)(g,{color:"#e00"}),(0,d.jsx)(f(),{id:"bebc3d1a0cbd6a11",children:"span.jsx-bebc3d1a0cbd6a11{display:inline-block;\nline-height:1;\nvertical-align:middle;\nmargin-left:0.25rem}"})]}):null}function o(a){var b=a.answer,c=a.correctAnswer;return(0,d.jsxs)(d.Fragment,{children:[void 0!==b&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n,{correct:b===c,selected:!0})," "]}),void 0===b?(0,d.jsxs)(d.Fragment,{children:["The correct answer is: ",(0,d.jsx)("strong",{className:"jsx-df362a97111b04e9",children:c})]}):b===c?(0,d.jsxs)("span",{className:"jsx-df362a97111b04e9 correct-message",children:[(0,d.jsx)("strong",{className:"jsx-df362a97111b04e9",children:"Correct."})," Good job!"]}):(0,d.jsxs)("span",{className:"jsx-df362a97111b04e9 incorrect-message",children:[(0,d.jsx)("strong",{className:"jsx-df362a97111b04e9",children:"Incorrect,"})," but nice try!"]}),(0,d.jsx)(f(),{id:"df362a97111b04e9",children:".correct-message.jsx-df362a97111b04e9{color:#0070f3}\n.incorrect-message.jsx-df362a97111b04e9{color:#e00}"})]})}var p=function(a){var b,c,e=a.meta,g=a.answers,h=a.correctAnswer,p=a.children,q=(c=2,function(a){if(Array.isArray(a))return a}(b=(0,i.a)(e))||function(a,b){var c,d,e=null==a?null:"undefined"!=typeof Symbol&&a[Symbol.iterator]||a["@@iterator"];if(null!=e){var f=[],g=!0,h=!1;try{for(e=e.call(a);!(g=(c=e.next()).done)&&(f.push(c.value),!b||f.length!==b);g=!0);}catch(i){h=!0,d=i}finally{try{g||null==e.return||e.return()}finally{if(h)throw d}}return f}}(b,c)||function(a,b){if(a){if("string"==typeof a)return k(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return k(a,b)}}(b,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),r=q[0],s=q[1];return(0,d.jsxs)(l,{children:[p,g.map(function(a){return(0,d.jsxs)(m,{value:a,selected:a===r.answer,onChange:function(a){return s({type:"answer",answer:a.target.value})},readOnly:r.submitted,children:[a," ",r.submitted&&(0,d.jsx)(n,{correct:a===h,selected:a===r.answer})]},a)}),(0,d.jsxs)("div",{className:"jsx-96319d8491e83c58",children:[r.submitted?(0,d.jsx)(o,{answer:r.answer,correctAnswer:h}):(0,d.jsx)(j.Z,{onClick:function(){s({type:"submit"}),r.answer===h&&s({type:"check"})},color:"#252525",shadowColor:"rgba(0, 0, 0, 0.2)",invert:!0,children:"Submit"}),(0,d.jsx)(f(),{id:"96319d8491e83c58",children:"div.jsx-96319d8491e83c58{margin-top:2rem}"})]})]})}},11486:function(a,b,c){"use strict";c.r(b),c.d(b,{meta:function(){return l},"default":function(){return n}});var d=c(24246),e=c(27378),f=c(65977),g=c(85416),h=c(35306);function i(a,b){for(var c=0;c<b.length;c++){var d=b[c];d.enumerable=d.enumerable||!1,d.configurable=!0,"value"in d&&(d.writable=!0),Object.defineProperty(a,d.key,d)}}function j(a){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(a){return a.__proto__||Object.getPrototypeOf(a)})(a)}function k(a,b){return(k=Object.setPrototypeOf||function(a,b){return a.__proto__=b,a})(a,b)}var l={title:"How Next.js Works",courseId:"foundations",lessonId:"how-nextjs-works",stepId:"buildtime-and-runtime",subtitle:"Build Time and Runtime"},m={meta:l},n=function(a){"use strict";!function(a,b){if("function"!=typeof b&&null!==b)throw new TypeError("Super expression must either be null or a function");a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,writable:!0,configurable:!0}}),b&&k(a,b)}(q,a);var b,c,e,n,o,p=(n=q,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(a){return!1}}(),function(){var a,b,c,d,e=j(n);if(o){var f=j(this).constructor;d=Reflect.construct(e,arguments,f)}else d=e.apply(this,arguments);return b=this,(c=d)&&("object"==((a=c)&&"undefined"!=typeof Symbol&&a.constructor===Symbol?"symbol":typeof a)||"function"==typeof c)?c:(function(a){if(void 0===a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a})(b)});function q(a){var b;return!function(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}(this,q),(b=p.call(this,a)).layout=function(a){var b=a.children;return(0,d.jsx)(g.Z,{meta:l,children:b})},b}return b=q,c=[{key:"render",value:function(){var a=this.props,b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.jsxs)(f.XJ,{name:"wrapper",Layout:this.layout,layoutProps:Object.assign({},m,c),components:b,children:[(0,d.jsxs)(f.XJ,{name:"p",components:b,children:[(0,d.jsx)(f.XJ,{name:"strong",components:b,parentName:"p",children:"Build time"})," (or build step) is the name given to a series of steps that prepare your application code for production."]}),(0,d.jsxs)(f.XJ,{name:"p",components:b,children:["When you build your application, Next.js will transform your code into production-optimized files ready to be deployed to ",(0,d.jsx)(f.XJ,{name:"a",components:b,parentName:"p",props:{href:"/learn/foundations/how-nextjs-works/client-and-server"},children:"servers"})," and consumed by users. These files include:"]}),(0,d.jsxs)(f.XJ,{name:"ul",components:b,children:[(0,d.jsx)(f.XJ,{name:"li",components:b,parentName:"ul",children:"HTML files for statically generated pages"}),(0,d.jsxs)(f.XJ,{name:"li",components:b,parentName:"ul",children:["JavaScript code for ",(0,d.jsx)(f.XJ,{name:"a",components:b,parentName:"li",props:{href:"/learn/foundations/how-nextjs-works/rendering"},children:"rendering"})," pages on the ",(0,d.jsx)(f.XJ,{name:"a",components:b,parentName:"li",props:{href:"/learn/foundations/how-nextjs-works/client-and-server"},children:"server"})]}),(0,d.jsxs)(f.XJ,{name:"li",components:b,parentName:"ul",children:["JavaScript code for making pages interactive on the ",(0,d.jsx)(f.XJ,{name:"a",components:b,parentName:"li",props:{href:"/learn/foundations/how-nextjs-works/client-and-server"},children:"client"})]}),(0,d.jsx)(f.XJ,{name:"li",components:b,parentName:"ul",children:"CSS files"})]}),(0,d.jsxs)(f.XJ,{name:"p",components:b,children:[(0,d.jsx)(f.XJ,{name:"strong",components:b,parentName:"p",children:"Runtime"})," (or request time) refers to the period of time when your application runs in response to a user’s request, ",(0,d.jsx)(f.XJ,{name:"em",components:b,parentName:"p",children:"after"})," your application has been built and deployed."]}),(0,d.jsx)(f.XJ,{name:"p",components:b,children:"Next, let’s discuss some of the terms introduced in this section, such as client, server, and rendering."}),(0,d.jsx)(h.Z,{meta:l,answers:["True","False",],correctAnswer:"False",children:(0,d.jsxs)(f.XJ,{name:"p",components:b,children:[(0,d.jsx)(f.XJ,{name:"strong",components:b,parentName:"p",children:"True or False"}),": Build time is the period of time when an application is being built in response to a user's request."]})})]})}}],i(b.prototype,c),e&&i(b,e),q}(e.Component);n.isMDXComponent=!0}},function(a){a.O(0,[7582,7879,642,5315,5149,9774,2888,179],function(){return a(a.s=23816)}),_N_E=a.O()}])