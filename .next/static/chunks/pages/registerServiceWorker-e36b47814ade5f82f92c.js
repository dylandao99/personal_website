_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[12],{"5EU4":function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/registerServiceWorker",function(){return t("M9Kn")}])},"8oxB":function(n,e){var t,r,o=n.exports={};function i(){throw new Error("setTimeout has not been defined")}function c(){throw new Error("clearTimeout has not been defined")}function u(n){if(t===setTimeout)return setTimeout(n,0);if((t===i||!t)&&setTimeout)return t=setTimeout,setTimeout(n,0);try{return t(n,0)}catch(e){try{return t.call(null,n,0)}catch(e){return t.call(this,n,0)}}}!function(){try{t="function"===typeof setTimeout?setTimeout:i}catch(n){t=i}try{r="function"===typeof clearTimeout?clearTimeout:c}catch(n){r=c}}();var a,s=[],f=!1,l=-1;function h(){f&&a&&(f=!1,a.length?s=a.concat(s):l=-1,s.length&&d())}function d(){if(!f){var n=u(h);f=!0;for(var e=s.length;e;){for(a=s,s=[];++l<e;)a&&a[l].run();l=-1,e=s.length}a=null,f=!1,function(n){if(r===clearTimeout)return clearTimeout(n);if((r===c||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(n);try{r(n)}catch(e){try{return r.call(null,n)}catch(e){return r.call(this,n)}}}(n)}}function w(n,e){this.fun=n,this.array=e}function v(){}o.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];s.push(new w(n,e)),1!==s.length||f||u(d)},w.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=v,o.addListener=v,o.once=v,o.off=v,o.removeListener=v,o.removeAllListeners=v,o.emit=v,o.prependListener=v,o.prependOnceListener=v,o.listeners=function(n){return[]},o.binding=function(n){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(n){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},M9Kn:function(n,e,t){"use strict";t.r(e),function(n){t.d(e,"default",(function(){return o})),t.d(e,"unregister",(function(){return c}));var r=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function o(){if("serviceWorker"in navigator){if(new URL(n.env.PUBLIC_URL,window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat(n.env.PUBLIC_URL,"/service-worker.js");r?function(n){fetch(n).then((function(e){404===e.status||-1===e.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):i(n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):i(e)}))}}function i(n){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var e=n.installing;e.onstatechange=function(){"installed"===e.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(n){console.error("Error during service worker registration:",n)}))}function c(){"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}}.call(this,t("8oxB"))}},[["5EU4",0]]]);