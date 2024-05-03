"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[5752],{60060:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>t,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var o=i(17624),a=i(4552);const r={id:"arduino-neopixel",title:"Neopixel RGB LED Onboard",slug:"/franzininho-wifi/exemplos-arduino/neopixel-onboard",description:"Exemplo de uso do led RGB onboard do Franzininho WiFi",author:"Henrique Vilela"},d=void 0,s={id:"FranzininhoWifi/exemplos-arduino/arduino-neopixel",title:"Neopixel RGB LED Onboard",description:"Exemplo de uso do led RGB onboard do Franzininho WiFi",source:"@site/docs/FranzininhoWifi/exemplos-arduino/onboard-rgb-led-example.md",sourceDirName:"FranzininhoWifi/exemplos-arduino",slug:"/franzininho-wifi/exemplos-arduino/neopixel-onboard",permalink:"/docs/franzininho-wifi/exemplos-arduino/neopixel-onboard",draft:!1,unlisted:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-arduino/onboard-rgb-led-example.md",tags:[],version:"current",frontMatter:{id:"arduino-neopixel",title:"Neopixel RGB LED Onboard",slug:"/franzininho-wifi/exemplos-arduino/neopixel-onboard",description:"Exemplo de uso do led RGB onboard do Franzininho WiFi",author:"Henrique Vilela"},sidebar:"docs",previous:{title:"Blink",permalink:"/docs/franzininho-wifi/exemplos-arduino/blink"},next:{title:"Leitura DHT11",permalink:"/docs/franzininho-wifi/exemplos-arduino/dht11"}},t={},l=[{value:"Instala\xe7\xe3o da biblioteca",id:"instala\xe7\xe3o-da-biblioteca",level:2},{value:"C\xf3digo de Exemplo",id:"c\xf3digo-de-exemplo",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Nesse exemplo vamos aprender usar o LED RGB Neopixel onboard na Franzininho WiFi."}),"\n",(0,o.jsx)(n.h2,{id:"instala\xe7\xe3o-da-biblioteca",children:"Instala\xe7\xe3o da biblioteca"}),"\n",(0,o.jsxs)(n.p,{children:["Na IDE Arduino, clique em ",(0,o.jsx)(n.strong,{children:"Sketch -> Incluir Biblioteca -> Gerenciar Bibliotecas"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Neopixel",src:i(84960).c+"",width:"865",height:"452"})}),"\n",(0,o.jsxs)(n.p,{children:['Selecione: "Adafruit NeoPixel by Adafruit Vers\xe3o X.X.X" e clique em ',(0,o.jsx)(n.strong,{children:"Instalar"})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{alt:"Neopixel",src:i(73855).c+"",width:"1178",height:"654"})}),"\n",(0,o.jsx)(n.p,{children:"Ap\xf3s selecionar a placa Franzininho conforme os outros tutoriais, poder\xe1 ser usado o c\xf3digo de exemplo abaixo:"}),"\n",(0,o.jsx)(n.h2,{id:"c\xf3digo-de-exemplo",children:"C\xf3digo de Exemplo"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-cpp",children:'// inclui biblioteca NeoPixel\n#include <Adafruit_NeoPixel.h>\n\n// O Led RGB est\xe1 conectado ao pino 18 do Franzininho\n#define PIN         18\n// H\xe1 apenas um LED\n#define NUMPIXELS   1\n\n// quantidade de cores que ser\xe3o mostradas\n#define MAXCOLORS 4\n\n// Inst\xe2ncia do objeto "Adafruit_NeoPixel"\nAdafruit_NeoPixel pixels(NUMPIXELS, PIN, NEO_GRB + NEO_KHZ800);\n\n//cores\n#define RED    pixels.Color(255, 0, 0)     // vermelho\n#define GREEN  pixels.Color(0, 255, 0)     // verde\n#define BLUE   pixels.Color(0, 0, 255)     // azul\n#define WHITE  pixels.Color(255, 255, 255) // branco\n\n// array com todas as cores para uso em la\xe7o for\n// uint32_t \xe9 o tipo retornado pela fun\xe7\xe3o Color\nuint32_t   cores[MAXCOLORS] = {RED, GREEN, BLUE, WHITE};\n\nvoid setup() {\n  \n  // Inicializa o NeoPixel\n  pixels.begin();\n}\n\nvoid loop() {\n  \n  // "apaga" o LED RGB\n  pixels.clear();\n\n  // exibe as cores em sequ\xeancia definida no array cores\n  for(int i = 0; i<MAXCOLORS;i++){\n    pixels.setPixelColor(0,cores[i]);\n    pixels.show();  // envia o pixel atualizado para o hardware\n    delay(300);  // tempo para exibi\xe7\xe3o da cor\n  }\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Tente exibir outras cores e anima\xe7\xf5es. Compartilhe seus resultados com a comunidade."}),"\n",(0,o.jsx)(n.admonition,{type:"info",children:(0,o.jsxs)(n.p,{children:["Se tiver alguma d\xfavida consulte a comunidade Franzininho no ",(0,o.jsx)(n.a,{href:"https://discord.gg/H5kENmWGaz",children:"Discord"})]})}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Autor"}),(0,o.jsx)(n.th,{children:"Henrique Vilela"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Data:"}),(0,o.jsx)(n.td,{children:"07/10/2021"})]})})]})]})}function p(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},84960:(e,n,i)=>{i.d(n,{c:()=>o});const o=i.p+"assets/images/neopixel01-2aab47e3a5428cdb244778275a87cc07.PNG"},73855:(e,n,i)=>{i.d(n,{c:()=>o});const o=i.p+"assets/images/neopixel02-92c8d5b2ebfc5c043d28e78d7dce21ff.PNG"},4552:(e,n,i)=>{i.d(n,{I:()=>s,M:()=>d});var o=i(11504);const a={},r=o.createContext(a);function d(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);