"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7879],{74808:function(a,b,c){c.d(b,{"_j":function(){return G},GG:function(){return g},LH:function(){return h},DZ:function(){return H}});var d=c(25773),e=["Top","Right","Bottom","Left"];function f(a,b){if(!a)return b.toLowerCase();var c=a.split("-");if(c.length>1)return c.splice(1,0,b),c.reduce(function(a,b){var c;return""+a+((c=b).charAt(0).toUpperCase()+c.slice(1))});var d=a.replace(/([a-z])([A-Z])/g,"$1"+b+"$2");return a===d?""+a+b:d}function g(a){for(var b=arguments.length,c=new Array(b>1?b-1:0),d=1;d<b;d++)c[d-1]=arguments[d];var g=c[0],h=c[1],i=void 0===h?g:h,j=c[2],k=c[3];return(function(a,b){for(var c={},d=0;d<b.length;d+=1)(b[d]||0===b[d])&&(c[f(a,e[d])]=b[d]);return c})(a,[g,i,void 0===j?g:j,void 0===k?i:k])}function h(a){return void 0===a&&(a="100%"),{display:"inline-block",maxWidth:a,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",wordWrap:"normal"}}function i(a){return Math.round(255*a)}function j(a,b,c){return i(a)+","+i(b)+","+i(c)}function k(a,b,c,d){if(void 0===d&&(d=j),0===b)return d(c,c,c);var e=a%360/60,f=(1-Math.abs(2*c-1))*b,g=f*(1-Math.abs(e%2-1)),h=0,i=0,k=0;e>=0&&e<1?(h=f,i=g):e>=1&&e<2?(h=g,i=f):e>=2&&e<3?(i=f,k=g):e>=3&&e<4?(i=g,k=f):e>=4&&e<5?(h=g,k=f):e>=5&&e<6&&(h=f,k=g);var l=c-f/2;return d(h+l,i+l,k+l)}var l={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"00ffff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"0000ff",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"00ffff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"ff00ff",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"639",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},m=/^#[a-fA-F0-9]{6}$/,n=/^#[a-fA-F0-9]{8}$/,o=/^#[a-fA-F0-9]{3}$/,p=/^#[a-fA-F0-9]{4}$/,q=/^rgb\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/,r=/^rgba\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/,s=/^hsl\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*\)$/,t=/^hsla\(\s*(\d{0,3}[.]?[0-9]+)\s*,\s*(\d{1,3})%\s*,\s*(\d{1,3})%\s*,\s*([-+]?[0-9]*[.]?[0-9]+)\s*\)$/;function u(a){if("string"!=typeof a)throw new Error("Passed an incorrect argument to a color function, please pass a string representation of a color.");var b=function(a){if("string"!=typeof a)return a;var b=a.toLowerCase();return l[b]?"#"+l[b]:a}(a);if(b.match(m))return{red:parseInt(""+b[1]+b[2],16),green:parseInt(""+b[3]+b[4],16),blue:parseInt(""+b[5]+b[6],16)};if(b.match(n)){var c=parseFloat((parseInt(""+b[7]+b[8],16)/255).toFixed(2));return{red:parseInt(""+b[1]+b[2],16),green:parseInt(""+b[3]+b[4],16),blue:parseInt(""+b[5]+b[6],16),alpha:c}}if(b.match(o))return{red:parseInt(""+b[1]+b[1],16),green:parseInt(""+b[2]+b[2],16),blue:parseInt(""+b[3]+b[3],16)};if(b.match(p)){var d=parseFloat((parseInt(""+b[4]+b[4],16)/255).toFixed(2));return{red:parseInt(""+b[1]+b[1],16),green:parseInt(""+b[2]+b[2],16),blue:parseInt(""+b[3]+b[3],16),alpha:d}}var e=q.exec(b);if(e)return{red:parseInt(""+e[1],10),green:parseInt(""+e[2],10),blue:parseInt(""+e[3],10)};var f=r.exec(b);if(f)return{red:parseInt(""+f[1],10),green:parseInt(""+f[2],10),blue:parseInt(""+f[3],10),alpha:parseFloat(""+f[4])};var g=s.exec(b);if(g){var h=parseInt(""+g[1],10),i=parseInt(""+g[2],10)/100,j=parseInt(""+g[3],10)/100,u="rgb("+k(h,i,j)+")",v=q.exec(u);if(!v)throw new Error("Couldn't generate valid rgb string from "+b+", it returned "+u+".");return{red:parseInt(""+v[1],10),green:parseInt(""+v[2],10),blue:parseInt(""+v[3],10)}}var w=t.exec(b);if(w){var x=parseInt(""+w[1],10),y=parseInt(""+w[2],10)/100,z=parseInt(""+w[3],10)/100,A="rgb("+k(x,y,z)+")",B=q.exec(A);if(!B)throw new Error("Couldn't generate valid rgb string from "+b+", it returned "+A+".");return{red:parseInt(""+B[1],10),green:parseInt(""+B[2],10),blue:parseInt(""+B[3],10),alpha:parseFloat(""+w[4])}}throw new Error("Couldn't parse the color string. Please provide the color as a string in hex, rgb, rgba, hsl or hsla notation.")}var v=function(a){return 7===a.length&&a[1]===a[2]&&a[3]===a[4]&&a[5]===a[6]?"#"+a[1]+a[3]+a[5]:a};function w(a){var b=a.toString(16);return 1===b.length?"0"+b:b}function x(a){return w(Math.round(255*a))}function y(a,b,c){return v("#"+x(a)+x(b)+x(c))}function z(a,b,c){return k(a,b,c,y)}function A(a,b,c){if("number"==typeof a&&"number"==typeof b&&"number"==typeof c)return v("#"+w(a)+w(b)+w(c));if("object"==typeof a&& void 0===b&& void 0===c)return v("#"+w(a.red)+w(a.green)+w(a.blue));throw new Error("Passed invalid arguments to rgb, please pass multiple numbers e.g. rgb(255, 205, 100) or an object e.g. rgb({ red: 255, green: 205, blue: 100 }).")}function B(a,b,c,d){if("string"==typeof a&&"number"==typeof b){var e=u(a);return"rgba("+e.red+","+e.green+","+e.blue+","+b+")"}if("number"==typeof a&&"number"==typeof b&&"number"==typeof c&&"number"==typeof d)return d>=1?A(a,b,c):"rgba("+a+","+b+","+c+","+d+")";if("object"==typeof a&& void 0===b&& void 0===c&& void 0===d)return a.alpha>=1?A(a.red,a.green,a.blue):"rgba("+a.red+","+a.green+","+a.blue+","+a.alpha+")";throw new Error("Passed invalid arguments to rgba, please pass multiple numbers e.g. rgb(255, 205, 100, 0.75) or an object e.g. rgb({ red: 255, green: 205, blue: 100, alpha: 0.75 }).")}var C="Passed invalid argument to toColorString, please pass a RgbColor, RgbaColor, HslColor or HslaColor object.";function D(a,b,c){return function(){var d=c.concat(Array.prototype.slice.call(arguments));return d.length>=b?a.apply(this,d):D(a,b,d)}}function E(a){return D(a,a.length,[])}function F(a,b,c){return Math.max(a,Math.min(b,c))}var G=E(function(a,b){var c=function(a){var b,c=a.red/255,d=a.green/255,e=a.blue/255,f=Math.max(c,d,e),g=Math.min(c,d,e),h=(f+g)/2;if(f===g)return void 0!==a.alpha?{hue:0,saturation:0,lightness:h,alpha:a.alpha}:{hue:0,saturation:0,lightness:h};var i=f-g,j=h>.5?i/(2-f-g):i/(f+g);switch(f){case c:b=(d-e)/i+(d<e?6:0);break;case d:b=(e-c)/i+2;break;default:b=(c-d)/i+4;break}return(b*=60,void 0!==a.alpha)?{hue:b,saturation:j,lightness:h,alpha:a.alpha}:{hue:b,saturation:j,lightness:h}}(u(b));return(function(a){var b,c,d,e;if("object"!=typeof a)throw new Error(C);if("number"==typeof(b=a).red&&"number"==typeof b.green&&"number"==typeof b.blue&&"number"==typeof b.alpha)return B(a);if("number"==typeof(c=a).red&&"number"==typeof c.green&&"number"==typeof c.blue&&("number"!=typeof c.alpha|| void 0===c.alpha))return A(a);if("number"==typeof(d=a).hue&&"number"==typeof d.saturation&&"number"==typeof d.lightness&&"number"==typeof d.alpha)return(function(a,b,c,d){if("number"==typeof a&&"number"==typeof b&&"number"==typeof c&&"number"==typeof d)return d>=1?z(a,b,c):"rgba("+k(a,b,c)+","+d+")";if("object"==typeof a&& void 0===b&& void 0===c&& void 0===d)return a.alpha>=1?z(a.hue,a.saturation,a.lightness):"rgba("+k(a.hue,a.saturation,a.lightness)+","+a.alpha+")";throw new Error("Passed invalid arguments to hsla, please pass multiple numbers e.g. hsl(360, 0.75, 0.4, 0.7) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75, alpha: 0.7 }).")})(a);if("number"==typeof(e=a).hue&&"number"==typeof e.saturation&&"number"==typeof e.lightness&&("number"!=typeof e.alpha|| void 0===e.alpha))return(function(a,b,c){if("number"==typeof a&&"number"==typeof b&&"number"==typeof c)return z(a,b,c);if("object"==typeof a&& void 0===b&& void 0===c)return z(a.hue,a.saturation,a.lightness);throw new Error("Passed invalid arguments to hsl, please pass multiple numbers e.g. hsl(360, 0.75, 0.4) or an object e.g. rgb({ hue: 255, saturation: 0.4, lightness: 0.75 }).")})(a);throw new Error(C)})((0,d.Z)({},c,{lightness:F(0,1,c.lightness-parseFloat(a))}))}),H=E(function(a,b){var c=u(b),e="number"==typeof c.alpha?c.alpha:1;return B((0,d.Z)({},c,{alpha:F(0,1,(100*e-100*parseFloat(a))/100)}))})}}])