"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[969],{3905:(e,a,n)=>{n.d(a,{Zo:()=>c,kt:()=>f});var o=n(7294);function t(e,a,n){return a in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function r(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?r(Object(n),!0).forEach((function(a){t(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function s(e,a){if(null==e)return{};var n,o,t=function(e,a){if(null==e)return{};var n,o,t={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||(t[n]=e[n]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var l=o.createContext({}),d=function(e){var a=o.useContext(l),n=a;return e&&(n="function"==typeof e?e(a):i(i({},a),e)),n},c=function(e){var a=d(e.components);return o.createElement(l.Provider,{value:a},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},m=o.forwardRef((function(e,a){var n=e.components,t=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=t,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||r;return n?o.createElement(f,i(i({ref:a},c),{},{components:n})):o.createElement(f,i({ref:a},c))}));function f(e,a){var n=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in a)hasOwnProperty.call(a,l)&&(s[l]=a[l]);s.originalType=e,s[p]="string"==typeof e?e:t,i[1]=s;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7535:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var o=n(3117),t=(n(7294),n(3905));const r={id:"saidas-pwm",title:"Sa\xeddas PWM",slug:"/franzininho-diy/saidas-pwm",description:"Nesse exemplo vamos aprender trabalhar com as sa\xeddas PWM na Franzininho DIY"},i=void 0,s={unversionedId:"FranzininhoDIY/exemplos-arduino/saidas-pwm",id:"FranzininhoDIY/exemplos-arduino/saidas-pwm",title:"Sa\xeddas PWM",description:"Nesse exemplo vamos aprender trabalhar com as sa\xeddas PWM na Franzininho DIY",source:"@site/docs/FranzininhoDIY/exemplos-arduino/pwm.md",sourceDirName:"FranzininhoDIY/exemplos-arduino",slug:"/franzininho-diy/saidas-pwm",permalink:"/docs/franzininho-diy/saidas-pwm",draft:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-arduino/pwm.md",tags:[],version:"current",frontMatter:{id:"saidas-pwm",title:"Sa\xeddas PWM",slug:"/franzininho-diy/saidas-pwm",description:"Nesse exemplo vamos aprender trabalhar com as sa\xeddas PWM na Franzininho DIY"},sidebar:"docs",previous:{title:"Entradas Anal\xf3gicas",permalink:"/docs/franzininho-diy/entradas-analogicas"},next:{title:"Pisca LED",permalink:"/docs/franzininho-diy/pisca-led"}},l={},d=[{value:"O que \xe9 PWM?",id:"o-que-\xe9-pwm",level:2},{value:"Fun\xe7\xe3o",id:"fun\xe7\xe3o",level:2},{value:"Sintaxe:",id:"sintaxe",level:3},{value:"Par\xe2metros:",id:"par\xe2metros",level:3},{value:"Exemplo",id:"exemplo",level:3},{value:"Simula\xe7\xe3o",id:"simula\xe7\xe3o",level:3}],c={toc:d},p="wrapper";function u(e){let{components:a,...r}=e;return(0,t.kt)(p,(0,o.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"o-que-\xe9-pwm"},"O que \xe9 PWM?"),(0,t.kt)("p",null,"PWM, do ingl\xeas Pulse Width Modulation, \xe9 uma t\xe9cnica utilizada por sistemas digitais para varia\xe7\xe3o do valor m\xe9dio de uma forma de onda peri\xf3dica. A t\xe9cnica consiste em manter a frequ\xeancia de uma onda quadrada fixa e variar o tempo que o sinal fica em n\xedvel l\xf3gico alto. Esse tempo \xe9 chamado de duty cycle, ou seja, o ciclo ativo da forma de onda. No gr\xe1fico abaixo s\xe3o exibidas algumas modula\xe7\xf5es PWM:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Sinal PWM",src:n(7053).Z,width:"400",height:"438"})),(0,t.kt)("p",null,"Analisando as formas de onda nota-se que a frequ\xeancia da forma de onda tem o mesmo valor e varia-se o duty cycle da forma de onda. Quando o duty cicle est\xe1 em 0% o valor m\xe9dio da sa\xedda encontra-se em 0 V e consequentemente para um duty cycle de 100% a sa\xedda assume seu valor m\xe1ximo, que no caso \xe9 5V. Para um duty cycle de 50% a sa\xedda assumir\xe1 50% do valor da tens\xe3o, 2,5 V, e assim sucessivamente para cada varia\xe7\xe3o no duty cycle. Portanto, para calcular o valor m\xe9dio da tens\xe3o de sa\xedda de um sinal PWM pode-se utilizar a seguinte equa\xe7\xe3o:"),(0,t.kt)("p",null,"Vout = ","(","duty cycle/100",")","*"," Vcc"),(0,t.kt)("p",null,"Onde:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Vout - tens\xe3o de sa\xedda em V;"),(0,t.kt)("li",{parentName:"ul"},"duty cycle - valor do ciclo ativo do PWM em %;"),(0,t.kt)("li",{parentName:"ul"},"Vcc - tens\xe3o de alimenta\xe7\xe3o em V.")),(0,t.kt)("p",null,"PWM pode ser usada para diversas aplica\xe7\xf5es, como por exemplo:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"controle de velocidade de motores;"),(0,t.kt)("li",{parentName:"ul"},"varia\xe7\xe3o da luminosidade de leds;"),(0,t.kt)("li",{parentName:"ul"},"gera\xe7\xe3o de sinais anal\xf3gicos;"),(0,t.kt)("li",{parentName:"ul"},"gera\xe7\xe3o de sinais de \xe1udio.")),(0,t.kt)("p",null,"Fonte: ",(0,t.kt)("a",{parentName:"p",href:"https://www.embarcados.com.br/pwm-do-arduino/"},"Usando as sa\xeddas PWM do Arduino")),(0,t.kt)("p",null,"Na Franzininho temos ",(0,t.kt)("strong",{parentName:"p"},"3 pinos")," que pode ser usado como saidas PWM","(","PWM0,PWM1 e PWM4",")"," conforme pinout:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Pinagem Franzininho DIY",src:n(4648).Z,width:"1209",height:"869"})),(0,t.kt)("blockquote",null,(0,t.kt)("p",{parentName:"blockquote"},(0,t.kt)("strong",{parentName:"p"},"Verificar limita\xe7\xf5es de uso dos pinos"))),(0,t.kt)("h2",{id:"fun\xe7\xe3o"},"Fun\xe7\xe3o"),(0,t.kt)("p",null,"A fun\xe7\xe3o analogWrite","(",")"," escreve um valor de PWM em um pino digital que possui a fun\xe7\xe3o PWM. Para usar o pino como sa\xedda PWM \xe9 necess\xe1rio configur\xe1-lo como sa\xedda digital."),(0,t.kt)("h3",{id:"sintaxe"},"Sintaxe:"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"analogWrite(pino, valor);")),(0,t.kt)("h3",{id:"par\xe2metros"},"Par\xe2metros:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"pino:")," n\xfamero do pino onde ser\xe1 gerado o sinal PWM ","(","0,1,4 na Franzininho",")",";"),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("strong",{parentName:"li"},"valor:")," valor m\xe9dio da tens\xe3o de sa\xedda que ser\xe1 gerado por PWM, entre 0 e 255, onde 0 representa 0V e 255, 5V.")),(0,t.kt)("h3",{id:"exemplo"},"Exemplo"),(0,t.kt)("p",null,"Vamos controlar o brilho do LED conforme o valor lido no potenci\xf4metro:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Circuito",src:n(1426).Z,width:"1590",height:"1017"})),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-cpp"},"const byte LED = 1; //pino do LED\nconst byte POT = A1; //pino do Potenci\xf4metro\n\nvoid setup() {\n  pinMode(LED,OUTPUT);\n}\n\nvoid loop() {\n\n  int valor = analogRead(POT); // l\xea o valor do potenci\xf4metro\n  analogWrite(LED,valor/4);    //escreve no LED valor entre 0 e 255\n\n}\n")),(0,t.kt)("h3",{id:"simula\xe7\xe3o"},"Simula\xe7\xe3o"),(0,t.kt)("iframe",{width:"100%",height:"458px",src:"https://wokwi.com/arduino/projects/310740273604854336?view=diagram"}))}u.isMDXComponent=!0},4648:(e,a,n)=>{n.d(a,{Z:()=>o});const o=n.p+"assets/images/pinagem-V2-7047a8d5930175670acc131497791fcc.png"},1426:(e,a,n)=>{n.d(a,{Z:()=>o});const o=n.p+"assets/images/circuito-a6a0591bc42320cbe29b14bd9332f3c2.png"},7053:(e,a,n)=>{n.d(a,{Z:()=>o});const o=n.p+"assets/images/pwm-1a77c519e01b2cf6e365dd2e6e3a624e.jpg"}}]);