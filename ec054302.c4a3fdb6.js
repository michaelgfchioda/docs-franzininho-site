(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{150:function(e,o,a){"use strict";a.r(o),a.d(o,"frontMatter",(function(){return c})),a.d(o,"metadata",(function(){return s})),a.d(o,"toc",(function(){return p})),a.d(o,"default",(function(){return l}));var t=a(3),r=a(7),n=(a(0),a(162)),i=["components"],c={id:"circuitpython-touch-capacitivo",title:"Pinos de Toque Capacitivo",slug:"/franzininho-wifi/exemplos-circuitpython/touch-capacitivo",description:"Neste exemplo, vamos fazer um \u201cinterruptor\u201d por aproxima\xe7\xe3o e, aprender como usar o m\xf3dulo respons\xe1vel pelos pinos de toque capacitivo. Ademais, veremos como ajustar a sensibilidade desse recurso.",author:"Mateus Adriano Ventura Vieira"},s={unversionedId:"FranzininhoWifi/exemplos-circuitpython/circuitpython-touch-capacitivo",id:"FranzininhoWifi/exemplos-circuitpython/circuitpython-touch-capacitivo",isDocsHomePage:!1,title:"Pinos de Toque Capacitivo",description:"Neste exemplo, vamos fazer um \u201cinterruptor\u201d por aproxima\xe7\xe3o e, aprender como usar o m\xf3dulo respons\xe1vel pelos pinos de toque capacitivo. Ademais, veremos como ajustar a sensibilidade desse recurso.",source:"@site/docs/FranzininhoWifi/exemplos-circuitpython/touch-capacitivo.md",slug:"/franzininho-wifi/exemplos-circuitpython/touch-capacitivo",permalink:"/docs/franzininho-wifi/exemplos-circuitpython/touch-capacitivo",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-circuitpython/touch-capacitivo.md",version:"current",sidebar:"docs",previous:{title:"PWM - Pulse Width Modulation",permalink:"/docs/franzininho-wifi/exemplos-circuitpython/pwm"},next:{title:"Display OLED I2C",permalink:"/docs/franzininho-wifi/exemplos-circuitpython/display-oled-i2c"}},p=[{value:"<strong>Materiais necess\xe1rios</strong>",id:"materiais-necess\xe1rios",children:[]},{value:"<strong>Circuito</strong>",id:"circuito",children:[]},{value:"<strong>C\xf3digo</strong>",id:"c\xf3digo",children:[]},{value:"<strong>An\xe1lise do C\xf3digo</strong>",id:"an\xe1lise-do-c\xf3digo",children:[]},{value:"<strong>Como ajustar a sensibilidade do touch?</strong>",id:"como-ajustar-a-sensibilidade-do-touch",children:[]},{value:"<strong>Conclus\xe3o</strong>",id:"conclus\xe3o",children:[]}],u={toc:p};function l(e){var o=e.components,c=Object(r.a)(e,i);return Object(n.b)("wrapper",Object(t.a)({},u,c,{components:o,mdxType:"MDXLayout"}),Object(n.b)("p",null,"A capacit\xe2ncia pode ser definida, basicamente, como a capacidade de um corpo de armazenar energia el\xe9trica. Dessa maneira, os pinos de toque capacitivo detectam a mudan\xe7a na capacit\xe2ncia de um elemento. Esses pinos, podem ser utilizados por toque, e at\xe9 mesmo, pela aproxima\xe7\xe3o de um dedo."),Object(n.b)("p",null,"Neste exemplo, vamos fazer um \u201cinterruptor\u201d por aproxima\xe7\xe3o e, aprender como usar o m\xf3dulo respons\xe1vel pelos pinos de toque capacitivo. Ademais, veremos como ajustar a sensibilidade desse recurso."),Object(n.b)("h2",{id:"materiais-necess\xe1rios"},Object(n.b)("strong",{parentName:"h2"},"Materiais necess\xe1rios")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"1 Placa Franzininho WiFi com CircuitPython;"),Object(n.b)("li",{parentName:"ul"},"1 Protoboard;"),Object(n.b)("li",{parentName:"ul"},"1 LED;"),Object(n.b)("li",{parentName:"ul"},"1 resistor de 220 \u03a9 ou 330 \u03a9;"),Object(n.b)("li",{parentName:"ul"},"Jumpers.")),Object(n.b)("h2",{id:"circuito"},Object(n.b)("strong",{parentName:"h2"},"Circuito")),Object(n.b)("p",null,"Realize a seguinte montagem para este projeto. No lugar do \u201csensor\u201d de toque capacitivo, pode ser utilizado um jumper, um peda\xe7o de fio ou qualquer outro material."),Object(n.b)("p",null,Object(n.b)("img",{alt:"Circuito",src:a(415).default})),Object(n.b)("h2",{id:"c\xf3digo"},Object(n.b)("strong",{parentName:"h2"},"C\xf3digo")),Object(n.b)("p",null,"Implemente o c\xf3digo abaixo e teste seu circuito."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-python"},"#Toque Capacitivo\n\nimport board \nimport touchio\nfrom digitalio import DigitalInOut, Direction\nfrom time import sleep \n\nestado = 0\n\npin = board.IO1\ntouch = touchio.TouchIn(pin)\n\nled = DigitalInOut(board.IO4)\nled.direction = Direction.OUTPUT\n\nwhile True:\n    if touch.value:\n        estado = not estado\n    \n    led.value = estado\n    sleep(1)\n")),Object(n.b)("p",null,"Ap\xf3s finalizar a edi\xe7\xe3o do c\xf3digo, salve-o. Execute o programa. Ao aproximar, ou, encostar o dedo no \u201csensor\u201d escolhido por voc\xea, ele deve funcionar como um interruptor, ligando e desligando o LED."),Object(n.b)("h2",{id:"an\xe1lise-do-c\xf3digo"},Object(n.b)("strong",{parentName:"h2"},"An\xe1lise do C\xf3digo")),Object(n.b)("p",null,"Para acessarmos os pinos da placa devemos importar o m\xf3dulo ",Object(n.b)("strong",{parentName:"p"},"board"),":"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-python"},"import board\n")),Object(n.b)("p",null,"Al\xe9m disso, para o uso dos pinos de toque capacitivo, usaremos a biblioteca ",Object(n.b)("strong",{parentName:"p"},"touchio"),":"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-python"},"import touchio\n")),Object(n.b)("p",null,"E, para configurarmos o LED como uma sa\xedda digital, temos que importar as fun\xe7\xf5es ",Object(n.b)("strong",{parentName:"p"},"DigitalInOut")," e ",Object(n.b)("strong",{parentName:"p"},"Direction")," do m\xf3dulo ",Object(n.b)("strong",{parentName:"p"},"digitalio:")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-python"},"from digitalio import DigitalInOut,  Direction\n")),Object(n.b)("p",null,"Por \xfaltimo, vamos chamar a fun\xe7\xe3o ",Object(n.b)("strong",{parentName:"p"},"sleep")," do m\xf3dulo ",Object(n.b)("strong",{parentName:"p"},"time"),", que usaremos para intervalos de temporiza\xe7\xe3o:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-python"},"from time import sleep\n")),Object(n.b)("p",null,"Ap\xf3s importarmos as bibliotecas necess\xe1rias, criaremos uma vari\xe1vel ",Object(n.b)("strong",{parentName:"p"},"estado"),", que vai armazenar o estado do LED:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-python"},"estado  =  0\n")),Object(n.b)("p",null,"Agora, vamos configurar o GPIO1, como um pino ",Object(n.b)("strong",{parentName:"p"},"touch"),". Primeiro, iremos atribuir esse pino a uma vari\xe1vel, no caso, a vari\xe1vel ",Object(n.b)("strong",{parentName:"p"},"pin"),". Ap\xf3s isso, iremos criar o objeto ",Object(n.b)("strong",{parentName:"p"},"touch")," e atribuir o pin a esse objeto:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-python"},"pin  =  board.IO1\ntouch  =  touchio.TouchIn(pin)\n")),Object(n.b)("p",null,"Ademais, iremos atribuir o GPIO4 a var\xe1vel ",Object(n.b)("strong",{parentName:"p"},"led")," e, configur\xe1-lo como uma sa\xedda digital:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-python"},"led  =  DigitalInOut(board.IO4)\nled.direction  =  Direction.OUTPUT\n")),Object(n.b)("p",null,"Na sequ\xeancia, criaremos um la\xe7o infinito (",Object(n.b)("strong",{parentName:"p"},"while True"),"). Dentro do loop, verificamos se houve mudan\xe7a na capacit\xe2ncia do \u201csensor\u201d. Caso aconte\xe7a a mudan\xe7a, o estado do led tamb\xe9m mudar\xe1:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-python"},"while True:\n    if touch.value:\n        estado = not estado\n    \n    led.value = estado\n    sleep(1)\n")),Object(n.b)("h2",{id:"como-ajustar-a-sensibilidade-do-touch"},Object(n.b)("strong",{parentName:"h2"},"Como ajustar a sensibilidade do touch?")),Object(n.b)("p",null,"Nesse exemplo, estamos acionando o led apenas por aproximar o dedo. Por\xe9m, pode ser que voc\xea deseje ajustar o seu \u201csensor\u201d para acionar por toque. Para isso, vamos utilizar o comando ",Object(n.b)("strong",{parentName:"p"},"threshold"),"."),Object(n.b)("p",null,"Primeiro, vamos verificar a medi\xe7\xe3o do toque bruto. Para isso, utilizaremos a fun\xe7\xe3o ",Object(n.b)("strong",{parentName:"p"},"raw_value"),". Depois, ajustaremos a sensibilidade, para que ele seja acionado apenas por toque:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-python"},"pin = board.IO1\ntouch = touchio.TouchIn(pin)\nprint(touch.raw_value)\ntouch.threshold = 17300\n")),Object(n.b)("p",null,"Ap\xf3s adicionarmos a fun\xe7\xe3o ",Object(n.b)("strong",{parentName:"p"},"threshold"),", o led s\xf3 \xe9 acionado se tocarmos o \u201csensor\u201d. Isso acontece, pois, o configuramos com uma sensibilidade menor, ou seja, um valor m\xednimo de capacit\xe2ncia maior, para que a mudan\xe7a seja percebida pela placa."),Object(n.b)("h2",{id:"conclus\xe3o"},Object(n.b)("strong",{parentName:"h2"},"Conclus\xe3o")),Object(n.b)("p",null,"Aprendemos, atrav\xe9s de um exemplo pr\xe1tico, a como usar um pino toque capacitivo, que, em muitas situa\xe7\xf5es pode ser usado para substituir bot\xf5es e interruptores, por exemplo, apresentando-se como uma solu\xe7\xe3o mais simples, pois seu funcionamento n\xe3o \xe9 mec\xe2nico. Al\xe9m disso, pudemos ver como ajustar a sensibilidade desse sensor as nossas necessidades."),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",{parentName:"tr",align:null},"Autor"),Object(n.b)("th",{parentName:"tr",align:null},"Mateus Adriano Ventura Vieira"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",{parentName:"tr",align:null},"Data:"),Object(n.b)("td",{parentName:"tr",align:null},"06/05/2022")))))}l.isMDXComponent=!0},162:function(e,o,a){"use strict";a.d(o,"a",(function(){return l})),a.d(o,"b",(function(){return b}));var t=a(0),r=a.n(t);function n(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function i(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,t)}return a}function c(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?i(Object(a),!0).forEach((function(o){n(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function s(e,o){if(null==e)return{};var a,t,r=function(e,o){if(null==e)return{};var a,t,r={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],o.indexOf(a)>=0||(r[a]=e[a]);return r}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),u=function(e){var o=r.a.useContext(p),a=o;return e&&(a="function"==typeof e?e(o):c(c({},o),e)),a},l=function(e){var o=u(e.components);return r.a.createElement(p.Provider,{value:o},e.children)},m={inlineCode:"code",wrapper:function(e){var o=e.children;return r.a.createElement(r.a.Fragment,{},o)}},d=r.a.forwardRef((function(e,o){var a=e.components,t=e.mdxType,n=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=u(a),d=t,b=l["".concat(i,".").concat(d)]||l[d]||m[d]||n;return a?r.a.createElement(b,c(c({ref:o},p),{},{components:a})):r.a.createElement(b,c({ref:o},p))}));function b(e,o){var a=arguments,t=o&&o.mdxType;if("string"==typeof e||t){var n=a.length,i=new Array(n);i[0]=d;var c={};for(var s in o)hasOwnProperty.call(o,s)&&(c[s]=o[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var p=2;p<n;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},415:function(e,o,a){"use strict";a.r(o),o.default=a.p+"assets/images/circuito-toque-capacitivo-baa986e339db82a3e64763d11f03a158.webp"}}]);