"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[6004],{4212:(n,a,e)=>{e.r(a),e.d(a,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>s,metadata:()=>t,toc:()=>c});var i=e(17624),o=e(4552);const s={id:"entradas-analogicas",title:"Entradas Anal\xf3gicas",slug:"/franzininho-diy/entradas-analogicas",description:"Nesse exemplo vamos aprender trabalhar com as entradas anal\xf3gicas presentes na Franzininho DIY"},r=void 0,t={id:"FranzininhoDIY/exemplos-arduino/entradas-analogicas",title:"Entradas Anal\xf3gicas",description:"Nesse exemplo vamos aprender trabalhar com as entradas anal\xf3gicas presentes na Franzininho DIY",source:"@site/docs/FranzininhoDIY/exemplos-arduino/entradas-analogicas.md",sourceDirName:"FranzininhoDIY/exemplos-arduino",slug:"/franzininho-diy/entradas-analogicas",permalink:"/docs/franzininho-diy/entradas-analogicas",draft:!1,unlisted:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-arduino/entradas-analogicas.md",tags:[],version:"current",frontMatter:{id:"entradas-analogicas",title:"Entradas Anal\xf3gicas",slug:"/franzininho-diy/entradas-analogicas",description:"Nesse exemplo vamos aprender trabalhar com as entradas anal\xf3gicas presentes na Franzininho DIY"},sidebar:"docs",previous:{title:"Entradas e Sa\xeddas Digitais",permalink:"/docs/franzininho-diy/entradas-saidas-digitais"},next:{title:"Sa\xeddas PWM",permalink:"/docs/franzininho-diy/saidas-pwm"}},d={},c=[{value:"Fun\xe7\xe3o",id:"fun\xe7\xe3o",level:2},{value:"Sintaxe",id:"sintaxe",level:3},{value:"Par\xe2metros",id:"par\xe2metros",level:3},{value:"Retorno",id:"retorno",level:3},{value:"Exemplo",id:"exemplo",level:2},{value:"Simula\xe7\xe3o",id:"simula\xe7\xe3o",level:3}];function l(n){const a={admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.M)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:"Na Franzininho DIY alguns pinos que podem ser usados como entradas anal\xf3gicas:"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Pinagem Franzininho DIY",src:e(66432).c+"",width:"1209",height:"869"})}),"\n",(0,i.jsx)(a.admonition,{type:"warning",children:(0,i.jsx)(a.p,{children:"Devido as limita\xe7\xf5es de hardware da Franzininho DIY recomendamos apenas o uso da Entrada A1 para sinais anal\xf3gicos.\nAs demais entradas (A0,A2,A3) devem ser usadas com cautela e analisando o circuito para ver o circuito presente no pino n\xe3o atrapalhar\xe1 no sinal anal\xf3gico."})}),"\n",(0,i.jsx)(a.h2,{id:"fun\xe7\xe3o",children:"Fun\xe7\xe3o"}),"\n",(0,i.jsx)(a.p,{children:"Para a leitura de um sinal anal\xf3gico no pino que possui essa fun\xe7\xe3o, n\xe3o \xe9 necess\xe1rio configurar o pino como entrada anal\xf3gica. Isso \xe9 feito na fun\xe7\xe3o de leitura:"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.code,{children:"int analogRead(pino)"})}),"\n",(0,i.jsx)(a.p,{children:"L\xea o valor presente em um pino configurado como entrada anal\xf3gica. Internamente o Arduino possui um conversor A/D de 10 bits. Dessa forma o valor retornado por esta fun\xe7\xe3o estar\xe1 na faixa de 0 a 1023 conforme o valor presente no pino."}),"\n",(0,i.jsx)(a.h3,{id:"sintaxe",children:"Sintaxe"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.code,{children:"analogRead(pino);"})}),"\n",(0,i.jsx)(a.h3,{id:"par\xe2metros",children:"Par\xe2metros"}),"\n",(0,i.jsxs)(a.p,{children:[(0,i.jsx)(a.strong,{children:"pino:"})," n\xfamero do pino configurado como entrada anal\xf3gica (0,1,2,3 na Franzininho)"]}),"\n",(0,i.jsx)(a.h3,{id:"retorno",children:"Retorno"}),"\n",(0,i.jsx)(a.p,{children:"int (0 a 1023)"}),"\n",(0,i.jsx)(a.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,i.jsx)(a.p,{children:"Vamos ler o valor de um potenci\xf4metro ligado ao pino P2(A1) e acionar o LED quando a leitura atingir um valor definido:"}),"\n",(0,i.jsx)(a.p,{children:(0,i.jsx)(a.img,{alt:"Circuito",src:e(50756).c+"",width:"1590",height:"1017"})}),"\n",(0,i.jsx)(a.pre,{children:(0,i.jsx)(a.code,{className:"language-cpp",children:"const byte LED = 1; //pino do LED\nconst byte POT = A1; //pino do Potenci\xf4metro\n\nvoid setup() {\n  pinMode(LED,OUTPUT);\n}\n\nvoid loop() {\n\n  int valor = analogRead(POT); // l\xea o valor do potenci\xf4metro\n\n  if(valor> 511){              //se valor maior que 511\n    digitalWrite(LED,HIGH);    //liga LED\n  }else{                       //se n\xe3o\n    digitalWrite(LED,LOW);     //apaga LED\n  }\n}\n"})}),"\n",(0,i.jsx)(a.h3,{id:"simula\xe7\xe3o",children:"Simula\xe7\xe3o"}),"\n",(0,i.jsx)("iframe",{width:"100%",height:"458px",src:"https://wokwi.com/arduino/projects/310739786993238592?view=diagram"})]})}function p(n={}){const{wrapper:a}={...(0,o.M)(),...n.components};return a?(0,i.jsx)(a,{...n,children:(0,i.jsx)(l,{...n})}):l(n)}},50756:(n,a,e)=>{e.d(a,{c:()=>i});const i=e.p+"assets/images/circuito-a6a0591bc42320cbe29b14bd9332f3c2.png"},66432:(n,a,e)=>{e.d(a,{c:()=>i});const i=e.p+"assets/images/pinagem-V2-7047a8d5930175670acc131497791fcc.png"},4552:(n,a,e)=>{e.d(a,{I:()=>t,M:()=>r});var i=e(11504);const o={},s=i.createContext(o);function r(n){const a=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(a):{...a,...n}}),[a,n])}function t(n){let a;return a=n.disableParentContext?"function"==typeof n.components?n.components(o):n.components||o:r(n.components),i.createElement(s.Provider,{value:a},n.children)}}}]);