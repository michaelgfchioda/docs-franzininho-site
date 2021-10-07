(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{114:function(n,e,r){"use strict";r.r(e),r.d(e,"frontMatter",(function(){return c})),r.d(e,"metadata",(function(){return l})),r.d(e,"toc",(function(){return s})),r.d(e,"default",(function(){return u}));var i=r(3),t=r(7),o=(r(0),r(151)),a=["components"],c={id:"arduino-blink",title:"Blink",slug:"/franzininho-wifi/exemplos-arduino/blink",description:"Primeiro Hello World com a Franzininho WiFi no Arduino IDE",author:"Diana Santos"},l={unversionedId:"FranzininhoWifi/exemplos-arduino/arduino-blink",id:"FranzininhoWifi/exemplos-arduino/arduino-blink",isDocsHomePage:!1,title:"Blink",description:"Primeiro Hello World com a Franzininho WiFi no Arduino IDE",source:"@site/docs/FranzininhoWifi/exemplos-arduino/blink.md",slug:"/franzininho-wifi/exemplos-arduino/blink",permalink:"/docs-franzininho-site/en/docs/franzininho-wifi/exemplos-arduino/blink",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-arduino/blink.md",version:"current",sidebar:"docs",previous:{title:"Primeiros Passos",permalink:"/docs-franzininho-site/en/docs/franzininho-wifi/exemplos-arduino/primeiros-passos"},next:{title:"Neopixel RGB LED Onboard",permalink:"/docs-franzininho-site/en/docs/franzininho-wifi/exemplos-arduino/neopixel-onboard"}},s=[],p={toc:s};function u(n){var e=n.components,r=Object(t.a)(n,a);return Object(o.b)("wrapper",Object(i.a)({},p,r,{components:e,mdxType:"MDXLayout"}),Object(o.b)("div",{className:"admonition admonition-warning alert alert--danger"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"TBD"))))}u.isMDXComponent=!0},151:function(n,e,r){"use strict";r.d(e,"a",(function(){return u})),r.d(e,"b",(function(){return f}));var i=r(0),t=r.n(i);function o(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function a(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,i)}return r}function c(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function l(n,e){if(null==n)return{};var r,i,t=function(n,e){if(null==n)return{};var r,i,t={},o=Object.keys(n);for(i=0;i<o.length;i++)r=o[i],e.indexOf(r)>=0||(t[r]=n[r]);return t}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)r=o[i],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(n,r)&&(t[r]=n[r])}return t}var s=t.a.createContext({}),p=function(n){var e=t.a.useContext(s),r=e;return n&&(r="function"==typeof n?n(e):c(c({},e),n)),r},u=function(n){var e=p(n.components);return t.a.createElement(s.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return t.a.createElement(t.a.Fragment,{},e)}},m=t.a.forwardRef((function(n,e){var r=n.components,i=n.mdxType,o=n.originalType,a=n.parentName,s=l(n,["components","mdxType","originalType","parentName"]),u=p(r),m=i,f=u["".concat(a,".").concat(m)]||u[m]||d[m]||o;return r?t.a.createElement(f,c(c({ref:e},s),{},{components:r})):t.a.createElement(f,c({ref:e},s))}));function f(n,e){var r=arguments,i=e&&e.mdxType;if("string"==typeof n||i){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var l in e)hasOwnProperty.call(e,l)&&(c[l]=e[l]);c.originalType=n,c.mdxType="string"==typeof n?n:i,a[1]=c;for(var s=2;s<o;s++)a[s]=r[s];return t.a.createElement.apply(null,a)}return t.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);