(self.webpackChunk=self.webpackChunk||[]).push([[183],{652:(n,e,a)=>{(e=a(645)(!1)).push([n.id,"\n.walk-container[data-v-2ce7a167] {\n    display: inline-block;\n    position: relative;\n    width: 13%;\n    vertical-align: middle;\n}\n.walk-container > div[data-v-2ce7a167] {\n    display: inline-block;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 128px;\n    height: 202px;\n    background: url('/assets/img/concurso/icons.png') repeat-y;\n    background-position-x: 9px;\n}\n.walk-container-one > div[data-v-2ce7a167] {\n    background-position-y: -5px;\n    animation: one-2ce7a167 ease 10s normal;\n}\n.walk-container-one-finalized > div[data-v-2ce7a167] {\n    background-position-y: -11220px;\n}\n.walk-container-two > div[data-v-2ce7a167] {\n    background-position-y: -315px;\n    animation: two-2ce7a167 ease 8s normal;\n}\n.walk-container-two-finalized > div[data-v-2ce7a167] {\n    background-position-y: -10220px;\n}\n.walk-container-three > div[data-v-2ce7a167] {\n    background-position-y: -435px;\n    animation: three-2ce7a167 ease 6s normal;\n}\n.walk-container-three-finalized > div[data-v-2ce7a167] {\n    background-position-y: -18220px;\n}\n@keyframes one-2ce7a167 {\nfrom { background-position-y: 5px\n}\nto { background-position-y: -11220px\n}\n    /*100% {background-position-y: -11220px}*/\n}\n@keyframes two-2ce7a167 {\nfrom { background-position-y: 5px\n}\nto { background-position-y: -10220px\n}\n}\n@keyframes three-2ce7a167 {\nfrom { background-position-y: 5px\n}\nto { background-position-y: -18220px\n}\n}\n\n",""]),n.exports=e},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var a=function(n,e){var a=n[1]||"",t=n[3];if(!t)return a;if(e&&"function"==typeof btoa){var o=(r=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(s," */")),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[a].concat(i).concat([o]).join("\n")}var r,c,s;return[a].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(a,"}"):a})).join("")},e.i=function(n,a,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var r=this[i][0];null!=r&&(o[r]=!0)}for(var c=0;c<n.length;c++){var s=[].concat(n[c]);t&&o[s[0]]||(a&&(s[2]?s[2]="".concat(a," and ").concat(s[2]):s[2]=a),e.push(s))}},e}},379:(n,e,a)=>{"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},i=function(){var n={};return function(e){if(void 0===n[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(n){a=null}n[e]=a}return n[e]}}(),r=[];function c(n){for(var e=-1,a=0;a<r.length;a++)if(r[a].identifier===n){e=a;break}return e}function s(n,e){for(var a={},t=[],o=0;o<n.length;o++){var i=n[o],s=e.base?i[0]+e.base:i[0],d=a[s]||0,l="".concat(s," ").concat(d);a[s]=d+1;var u=c(l),v={css:i[1],media:i[2],sourceMap:i[3]};-1!==u?(r[u].references++,r[u].updater(v)):r.push({identifier:l,updater:g(v,e),references:1}),t.push(l)}return t}function d(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=a.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var r=i(n.insert||"head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}return e}var l,u=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function v(n,e,a,t){var o=a?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=u(e,o);else{var i=document.createTextNode(o),r=n.childNodes;r[e]&&n.removeChild(r[e]),r.length?n.insertBefore(i,r[e]):n.appendChild(i)}}function p(n,e,a){var t=a.css,o=a.media,i=a.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var f=null,m=0;function g(n,e){var a,t,o;if(e.singleton){var i=m++;a=f||(f=d(e)),t=v.bind(null,a,i,!1),o=v.bind(null,a,i,!0)}else a=d(e),t=p.bind(null,a,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(a)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var a=s(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<a.length;t++){var o=c(a[t]);r[o].references--}for(var i=s(n,e),d=0;d<a.length;d++){var l=c(a[d]);0===r[l].references&&(r[l].updater(),r.splice(l,1))}a=i}}}},183:(n,e,a)=>{"use strict";a.r(e),a.d(e,{default:()=>m});var t=a(166),o=(0,t.HX)("data-v-2ce7a167");(0,t.dD)("data-v-2ce7a167");var i={id:"about",class:"about-section about-style-1"},r=(0,t.uE)('<div class="container" data-v-2ce7a167><div class="row" data-v-2ce7a167><div class="walk-container" id="walk-container-one" data-v-2ce7a167><div data-v-2ce7a167><img src="/assets/img/concurso/reel.png" alt="img" data-v-2ce7a167></div></div><div class="walk-container" id="walk-container-two" data-v-2ce7a167><div data-v-2ce7a167><img src="/assets/img/concurso/reel.png" alt="img" data-v-2ce7a167></div></div><div class="walk-container" id="walk-container-three" data-v-2ce7a167><div data-v-2ce7a167><img src="/assets/img/concurso/reel.png" alt="img" data-v-2ce7a167></div></div></div></div>',1),c={class:"about-image"};(0,t.Cn)();var s=o((function(n,e,a,o,s,d){return(0,t.wg)(),(0,t.j4)("section",i,[r,(0,t.Wm)("div",c,[(0,t.Wm)("button",{onClick:e[1]||(e[1]=function(){return d.run&&d.run.apply(d,arguments)}),class:"btn bg-danger"},"Girar")])])}));const d={name:"List",methods:{run:function(){var n=document.getElementById("walk-container-one"),e=document.getElementById("walk-container-two"),a=document.getElementById("walk-container-three");n.classList.add("walk-container-one"),n.classList.add("walk-container-one-finalized"),e.classList.add("walk-container-two"),e.classList.add("walk-container-two-finalized"),a.classList.add("walk-container-three"),a.classList.add("walk-container-three-finalized")}}};var l=a(379),u=a.n(l),v=a(652),p=a.n(v),f={insert:"head",singleton:!1};u()(p(),f);p().locals;d.render=s,d.__scopeId="data-v-2ce7a167";const m=d}}]);