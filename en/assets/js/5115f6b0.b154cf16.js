"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[5336],{63816:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>c,contentTitle:()=>s,default:()=>l,frontMatter:()=>n,metadata:()=>t,toc:()=>d});var r=a(17624),i=a(95788);const n={id:"arduino",title:"Primeiros Passos",slug:"/franzininho-wifi/exemplos-arduino/primeiros-passos",description:"Aprenda dar os primeiros passo no uso do Arduino na Franzininho WiFi",author:"F\xe1bio Souza"},s=void 0,t={id:"FranzininhoWifi/exemplos-arduino/arduino",title:"Primeiros Passos",description:"Aprenda dar os primeiros passo no uso do Arduino na Franzininho WiFi",source:"@site/docs/FranzininhoWifi/exemplos-arduino/arduino.md",sourceDirName:"FranzininhoWifi/exemplos-arduino",slug:"/franzininho-wifi/exemplos-arduino/primeiros-passos",permalink:"/en/docs/franzininho-wifi/exemplos-arduino/primeiros-passos",draft:!1,unlisted:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-arduino/arduino.md",tags:[],version:"current",frontMatter:{id:"arduino",title:"Primeiros Passos",slug:"/franzininho-wifi/exemplos-arduino/primeiros-passos",description:"Aprenda dar os primeiros passo no uso do Arduino na Franzininho WiFi",author:"F\xe1bio Souza"},sidebar:"docs",previous:{title:"Sistema de irriga\xe7\xe3o autom\xe1tico",permalink:"/en/docs/franzininho-wifi/exemplos-circuitpython/irrigacao"},next:{title:"Blink",permalink:"/en/docs/franzininho-wifi/exemplos-arduino/blink"}},c={},d=[{value:"Video com a configura\xe7\xe3o",id:"video-com-a-configura\xe7\xe3o",level:2},{value:"Arduino IDE",id:"arduino-ide",level:2},{value:"Instala\xe7\xe3o do pacote ESP32 para Arduino",id:"instala\xe7\xe3o-do-pacote-esp32-para-arduino",level:2}];function p(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",...(0,i.MN)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.p,{children:"A Franzininho WiFi foi adicionada recentemente a plataforma Arduino atrav\xe9s do pacote para ESP32 da Espressif. Essa foi uma contribui\xe7\xe3o do Pedro Minatel para o projeto Franzininho. Pedro enviou um PR com a adi\xe7\xe3o da Franzininho WiFi no modo CDC e tamb\xe9m como MSC."}),"\n",(0,r.jsx)(o.p,{children:"Nesse tutorial aprenderemos configurar a Arduino IDE e fazer o upload de c\xf3digo para a placa Franzininho WiFi."}),"\n",(0,r.jsxs)(o.p,{children:["Usamos como base para esse tutorial a documenta\xe7\xe3o da Espressif para Arduino: ",(0,r.jsx)(o.a,{href:"https://docs.espressif.com/projects/arduino-esp32/en/latest/",children:"https://docs.espressif.com/projects/arduino-esp32/en/latest/"})]}),"\n",(0,r.jsx)(o.h2,{id:"video-com-a-configura\xe7\xe3o",children:"Video com a configura\xe7\xe3o"}),"\n",(0,r.jsx)("iframe",{src:"https://www.youtube.com/embed/Ka6nfYmEaXI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),"\n",(0,r.jsx)(o.h2,{id:"arduino-ide",children:"Arduino IDE"}),"\n",(0,r.jsx)(o.p,{children:"Arduino \xe9 uma plataforma de prototipa\xe7\xe3o de projetos eletr\xf4nicos composta por placas e uma interface de programa\xe7\xe3o chamada Arduino."}),"\n",(0,r.jsxs)(o.p,{children:["Antes de come\xe7armos as configura\xe7\xf5es \xe9 importante que voc\xea instale a Arduino IDE em seu sistema operacional. Acesse: ",(0,r.jsx)(o.a,{href:"https://www.arduino.cc/en/software",children:"https://www.arduino.cc/en/software"})," e baixe a vers\xe3o adequada para o seu sistema operacional."]}),"\n",(0,r.jsx)(o.p,{children:"Estamos usando para esse tutorial a Arduino IDE 1.8.15, recomendamos essa vers\xe3o ou superior."}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"Download IDE",src:a(39916).c+"",width:"843",height:"396"})}),"\n",(0,r.jsx)(o.h2,{id:"instala\xe7\xe3o-do-pacote-esp32-para-arduino",children:"Instala\xe7\xe3o do pacote ESP32 para Arduino"}),"\n",(0,r.jsx)(o.p,{children:"Para instala\xe7\xe3o do pacote ESP32 para Arduino usaremos a ferramenta Gerenciador de placas na pr\xf3pria IDE."}),"\n",(0,r.jsx)(o.p,{children:"Siga os seguintes passos:"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsx)(o.li,{children:"Abra a Arduino IDe e acesse Arquivos -> Prefer\xeancias;"}),"\n",(0,r.jsxs)(o.li,{children:["Cole em \u201cURLs adicionais para Gerenciadores de Placas\u201d a seguinte URL:\n",(0,r.jsx)(o.code,{children:"https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json"})]}),"\n",(0,r.jsx)(o.li,{children:"Clique em OK;"}),"\n",(0,r.jsx)(o.li,{children:"V\xe1 em Ferramentas > Placa > Gerenciador de Placas;"}),"\n",(0,r.jsx)(o.li,{children:"Ao abrir, procure por ESP32-S2, e clique em instalar;"}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Veja como o passo a passo na imagem abaixo:"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"pacote passo a passo",src:a(83374).c+"",width:"1083",height:"781"})}),"\n",(0,r.jsx)(o.p,{children:"Pronto, agora \xe9 s\xf3 ir em placa e procurar pela Franzininho WiFi:"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"Selecionando a placa",src:a(4536).c+"",width:"1083",height:"781"})}),"\n",(0,r.jsx)(o.p,{children:"Fa\xe7a a seguinte configura\xe7\xe3o:"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"Configura\xe7\xe3o",src:a(4540).c+"",width:"1365",height:"740"})}),"\n",(0,r.jsx)(o.p,{children:"Agora faremos um exemplo para verificar o processo de upload."}),"\n",(0,r.jsx)(o.p,{children:"Abra o exemplo GetChipID:"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"Exemplo",src:a(63572).c+"",width:"1365",height:"739"})}),"\n",(0,r.jsx)(o.p,{children:"Agora faremos o upload para a placa. Se for a primeira vez que voc\xea usar\xe1 a Arduino IDE para programar a Franzininho WiFi voc\xea dever\xe1 colocar a placa em modo DFU para carregar o c\xf3digo. Ap\xf3s isso n\xe3o precisar\xe1 mais fazer esse procedimento."}),"\n",(0,r.jsx)(o.admonition,{title:"Dica",type:"tip",children:(0,r.jsx)(o.p,{children:"Isso dever\xe1 sempre ser feito se voc\xea programar a placa com outras plataformas como ESP-IDF, CircuitPython, etc. Apos esse procedimento \xe9 s\xf3 programar a placa pressionando upload, como estamos acostumado a fazer com outras placas."})}),"\n",(0,r.jsx)(o.p,{children:"Colocando a placa em modo DFU"}),"\n",(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:"Plugue a placa na USB;"}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:"Pressione o bot\xe3o Boot e segure;"}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:"Pressione o bot\xe3o Reset e solte em seguida;"}),"\n"]}),"\n",(0,r.jsxs)(o.li,{children:["\n",(0,r.jsx)(o.p,{children:"Solte o bot\xe3o Boot."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(o.p,{children:"Para fazer carregar o c\xf3digo na placa clique em Upload:"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"Uoload",src:a(39176).c+"",width:"520",height:"618"})}),"\n",(0,r.jsx)(o.p,{children:"Abra o monitor serial e configure a velocidade para 115200 bps:"}),"\n",(0,r.jsx)(o.p,{children:(0,r.jsx)(o.img,{alt:"Monitor Serial",src:a(10080).c+"",width:"1321",height:"509"})}),"\n",(0,r.jsx)(o.p,{children:"Ser\xe1 exibido o modelo e chip ID."}),"\n",(0,r.jsx)(o.p,{children:"Agora voc\xea pode carregar qualquer c\xf3digo para a placa sem precisar coloc\xe1-la em modo DFU."}),"\n",(0,r.jsxs)(o.admonition,{type:"tip",children:[(0,r.jsx)(o.mdxAdmonitionTitle,{}),(0,r.jsx)(o.p,{children:"A Franzininho WiFi MSC funciona da mesma forma para upload via Arduino IDE. A diferen\xe7a \xe9 que nesse modo podemos carregar bin\xe1rios sem uso da IDE, apenas carregando o bin\xe1rio para o dispositivo de armazenamento criado no computador."})]})]})}function l(e={}){const{wrapper:o}={...(0,i.MN)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},95788:(e,o,a)=>{a.d(o,{MN:()=>d});var r=a(11504);function i(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function n(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?n(Object(a),!0).forEach((function(o){i(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function t(e,o){if(null==e)return{};var a,r,i=function(e,o){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],o.indexOf(a)>=0||(i[a]=e[a]);return i}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=r.createContext({}),d=function(e){var o=r.useContext(c),a=o;return e&&(a="function"==typeof e?e(o):s(s({},o),e)),a},p={inlineCode:"code",wrapper:function(e){var o=e.children;return r.createElement(r.Fragment,{},o)}},l=r.forwardRef((function(e,o){var a=e.components,i=e.mdxType,n=e.originalType,c=e.parentName,l=t(e,["components","mdxType","originalType","parentName"]),m=d(a),u=i,h=m["".concat(c,".").concat(u)]||m[u]||p[u]||n;return a?r.createElement(h,s(s({ref:o},l),{},{components:a})):r.createElement(h,s({ref:o},l))}));l.displayName="MDXCreateElement"},39916:(e,o,a)=>{a.d(o,{c:()=>r});const r=a.p+"assets/images/00-download-428b272c195061c55de27a5770c95e1e.png"},83374:(e,o,a)=>{a.d(o,{c:()=>r});const r=a.p+"assets/images/01-pacote-275e24ec407da429f03fe456dd16253a.gif"},4536:(e,o,a)=>{a.d(o,{c:()=>r});const r=a.p+"assets/images/02-placa-d724ea164399f9f31002b8b205ea7e35.gif"},4540:(e,o,a)=>{a.d(o,{c:()=>r});const r=a.p+"assets/images/03-configura-b2256d3303f3ebd6303f795543ec6332.png"},63572:(e,o,a)=>{a.d(o,{c:()=>r});const r=a.p+"assets/images/04-exemplo-55dcd031bd5489559f4b7f790e734ac6.png"},39176:(e,o,a)=>{a.d(o,{c:()=>r});const r=a.p+"assets/images/05-upload-2c7649aa9e74e252995b995d3f4a4fce.png"},10080:(e,o,a)=>{a.d(o,{c:()=>r});const r=a.p+"assets/images/06-terminal-serial-d76f0eb9610be895efec7943b91c1e11.png"}}]);