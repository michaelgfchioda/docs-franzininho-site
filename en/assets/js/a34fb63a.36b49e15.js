"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[8336],{70676:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>c});var o=i(17624),r=i(95788);const a={id:"picsimlab-intro",title:"Franzininho DIY no PICSimLab",slug:"/franzininho-diy/picsimlab/primeiros-passos",description:"Nesse exemplos vamos ver como usar o PICSimLab para simular e depurar a Franzininho DIY"},s=void 0,t={id:"FranzininhoDIY/picsimlab/picsimlab-intro",title:"Franzininho DIY no PICSimLab",description:"Nesse exemplos vamos ver como usar o PICSimLab para simular e depurar a Franzininho DIY",source:"@site/docs/FranzininhoDIY/picsimlab/franzininho-picsimlab.md",sourceDirName:"FranzininhoDIY/picsimlab",slug:"/franzininho-diy/picsimlab/primeiros-passos",permalink:"/en/docs/franzininho-diy/picsimlab/primeiros-passos",draft:!1,unlisted:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/picsimlab/franzininho-picsimlab.md",tags:[],version:"current",frontMatter:{id:"picsimlab-intro",title:"Franzininho DIY no PICSimLab",slug:"/franzininho-diy/picsimlab/primeiros-passos",description:"Nesse exemplos vamos ver como usar o PICSimLab para simular e depurar a Franzininho DIY"},sidebar:"docs",previous:{title:"Como simular a Franzininho DIY no Wokwi",permalink:"/en/docs/franzininho-diy/wokwi/primeiros-passos"},next:{title:"Placa FranzMakey",permalink:"/en/docs/FranzMakey/franzmakey"}},l={},c=[{value:"Timeline do video",id:"timeline-do-video",level:3},{value:"Links",id:"links",level:2},{value:"Observa\xe7\xe3o",id:"observa\xe7\xe3o",level:2},{value:"Downloads",id:"downloads",level:2}];function d(e){const n={a:"a",admonition:"admonition",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.MN)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"PICSimLab \xe9 um emulador em tempo real de placas de desenvolvimento com depurador MPLABX/avr-gdb integrado. O PICSimLab suporta alguns microcontroladores PIC e AVR (outros em breve)."}),"\n",(0,o.jsx)(n.admonition,{type:"tip",children:(0,o.jsxs)(n.p,{children:["Fa\xe7a o Download do PICSimLab: ",(0,o.jsx)(n.a,{href:"https://github.com/lcgamboa/picsimlab/releases",children:"https://github.com/lcgamboa/picsimlab/releases"})]})}),"\n",(0,o.jsx)(n.p,{children:"A placa Franzininho DIY est\xe1 dispon\xedvel para simula\xe7\xe3o no PICSimLab,"}),"\n",(0,o.jsx)(n.p,{children:"Veja no video abaixo os passos para grava\xe7\xe3o e depura\xe7\xe3o da Franzininho DIY no PICSimLab:"}),"\n",(0,o.jsx)("iframe",{src:"https://www.youtube.com/embed/OemWGwXNxE4",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,o.jsx)(n.h3,{id:"timeline-do-video",children:"Timeline do video"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"00:00 Introdu\xe7\xe3o"}),"\n",(0,o.jsx)(n.li,{children:"02:23 Arduino IDE (grava\xe7\xe3o)"}),"\n",(0,o.jsx)(n.li,{children:"05:45 Arduino IDE tinyDebug (mensagens pela serial virtual)"}),"\n",(0,o.jsx)(n.li,{children:"11:20 Sloeber IDE (eclipse) (grava\xe7\xe3o/depura\xe7\xe3o)"}),"\n",(0,o.jsx)(n.li,{children:"27:55 avr gcc e gdb no terminal (grava\xe7\xe3o/depura\xe7\xe3o)"}),"\n",(0,o.jsx)(n.li,{children:"37:52 MPLABX IDE (grava\xe7\xe3o/depura\xe7\xe3o)"}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"links",children:"Links"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Adicionar suporte da placa Franzininho na IDE Arduino (e Sloeber): ",(0,o.jsx)(n.a,{href:"https://raw.githubusercontent.com/lcgamboa/franzininho-arduino-package/master/package_franzininho_lcgamboa_index.json",children:"https://raw.githubusercontent.com/lcgamboa/franzininho-arduino-package/master/package_franzininho_lcgamboa_index.json"})]}),"\n",(0,o.jsxs)(n.li,{children:["Exemplos AVR libc: ",(0,o.jsx)(n.a,{href:"https://github.com/Franzininho/exemplos-avr-libc",children:"https://github.com/Franzininho/exemplos-avr-libc"})]}),"\n",(0,o.jsxs)(n.li,{children:["Donwload do Sloeber IDE (Eclipse): ",(0,o.jsx)(n.a,{href:"https://eclipse.baeyens.it/",children:"https://eclipse.baeyens.it/"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"observa\xe7\xe3o",children:"Observa\xe7\xe3o"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'Para instalar o suporte ao GDB instalar o suporte ao "arduino megaAVR boards" no Sloeber (passo que deu errado no v\xeddeo)'}),"\n",(0,o.jsxs)(n.li,{children:["O caminho do GDB dentro da pasta do Sloeber: ",(0,o.jsx)(n.strong,{children:"Sloeber/arduinoPlugin/packages/arduino/tools/avr-gcc/7.3.0-atmel3.6.1-arduino5/bin/avr-gdb"})]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"downloads",children:"Downloads"}),"\n",(0,o.jsxs)(n.p,{children:["Download do PICSimLab: ",(0,o.jsx)(n.a,{href:"https://github.com/lcgamboa/picsimlab/releases",children:"https://github.com/lcgamboa/picsimlab/releases"}),"\nDownload do MPLABX: ",(0,o.jsx)(n.a,{href:"https://www.microchip.com/en-us/development-tools-tools-and-software/mplab-x-ide",children:"https://www.microchip.com/en-us/development-tools-tools-and-software/mplab-x-ide"}),"\nDownload do XC8:",(0,o.jsx)(n.a,{href:"https://www.microchip.com/en-us/development-tools-tools-and-software/mplab-xc-compilers",children:"https://www.microchip.com/en-us/development-tools-tools-and-software/mplab-xc-compilers"})]})]})}function p(e={}){const{wrapper:n}={...(0,r.MN)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},95788:(e,n,i)=>{i.d(n,{MN:()=>c});var o=i(11504);function r(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function a(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,o)}return i}function s(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?a(Object(i),!0).forEach((function(n){r(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function t(e,n){if(null==e)return{};var i,o,r=function(e,n){if(null==e)return{};var i,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)i=a[o],n.indexOf(i)>=0||(r[i]=e[i]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)i=a[o],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=o.createContext({}),c=function(e){var n=o.useContext(l),i=n;return e&&(i="function"==typeof e?e(n):s(s({},n),e)),i},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=t(e,["components","mdxType","originalType","parentName"]),m=c(i),u=r,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||a;return i?o.createElement(h,s(s({ref:n},p),{},{components:i})):o.createElement(h,s({ref:n},p))}));p.displayName="MDXCreateElement"}}]);