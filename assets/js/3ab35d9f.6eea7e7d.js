"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[2517],{3905:(e,a,o)=>{o.d(a,{Zo:()=>d,kt:()=>m});var i=o(7294);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);a&&(i=i.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,i)}return o}function n(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,i,t=function(e,a){if(null==e)return{};var o,i,t={},r=Object.keys(e);for(i=0;i<r.length;i++)o=r[i],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)o=r[i],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var A=i.createContext({}),l=function(e){var a=i.useContext(A),o=a;return e&&(o="function"==typeof e?e(a):n(n({},a),e)),o},d=function(e){var a=l(e.components);return i.createElement(A.Provider,{value:a},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return i.createElement(i.Fragment,{},a)}},p=i.forwardRef((function(e,a){var o=e.components,t=e.mdxType,r=e.originalType,A=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(o),p=t,m=c["".concat(A,".").concat(p)]||c[p]||u[p]||r;return o?i.createElement(m,n(n({ref:a},d),{},{components:o})):i.createElement(m,n({ref:a},d))}));function m(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=o.length,n=new Array(r);n[0]=p;var s={};for(var A in a)hasOwnProperty.call(a,A)&&(s[A]=a[A]);s.originalType=e,s[c]="string"==typeof e?e:t,n[1]=s;for(var l=2;l<r;l++)n[l]=o[l];return i.createElement.apply(null,n)}return i.createElement.apply(null,o)}p.displayName="MDXCreateElement"},952:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>A,contentTitle:()=>n,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var i=o(3117),t=(o(7294),o(3905));const r={id:"entrada-digital",title:"Entrada Digital",slug:"/franzininho-diy/exemplos-avr-libc/entrada-digital",description:"Vamos entender como trabalhar com as Entradas Digitais",authors:"F\xe1bio Souza",date:"24/04/2021",some_url:"https://github.com/FBSeletronica"},n=void 0,s={unversionedId:"FranzininhoDIY/exemplos-avr-libc/entrada-digital",id:"FranzininhoDIY/exemplos-avr-libc/entrada-digital",title:"Entrada Digital",description:"Vamos entender como trabalhar com as Entradas Digitais",source:"@site/docs/FranzininhoDIY/exemplos-avr-libc/entrada-digital.md",sourceDirName:"FranzininhoDIY/exemplos-avr-libc",slug:"/franzininho-diy/exemplos-avr-libc/entrada-digital",permalink:"/docs/franzininho-diy/exemplos-avr-libc/entrada-digital",draft:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-avr-libc/entrada-digital.md",tags:[],version:"current",frontMatter:{id:"entrada-digital",title:"Entrada Digital",slug:"/franzininho-diy/exemplos-avr-libc/entrada-digital",description:"Vamos entender como trabalhar com as Entradas Digitais",authors:"F\xe1bio Souza",date:"24/04/2021",some_url:"https://github.com/FBSeletronica"},sidebar:"docs",previous:{title:"Sa\xedda Digital",permalink:"/docs/franzininho-diy/exemplos-avr-libc/saida-digital"},next:{title:"Timer 0",permalink:"/docs/franzininho-diy/exemplos-avr-libc/timer0"}},A={},l=[{value:"Recursos Necess\xe1rios",id:"recursos-necess\xe1rios",level:2},{value:"Entrada Digital",id:"entrada-digital",level:2},{value:"Algumas Particularidades do circuito da Franzininho DIY",id:"algumas-particularidades-do-circuito-da-franzininho-diy",level:3},{value:"Registradores respons\xe1veis pelos pinos de I/O",id:"registradores-respons\xe1veis-pelos-pinos-de-io",level:2},{value:"Circuito",id:"circuito",level:2},{value:"C\xf3digo",id:"c\xf3digo",level:2},{value:"Desafio",id:"desafio",level:2}],d={toc:l},c="wrapper";function u(e){let{components:a,...r}=e;return(0,t.kt)(c,(0,i.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"No exemplo anterior conhecemos os registradores respons\xe1veis pela configura\xe7\xe3o e manipula\xe7\xe3o dos pinos de I/O. Nesse exemplo vamos concentrar no uso dos pinos como entradas digitais."),(0,t.kt)("p",null,"Ao final, voc\xea saber\xe1 como ler sinais digitais externos a Franzininho DIY."),(0,t.kt)("h2",{id:"recursos-necess\xe1rios"},"Recursos Necess\xe1rios"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Placa Franzininho DIY(com Micronucleus)"),(0,t.kt)("li",{parentName:"ul"},"Chave Tactil"),(0,t.kt)("li",{parentName:"ul"},"Jumpers"),(0,t.kt)("li",{parentName:"ul"},"Computador com as ferramentas de software instaladas")),(0,t.kt)("h2",{id:"entrada-digital"},"Entrada Digital"),(0,t.kt)("p",null,"Uma entrada digital \xe9 capaz de ler n\xedvel alto (5V) e n\xedvel baixo(0V) em sua entrada. Essa funcionalidade \xe9 usada para ler estado de bot\xf5es, sensores, e dispositivos que em suas sa\xeddas apresentam 2 estados."),(0,t.kt)("p",null,"Quando o pino \xe9 configurado como entrada digital ele \xe9 colocado em um estado de alta imped\xe2ncia, equivalente a um resistor de 100 MegaOhms em s\xe9rie com o circuito a ser monitorado. Dessa forma, o pino absorve uma corrente muito baixa do circuito que est\xe1 monitorando. Devido a essa caracter\xedstica de alta imped\xe2ncia, quando um pino colocado como entrada digital ele fica flutuando (sem liga\xe7\xe3o definida), o n\xedvel de tens\xe3o presente nesse pino fica variando n\xe3o podendo ser determinado um valor est\xe1vel devido ao ru\xeddo el\xe9trico e at\xe9 mesmo capacit\xe2ncia de entrada do pino. Para resolver esse problema \xe9 necess\xe1rio colocar um resistor de pull up (ligado a +5V) ou um resistor de pull down (ligado a GND) conforme a necessidade. Esses resistores garantem n\xedvel l\xf3gico est\xe1vel quando, por exemplo uma tecla n\xe3o est\xe1 pressionada. Geralmente utiliza-se um resistor de 10K para esse prop\xf3sito. A seguir \xe9 exibida a liga\xe7\xe3o desses resistores no circuito para leitura de tecla:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"circuito",src:o(163).Z,width:"353",height:"210"})),(0,t.kt)("p",null,"\xc9 poss\xedvel habilitar o resistor de pull up interno, isso mesmo, o Attiny85 possui resistores de pull-up internos (20 Kilohms) que facilitam a liga\xe7\xe3o de teclas, sensores sem a necessidade de conectar externamente um resistor de pull-up. A habilita\xe7\xe3o desses resistores \xe9 feita de maneira simples via software. Vamos ver isso mais adiante."),(0,t.kt)("h3",{id:"algumas-particularidades-do-circuito-da-franzininho-diy"},"Algumas Particularidades do circuito da Franzininho DIY"),(0,t.kt)("p",null,"Os pinos de I/O s\xe3o marcados em Amarelo no Pinout da Franzininho DIY"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"pinout Franzininho DIY",src:o(8706).Z,width:"1630",height:"1122"})),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"O pino PB5 \xe9 configurado como RESET na Franzininho DIY, sendo assim n\xe3o poderemos us\xe1-lo como I/O."),(0,t.kt)("li",{parentName:"ul"},"Os pinos PB3 e PB4 s\xe3o usados para o circuito da USB, sendo assim temos que us\xe1-los com cautela. Geralmente esses pinos s\xe3o usados apenas como sa\xeddas digitais."),(0,t.kt)("li",{parentName:"ul"},"O LED amarelo da placa est\xe1 ligado ao pino PB1."),(0,t.kt)("li",{parentName:"ul"},"Os pinos PB0 E PB2 n\xe3o possuem circuito ligados a eles.")),(0,t.kt)("h2",{id:"registradores-respons\xe1veis-pelos-pinos-de-io"},"Registradores respons\xe1veis pelos pinos de I/O"),(0,t.kt)("p",null,"Para trabalhar com os pinos de I/O no ATtiny85 temos 3 registradores:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"PORTB: Registrador de dados. Respons\xe1vel pela escrita nos pinos;"),(0,t.kt)("li",{parentName:"ul"},"DDRB: Registrador de dire\xe7\xe3o do pino. Respons\xe1vel pela configura\xe7\xe3o dos pinos para definir se ser\xe1 entrada ou sa\xedda;"),(0,t.kt)("li",{parentName:"ul"},"PINB: Registrador de entrada da porta. Respons\xe1vel pela leitura do estado do pino.")),(0,t.kt)("p",null,"Note que todos os registradores terminam com B no final. Isso significa que estamos trabalhando com o PORTB. Caso fosse um microcontrolador com maior quantidade de pinos ter\xedamos os finais A, B,C, etc. Cada porta s\xf3 possui no m\xe1ximo 8 pinos."),(0,t.kt)("p",null,"Na se\xe7\xe3o 10 do datasheet do ATtiny85 temos todos os detalhes para se trabalhar com os I/O. A tabela a seguir, retirada do datasheet, exibe as configura\xe7\xf5es poss\xedveis para os pinos:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"configura\xe7\xe3o GPIO",src:o(5368).Z,width:"1194",height:"339"})),(0,t.kt)("p",null,"A figura abaixo exibe os registradores respons\xe1veis pelos pino de I/O do PORTB:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"configura\xe7\xe3o GPIO",src:o(9192).Z,width:"1448",height:"696"})),(0,t.kt)("p",null,"Conforme exibido acima, para configurar um pino como entrada digital deve-se configurar o bit DDRBx correspondente ao pino em 0. Se quiser habilitar o pull up para esse deve-se escrever 1 no bit PORTBx correspondente ao pino. A leitura do estado do pino \xe9 feita atrav\xe9s do registrador PINBx."),(0,t.kt)("p",null,"Vamos verificar um exemplo para fazer a leitura de um bot\xe3o externo e ligar o LED da Franzininho DIY."),(0,t.kt)("h2",{id:"circuito"},"Circuito"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"circuito",src:o(8804).Z,width:"1737",height:"633"})),(0,t.kt)("h2",{id:"c\xf3digo"},"C\xf3digo"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},"#include <avr/io.h>\n#include <util/delay.h>\n\n#define F_CPU 16500000L\n\n// Macros\n#define setBit(valor,bit) (valor |= (1 << bit))\n#define clearBit(valor,bit) (valor &= ~(1 << bit))\n#define toogleBit(valor,bit) (valor ^= (1 << bit))\n#define testBit(valor,bit) (valor & (1 << bit))\n\nint main(void)\n{\n    setBit(DDRB, PB1);         // Configura Pino PB1 como sa\xedda (Pino do LED)\n    clearBit(DDRB, PB0);       // Configura pino PB0 como entrada (pino do Bot\xe3o)\n    setBit(PORTB, PB0);        // Habilita pull up para a entrada PB0\n                               // L\xf3gico 1 quando bot\xe3o n\xe3o estiver pressionado\n    while (1)\n    {\n        if (!testBit(PINB, PB0))  // Faz a leitura do bot\xe3o - Se pressionado\n        {\n            setBit(PORTB, PB1);   // Liga o LED 1\n        }\n        else\n        {\n            clearBit(PORTB, PB1); // Desliga o LED 1\n        }\n    }\n\n    return (0);\n}\n")),(0,t.kt)("p",null,"O exemplo exibiu como configurar os pinos, note que tivemos que configurar um pino como sa\xedda, para o LED e outro como entrada, para o bot\xe3o. Note que foi usado o pull up interno."),(0,t.kt)("p",null,"O uso de macros facilitou a manipula\xe7\xe3o dos bits nos registradores. Recomendo que se voc\xea leia esse artigo para entender sobre as macros e as opera\xe7\xf5es efetuadas: ",(0,t.kt)("a",{parentName:"p",href:"https://www.embarcados.com.br/bits-em-linguagem-c/"},"https://www.embarcados.com.br/bits-em-linguagem-c/")),(0,t.kt)("p",null,"Para leitura do estado do pino, ou seja, se o bot\xe3o est\xe1 solto ou pressionado, fazemos um teste a cada itera\xe7\xe3o no loop infinto. Quando o bot\xe3o \xe9 pressionado o n\xedvel logico no pino vai para 0 e quando solto permanece em 1. Conforme o teste 0 liga o LED e 1 apaga o LED."),(0,t.kt)("p",null,"Assim, o funcionamento ser\xe1:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Bot\xe3o Solto = LED apagado"),(0,t.kt)("li",{parentName:"ul"},"Bot\xe3o Pressionado = LED Aceso")),(0,t.kt)("p",null,"Bacana, n\xe3o?"),(0,t.kt)("h2",{id:"desafio"},"Desafio"),(0,t.kt)("p",null,"Fa\xe7a com com que o LED mude estado e permane\xe7a ao soltar o bot\xe3o, funcionando como uma tecla liga/desliga."),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:null},"Autor"),(0,t.kt)("th",{parentName:"tr",align:null},(0,t.kt)("a",{parentName:"th",href:"https://github.com/FBSeletronica"},"F\xe1bio Souza")))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"Data:"),(0,t.kt)("td",{parentName:"tr",align:null},"24/04/2021")))))}u.isMDXComponent=!0},8706:(e,a,o)=>{o.d(a,{Z:()=>i});const i=o.p+"assets/images/Pinagem-Franzininho-DIY-V2RV2-42a18903012c4dc223f9d4c774730625.png"},5368:(e,a,o)=>{o.d(a,{Z:()=>i});const i=o.p+"assets/images/config-gpio-5448c58ddfc3c042b28c64b3cedb300e.png"},9192:(e,a,o)=>{o.d(a,{Z:()=>i});const i=o.p+"assets/images/registradores-port-B-f8a36498e9dd1043ec81211a0fb7103c.png"},8804:(e,a,o)=>{o.d(a,{Z:()=>i});const i=o.p+"assets/images/circuito-e0bc37aa32b52d0c36041dc33c4e82ff.png"},163:(e,a,o)=>{o.d(a,{Z:()=>i});const i="data:image/jpeg;base64,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"}}]);