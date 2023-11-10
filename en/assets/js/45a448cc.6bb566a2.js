"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[8442],{3905:(e,a,i)=>{i.d(a,{Zo:()=>u,kt:()=>f});var n=i(7294);function r(e,a,i){return a in e?Object.defineProperty(e,a,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[a]=i,e}function t(e,a){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var a=1;a<arguments.length;a++){var i=null!=arguments[a]?arguments[a]:{};a%2?t(Object(i),!0).forEach((function(a){r(e,a,i[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):t(Object(i)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(i,a))}))}return e}function l(e,a){if(null==e)return{};var i,n,r=function(e,a){if(null==e)return{};var i,n,r={},t=Object.keys(e);for(n=0;n<t.length;n++)i=t[n],a.indexOf(i)>=0||(r[i]=e[i]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)i=t[n],a.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),d=function(e){var a=n.useContext(s),i=a;return e&&(i="function"==typeof e?e(a):o(o({},a),e)),i},u=function(e){var a=d(e.components);return n.createElement(s.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var i=e.components,r=e.mdxType,t=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=d(i),c=r,f=p["".concat(s,".").concat(c)]||p[c]||m[c]||t;return i?n.createElement(f,o(o({ref:a},u),{},{components:i})):n.createElement(f,o({ref:a},u))}));function f(e,a){var i=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var t=i.length,o=new Array(t);o[0]=c;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<t;d++)o[d]=i[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}c.displayName="MDXCreateElement"},1038:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>t,metadata:()=>l,toc:()=>d});var n=i(3117),r=(i(7294),i(3905));const t={id:"arduino-dht11",title:"Leitura DHT11",slug:"/franzininho-wifi/exemplos-arduino/dht11",description:"Nesse exemplo vamos fazer a leitura do sensor de temperatura e umidade, DHT11, e imprimir os valores na serial;",author:"Fabio Souza"},o=void 0,l={unversionedId:"FranzininhoWifi/exemplos-arduino/arduino-dht11",id:"FranzininhoWifi/exemplos-arduino/arduino-dht11",title:"Leitura DHT11",description:"Nesse exemplo vamos fazer a leitura do sensor de temperatura e umidade, DHT11, e imprimir os valores na serial;",source:"@site/docs/FranzininhoWifi/exemplos-arduino/dht11.md",sourceDirName:"FranzininhoWifi/exemplos-arduino",slug:"/franzininho-wifi/exemplos-arduino/dht11",permalink:"/en/docs/franzininho-wifi/exemplos-arduino/dht11",draft:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-arduino/dht11.md",tags:[],version:"current",frontMatter:{id:"arduino-dht11",title:"Leitura DHT11",slug:"/franzininho-wifi/exemplos-arduino/dht11",description:"Nesse exemplo vamos fazer a leitura do sensor de temperatura e umidade, DHT11, e imprimir os valores na serial;",author:"Fabio Souza"},sidebar:"docs",previous:{title:"Neopixel RGB LED Onboard",permalink:"/en/docs/franzininho-wifi/exemplos-arduino/neopixel-onboard"},next:{title:"Primeiros Passos com MicroPython",permalink:"/en/docs/franzininho-wifi/exemplos-micropython/primeiros-passos"}},s={},d=[{value:"Materiais necess\xe1rios",id:"materiais-necess\xe1rios",level:2},{value:"Circuito",id:"circuito",level:2},{value:"C\xf3digo",id:"c\xf3digo",level:2},{value:"An\xe1lise do c\xf3digo",id:"an\xe1lise-do-c\xf3digo",level:2},{value:"Resultado",id:"resultado",level:2},{value:"Conclus\xe3o",id:"conclus\xe3o",level:2}],u={toc:d},p="wrapper";function m(e){let{components:a,...t}=e;return(0,r.kt)(p,(0,n.Z)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Nesse exemplo vamos fazer a leitura do sensor de temperatura e umidade, DHT11, e imprimir os valores no terminal serial."),(0,r.kt)("h2",{id:"materiais-necess\xe1rios"},"Materiais necess\xe1rios"),(0,r.kt)("p",null,"Identifique os seguintes materiais necess\xe1rios para este projeto:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1 Franzininho WiFi."),(0,r.kt)("li",{parentName:"ul"},"1 Sensor DHT11"),(0,r.kt)("li",{parentName:"ul"},"1 Resistor de 10k"),(0,r.kt)("li",{parentName:"ul"},"1 Protoboard."),(0,r.kt)("li",{parentName:"ul"},"Cabos de liga\xe7\xe3o.")),(0,r.kt)("h2",{id:"circuito"},"Circuito"),(0,r.kt)("p",null,"Realize a montagem do circuito da maneira indicada pela figura a seguir:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Circuito DHT11",src:i(6189).Z,width:"876",height:"1041"})),(0,r.kt)("h2",{id:"c\xf3digo"},"C\xf3digo"),(0,r.kt)("p",null,"Para usar o sensor DHT com a Franzininho WiFi no Arduino, precisamos instalar uma bibloteca. Vamos usar a biblioteca mantida pela Adafruit."),(0,r.kt)("p",null,"Vamos instalar a biblioteca usando o gerenciador de biblitecas do Arduino. Acesso Ferramentas -> Gerenciar Bibliotecas. Procure por DHT e instale a bibloteca DHT sensor library da Adafruit:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Instala\xe7\xe3o da Biblioteca",src:i(3877).Z,width:"894",height:"514"})),(0,r.kt)("p",null,"Agora vamos fazer a leitura do sensor e imprimir os valores de temperatura e umidade no terminal serial."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'/*************************************************************************************\n * Exemplo para leitura de sensor DHT11\n * \n * \n * Bibliotecas necessarias\n * DHT da Adafruit - Instalar pelo gerenciador de bibliotecas\n *  \n *  por: F\xe1bio Souza\n *************************************************************************************/\n\n#include "DHT.h"\n \n#define DHTPIN 2 \n#define DHTTYPE DHT11\n \nDHT dht(DHTPIN, DHTTYPE);\n\n\n/*********************************************************************************\n *  Fun\xe7\xe3o Setup\n *  Configura\xe7\xf5es iniciais da aplica\xe7\xe3o\n *********************************************************************************/\nvoid setup() \n{\nSerial.begin(19200);\nSerial.println("Teste de leitura do sensor DHT11");\ndht.begin();\n}\n\n/*********************************************************************************\n *  Fun\xe7\xe3o loop\n *********************************************************************************/\nvoid loop() \n{\n\n  float umidade = dht.readHumidity();\n  float temperatura = dht.readTemperature();\n\n  delay(500);\n  \n\n  // Se as vari\xe1veis temperatura e umidade n\xe3o forem valores v\xe1lidos, acusar\xe1 falha de leitura.\n  if (isnan(temperatura) || isnan(umidade)) \n  {\n  Serial.println("Falha na leitura do dht11...");\n  } \n  else //se n\xe3o, exibir\xe1 os valores lidos \n  {\n    //Imprime os dados no monitor serial\n    Serial.print("Umidade: ");\n    Serial.print(umidade);\n    Serial.print(" %\\t"); //tab\n    Serial.print("Temperatura: ");\n    Serial.print(temperatura);\n    Serial.println(" \xb0C");\n  }\n}\n')),(0,r.kt)("h2",{id:"an\xe1lise-do-c\xf3digo"},"An\xe1lise do c\xf3digo"),(0,r.kt)("p",null,"Na primeira parte do c\xf3digo adicionamo as bibliotecas a serem usadas na aplica\xe7\xe3o e a instancia do DHT11:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},"#define DHTPIN 2 \n#define DHTTYPE DHT11\n \nDHT dht(DHTPIN, DHTTYPE);\n")),(0,r.kt)("p",null,"Na fun\xe7\xe3o ",(0,r.kt)("inlineCode",{parentName:"p"},"setup()")," fizemos a inicializa\xe7\xe3o do DHT11 e da comunica\xe7\xe3o Serial:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'void setup() \n{\nSerial.begin(19200);\nSerial.println("Teste de leitura do sensor DHT11");\ndht.begin();\n}\n')),(0,r.kt)("p",null,"No ",(0,r.kt)("inlineCode",{parentName:"p"},"loop()")," infinito fazemos a leitura da temperatura e umidade a cada 500 ms e imprimimos na serial. Caso ocorra falha na leitura do DHT11 \xe9 exibido uma mensagem de erro:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'void loop() \n{\n\n  float umidade = dht.readHumidity();\n  float temperatura = dht.readTemperature();\n\n  delay(500);\n  \n\n  // Se as vari\xe1veis temperatura e umidade n\xe3o forem valores v\xe1lidos, acusar\xe1 falha de leitura.\n  if (isnan(temperatura) || isnan(umidade)) \n  {\n  Serial.println("Falha na leitura do dht11...");\n  } \n  else //se n\xe3o, exibir\xe1 os valores lidos \n  {\n    //Imprime os dados no monitor serial\n    Serial.print("Umidade: ");\n    Serial.print(umidade);\n    Serial.print(" %\\t"); //tab\n    Serial.print("Temperatura: ");\n    Serial.print(temperatura);\n    Serial.println(" \xb0C");\n  }\n}\n')),(0,r.kt)("h2",{id:"resultado"},"Resultado"),(0,r.kt)("p",null,"A figura a seguir exibe os valores lidos no monitor serial:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Terminal Serial",src:i(8586).Z,width:"1065",height:"536"})),(0,r.kt)("h2",{id:"conclus\xe3o"},"Conclus\xe3o"),(0,r.kt)("p",null,"O sensor DHT11( e similares) possibilita que fa\xe7amos leitura de temperatura e umidade de uma forma simples e eficiente. Atrav\xe9s de 1 fio de comunica\xe7\xe3o conseguimos fazer a leitura das duas grandezas. Como a comunica\xe7\xe3o \xe9 um pouco complexa, o  uso de uma biblioteca facilita a comunica\xe7\xe3o com o dispositivo. A biblioteca mantida pela Adafruit \xe9 muito eficiente e est\xe1vel."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Se tiver alguma d\xfavida consulte a comunidade Franzininho no ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/H5kENmWGaz"},"Discord"))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Autor"),(0,r.kt)("th",{parentName:"tr",align:null},"F\xe1bio Souza"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data:"),(0,r.kt)("td",{parentName:"tr",align:null},"23/10/2021")))))}m.isMDXComponent=!0},6189:(e,a,i)=>{i.d(a,{Z:()=>n});const n=i.p+"assets/images/circuito-43a970745d9aaeec4fad97f720fd8811.png"},3877:(e,a,i)=>{i.d(a,{Z:()=>n});const n=i.p+"assets/images/dht-lib-09d2b21ecd6956960598384892b76762.png"},8586:(e,a,i)=>{i.d(a,{Z:()=>n});const n=i.p+"assets/images/valores-lidos-3a3d40d3f6f2a3488305949443f884a9.png"}}]);