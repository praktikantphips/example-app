webpackJsonp([2],{136:function(t,e,r){function n(t){r(257)}var o=r(121)(r(213),r(263),n,null,null);t.exports=o.exports},141:function(t,e,r){"use strict";function n(t){return"[object Array]"===_.call(t)}function o(t){return"[object ArrayBuffer]"===_.call(t)}function i(t){return"undefined"!=typeof FormData&&t instanceof FormData}function s(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer}function a(t){return"string"==typeof t}function u(t){return"number"==typeof t}function c(t){return void 0===t}function l(t){return null!==t&&"object"==typeof t}function f(t){return"[object Date]"===_.call(t)}function d(t){return"[object File]"===_.call(t)}function h(t){return"[object Blob]"===_.call(t)}function p(t){return"[object Function]"===_.call(t)}function m(t){return l(t)&&p(t.pipe)}function v(t){return"undefined"!=typeof URLSearchParams&&t instanceof URLSearchParams}function g(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function w(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function y(t,e){if(null!==t&&void 0!==t)if("object"==typeof t||n(t)||(t=[t]),n(t))for(var r=0,o=t.length;r<o;r++)e.call(null,t[r],r,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function x(){function t(t,r){"object"==typeof e[r]&&"object"==typeof t?e[r]=x(e[r],t):e[r]=t}for(var e={},r=0,n=arguments.length;r<n;r++)y(arguments[r],t);return e}function b(t,e,r){return y(e,function(e,n){t[n]=r&&"function"==typeof e?C(e,r):e}),t}var C=r(148),S=r(176),_=Object.prototype.toString;t.exports={isArray:n,isArrayBuffer:o,isBuffer:S,isFormData:i,isArrayBufferView:s,isString:a,isNumber:u,isObject:l,isUndefined:c,isDate:f,isFile:d,isBlob:h,isFunction:p,isStream:m,isURLSearchParams:v,isStandardBrowserEnv:w,forEach:y,merge:x,extend:b,trim:g}},142:function(t,e,r){"use strict";(function(e){function n(t,e){!o.isUndefined(t)&&o.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var o=r(141),i=r(170),s={"Content-Type":"application/x-www-form-urlencoded"},a={adapter:function(){var t;return"undefined"!=typeof XMLHttpRequest?t=r(144):void 0!==e&&(t=r(144)),t}(),transformRequest:[function(t,e){return i(e,"Content-Type"),o.isFormData(t)||o.isArrayBuffer(t)||o.isBuffer(t)||o.isStream(t)||o.isFile(t)||o.isBlob(t)?t:o.isArrayBufferView(t)?t.buffer:o.isURLSearchParams(t)?(n(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):o.isObject(t)?(n(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"==typeof t)try{t=JSON.parse(t)}catch(t){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(t){return t>=200&&t<300}};a.headers={common:{Accept:"application/json, text/plain, */*"}},o.forEach(["delete","get","head"],function(t){a.headers[t]={}}),o.forEach(["post","put","patch"],function(t){a.headers[t]=o.merge(s)}),t.exports=a}).call(e,r(177))},144:function(t,e,r){"use strict";var n=r(141),o=r(162),i=r(165),s=r(171),a=r(169),u=r(147),c="undefined"!=typeof window&&window.btoa&&window.btoa.bind(window)||r(164);t.exports=function(t){return new Promise(function(e,l){var f=t.data,d=t.headers;n.isFormData(f)&&delete d["Content-Type"];var h=new XMLHttpRequest,p="onreadystatechange",m=!1;if("undefined"==typeof window||!window.XDomainRequest||"withCredentials"in h||a(t.url)||(h=new window.XDomainRequest,p="onload",m=!0,h.onprogress=function(){},h.ontimeout=function(){}),t.auth){var v=t.auth.username||"",g=t.auth.password||"";d.Authorization="Basic "+c(v+":"+g)}if(h.open(t.method.toUpperCase(),i(t.url,t.params,t.paramsSerializer),!0),h.timeout=t.timeout,h[p]=function(){if(h&&(4===h.readyState||m)&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in h?s(h.getAllResponseHeaders()):null,n=t.responseType&&"text"!==t.responseType?h.response:h.responseText,i={data:n,status:1223===h.status?204:h.status,statusText:1223===h.status?"No Content":h.statusText,headers:r,config:t,request:h};o(e,l,i),h=null}},h.onerror=function(){l(u("Network Error",t,null,h)),h=null},h.ontimeout=function(){l(u("timeout of "+t.timeout+"ms exceeded",t,"ECONNABORTED",h)),h=null},n.isStandardBrowserEnv()){var w=r(167),y=(t.withCredentials||a(t.url))&&t.xsrfCookieName?w.read(t.xsrfCookieName):void 0;y&&(d[t.xsrfHeaderName]=y)}if("setRequestHeader"in h&&n.forEach(d,function(t,e){void 0===f&&"content-type"===e.toLowerCase()?delete d[e]:h.setRequestHeader(e,t)}),t.withCredentials&&(h.withCredentials=!0),t.responseType)try{h.responseType=t.responseType}catch(e){if("json"!==t.responseType)throw e}"function"==typeof t.onDownloadProgress&&h.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then(function(t){h&&(h.abort(),l(t),h=null)}),void 0===f&&(f=null),h.send(f)})}},145:function(t,e,r){"use strict";function n(t){this.message=t}n.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},n.prototype.__CANCEL__=!0,t.exports=n},146:function(t,e,r){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},147:function(t,e,r){"use strict";var n=r(161);t.exports=function(t,e,r,o,i){var s=new Error(t);return n(s,e,r,o,i)}},148:function(t,e,r){"use strict";t.exports=function(t,e){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return t.apply(e,r)}}},155:function(t,e,r){t.exports=r(156)},156:function(t,e,r){"use strict";function n(t){var e=new s(t),r=i(s.prototype.request,e);return o.extend(r,s.prototype,e),o.extend(r,e),r}var o=r(141),i=r(148),s=r(158),a=r(142),u=n(a);u.Axios=s,u.create=function(t){return n(o.merge(a,t))},u.Cancel=r(145),u.CancelToken=r(157),u.isCancel=r(146),u.all=function(t){return Promise.all(t)},u.spread=r(172),t.exports=u,t.exports.default=u},157:function(t,e,r){"use strict";function n(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(t){e=t});var r=this;t(function(t){r.reason||(r.reason=new o(t),e(r.reason))})}var o=r(145);n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var t;return{token:new n(function(e){t=e}),cancel:t}},t.exports=n},158:function(t,e,r){"use strict";function n(t){this.defaults=t,this.interceptors={request:new s,response:new s}}var o=r(142),i=r(141),s=r(159),a=r(160),u=r(168),c=r(166);n.prototype.request=function(t){"string"==typeof t&&(t=i.merge({url:arguments[0]},arguments[1])),t=i.merge(o,this.defaults,{method:"get"},t),t.method=t.method.toLowerCase(),t.baseURL&&!u(t.url)&&(t.url=c(t.baseURL,t.url));var e=[a,void 0],r=Promise.resolve(t);for(this.interceptors.request.forEach(function(t){e.unshift(t.fulfilled,t.rejected)}),this.interceptors.response.forEach(function(t){e.push(t.fulfilled,t.rejected)});e.length;)r=r.then(e.shift(),e.shift());return r},i.forEach(["delete","get","head","options"],function(t){n.prototype[t]=function(e,r){return this.request(i.merge(r||{},{method:t,url:e}))}}),i.forEach(["post","put","patch"],function(t){n.prototype[t]=function(e,r,n){return this.request(i.merge(n||{},{method:t,url:e,data:r}))}}),t.exports=n},159:function(t,e,r){"use strict";function n(){this.handlers=[]}var o=r(141);n.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},n.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},n.prototype.forEach=function(t){o.forEach(this.handlers,function(e){null!==e&&t(e)})},t.exports=n},160:function(t,e,r){"use strict";function n(t){t.cancelToken&&t.cancelToken.throwIfRequested()}var o=r(141),i=r(163),s=r(146),a=r(142);t.exports=function(t){return n(t),t.headers=t.headers||{},t.data=i(t.data,t.headers,t.transformRequest),t.headers=o.merge(t.headers.common||{},t.headers[t.method]||{},t.headers||{}),o.forEach(["delete","get","head","post","put","patch","common"],function(e){delete t.headers[e]}),(t.adapter||a.adapter)(t).then(function(e){return n(t),e.data=i(e.data,e.headers,t.transformResponse),e},function(e){return s(e)||(n(t),e&&e.response&&(e.response.data=i(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)})}},161:function(t,e,r){"use strict";t.exports=function(t,e,r,n,o){return t.config=e,r&&(t.code=r),t.request=n,t.response=o,t}},162:function(t,e,r){"use strict";var n=r(147);t.exports=function(t,e,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?e(n("Request failed with status code "+r.status,r.config,null,r.request,r)):t(r)}},163:function(t,e,r){"use strict";var n=r(141);t.exports=function(t,e,r){return n.forEach(r,function(r){t=r(t,e)}),t}},164:function(t,e,r){"use strict";function n(){this.message="String contains an invalid character"}function o(t){for(var e,r,o=String(t),s="",a=0,u=i;o.charAt(0|a)||(u="=",a%1);s+=u.charAt(63&e>>8-a%1*8)){if((r=o.charCodeAt(a+=.75))>255)throw new n;e=e<<8|r}return s}var i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.prototype=new Error,n.prototype.code=5,n.prototype.name="InvalidCharacterError",t.exports=o},165:function(t,e,r){"use strict";function n(t){return encodeURIComponent(t).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var o=r(141);t.exports=function(t,e,r){if(!e)return t;var i;if(r)i=r(e);else if(o.isURLSearchParams(e))i=e.toString();else{var s=[];o.forEach(e,function(t,e){null!==t&&void 0!==t&&(o.isArray(t)&&(e+="[]"),o.isArray(t)||(t=[t]),o.forEach(t,function(t){o.isDate(t)?t=t.toISOString():o.isObject(t)&&(t=JSON.stringify(t)),s.push(n(e)+"="+n(t))}))}),i=s.join("&")}return i&&(t+=(-1===t.indexOf("?")?"?":"&")+i),t}},166:function(t,e,r){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},167:function(t,e,r){"use strict";var n=r(141);t.exports=n.isStandardBrowserEnv()?function(){return{write:function(t,e,r,o,i,s){var a=[];a.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},168:function(t,e,r){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},169:function(t,e,r){"use strict";var n=r(141);t.exports=n.isStandardBrowserEnv()?function(){function t(t){var e=t;return r&&(o.setAttribute("href",e),e=o.href),o.setAttribute("href",e),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}var e,r=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");return e=t(window.location.href),function(r){var o=n.isString(r)?t(r):r;return o.protocol===e.protocol&&o.host===e.host}}():function(){return function(){return!0}}()},170:function(t,e,r){"use strict";var n=r(141);t.exports=function(t,e){n.forEach(t,function(r,n){n!==e&&n.toUpperCase()===e.toUpperCase()&&(t[e]=r,delete t[n])})}},171:function(t,e,r){"use strict";var n=r(141);t.exports=function(t){var e,r,o,i={};return t?(n.forEach(t.split("\n"),function(t){o=t.indexOf(":"),e=n.trim(t.substr(0,o)).toLowerCase(),r=n.trim(t.substr(o+1)),e&&(i[e]=i[e]?i[e]+", "+r:r)}),i):i}},172:function(t,e,r){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},176:function(t,e){function r(t){return!!t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function n(t){return"function"==typeof t.readFloatLE&&"function"==typeof t.slice&&r(t.slice(0,0))}/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
 * @license  MIT
 */
t.exports=function(t){return null!=t&&(r(t)||n(t)||!!t._isBuffer)}},177:function(t,e){function r(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}function o(t){if(l===setTimeout)return setTimeout(t,0);if((l===r||!l)&&setTimeout)return l=setTimeout,setTimeout(t,0);try{return l(t,0)}catch(e){try{return l.call(null,t,0)}catch(e){return l.call(this,t,0)}}}function i(t){if(f===clearTimeout)return clearTimeout(t);if((f===n||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(t);try{return f(t)}catch(e){try{return f.call(null,t)}catch(e){return f.call(this,t)}}}function s(){m&&h&&(m=!1,h.length?p=h.concat(p):v=-1,p.length&&a())}function a(){if(!m){var t=o(s);m=!0;for(var e=p.length;e;){for(h=p,p=[];++v<e;)h&&h[v].run();v=-1,e=p.length}h=null,m=!1,i(t)}}function u(t,e){this.fun=t,this.array=e}function c(){}var l,f,d=t.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:r}catch(t){l=r}try{f="function"==typeof clearTimeout?clearTimeout:n}catch(t){f=n}}();var h,p=[],m=!1,v=-1;d.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];p.push(new u(t,e)),1!==p.length||m||o(a)},u.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(t){return[]},d.binding=function(t){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(t){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},212:function(t,e){function r(t){function e(t){if("string"!=typeof t)throw new Error("You tried to initialize Wordgame with a non-string value");if(0===t.length)throw new Error("You tried to initialize Wordgame with an empty string");if(t.match(/[^a-z]/i))throw new Error("You tried to initialize Wordgame with a string that contains non-alpha characters");return t}function r(t){for(var e=t.split(""),r=e.length-1;r>0;r--){var n=Math.floor(Math.random()*(r+1)),o=e[n];e[n]=e[r],e[r]=o}return e.join("")}this.word=e(t),this.shuffledWord=r(t),this.attempts=0,this.totalNrOfWords=1,this.solvedWords=0,this.hasAlreadyBeenSolved=!1,this.nextWord=function(t){this.word=e(t),this.shuffledWord=r(t),this.totalNrOfWords+=1,this.hasAlreadyBeenSolved=!1},this.isCorrect=function(t){t=t.toUpperCase();var e=this.word.toUpperCase();return this.hasAlreadyBeenSolved?e===t:(this.attempts+=1,e===t&&(this.hasAlreadyBeenSolved=!0,this.solvedWords+=1,!0))},this.reshuffle=function(){this.shuffledWord=r(this.word)},this.score=function(){return 0===this.attempts?0:Math.floor(this.solvedWords/this.attempts*100)}}t.exports=r},213:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r(155),o=r.n(n),i=r(262),s=r.n(i),a=r(117),u=(r.n(a),r(212));e.default={data:function(){return{baseURL:"https://raw.githubusercontent.com/praktikantphips/wlist-pseudo-rest/master/wlist",words:{},wordlength:5,game:{},hasStarted:!1,usersolution:"",disaster:!1,availableLength:20}},created:function(){var t=Math.floor(3*Math.random()),e=Math.floor(100*Math.random()),r=this.baseURL+t+".json",n=this;o.a.get(r).then(function(t){n.words=t.data,n.availableLength=100,n.game=new u(n.words[5][e]);var r={5:t.data[5].slice(0,20),6:t.data[6].slice(0,20),7:t.data[7].slice(0,20),8:t.data[8].slice(0,20)};s.a.set("dracula-words",r)}).catch(function(t){console.log(t),console.log("connection error... looking for data in localStorage");var e=s.a.get("dracula-words"),r=Math.floor(20*Math.random());void 0!==e?(n.words=e,n.availableLength=20,n.game=new u(e[5][r]),n.$refs.modalLimitedFeature.open()):n.disaster=!0})},methods:{reshuffle:function(){this.game.reshuffle()},check:function(){this.game.isCorrect(this.usersolution)?this.$refs.minimizedModalCorrect.open():this.$refs.minimizedModalWrong.open()},nextw:function(){this.game.hasAlreadyBeenSolved||this.answerToast();var t=this.wordlength.toString(),e=Math.floor(Math.random()*this.availableLength);this.game.nextWord(this.words[t][e]),this.usersolution=""},closeCorrect:function(){this.$refs.minimizedModalCorrect.close()},closeWrong:function(){this.$refs.minimizedModalWrong.close()},closeLimited:function(){this.$refs.modalLimitedFeature.close()},answerToast:function(){a.Toast.create.negative({html:"the answer was: "+this.game.word.toUpperCase(),timeout:6e3})}},computed:{actualWord:function(){return this.game.word.toUpperCase()},shuffledWord:function(){return this.game.shuffledWord.toUpperCase()},userscore:function(){return this.game.score()},placeholderSolution:function(){return this.game.word.replace(/./g,".")}}}},252:function(t,e,r){e=t.exports=r(133)(void 0),e.push([t.i,".worddisplay{text-align:center;max-width:500px;margin:auto}.button-row{margin-left:15px;margin-top:15px}",""])},257:function(t,e,r){var n=r(252);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(134)("56ff2da6",n,!0)},262:function(t,e,r){!function(r,n){void 0!==t&&t.exports&&(e=t.exports=n(r,e))}(this,function(t,e){"use strict";return Array.prototype.indexOf||(Array.prototype.indexOf=function(t){var e=this.length>>>0,r=Number(arguments[1])||0;for(r=r<0?Math.ceil(r):Math.floor(r),r<0&&(r+=e);r<e;r++)if(r in this&&this[r]===t)return r;return-1}),e.prefix="",e._getPrefixedKey=function(t,e){return e=e||{},e.noPrefix?t:this.prefix+t},e.set=function(t,e,r){var n=this._getPrefixedKey(t,r);try{localStorage.setItem(n,JSON.stringify({data:e}))}catch(r){console&&console.warn("Lockr didn't successfully save the '{"+t+": "+e+"}' pair, because the localStorage is full.")}},e.get=function(t,e,r){var n,o=this._getPrefixedKey(t,r);try{n=JSON.parse(localStorage.getItem(o))}catch(e){try{n=localStorage[o]?JSON.parse('{"data":"'+localStorage.getItem(o)+'"}'):null}catch(e){console&&console.warn("Lockr could not load the item with key "+t)}}return null===n?e:void 0!==n.data?n.data:e},e.sadd=function(t,r,n){var o,i=this._getPrefixedKey(t,n),s=e.smembers(t);if(s.indexOf(r)>-1)return null;try{s.push(r),o=JSON.stringify({data:s}),localStorage.setItem(i,o)}catch(e){console.log(e),console&&console.warn("Lockr didn't successfully add the "+r+" to "+t+" set, because the localStorage is full.")}},e.smembers=function(t,e){var r,n=this._getPrefixedKey(t,e);try{r=JSON.parse(localStorage.getItem(n))}catch(t){r=null}return null===r?[]:r.data||[]},e.sismember=function(t,r,n){this._getPrefixedKey(t,n);return e.smembers(t).indexOf(r)>-1},e.getAll=function(){return Object.keys(localStorage).map(function(t){return e.get(t)})},e.srem=function(t,r,n){var o,i,s=this._getPrefixedKey(t,n),a=e.smembers(t,r);i=a.indexOf(r),i>-1&&a.splice(i,1),o=JSON.stringify({data:a});try{localStorage.setItem(s,o)}catch(e){console&&console.warn("Lockr couldn't remove the "+r+" from the set "+t)}},e.rm=function(t){localStorage.removeItem(t)},e.flush=function(){localStorage.clear()},e})},263:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"layout-padding"},[r("div",{staticClass:"card"},[r("q-parallax",{attrs:{src:"../statics/dracula-light.jpg",height:150}},[r("div",{slot:"loading"},[t._v("Loading...")])]),t._v(" "),r("div",{staticClass:"card-content"},[t.disaster?r("div",[r("p",{staticClass:"caption"},[t._v("\n              It appears that you are offline. We were not able to find any remaining\n              data from you last visit. Please try again when you are back online\n            ")])]):r("div",[t.hasStarted?r("div",[r("q-collapsible",{attrs:{label:"Now What?"}},[r("div",[r("p",{staticClass:"caption"},[t._v("\n                    Unscramble this word. All words are German and all words\n                    are Hauptwörter. Some of the words are really weird, so\n                    don't hesitate to check duden. Lots of practice will\n                    guarantee that you ace your MedAT entrance exam. Shuffling\n                    letters around is apparently a vital skill that every\n                    doctor needs.\n                  ")])])]),t._v(" "),r("div",{staticClass:"worddisplay"},[r("h3",[t._v(t._s(t.shuffledWord))]),t._v(" "),""===t.usersolution?r("div",[r("h3",[t._v(t._s(t.placeholderSolution))])]):r("div",[r("h3",[t._v(t._s(t.usersolution.toUpperCase()))])]),t._v(" "),r("div",{staticStyle:{"padding-bottom":"30px"}},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.usersolution,expression:"usersolution"}],attrs:{placeholder:"Enter your solution"},domProps:{value:t.usersolution},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13))return null;t.check()},input:function(e){e.target.composing||(t.usersolution=e.target.value)}}})]),t._v(" "),r("div",{staticClass:"row flex justify-center wrap",staticStyle:{"padding-bottom":"30px"}},[r("div",{staticClass:"button-row"},[r("button",{staticClass:"primary",on:{click:function(e){t.reshuffle()}}},[t._v("\n                      Reshuffle\n                    ")])]),t._v(" "),r("div",{staticClass:"button-row"},[r("button",{staticClass:"primary",on:{click:function(e){t.check()}}},[t._v("\n                      Check\n                    ")])]),t._v(" "),r("div",{staticClass:"button-row"},[r("button",{staticClass:"primary",on:{click:function(e){t.nextw()}}},[t._v("\n                      Next Word\n                    ")])])]),t._v(" "),r("div",[r("p",[t._v("Word length: "+t._s(t.wordlength))]),t._v(" "),r("q-range",{attrs:{min:5,max:8,step:1,markers:"",labelAlways:""},model:{value:t.wordlength,callback:function(e){t.wordlength=e},expression:"wordlength"}}),t._v(" "),r("p",[t._v("Your score is: "+t._s(t.userscore)+"% ")]),t._v(" "),r("q-progress",{attrs:{percentage:t.userscore}})],1)])],1):r("div",[r("p",{staticClass:"caption"},[t._v("\n                So you want to become a Doctor! You will have to take the MedAT\n                entrance exam. In this exam there is a silly section where you must\n                decipher anagrams. Not sure why a doctor needs that skill.\n                "),r("br"),t._v("\n                Start the Game to practice your anagram skills\n              ")]),t._v(" "),r("button",{staticClass:"primary",on:{click:function(e){t.hasStarted=!0}}},[t._v("\n                Start Game\n              ")])])])]),t._v(" "),r("q-modal",{ref:"minimizedModalCorrect",staticClass:"minimized",attrs:{"content-css":{padding:"50px"}}},[r("h4",[t._v(" Correct! ")]),t._v(" "),r("p",[t._v("You are a genius!!!")]),t._v(" "),r("button",{staticClass:"green",on:{click:function(e){t.closeCorrect()}}},[t._v("Close Me")])]),t._v(" "),r("q-modal",{ref:"minimizedModalWrong",staticClass:"minimized",attrs:{"content-css":{padding:"50px"}}},[r("h4",[t._v(" Wrong ")]),t._v(" "),r("p",[t._v("try again.")]),t._v(" "),r("button",{staticClass:"red",on:{click:function(e){t.closeWrong()}}},[t._v("Close Me")])]),t._v(" "),r("q-modal",{ref:"modalLimitedFeature",staticClass:"minimized",attrs:{"content-css":{padding:"50px"}}},[r("h4",[t._v("It appears you are offline")]),t._v(" "),r("p",[t._v("\n            The app will continue to work with limited features.\n            The app currently has fewer words to choose from for the\n            game.\n          ")]),t._v(" "),r("button",{staticClass:"green",on:{click:function(e){t.closeLimited(this)}}},[t._v("OK")])])],1)])])},staticRenderFns:[]}}});