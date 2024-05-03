"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[1196],{85452:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var o=a(17624),n=a(4552);const t={id:"tecla-liga-desliga",title:"Tecla Liga/Desliga",slug:"/franzininho-diy/tecla-liga-desliga",description:"Nesse exemplo vamos fazer uma tecla liga/desliga, que pode ser usada para acionamentos diversos."},s=void 0,r={id:"FranzininhoDIY/exemplos-arduino/tecla-liga-desliga",title:"Tecla Liga/Desliga",description:"Nesse exemplo vamos fazer uma tecla liga/desliga, que pode ser usada para acionamentos diversos.",source:"@site/docs/FranzininhoDIY/exemplos-arduino/tecla-liga-desliga.md",sourceDirName:"FranzininhoDIY/exemplos-arduino",slug:"/franzininho-diy/tecla-liga-desliga",permalink:"/docs/franzininho-diy/tecla-liga-desliga",draft:!1,unlisted:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-arduino/tecla-liga-desliga.md",tags:[],version:"current",frontMatter:{id:"tecla-liga-desliga",title:"Tecla Liga/Desliga",slug:"/franzininho-diy/tecla-liga-desliga",description:"Nesse exemplo vamos fazer uma tecla liga/desliga, que pode ser usada para acionamentos diversos."},sidebar:"docs",previous:{title:"Leitura de Tecla",permalink:"/docs/franzininho-diy/leitura-tecla"},next:{title:"LED RGB",permalink:"/docs/franzininho-diy/led-rgb"}},l={},d=[{value:"Materiais",id:"materiais",level:2},{value:"Circuito",id:"circuito",level:2},{value:"Sketch",id:"sketch",level:2},{value:"Simula\xe7\xe3o",id:"simula\xe7\xe3o",level:2},{value:"Video de Funcionamento",id:"video-de-funcionamento",level:2}];function c(e){const i={code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,n.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.p,{children:"Nesse exemplo vamos fazer uma tecla liga/desliga, que pode ser usada para acionamentos diversos."}),"\n",(0,o.jsx)(i.h2,{id:"materiais",children:"Materiais"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsx)(i.li,{children:"Placa Franzininho;"}),"\n",(0,o.jsx)(i.li,{children:"Protoboard;"}),"\n",(0,o.jsx)(i.li,{children:"LED 3mm;"}),"\n",(0,o.jsx)(i.li,{children:"1 Resistor 3300;"}),"\n",(0,o.jsx)(i.li,{children:"1 Resistor de 1K;"}),"\n",(0,o.jsx)(i.li,{children:"1 Bot\xe3o;"}),"\n",(0,o.jsx)(i.li,{children:"Jumpers;"}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"circuito",children:"Circuito"}),"\n",(0,o.jsx)(i.p,{children:"No protoboard voc\xea deve inserir o LED, resistores e o bot\xe3o, conforme a imagem abaixo:"}),"\n",(0,o.jsx)(i.p,{children:(0,o.jsx)(i.img,{alt:"Circuito ",src:a(73676).c+"",width:"1755",height:"702"})}),"\n",(0,o.jsx)(i.h2,{id:"sketch",children:"Sketch"}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-cpp",children:"/*\n  Franzininho\n  Exemplo: Tecla liga/desliga\n  Esse exemplo exibe como fazer ligar e desligar uma sa\xedda atrav\xe9s de uma tecla\n*/\nconst int LED = 1; //pino para o LED\nconst int BOTAO = 2; //pino para o bot\xe3o\nint estadoAnteriorBotao = 0;   // armazena o estado anterior do bot\xe3o\n\nvoid setup(){\n  pinMode(LED,OUTPUT); //o LED \xe9 uma sa\xedda\n  pinMode(BOTAO,INPUT); //o BOTAO \xe9 uma entrada\n}\n\nvoid loop (){\n int estadoAtualBT= digitalRead(BOTAO);      // L\xea estado do bot\xe3o\n delay(10);\n\nif ((estadoAtualBT != estadoAnteriorBotao)&& (estadoAtualBT == LOW)){       //Se o bot\xe3o foi pressionado e o seu estado mudou\n  digitalWrite(LED,!digitalRead(LED)); //inverte estado do LED\n}\n  estadoAnteriorBotao = estadoAtualBT;  //salva o estado do bot\xe3o para comparar na pr\xf3xima leitura\n}\n"})}),"\n",(0,o.jsx)(i.h2,{id:"simula\xe7\xe3o",children:"Simula\xe7\xe3o"}),"\n",(0,o.jsx)("iframe",{width:"100%",height:"458px",src:"https://wokwi.com/arduino/projects/311373968060711489?view=diagram"}),"\n",(0,o.jsx)(i.h2,{id:"video-de-funcionamento",children:"Video de Funcionamento"}),"\n",(0,o.jsx)("iframe",{src:"https://www.youtube.com/embed/Aht0fUuGIjQ",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})]})}function u(e={}){const{wrapper:i}={...(0,n.M)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},73676:(e,i,a)=>{a.d(i,{c:()=>o});const o=a.p+"assets/images/circuito-tecla-liga-desliga-0133088e4f085079b1a5dc507efc2d45.png"},4552:(e,i,a)=>{a.d(i,{I:()=>r,M:()=>s});var o=a(11504);const n={},t=o.createContext(n);function s(e){const i=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),o.createElement(t.Provider,{value:i},e.children)}}}]);