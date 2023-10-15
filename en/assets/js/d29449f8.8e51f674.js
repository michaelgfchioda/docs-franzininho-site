"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[4242],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),u=a,h=d["".concat(l,".").concat(u)]||d[u]||m[u]||i;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6463:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var n=r(3117),a=(r(7294),r(3905));const i={id:"circuitpython-sensor-hcsr04",title:"Sensor de Dist\xe2ncia Ultrass\xf4nico HC-SR04",slug:"/franzininho-wifi/exemplos-circuitpython/sensor-hcsr04",description:"Nesse exemplo aprenderemos a ler valores de dist\xe2ncia com o sensor HC-SR04 usando o CircuitPython.",author:"Wallace Brito"},o=void 0,s={unversionedId:"FranzininhoWifi/exemplos-circuitpython/circuitpython-sensor-hcsr04",id:"FranzininhoWifi/exemplos-circuitpython/circuitpython-sensor-hcsr04",title:"Sensor de Dist\xe2ncia Ultrass\xf4nico HC-SR04",description:"Nesse exemplo aprenderemos a ler valores de dist\xe2ncia com o sensor HC-SR04 usando o CircuitPython.",source:"@site/docs/FranzininhoWifi/exemplos-circuitpython/hcsr04.md",sourceDirName:"FranzininhoWifi/exemplos-circuitpython",slug:"/franzininho-wifi/exemplos-circuitpython/sensor-hcsr04",permalink:"/en/docs/franzininho-wifi/exemplos-circuitpython/sensor-hcsr04",draft:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-circuitpython/hcsr04.md",tags:[],version:"current",frontMatter:{id:"circuitpython-sensor-hcsr04",title:"Sensor de Dist\xe2ncia Ultrass\xf4nico HC-SR04",slug:"/franzininho-wifi/exemplos-circuitpython/sensor-hcsr04",description:"Nesse exemplo aprenderemos a ler valores de dist\xe2ncia com o sensor HC-SR04 usando o CircuitPython.",author:"Wallace Brito"},sidebar:"docs",previous:{title:"Sensor de temperatura e umidade DHT11",permalink:"/en/docs/franzininho-wifi/exemplos-circuitpython/dht11"},next:{title:"Servo motor",permalink:"/en/docs/franzininho-wifi/exemplos-circuitpython/servo-motor"}},l={},p=[{value:"Materiais necess\xe1rios",id:"materiais-necess\xe1rios",level:2},{value:"Circuito",id:"circuito",level:2},{value:"C\xf3digo",id:"c\xf3digo",level:2},{value:"An\xe1lise do c\xf3digo",id:"an\xe1lise-do-c\xf3digo",level:2},{value:"Resultado",id:"resultado",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Nesse exemplo aprenderemos a ler valores de dist\xe2ncia com o sensor HC-SR04 usando o CircuitPython."),(0,a.kt)("h2",{id:"materiais-necess\xe1rios"},"Materiais necess\xe1rios"),(0,a.kt)("p",null,"Identifique os seguintes materiais necess\xe1rios para este projeto:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 Franzininho WiFi."),(0,a.kt)("li",{parentName:"ul"},"1 Sensor de Dist\xe2ncia Ultrass\xf4nico HC-SR04."),(0,a.kt)("li",{parentName:"ul"},"1 Protoboard."),(0,a.kt)("li",{parentName:"ul"},"Cabos de liga\xe7\xe3o.")),(0,a.kt)("h2",{id:"circuito"},"Circuito"),(0,a.kt)("p",null,"A pr\xf3xima etapa consiste em realizar a montagem da maneira indicada pela figura a seguir:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Circuito HC-SR04",src:r(901).Z,width:"984",height:"918"})),(0,a.kt)("p",null,"A tabela abaixo resume as conex\xf5es entre o sensor e a Franzininho: "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"HC-SR04"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Franzininho WiFi"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Echo"),(0,a.kt)("td",{parentName:"tr",align:"center"},"GPIO35")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Trig"),(0,a.kt)("td",{parentName:"tr",align:"center"},"GPIO36")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Vcc"),(0,a.kt)("td",{parentName:"tr",align:"center"},"5v")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Gnd"),(0,a.kt)("td",{parentName:"tr",align:"center"},"GND")))),(0,a.kt)("h2",{id:"c\xf3digo"},"C\xf3digo"),(0,a.kt)("p",null,"Neste exemplo, vamos fazer o uso de uma biblioteca que implementa os m\xe9todos necess\xe1rios para uso do sensor."),(0,a.kt)("p",null,"As bibliotecas para o CircuitPython podem ser obtidas atrav\xe9s do endere\xe7o ",(0,a.kt)("a",{parentName:"p",href:"https://circuitpython.org/libraries"},"https://circuitpython.org/libraries"),". Escolha e baixe o arquivo de acordo com a vers\xe3o do CircuitPyhthon que voc\xea tem instalado na Franzininho WiFi."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Bibliotecas",src:r(609).Z,width:"1295",height:"465"})),(0,a.kt)("p",null,"Em seguida, copie o arquivo diretamente para a pasta lib do sistema de arquivos da Franzininho WiFi:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"adafruit_hcsr04.mpy")),(0,a.kt)("p",null,"Implemente o programa abaixo no arquivo ",(0,a.kt)("strong",{parentName:"p"},"code.py")," que est\xe1 localizado na pasta raiz da Franzininho WiFi."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'import board\nimport time\nimport adafruit_hcsr04\n\nsonar = adafruit_hcsr04.HCSR04(trigger_pin=board.IO36, echo_pin=board.IO35, timeout=0.5)\n\nwhile True:\n    try:\n        print((sonar.distance,))\n    except RuntimeError:\n        print("Retrying!")\n    time.sleep(0.1)\n')),(0,a.kt)("h2",{id:"an\xe1lise-do-c\xf3digo"},"An\xe1lise do c\xf3digo"),(0,a.kt)("p",null,"Para acessar os pinos da placa precisamos importar o m\xf3dulo ",(0,a.kt)("strong",{parentName:"p"},"board"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import board\n")),(0,a.kt)("p",null,"Como precisaremos fazer o uso do sleep, importamos o m\xf3dulo ",(0,a.kt)("strong",{parentName:"p"},"time"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import time\n")),(0,a.kt)("p",null,"A biblioteca que vamos utilizar para realizar as leituras do sensor \xe9 o ",(0,a.kt)("strong",{parentName:"p"},"adafruit_hcsr04"),", importaremos esse m\xf3dulo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import adafruit_hcsr04\n")),(0,a.kt)("p",null,"Em seguida criamos uma inst\xe2ncia da classe HCSR04, passando como par\xe2metro ",(0,a.kt)("strong",{parentName:"p"},"trigger_pin")," sendo o pino 36, o ",(0,a.kt)("strong",{parentName:"p"},"echo_pin")," o pino 35 e o ",(0,a.kt)("strong",{parentName:"p"},"timeout")," sendo 0.5 segundos.\nO ",(0,a.kt)("strong",{parentName:"p"},"trigger_pin")," (em portugu\xeas: Gatilho) tem a fun\xe7\xe3o de disparar uma esp\xe9cie de onda sonora ultrass\xf4nica, a qual ir\xe1 colidir com algum obst\xe1culo e retorna para o sensor fazendo com que o pino ",(0,a.kt)("strong",{parentName:"p"},"echo_pin")," envie pulsos para a Franzininho, o tempo desse processo ser\xe1 convertido em dist\xe2ncia. O par\xe2metro ",(0,a.kt)("strong",{parentName:"p"},"timeout")," \xe9 o tempo m\xe1ximo de leitura do sensor, que nesse caso \xe9 0.5 segundos.\nConforme podemos observar na pinagem, dispon\xedvel em ",(0,a.kt)("a",{parentName:"p",href:"https://franzininho.github.io/docs-franzininho-site/docs/franzininho-wifi/franzininho-wifi"},"https://franzininho.github.io/docs-franzininho-site/docs/franzininho-wifi/franzininho-wifi")," "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"sonar = adafruit_hcsr04.HCSR04(trigger_pin=board.IO36, echo_pin=board.IO35, timeout=0.5)\n")),(0,a.kt)("p",null,"No loop infinito fazemos a leitura do valor de dist\xe2ncia a cada ",(0,a.kt)("strong",{parentName:"p"},"0.1 segundos")," atrav\xe9s dos m\xe9todo ",(0,a.kt)("inlineCode",{parentName:"p"},"sonar.distance"),", e imprimimos o valor lido no terminal serial. O valor retornado de ",(0,a.kt)("inlineCode",{parentName:"p"},"sonar.distance")," tem a unidade de medida cent\xedmetros."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},'while True:\n    try:\n        print((sonar.distance,))\n    except RuntimeError:\n        print("Retrying!")\n    time.sleep(0.1)\n')),(0,a.kt)("h2",{id:"resultado"},"Resultado"),(0,a.kt)("p",null,"A figura a seguir exibe os valores lidos no terminal serial(REPL):"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Terminal Serial",src:r(5621).Z,width:"1141",height:"344"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Se tiver alguma d\xfavida consulte a comunidade Franzininho no ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/H5kENmWGaz"},"Discord"))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Autor"),(0,a.kt)("th",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"th",href:"mailto:wallacejsb@gmail.com"},"Wallace Brito")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Data:"),(0,a.kt)("td",{parentName:"tr",align:null},"31/10/2021")))))}m.isMDXComponent=!0},609:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/libraries-43f696d429c655da2cf36dc63cfc72e0.png"},901:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/circuito-sensor-hcsr04-36362e07b837238ba47b3c1f31c559ce.png"},5621:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/leitura-sensor-hc-sr04-0c4c677c0a5e425cbba24731cb5f7f09.png"}}]);