(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{139:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return b}));var a=n(3),r=n(7),i=(n(0),n(162)),o=["components"],c={id:"circuitpython-sensor-hcsr04",title:"Sensor de Dist\xe2ncia Ultrass\xf4nico HC-SR04",slug:"/franzininho-wifi/exemplos-circuitpython/sensor-hcsr04",description:"Nesse exemplo aprenderemos a ler valores de dist\xe2ncia com o sensor HC-SR04 usando o CircuitPython.",author:"Wallace Brito"},s={unversionedId:"FranzininhoWifi/exemplos-circuitpython/circuitpython-sensor-hcsr04",id:"FranzininhoWifi/exemplos-circuitpython/circuitpython-sensor-hcsr04",isDocsHomePage:!1,title:"Sensor de Dist\xe2ncia Ultrass\xf4nico HC-SR04",description:"Nesse exemplo aprenderemos a ler valores de dist\xe2ncia com o sensor HC-SR04 usando o CircuitPython.",source:"@site/docs/FranzininhoWifi/exemplos-circuitpython/hcsr04.md",slug:"/franzininho-wifi/exemplos-circuitpython/sensor-hcsr04",permalink:"/en/docs/franzininho-wifi/exemplos-circuitpython/sensor-hcsr04",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-circuitpython/hcsr04.md",version:"current",sidebar:"docs",previous:{title:"Sensor de temperatura e umidade DHT11",permalink:"/en/docs/franzininho-wifi/exemplos-circuitpython/dht11"},next:{title:"Servo motor",permalink:"/en/docs/franzininho-wifi/exemplos-circuitpython/servo-motor"}},p=[{value:"Materiais necess\xe1rios",id:"materiais-necess\xe1rios",children:[]},{value:"Circuito",id:"circuito",children:[]},{value:"C\xf3digo",id:"c\xf3digo",children:[]},{value:"An\xe1lise do c\xf3digo",id:"an\xe1lise-do-c\xf3digo",children:[]},{value:"Resultado",id:"resultado",children:[]}],l={toc:p};function b(e){var t=e.components,c=Object(r.a)(e,o);return Object(i.b)("wrapper",Object(a.a)({},l,c,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Nesse exemplo aprenderemos a ler valores de dist\xe2ncia com o sensor HC-SR04 usando o CircuitPython."),Object(i.b)("h2",{id:"materiais-necess\xe1rios"},"Materiais necess\xe1rios"),Object(i.b)("p",null,"Identifique os seguintes materiais necess\xe1rios para este projeto:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"1 Franzininho WiFi."),Object(i.b)("li",{parentName:"ul"},"1 Sensor de Dist\xe2ncia Ultrass\xf4nico HC-SR04."),Object(i.b)("li",{parentName:"ul"},"1 Protoboard."),Object(i.b)("li",{parentName:"ul"},"Cabos de liga\xe7\xe3o.")),Object(i.b)("h2",{id:"circuito"},"Circuito"),Object(i.b)("p",null,"A pr\xf3xima etapa consiste em realizar a montagem da maneira indicada pela figura a seguir:"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Circuito HC-SR04",src:n(397).default})),Object(i.b)("p",null,"A tabela abaixo resume as conex\xf5es entre o sensor e a Franzininho: "),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:"center"},"HC-SR04"),Object(i.b)("th",{parentName:"tr",align:"center"},"Franzininho WiFi"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"Echo"),Object(i.b)("td",{parentName:"tr",align:"center"},"GPIO35")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"Trig"),Object(i.b)("td",{parentName:"tr",align:"center"},"GPIO36")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"Vcc"),Object(i.b)("td",{parentName:"tr",align:"center"},"5v")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:"center"},"Gnd"),Object(i.b)("td",{parentName:"tr",align:"center"},"GND")))),Object(i.b)("h2",{id:"c\xf3digo"},"C\xf3digo"),Object(i.b)("p",null,"Neste exemplo, vamos fazer o uso de uma biblioteca que implementa os m\xe9todos necess\xe1rios para uso do sensor."),Object(i.b)("p",null,"As bibliotecas para o CircuitPython podem ser obtidas atrav\xe9s do endere\xe7o ",Object(i.b)("a",{parentName:"p",href:"https://circuitpython.org/libraries"},"https://circuitpython.org/libraries"),". Escolha e baixe o arquivo de acordo com a vers\xe3o do CircuitPyhthon que voc\xea tem instalado na Franzininho WiFi."),Object(i.b)("p",null,Object(i.b)("img",{alt:"Bibliotecas",src:n(194).default})),Object(i.b)("p",null,"Em seguida, copie o arquivo diretamente para a pasta lib do sistema de arquivos da Franzininho WiFi:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"adafruit_hcsr04.mpy")),Object(i.b)("p",null,"Implemente o programa abaixo no arquivo ",Object(i.b)("strong",{parentName:"p"},"code.py")," que est\xe1 localizado na pasta raiz da Franzininho WiFi."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'import board\nimport time\nimport adafruit_hcsr04\n\nsonar = adafruit_hcsr04.HCSR04(trigger_pin=board.IO36, echo_pin=board.IO35, timeout=0.5)\n\nwhile True:\n    try:\n        print((sonar.distance,))\n    except RuntimeError:\n        print("Retrying!")\n    time.sleep(0.1)\n')),Object(i.b)("h2",{id:"an\xe1lise-do-c\xf3digo"},"An\xe1lise do c\xf3digo"),Object(i.b)("p",null,"Para acessar os pinos da placa precisamos importar o m\xf3dulo ",Object(i.b)("strong",{parentName:"p"},"board"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"import board\n")),Object(i.b)("p",null,"Como precisaremos fazer o uso do sleep, importamos o m\xf3dulo ",Object(i.b)("strong",{parentName:"p"},"time"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"import time\n")),Object(i.b)("p",null,"A biblioteca que vamos utilizar para realizar as leituras do sensor \xe9 o ",Object(i.b)("strong",{parentName:"p"},"adafruit_hcsr04"),", importaremos esse m\xf3dulo:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"import adafruit_hcsr04\n")),Object(i.b)("p",null,"Em seguida criamos uma inst\xe2ncia da classe HCSR04, passando como par\xe2metro ",Object(i.b)("strong",{parentName:"p"},"trigger_pin")," sendo o pino 36, o ",Object(i.b)("strong",{parentName:"p"},"echo_pin")," o pino 35 e o ",Object(i.b)("strong",{parentName:"p"},"timeout")," sendo 0.5 segundos.\nO ",Object(i.b)("strong",{parentName:"p"},"trigger_pin")," (em portugu\xeas: Gatilho) tem a fun\xe7\xe3o de disparar uma esp\xe9cie de onda sonora ultrass\xf4nica, a qual ir\xe1 colidir com algum obst\xe1culo e retorna para o sensor fazendo com que o pino ",Object(i.b)("strong",{parentName:"p"},"echo_pin")," envie pulsos para a Franzininho, o tempo desse processo ser\xe1 convertido em dist\xe2ncia. O par\xe2metro ",Object(i.b)("strong",{parentName:"p"},"timeout")," \xe9 o tempo m\xe1ximo de leitura do sensor, que nesse caso \xe9 0.5 segundos.\nConforme podemos observar na pinagem, dispon\xedvel em ",Object(i.b)("a",{parentName:"p",href:"https://franzininho.github.io/docs-franzininho-site/docs/franzininho-wifi/franzininho-wifi"},"https://franzininho.github.io/docs-franzininho-site/docs/franzininho-wifi/franzininho-wifi")," "),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},"sonar = adafruit_hcsr04.HCSR04(trigger_pin=board.IO36, echo_pin=board.IO35, timeout=0.5)\n")),Object(i.b)("p",null,"No loop infinito fazemos a leitura do valor de dist\xe2ncia a cada ",Object(i.b)("strong",{parentName:"p"},"0.1 segundos")," atrav\xe9s dos m\xe9todo ",Object(i.b)("inlineCode",{parentName:"p"},"sonar.distance"),", e imprimimos o valor lido no terminal serial. O valor retornado de ",Object(i.b)("inlineCode",{parentName:"p"},"sonar.distance")," tem a unidade de medida cent\xedmetros."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-python"},'while True:\n    try:\n        print((sonar.distance,))\n    except RuntimeError:\n        print("Retrying!")\n    time.sleep(0.1)\n')),Object(i.b)("h2",{id:"resultado"},"Resultado"),Object(i.b)("p",null,"A figura a seguir exibe os valores lidos no terminal serial(REPL):"),Object(i.b)("p",null,Object(i.b)("img",{alt:"Terminal Serial",src:n(398).default})),Object(i.b)("div",{className:"admonition admonition-info alert alert--info"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"Se tiver alguma d\xfavida consulte a comunidade Franzininho no ",Object(i.b)("a",{parentName:"p",href:"https://discord.gg/H5kENmWGaz"},"Discord")))),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",{parentName:"tr",align:null},"Autor"),Object(i.b)("th",{parentName:"tr",align:null},Object(i.b)("a",{parentName:"th",href:"mailto:wallacejsb@gmail.com"},"Wallace Brito")))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",{parentName:"tr",align:null},"Data:"),Object(i.b)("td",{parentName:"tr",align:null},"31/10/2021")))))}b.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),b=l(n),m=a,u=b["".concat(o,".").concat(m)]||b[m]||d[m]||i;return n?r.a.createElement(u,c(c({ref:t},p),{},{components:n})):r.a.createElement(u,c({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},194:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/libraries-43f696d429c655da2cf36dc63cfc72e0.png"},397:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/circuito-sensor-hcsr04-36362e07b837238ba47b3c1f31c559ce.png"},398:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/leitura-sensor-hc-sr04-0c4c677c0a5e425cbba24731cb5f7f09.png"}}]);