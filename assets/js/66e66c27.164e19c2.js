"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[7932],{3905:(i,e,o)=>{o.d(e,{Zo:()=>m,kt:()=>k});var t=o(7294);function a(i,e,o){return e in i?Object.defineProperty(i,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):i[e]=o,i}function r(i,e){var o=Object.keys(i);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(i);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),o.push.apply(o,t)}return o}function n(i){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){a(i,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(i,e,Object.getOwnPropertyDescriptor(o,e))}))}return i}function s(i,e){if(null==i)return{};var o,t,a=function(i,e){if(null==i)return{};var o,t,a={},r=Object.keys(i);for(t=0;t<r.length;t++)o=r[t],e.indexOf(o)>=0||(a[o]=i[o]);return a}(i,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);for(t=0;t<r.length;t++)o=r[t],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(i,o)&&(a[o]=i[o])}return a}var p=t.createContext({}),l=function(i){var e=t.useContext(p),o=e;return i&&(o="function"==typeof i?i(e):n(n({},e),i)),o},m=function(i){var e=l(i.components);return t.createElement(p.Provider,{value:e},i.children)},c="mdxType",u={inlineCode:"code",wrapper:function(i){var e=i.children;return t.createElement(t.Fragment,{},e)}},d=t.forwardRef((function(i,e){var o=i.components,a=i.mdxType,r=i.originalType,p=i.parentName,m=s(i,["components","mdxType","originalType","parentName"]),c=l(o),d=a,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||r;return o?t.createElement(k,n(n({ref:e},m),{},{components:o})):t.createElement(k,n({ref:e},m))}));function k(i,e){var o=arguments,a=e&&e.mdxType;if("string"==typeof i||a){var r=o.length,n=new Array(r);n[0]=d;var s={};for(var p in e)hasOwnProperty.call(e,p)&&(s[p]=e[p]);s.originalType=i,s[c]="string"==typeof i?i:a,n[1]=s;for(var l=2;l<r;l++)n[l]=o[l];return t.createElement.apply(null,n)}return t.createElement.apply(null,o)}d.displayName="MDXCreateElement"},769:(i,e,o)=>{o.r(e),o.d(e,{assets:()=>p,contentTitle:()=>n,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var t=o(3117),a=(o(7294),o(3905));const r={id:"franzininho-wifi-wokwi-intro",title:"Como simular a Franzininho WiFi no Wokwi",slug:"/franzininho-wifi/wokwi/primeiros-passos",description:"Nesse t\xf3pico vamos ver como usar o WokWi para simular circuitos com a Franzininho WiFi"},n=void 0,s={unversionedId:"FranzininhoWifi/wokwi/franzininho-wifi-wokwi-intro",id:"FranzininhoWifi/wokwi/franzininho-wifi-wokwi-intro",title:"Como simular a Franzininho WiFi no Wokwi",description:"Nesse t\xf3pico vamos ver como usar o WokWi para simular circuitos com a Franzininho WiFi",source:"@site/docs/FranzininhoWifi/wokwi/franzininho-wifi-wokwi.md",sourceDirName:"FranzininhoWifi/wokwi",slug:"/franzininho-wifi/wokwi/primeiros-passos",permalink:"/docs/franzininho-wifi/wokwi/primeiros-passos",draft:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/wokwi/franzininho-wifi-wokwi.md",tags:[],version:"current",frontMatter:{id:"franzininho-wifi-wokwi-intro",title:"Como simular a Franzininho WiFi no Wokwi",slug:"/franzininho-wifi/wokwi/primeiros-passos",description:"Nesse t\xf3pico vamos ver como usar o WokWi para simular circuitos com a Franzininho WiFi"},sidebar:"docs",previous:{title:"Placa Franzininho WiFi",permalink:"/docs/franzininho-wifi/franzininho-wifi"},next:{title:"Primeiros Passos com ESP-IDF",permalink:"/docs/franzininho-wifi/exemplos-espidf/primeiros-passos"}},p={},l=[{value:"Saiba mais",id:"saiba-mais",level:2},{value:"Exemplos no simulador",id:"exemplos-no-simulador",level:2}],m={toc:l},c="wrapper";function u(i){let{components:e,...r}=i;return(0,a.kt)(c,(0,t.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Wokwi \xe9 um simulador de eletr\xf4nica online. Voc\xea pode us\xe1-lo para simular Arduino, ESP32 e muitas outras placas, componentes e sensores populares. Foi desenvolvido para makers, por makers."),(0,a.kt)("p",null,"Voc\xea pode usar o Wokwi para aprender a programar o Franzininho WiFi, criar prot\xf3tipos de suas id\xe9ias, e compartilhar seus projetos com outros makers."),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://wokwi.com/projects/new/franzininho-wifi"},(0,a.kt)("img",{alt:"Wokwi Franzininho WiFi",src:o(7560).Z,width:"243",height:"96"})))),(0,a.kt)("admonition",{title:"Dica",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Use o Template do Franzininho wifi clicando na imagem acima para come\xe7ar um novo projeto no Wokwi.")),(0,a.kt)("h2",{id:"saiba-mais"},"Saiba mais"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.wokwi.com/pt-BR/parts/board-franzininho-wifi"},"Documenta\xe7\xe3o da Franzininho WiFi no WokWi")),(0,a.kt)("p",null,"Caso queira saber mais sobre outras funcionalidades do simulador, d\xea uma olhada na lista abaixo. Voc\xea pode tamb\xe9m consultar as pe\xe7as na lista de ",(0,a.kt)("a",{parentName:"p",href:"https://docs.wokwi.com/pt-BR/"},"Refer\xeancia do Diagrama"),", dispon\xedvel na documenta\xe7\xe3o do Wokwi."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.wokwi.com/pt-BR/diagram-format"},"Formato do diagram.json")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.wokwi.com/pt-BR/keyboard-shortcuts"},"Teclas de Atalho do Editor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.wokwi.com/pt-BR/guides/serial-monitor"},"O Monitor Serial")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.wokwi.com/pt-BR/gdb-debugging"},"Usando o GDB no Wokwi")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.wokwi.com/pt-BR/guides/logic-analyzer"},"Guia do Analisador L\xf3gico")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.wokwi.com/pt-BR/guides/libraries"},"Trabalhando com Bibliotecas")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.wokwi.com/pt-BR/guides/esp32"},"Simulador ESP32")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.wokwi.com/pt-BR/guides/esp32-wifi"},"Rede WiFi ESP32"))),(0,a.kt)("h2",{id:"exemplos-no-simulador"},"Exemplos no simulador"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wokwi.com/projects/323796775459619410"},"Rel\xf3gio LCD com cliente (NTP)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wokwi.com/projects/327061759288410708"},"Controle de servo motor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wokwi.com/projects/324682033130373716"},"Misturador de LED RGB (usando 3 potenci\xf4metros)")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wokwi.com/projects/313606939786347074"},"Blink com CircuitPython")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wokwi.com/projects/329013233501340242"},"Display TFT ILI9341")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wokwi.com/projects/323796775459619410"},"Rel\xf3gico com Display LCD 16 x 2")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wokwi.com/projects/324615433106752083"},"Entrada anal\xf3gica e saida PWM com ESP-IDF")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wokwi.com/projects/324613550740865619"},"FreeRTOS Tasks")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wokwi.com/projects/329133882849886804"},"PWM ESP-IDF")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wokwi.com/projects/322524997423727188"},"MQTT")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://wokwi.com/projects/323043284024820308"},"NTP"))))}u.isMDXComponent=!0},7560:(i,e,o)=>{o.d(e,{Z:()=>t});const t=o.p+"assets/images/franzininho-wifi-board-b801f9fce63884679d7c579b276a16ab.svg"}}]);