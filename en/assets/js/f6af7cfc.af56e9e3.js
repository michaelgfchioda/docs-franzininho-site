"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[1506],{3905:(e,a,o)=>{o.d(a,{Zo:()=>p,kt:()=>g});var n=o(7294);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function i(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?i(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,n,t=function(e,a){if(null==e)return{};var o,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var l=n.createContext({}),d=function(e){var a=n.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):r(r({},a),e)),o},p=function(e){var a=d(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var o=e.components,t=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(o),m=t,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||i;return o?n.createElement(g,r(r({ref:a},p),{},{components:o})):n.createElement(g,r({ref:a},p))}));function g(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var i=o.length,r=new Array(i);r[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[u]="string"==typeof e?e:t,r[1]=s;for(var d=2;d<i;d++)r[d]=o[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},5673:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=o(3117),t=(o(7294),o(3905));const i={id:"saida-digital",title:"Sa\xedda Digital",slug:"/franzininho-diy/exemplos-avr-libc/saida-digital",description:"Vamos entender como trabalhar com as sa\xeddas Digitais",authors:"F\xe1bio Souza",date:"24/04/2021",some_url:"https://github.com/FBSeletronica"},r=void 0,s={unversionedId:"FranzininhoDIY/exemplos-avr-libc/saida-digital",id:"FranzininhoDIY/exemplos-avr-libc/saida-digital",title:"Sa\xedda Digital",description:"Vamos entender como trabalhar com as sa\xeddas Digitais",source:"@site/docs/FranzininhoDIY/exemplos-avr-libc/saida-digital.md",sourceDirName:"FranzininhoDIY/exemplos-avr-libc",slug:"/franzininho-diy/exemplos-avr-libc/saida-digital",permalink:"/en/docs/franzininho-diy/exemplos-avr-libc/saida-digital",draft:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-avr-libc/saida-digital.md",tags:[],version:"current",frontMatter:{id:"saida-digital",title:"Sa\xedda Digital",slug:"/franzininho-diy/exemplos-avr-libc/saida-digital",description:"Vamos entender como trabalhar com as sa\xeddas Digitais",authors:"F\xe1bio Souza",date:"24/04/2021",some_url:"https://github.com/FBSeletronica"},sidebar:"docs",previous:{title:"Hello, World!",permalink:"/en/docs/franzininho-diy/exemplos-avr-libc/hello-world"},next:{title:"Entrada Digital",permalink:"/en/docs/franzininho-diy/exemplos-avr-libc/entrada-digital"}},l={},d=[{value:"Recursos Necess\xe1rios",id:"recursos-necess\xe1rios",level:2},{value:"Pinos do ATtiny85",id:"pinos-do-attiny85",level:2},{value:"Algumas Particularidades do circuito da Franzininho DIY",id:"algumas-particularidades-do-circuito-da-franzininho-diy",level:3},{value:"Registradores respons\xe1veis pelos pinos de I/O",id:"registradores-respons\xe1veis-pelos-pinos-de-io",level:2},{value:"C\xf3digos",id:"c\xf3digos",level:2},{value:"Desafio",id:"desafio",level:2}],p={toc:d},u="wrapper";function c(e){let{components:a,...i}=e;return(0,t.kt)(u,(0,n.Z)({},p,i,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Agora que j\xe1 estamos com as ferramentas instaladas e a placa Franzininho DIY em m\xe3os, vamos dar in\xedcio aos estudos dos perif\xe9ricos internos do ATtiny85."),(0,t.kt)("p",null,"Nesse artigo vamos explorar os pinos de I/O como sa\xedda digital. Ao final, voc\xea saber\xe1 como acionar dispositivos externos a Franzininho DIY."),(0,t.kt)("h2",{id:"recursos-necess\xe1rios"},"Recursos Necess\xe1rios"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Placa Franzininho DIY(com Micronucleus)"),(0,t.kt)("li",{parentName:"ul"},"Computador com as ferramentas de software instaladas")),(0,t.kt)("h2",{id:"pinos-do-attiny85"},"Pinos do ATtiny85"),(0,t.kt)("p",null,"O ATtiny85 possui 8 pinos, sendo que 6 deles podemos usar como I/O (entradas ou sa\xeddas) digitais. Os pinos de I/O s\xe3o nomeados conforme a porta que eles pertencem. Na figura a seguir vemos que os pinos do ATtiny85 s\xe3o nomeados de PBx, onde x \xe9 o n\xfamero correspondente ao pino no registrador (n\xe3o se preocupe, vamos ver mais detalhes a seguir):"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Pinagem do ATtiny85",src:o(2285).Z,width:"2094",height:"498"})),(0,t.kt)("p",null,"Cada pino de I/O pode ser usado como entrada ou sa\xedda e tamb\xe9m como outras fun\xe7\xf5es nesse momento s\xf3 vamos trabalhar com os pinos funcionando como GPIO (General Porpouse Input/Output)."),(0,t.kt)("p",null,"Conforme exibido na imagem acima, temos os seguintes pinos dispon\xedveis no ATtiny85:"),(0,t.kt)("p",null,"PB0, PB1, PB2, PB3, PB4, PB5."),(0,t.kt)("h3",{id:"algumas-particularidades-do-circuito-da-franzininho-diy"},"Algumas Particularidades do circuito da Franzininho DIY"),(0,t.kt)("p",null,"Os pinos de I/O s\xe3o marcados em Amarelo no Pinout da Franzininho DIY"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"pinout Franzininho DIY",src:o(8706).Z,width:"1630",height:"1122"})),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"O pino PB5 \xe9 configurado como RESET na Franzininho DIY, sendo assim n\xe3o poderemos us\xe1-lo como I/O."),(0,t.kt)("li",{parentName:"ul"},"Os pinos PB3 e PB4 s\xe3o usados para o circuito da USB, sendo assim temos que us\xe1-los com cautela. Geralmente esses pinos s\xe3o usados apenas como sa\xeddas digitais."),(0,t.kt)("li",{parentName:"ul"},"O LED amarelo da placa est\xe1 ligado ao pino PB1."),(0,t.kt)("li",{parentName:"ul"},"Os pinos PB0 E PB2 n\xe3o possuem circuito ligados a eles.")),(0,t.kt)("h2",{id:"registradores-respons\xe1veis-pelos-pinos-de-io"},"Registradores respons\xe1veis pelos pinos de I/O"),(0,t.kt)("p",null,"Para trabalhar com os pinos de I/O no ATtiny85 temos 3 registradores:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"PORTB: Registrador de dados. Respons\xe1vel pela escrita nos pinos;"),(0,t.kt)("li",{parentName:"ul"},"DDRB: Registrador de dire\xe7\xe3o do pino. Respons\xe1vel pela configura\xe7\xe3o dos pinos para definir se ser\xe1 entrada ou sa\xedda;"),(0,t.kt)("li",{parentName:"ul"},"PINB: Registrador de entrada da porta. Respons\xe1vel pela leitura do estado do pino.")),(0,t.kt)("p",null,"Note que todos os registradores terminam com B no final. Isso significa que estamos trabalhando com o PORTB. Caso fosse um microcontrolador com maior quantidade de pinos ter\xedamos os finais A, B,C, etc. Cada porta s\xf3 possui no m\xe1ximo 8 pinos."),(0,t.kt)("p",null,"Na se\xe7\xe3o 10 do datasheet do ATtiny85 temos todos os detalhes para se trabalhar com os I/O. A tabela a seguir, retirada do datasheet, exibe as configura\xe7\xf5es poss\xedveis para os pinos:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"configura\xe7\xe3o GPIO",src:o(5368).Z,width:"1194",height:"339"})),(0,t.kt)("p",null,"A figura abaixo exibe os registradores respons\xe1veis pelos pino de I/O do PORTB:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"configura\xe7\xe3o GPIO",src:o(9192).Z,width:"1448",height:"696"})),(0,t.kt)("p",null,"Note que cada bit dos registradores \xe9 respons\xe1vel por pino sendo indexado pelo n\xfamero correspondente ao bit. Dessa forma, se quisermos usar o pino PB1 para acionar o LED, devemos configurar o registrador DDRB da seguinte forma:"),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:null},"7"),(0,t.kt)("th",{parentName:"tr",align:null},"6"),(0,t.kt)("th",{parentName:"tr",align:null},"5"),(0,t.kt)("th",{parentName:"tr",align:null},"4"),(0,t.kt)("th",{parentName:"tr",align:null},"3"),(0,t.kt)("th",{parentName:"tr",align:null},"2"),(0,t.kt)("th",{parentName:"tr",align:null},"1"),(0,t.kt)("th",{parentName:"tr",align:null},"0"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"-"),(0,t.kt)("td",{parentName:"tr",align:null},"-"),(0,t.kt)("td",{parentName:"tr",align:null},"0"),(0,t.kt)("td",{parentName:"tr",align:null},"0"),(0,t.kt)("td",{parentName:"tr",align:null},"0"),(0,t.kt)("td",{parentName:"tr",align:null},"0"),(0,t.kt)("td",{parentName:"tr",align:null},"1"),(0,t.kt)("td",{parentName:"tr",align:null},"0")))),(0,t.kt)("p",null,"E para acionar ligar/deligar o LED devemos colocar 1 ou no bit correspondente no PORTB."),(0,t.kt)("p",null,"Vamos a um exemplo para ficar mais claro."),(0,t.kt)("h2",{id:"c\xf3digos"},"C\xf3digos"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},"#include <avr/io.h>\n#include <util/delay.h>\n\n#define F_CPU 16500000L        // Frequ\xeancia do oscilador. usado para a fun\xe7\xe3o de delay\n\nint main(void)\n{\n  DDRB = 0b00000010;           // Configura Pino PB1 como sa\xedda (Pino do LED)\n\n  while (1)\n  {\n      PORTB = 0b00000010;      // Liga o LED 1\n      _delay_ms(250);          // Aguarda 250 ms\n      PORTB = 0b00000000;      // Desliga o LED 1\n      _delay_ms(250);          // Aguarda 250 ms\n  }\n\n  return (0);\n}\n")),(0,t.kt)("p",null,"O exemplo acima pisca o LED em intervalos de 250 ms. A configura\xe7\xe3o do pino PB1 como sa\xedda foi feito colocando o bit1 de DDRB em 1. J\xe1 para ligar e desligar o LED foi manipulado o bit 1 de PORTB, hora em 1 hora em 0."),(0,t.kt)("p",null,"Bacana, n\xe3o?"),(0,t.kt)("p",null,"podemos melhorar a manipula\xe7\xe3o dos bits dos registradores usando macros. As macros s\xe3o rotinas que facilitam nossas vidas. Recomendo que se voc\xea leia esse artigo para entender sobre as macros e as opera\xe7\xf5es efetuadas: ",(0,t.kt)("a",{parentName:"p",href:"https://www.embarcados.com.br/bits-em-linguagem-c/"},"https://www.embarcados.com.br/bits-em-linguagem-c/")),(0,t.kt)("p",null,"Vamos usar as seguintes macros:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"#define setBit(valor,bit) (valor |= (1<<bit))\n#define toogleBit(valor,bit) (valor ^= (1<<bit))\n")),(0,t.kt)("p",null,"Os nomes j\xe1 s\xe3o auto-explicativos mas vamos verificar como us\xe1-las no programa em C:"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},"#include <avr/io.h>\n#include <util/delay.h>\n\n#define F_CPU 16500000L\n\n// Macros\n#define setBit(valor,bit) (valor |= (1 << bit))\n#define toogleBit(valor,bit) (valor ^= (1 << bit))\n\nint main(void)\n{\n    setBit(DDRB,PB1);          // Configura Pino PB1 como sa\xedda (Pino do LED)\n\n    while (1)\n    {\n        toogleBit(PORTB, PB1); // Inverte o estado do pino\n        _delay_ms(250);        // Aguarda 250 ms\n    }\n\n    return (0);\n}\n")),(0,t.kt)("p",null,"Dessa forma manipulamos somente os bits desejados, n\xe3o alterando os valores dos outros que poder\xe3o ser usados para outras aplica\xe7\xf5es."),(0,t.kt)("h2",{id:"desafio"},"Desafio"),(0,t.kt)("p",null,"Coloque outro LED no pino PB0 e o acione alternadamente ao pino PB1, ou seja, quando LED no PB0 estiver ligado o LED em PB1 deve apagar e vice-versa."),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:null},"Autor"),(0,t.kt)("th",{parentName:"tr",align:null},(0,t.kt)("a",{parentName:"th",href:"https://github.com/FBSeletronica"},"F\xe1bio Souza")))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"Data:"),(0,t.kt)("td",{parentName:"tr",align:null},"24/04/2021")))))}c.isMDXComponent=!0},8706:(e,a,o)=>{o.d(a,{Z:()=>n});const n=o.p+"assets/images/Pinagem-Franzininho-DIY-V2RV2-42a18903012c4dc223f9d4c774730625.png"},5368:(e,a,o)=>{o.d(a,{Z:()=>n});const n=o.p+"assets/images/config-gpio-5448c58ddfc3c042b28c64b3cedb300e.png"},2285:(e,a,o)=>{o.d(a,{Z:()=>n});const n=o.p+"assets/images/pinagem-attiny85-8fa815c3f3e21f9c3b699b09c9a7f6f1.png"},9192:(e,a,o)=>{o.d(a,{Z:()=>n});const n=o.p+"assets/images/registradores-port-B-f8a36498e9dd1043ec81211a0fb7103c.png"}}]);