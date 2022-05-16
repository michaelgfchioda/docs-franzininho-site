(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{162:function(e,a,o){"use strict";o.d(a,"a",(function(){return u})),o.d(a,"b",(function(){return b}));var n=o(0),r=o.n(n);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function i(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?i(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function l(e,a){if(null==e)return{};var o,n,r=function(e,a){if(null==e)return{};var o,n,r={},t=Object.keys(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||(r[o]=e[o]);return r}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=r.a.createContext({}),s=function(e){var a=r.a.useContext(p),o=a;return e&&(o="function"==typeof e?e(a):c(c({},a),e)),o},u=function(e){var a=s(e.components);return r.a.createElement(p.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},d=r.a.forwardRef((function(e,a){var o=e.components,n=e.mdxType,t=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(o),d=n,b=u["".concat(i,".").concat(d)]||u[d]||m[d]||t;return o?r.a.createElement(b,c(c({ref:a},p),{},{components:o})):r.a.createElement(b,c({ref:a},p))}));function b(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var t=o.length,i=new Array(t);i[0]=d;var c={};for(var l in a)hasOwnProperty.call(a,l)&&(c[l]=a[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var p=2;p<t;p++)i[p]=o[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,o)}d.displayName="MDXCreateElement"},313:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/pwm-eb18c8cc8e0dbfee8a2537d3706ee4c3.png"},314:function(e,a,o){"use strict";o.r(a),a.default=o.p+"assets/images/bundles-58357a122b96bde035495e9835cb75e7.png"},97:function(e,a,o){"use strict";o.r(a),o.d(a,"frontMatter",(function(){return c})),o.d(a,"metadata",(function(){return l})),o.d(a,"toc",(function(){return p})),o.d(a,"default",(function(){return u}));var n=o(3),r=o(7),t=(o(0),o(162)),i=["components"],c={id:"circuitpython-pwm",title:"PWM - Pulse Width Modulation",slug:"/franzininho-wifi/exemplos-circuitpython/pwm",description:"Neste artigo vamos aprender a usar o PWM no CircuitPython, uma t\xe9cnica muito usada para controle de pot\xeancia. Veja como \xe9 f\xe1cil aplicar.",author:"Mateus Adriano Ventura Vieira"},l={unversionedId:"FranzininhoWifi/exemplos-circuitpython/circuitpython-pwm",id:"FranzininhoWifi/exemplos-circuitpython/circuitpython-pwm",isDocsHomePage:!1,title:"PWM - Pulse Width Modulation",description:"Neste artigo vamos aprender a usar o PWM no CircuitPython, uma t\xe9cnica muito usada para controle de pot\xeancia. Veja como \xe9 f\xe1cil aplicar.",source:"@site/docs/FranzininhoWifi/exemplos-circuitpython/pwm.md",slug:"/franzininho-wifi/exemplos-circuitpython/pwm",permalink:"/en/docs/franzininho-wifi/exemplos-circuitpython/pwm",editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-circuitpython/pwm.md",version:"current",sidebar:"docs",previous:{title:"Entrada Anal\xf3gica",permalink:"/en/docs/franzininho-wifi/exemplos-circuitpython/entradas-analogicas"},next:{title:"Pinos de Toque Capacitivo",permalink:"/en/docs/franzininho-wifi/exemplos-circuitpython/touch-capacitivo"}},p=[{value:"Materiais necess\xe1rios",id:"materiais-necess\xe1rios",children:[]},{value:"Circuito",id:"circuito",children:[]},{value:"C\xf3digo para PWM com CircuitPython",id:"c\xf3digo-para-pwm-com-circuitpython",children:[]},{value:"Conclus\xe3o",id:"conclus\xe3o",children:[]}],s={toc:p};function u(e){var a=e.components,c=Object(r.a)(e,i);return Object(t.b)("wrapper",Object(n.a)({},s,c,{components:a,mdxType:"MDXLayout"}),Object(t.b)("p",null,"Neste artigo vamos aprender a usar o PWM no CircuitPython, uma t\xe9cnica muito usada para controle de pot\xeancia. Veja como \xe9 f\xe1cil aplicar."),Object(t.b)("p",null,"PWM \xe9 abrevia\xe7\xe3o para, Pulse Width Modulation \u2013 que significa \u2013 Modula\xe7\xe3o por Largura de Pulso. Essa \xe9 uma t\xe9cnica onde, uma sa\xedda digital \xe9 usada para simular uma sa\xedda anal\xf3gica. Isso acontece por meio de mudan\xe7as constantes de sinal, que s\xe3o impercept\xedveis e, dessa maneira o componente conectado a esse pino apenas tira uma m\xe9dia de quanto tempo est\xe1 em estado alto e baixo. Quanto mais tempo ligado, maior o valor e, consequentemente, quando menor tempo ligado, menor o valor."),Object(t.b)("p",null,"Neste exemplo, vamos aprender a usar PWM com CircuitPython na Franzininho WiFi."),Object(t.b)("h2",{id:"materiais-necess\xe1rios"},"Materiais necess\xe1rios"),Object(t.b)("ul",null,Object(t.b)("li",{parentName:"ul"},"1 Placa Franzininho WiFi com CircuitPython;"),Object(t.b)("li",{parentName:"ul"},"1 Protoboard;"),Object(t.b)("li",{parentName:"ul"},"1 LED;"),Object(t.b)("li",{parentName:"ul"},"1 potenci\xf4metro de 10 k\u03a9;"),Object(t.b)("li",{parentName:"ul"},"1 resistor de 220 \u03a9 ou 330 \u03a9;"),Object(t.b)("li",{parentName:"ul"},"Jumpers.")),Object(t.b)("h2",{id:"circuito"},"Circuito"),Object(t.b)("p",null,"Para os nossos primeiros experimentos, realize a seguinte montagem:"),Object(t.b)("p",null,Object(t.b)("img",{alt:"franzininho-wifi-pwm",src:o(313).default}),"\nFigura 1 \u2013 Circuito para teste de PWM com CircuitPython na Franzininho WiFi"),Object(t.b)("h2",{id:"c\xf3digo-para-pwm-com-circuitpython"},"C\xf3digo para PWM com CircuitPython"),Object(t.b)("p",null,"Para esse c\xf3digo, utilizaremos a biblioteca simpleio, que ser\xe1 necess\xe1ria para realizarmos a convers\xe3o de valores. As bibliotecas do CircuitPython podem ser encontradas no seguinte endere\xe7o: ",Object(t.b)("a",{parentName:"p",href:"https://circuitpython.org/libraries"},"https://circuitpython.org/libraries"),". Fa\xe7a o download, de acordo com a vers\xe3o do CircuitPython instalada na sua Franzininho WiFi."),Object(t.b)("p",null,Object(t.b)("img",{alt:"franzininho-wifi-pwm",src:o(314).default})),Object(t.b)("p",null,"Ap\xf3s baixar o arquivo, copie a pasta desejada para a pasta de arquivos da Franzininho WiFi:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre"},"simpleio.mpy\n")),Object(t.b)("p",null,"Escreva o c\xf3digo abaixo no arquivo code.py, que est\xe1 localizado no diret\xf3rio da Franzininho:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"import pwmio\nimport math\nimport simpleio\nfrom analogio import AnalogIn\nfrom time import sleep\n\npotIn = board.IO2\npot = AnalogIn(potIn)\n\nLED = board.IO4\nled = pwmio.PWMOut(LED)\n\ndef converter(pin):\n    pinValue = pin.value\n    mapValue = math.trunc(simpleio.map_range\n               (pinValue, 536, 51355, 0, 65535))\n    print('Valor Original: ', pinValue,\n          'Valor Convertido: ', mapValue)\n    return mapValue\n\nwhile True:\n    potValue = converter(pot)\n    led.duty_cycle = potValue\n    sleep(0.1)\n")),Object(t.b)("p",null,"Depois de finalizar a edi\xe7\xe3o do c\xf3digo, salve. Execute o programa."),Object(t.b)("p",null,"Utilizaremos o m\xf3dulo board para acessarmos os pinos da Franzininho:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"import board\n")),Object(t.b)("p",null,"E para configurarmos os pinos PWM, \xe9 necess\xe1rio importarmos o pwmio:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"import pwmio\n")),Object(t.b)("p",null,"Al\xe9m disso, ser\xe1 necess\xe1rio a biblioteca math, para \u201celiminar\u201d as casas decimais:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"import math\n")),Object(t.b)("p",null,"Como dito anteriormente, usaremos o m\xf3dulo simpleio:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"import simpleio\n")),Object(t.b)("p",null,"Ademais, importaremos a fun\xe7\xe3o AnalogIn do m\xf3dulo analogio para, configuramos o potenci\xf4metro como uma entrada anal\xf3gica:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"from analogio import AnalogIn\n")),Object(t.b)("p",null,"Tamb\xe9m, iremos chamar a fun\xe7\xe3o sleep, da biblioteca time, pois precisaremos de intervalos de temporiza\xe7\xe3o:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"from time import sleep\n")),Object(t.b)("p",null,"Agora, ap\xf3s importarmos todas os m\xf3dulos que vamos utilizar, vamos configurar os pinos. Primeiro, vamos associar o GPIO2 a uma vari\xe1vel chamada potIn. Ap\xf3s isso, vamos criar um objeto chamado pot e configur\xe1-lo como uma entrada anal\xf3gica:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"LED = board.IO4\nled = pwmio.PWMOut(LED)\n")),Object(t.b)("p",null,"Configura\xe7\xf5es iniciais encerradas! Depois disso, vamos criar uma fun\xe7\xe3o chamada converte. Como par\xe2metro, essa fun\xe7\xe3o receber\xe1 o pino que estamos realizando a leitura:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"def converter(pin):\n")),Object(t.b)("p",null,"Dentro da fun\xe7\xe3o, realizaremos a leitura do valor do potenci\xf4metro, que ser\xe1 armazenada na vari\xe1vel pinValue:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"pinValue = pin.value\n")),Object(t.b)("p",null,"Al\xe9m disso, vamos converter o valor do potenci\xf4metro para o valor aceito pelos pinos PWM. Para isso, vamos usar a fun\xe7\xe3o simpleio.map_range. Os par\xe2metros dessa fun\xe7\xe3o s\xe3o: valor bruto (no caso, o valor recebido naquele instante), valor m\xednimo de entrada, valor m\xe1ximo de entrada, valor m\xednimo de sa\xedda e valor m\xe1ximo de sa\xedda. E, vamos precisar da fun\xe7\xe3o math.trunc, que eliminar\xe1 as casas decimais. Todas essas informa\xe7\xf5es ficar\xe3o armazenadas na vari\xe1vel mapValue:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"mapValue = math.trunc(simpleio.map_range\n               (pinValue, 536, 51355, 0, 65535))\n")),Object(t.b)("p",null,"Colocaremos o print apenas para visualizarmos a convers\xe3o:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"print('Valor Original: ', pinValue,\n          'Valor Convertido: ', mapValue)\n    return mapValue\n")),Object(t.b)("p",null,"E a fun\xe7\xe3o nos retornar\xe1 o valor de mapValue:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"return mapValue\n")),Object(t.b)("p",null,"E por fim, o loop. Dentro do while True, vamos associar o valor retornado pela fun\xe7\xe3o converte a vari\xe1vel potValue e mandar esse valor para o led. Para enviarmos um valor para o componente, utilizamos a fun\xe7\xe3o duty_cycle, que \xe9 o ciclo de trabalho, ou seja, quanto tempo o sinal estar\xe1 ligado ou n\xe3o. Tamb\xe9m, colocaremos um delay:"),Object(t.b)("pre",null,Object(t.b)("code",{parentName:"pre",className:"language-python"},"while True:\n    potValue = converter(pot)\n    led.duty_cycle = potValue\n    sleep(0.1)\n")),Object(t.b)("h2",{id:"conclus\xe3o"},"Conclus\xe3o"),Object(t.b)("p",null,"Nesse exemplo, aprendemos a como usar os pinos PWM com CircuitPython e, como control\xe1-los atrav\xe9s de um potenci\xf4metro. Al\xe9m disso, aprendemos a como mapear valores. No pr\xf3ximo exemplo, vamos aprender a como usar Servos Motores.\nOutros artigos da s\xe9rie."),Object(t.b)("table",null,Object(t.b)("thead",{parentName:"table"},Object(t.b)("tr",{parentName:"thead"},Object(t.b)("th",{parentName:"tr",align:null},"Autor"),Object(t.b)("th",{parentName:"tr",align:null},"Mateus Adriano Ventura Vieira"))),Object(t.b)("tbody",{parentName:"table"},Object(t.b)("tr",{parentName:"tbody"},Object(t.b)("td",{parentName:"tr",align:null},"Data:"),Object(t.b)("td",{parentName:"tr",align:null},"09/05/2022")))))}u.isMDXComponent=!0}}]);