"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[2536],{3905:(e,a,o)=>{o.d(a,{Zo:()=>p,kt:()=>g});var n=o(7294);function i(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function t(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?t(Object(o),!0).forEach((function(a){i(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function d(e,a){if(null==e)return{};var o,n,i=function(e,a){if(null==e)return{};var o,n,i={},t=Object.keys(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||(i[o]=e[o]);return i}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}var s=n.createContext({}),l=function(e){var a=n.useContext(s),o=a;return e&&(o="function"==typeof e?e(a):r(r({},a),e)),o},p=function(e){var a=l(e.components);return n.createElement(s.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var o=e.components,i=e.mdxType,t=e.originalType,s=e.parentName,p=d(e,["components","mdxType","originalType","parentName"]),u=l(o),c=i,g=u["".concat(s,".").concat(c)]||u[c]||m[c]||t;return o?n.createElement(g,r(r({ref:a},p),{},{components:o})):n.createElement(g,r({ref:a},p))}));function g(e,a){var o=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var t=o.length,r=new Array(t);r[0]=c;var d={};for(var s in a)hasOwnProperty.call(a,s)&&(d[s]=a[s]);d.originalType=e,d[u]="string"==typeof e?e:i,r[1]=d;for(var l=2;l<t;l++)r[l]=o[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},1110:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var n=o(3117),i=(o(7294),o(3905));const t={id:"entradas-saidas-digitais",title:"Entradas e Sa\xeddas Digitais",slug:"/franzininho-diy/entradas-saidas-digitais",description:"Nesse exemplo vamos aprender a trabalhar com as entradas e sa\xeddas digitais na Franzininho DIY"},r=void 0,d={unversionedId:"FranzininhoDIY/exemplos-arduino/entradas-saidas-digitais",id:"FranzininhoDIY/exemplos-arduino/entradas-saidas-digitais",title:"Entradas e Sa\xeddas Digitais",description:"Nesse exemplo vamos aprender a trabalhar com as entradas e sa\xeddas digitais na Franzininho DIY",source:"@site/docs/FranzininhoDIY/exemplos-arduino/entradas-saidas-digitais.md",sourceDirName:"FranzininhoDIY/exemplos-arduino",slug:"/franzininho-diy/entradas-saidas-digitais",permalink:"/docs/franzininho-diy/entradas-saidas-digitais",draft:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-arduino/entradas-saidas-digitais.md",tags:[],version:"current",frontMatter:{id:"entradas-saidas-digitais",title:"Entradas e Sa\xeddas Digitais",slug:"/franzininho-diy/entradas-saidas-digitais",description:"Nesse exemplo vamos aprender a trabalhar com as entradas e sa\xeddas digitais na Franzininho DIY"},sidebar:"docs",previous:{title:"Configura\xe7\xe3o da Arduino IDE",permalink:"/docs/franzininho-diy/pacote"},next:{title:"Entradas Anal\xf3gicas",permalink:"/docs/franzininho-diy/entradas-analogicas"}},s={},l=[{value:"Configura\xe7\xe3o do modo de funcionamento do pino",id:"configura\xe7\xe3o-do-modo-de-funcionamento-do-pino",level:2},{value:"Sintaxe:",id:"sintaxe",level:3},{value:"Par\xe2metros:",id:"par\xe2metros",level:3},{value:"Exemplo de uso",id:"exemplo-de-uso",level:3},{value:"Escrita em um pino digital",id:"escrita-em-um-pino-digital",level:2},{value:"Sintaxe",id:"sintaxe-1",level:3},{value:"Par\xe2metros",id:"par\xe2metros-1",level:3},{value:"Exemplo de uso",id:"exemplo-de-uso-1",level:3},{value:"Simula\xe7\xe3o",id:"simula\xe7\xe3o",level:3},{value:"Leitura de um pino digital",id:"leitura-de-um-pino-digital",level:2},{value:"Sintaxe",id:"sintaxe-2",level:3},{value:"Par\xe2metros:",id:"par\xe2metros-2",level:3},{value:"Retorno",id:"retorno",level:3},{value:"Exemplo de uso",id:"exemplo-de-uso-2",level:3},{value:"C\xf3digo",id:"c\xf3digo",level:3},{value:"Simula\xe7\xe3o",id:"simula\xe7\xe3o-1",level:3}],p={toc:l},u="wrapper";function m(e){let{components:a,...t}=e;return(0,i.kt)(u,(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Na Franzininho DIY temos ",(0,i.kt)("strong",{parentName:"p"},"6 pinos")," que podem ser usados como entradas ou sa\xeddas digitais","("," P0 a P5",")",", conforme pinout:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Pinagem Franzininho DIY",src:o(4648).Z,width:"1209",height:"869"})),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"Verificar limita\xe7\xf5es de uso dos pinos")),(0,i.kt)("h2",{id:"configura\xe7\xe3o-do-modo-de-funcionamento-do-pino"},"Configura\xe7\xe3o do modo de funcionamento do pino"),(0,i.kt)("p",null,"Os pinos do ATtiny85 podem ser configurados como entradas ou sa\xeddas, al\xe9m de outras fun\xe7\xf5es. Para configura\xe7\xe3o como entrada ou sa\xedda digital vamos usar a seguinte fun\xe7\xe3o:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pinMode()")),(0,i.kt)("p",null,"Configura um pino espec\xedfico para ser entrada ou sa\xedda digital."),(0,i.kt)("h3",{id:"sintaxe"},"Sintaxe:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"pinMode(pino, modo);")),(0,i.kt)("h3",{id:"par\xe2metros"},"Par\xe2metros:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"pino:")," corresponde ao pino que voc\xea ir\xe1 usar, no caso da Franzininho podemos usar pinos de 0 a 5."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"modo:")," deve-se colocar o modo no qual se deseja configurar o pino:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"INPUT  =  Entrada: Esse pino receber\xe1 sinais vindos de um circuito externo"),(0,i.kt)("li",{parentName:"ul"},"OUTPUT = Sa\xedda: Esse pino enviar\xe1 sinais para ativar um circuito externo"),(0,i.kt)("li",{parentName:"ul"},"INPUT","_","PULLUP = Entrada digital com resistor de pull-up ","(","ligado ao VCC",")"," interno habilitado")))),(0,i.kt)("h3",{id:"exemplo-de-uso"},"Exemplo de uso"),(0,i.kt)("p",null,"Vamos configurar o pino P0 para leitura de uma tecla, portanto ser\xe1 uma entrada digital. Tamb\xe9m vamos configurar o pino P1 para acionamento do LED, ou seja, uma sa\xedda digital:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"int tecla = 0;   //pino da tecla\nint LED = 1;     //pino do LED\n\nvoid setup() {\n  pinMode(tecla, INPUT); //configura pino da tecla como entrada\n  pinMode(LED, OUTPUT);  //configura pino do LED como sa\xedda\n}\n\nvoid loop() {\n\n\n}\n")),(0,i.kt)("p",null,"Geralmente as configura\xe7\xf5es s\xe3o realizadas dentro da fun\xe7\xe3o ",(0,i.kt)("inlineCode",{parentName:"p"},"setup()"),". Na fun\xe7\xe3o ",(0,i.kt)("inlineCode",{parentName:"p"},"loop()")," s\xe3o realizadas as tarefas durante o funcionamento da placa, como veremos mais \xe0 frente."),(0,i.kt)("h2",{id:"escrita-em-um-pino-digital"},"Escrita em um pino digital"),(0,i.kt)("p",null,"Os pinos digitais configurados como sa\xeddas digitais podem assumir dois valores, conforme a escrita no c\xf3digo. Os valores podem ser HIGH ou LOW, que se traduzem em 5V ou 0V no pino da Franzininho. Para escrita digital vamos usar a seguinte fun\xe7\xe3o:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"digitalWrite()")),(0,i.kt)("p",null,"Coloca um n\xedvel l\xf3gico alto ","(","HIGH, 5V",")"," ou baixo ","(","LOW, 0V",")"," em um pino configurado como sa\xedda digital."),(0,i.kt)("h3",{id:"sintaxe-1"},"Sintaxe"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"digitalWrite(pino, valor)")),(0,i.kt)("h3",{id:"par\xe2metros-1"},"Par\xe2metros"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"pino:")," N\xfamero correspondente ao pino."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"valor:")," HIGH ou LOW."),(0,i.kt)("h3",{id:"exemplo-de-uso-1"},"Exemplo de uso"),(0,i.kt)("p",null,"Inverte o estado do LED ","(","P1",")"," em intervalos de 1 segundo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"const int LED = 1; //pino digital conectado ao LED\n\nvoid setup(){\n  pinMode(LED,OUTPUT); //pino digital de sa\xedda\n}\n\nvoid loop(){\n  digitalWrite(LED,HIGH);   //acende o led da placa\n  delay(1000);             //aguarda um segundo\n  digitalWrite(LED,LOW);  //apaga o led da placa\n  delay(1000);           //aguarda um segundo\n}\n")),(0,i.kt)("h3",{id:"simula\xe7\xe3o"},"Simula\xe7\xe3o"),(0,i.kt)("iframe",{width:"100%",height:"458px",src:"https://wokwi.com/arduino/projects/310738934055305794?view=diagram"}),(0,i.kt)("p",null,"A fun\xe7\xe3o ",(0,i.kt)("inlineCode",{parentName:"p"},"delay(ms)")," espera um tempo em milissegundos. No caso do exemplo acima, 1000 ms = 1 segundo;"),(0,i.kt)("h2",{id:"leitura-de-um-pino-digital"},"Leitura de um pino digital"),(0,i.kt)("p",null,"Um pino digital pode assumir dois valores, HIGH e LOW, conforme o n\xedvel de tens\xe3o presente no mesmo: 5V ou 0V. Podemos usar o pino configurado como entrada digital para ler estados de sensores, que por sua vez representam estados de situa\xe7\xf5es, por exemplo:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"bot\xe3o solto ou pressionado;"),(0,i.kt)("li",{parentName:"ul"},"porta aberta ou fechada"),(0,i.kt)("li",{parentName:"ul"},"presen\xe7a de objeto ou n\xe3o presen\xe7a de objeto")),(0,i.kt)("p",null,"Para leitura de uma entrada digital usamos a seguinte fun\xe7\xe3o:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"digitalRead()")),(0,i.kt)("p",null,"L\xea o valor presente em um pino digital. Este valor pode ser HIGH ou LOW."),(0,i.kt)("h3",{id:"sintaxe-2"},"Sintaxe"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"digitalRead(pino);")),(0,i.kt)("h3",{id:"par\xe2metros-2"},"Par\xe2metros:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"pino:")," n\xfamero do pino que se deseja ler."),(0,i.kt)("h3",{id:"retorno"},"Retorno"),(0,i.kt)("p",null,"HIGH ou LOW."),(0,i.kt)("h3",{id:"exemplo-de-uso-2"},"Exemplo de uso"),(0,i.kt)("p",null,"Vamos ler o estado da tecla ligada ao pino P2 e acionar o LED ligado a pino P1 conforme o seu estado:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Circuito",src:o(7750).Z,width:"1563",height:"702"})),(0,i.kt)("h3",{id:"c\xf3digo"},"C\xf3digo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cpp"},"const int LED = 1; //pino para o LED\nconst int BOTAO = 2; //pino para o bot\xe3o\n\nint val = 0; // val ser\xe1 utilizado para armazenar o estado do pino\n\nvoid setup(){\n  pinMode(LED,OUTPUT); //o LED \xe9 uma sa\xedda\n  pinMode(BOTAO,INPUT); //o BOTAO \xe9 uma entrada\n}\n\nvoid loop (){\n  val = digitalRead(BOTAO); // l\xea e armazena o valor de entrada\n  digitalWrite(LED, val); //aciona LED conforme valor lido do bot\xe3o\n}\n")),(0,i.kt)("h3",{id:"simula\xe7\xe3o-1"},"Simula\xe7\xe3o"),(0,i.kt)("iframe",{width:"100%",height:"458px",src:"https://wokwi.com/arduino/projects/310739108383162946?view=diagram"}))}m.isMDXComponent=!0},7750:(e,a,o)=>{o.d(a,{Z:()=>n});const n=o.p+"assets/images/circuito-13e542231a501db4a7e2f774eee017e5.png"},4648:(e,a,o)=>{o.d(a,{Z:()=>n});const n=o.p+"assets/images/pinagem-V2-7047a8d5930175670acc131497791fcc.png"}}]);