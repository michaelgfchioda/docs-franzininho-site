(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{115:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,d=p["".concat(l,".").concat(b)]||p[b]||f[b]||a;return n?o.a.createElement(d,i(i({ref:t},u),{},{components:n})):o.a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=b;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(3),o=n(7),a=(n(0),n(115)),l={slug:"welcome",title:"Welcome",author:"Yangshun Tay",author_title:"Front End Engineer @ Facebook",author_url:"https://github.com/yangshun",author_image_url:"https://avatars0.githubusercontent.com/u/1315101?s=400&v=4",tags:["facebook","hello","docusaurus"]},i={permalink:"/docs-franzininho-site/en/blog/welcome",source:"@site/blog/2019-05-30-welcome.md",description:"Blog features are powered by the blog plugin. Simply add files to the blog directory. It supports tags as well!",date:"2019-05-30T00:00:00.000Z",tags:[{label:"facebook",permalink:"/docs-franzininho-site/en/blog/tags/facebook"},{label:"hello",permalink:"/docs-franzininho-site/en/blog/tags/hello"},{label:"docusaurus",permalink:"/docs-franzininho-site/en/blog/tags/docusaurus"}],title:"Welcome",readingTime:.175,truncated:!1,nextItem:{title:"Hello",permalink:"/docs-franzininho-site/en/blog/hello-world"}},c=[],u={toc:c};function s(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Blog features are powered by the blog plugin. Simply add files to the ",Object(a.b)("inlineCode",{parentName:"p"},"blog")," directory. It supports tags as well!"),Object(a.b)("p",null,"Delete the whole directory if you don't want the blog features. As simple as that!"))}s.isMDXComponent=!0}}]);