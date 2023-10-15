"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[8911],{3905:(e,o,a)=>{a.d(o,{Zo:()=>u,kt:()=>h});var t=a(7294);function r(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function i(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,t)}return a}function n(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?i(Object(a),!0).forEach((function(o){r(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function s(e,o){if(null==e)return{};var a,t,r=function(e,o){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],o.indexOf(a)>=0||(r[a]=e[a]);return r}(e,o);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=t.createContext({}),c=function(e){var o=t.useContext(p),a=o;return e&&(a="function"==typeof e?e(o):n(n({},o),e)),a},u=function(e){var o=c(e.components);return t.createElement(p.Provider,{value:o},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},d=t.forwardRef((function(e,o){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=c(a),d=r,h=l["".concat(p,".").concat(d)]||l[d]||m[d]||i;return a?t.createElement(h,n(n({ref:o},u),{},{components:a})):t.createElement(h,n({ref:o},u))}));function h(e,o){var a=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var i=a.length,n=new Array(i);n[0]=d;var s={};for(var p in o)hasOwnProperty.call(o,p)&&(s[p]=o[p]);s.originalType=e,s[l]="string"==typeof e?e:r,n[1]=s;for(var c=2;c<i;c++)n[c]=a[c];return t.createElement.apply(null,n)}return t.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4807:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>p,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var t=a(3117),r=(a(7294),a(3905));const i={id:"circuitpython-touch-capacitivo",title:"Pinos de Toque Capacitivo",slug:"/franzininho-wifi/exemplos-circuitpython/touch-capacitivo",description:"Neste exemplo, vamos fazer um \u201cinterruptor\u201d por aproxima\xe7\xe3o e, aprender como usar o m\xf3dulo respons\xe1vel pelos pinos de toque capacitivo. Ademais, veremos como ajustar a sensibilidade desse recurso.",author:"Mateus Adriano Ventura Vieira"},n=void 0,s={unversionedId:"FranzininhoWifi/exemplos-circuitpython/circuitpython-touch-capacitivo",id:"FranzininhoWifi/exemplos-circuitpython/circuitpython-touch-capacitivo",title:"Pinos de Toque Capacitivo",description:"Neste exemplo, vamos fazer um \u201cinterruptor\u201d por aproxima\xe7\xe3o e, aprender como usar o m\xf3dulo respons\xe1vel pelos pinos de toque capacitivo. Ademais, veremos como ajustar a sensibilidade desse recurso.",source:"@site/docs/FranzininhoWifi/exemplos-circuitpython/touch-capacitivo.md",sourceDirName:"FranzininhoWifi/exemplos-circuitpython",slug:"/franzininho-wifi/exemplos-circuitpython/touch-capacitivo",permalink:"/docs/franzininho-wifi/exemplos-circuitpython/touch-capacitivo",draft:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-circuitpython/touch-capacitivo.md",tags:[],version:"current",frontMatter:{id:"circuitpython-touch-capacitivo",title:"Pinos de Toque Capacitivo",slug:"/franzininho-wifi/exemplos-circuitpython/touch-capacitivo",description:"Neste exemplo, vamos fazer um \u201cinterruptor\u201d por aproxima\xe7\xe3o e, aprender como usar o m\xf3dulo respons\xe1vel pelos pinos de toque capacitivo. Ademais, veremos como ajustar a sensibilidade desse recurso.",author:"Mateus Adriano Ventura Vieira"},sidebar:"docs",previous:{title:"PWM - Pulse Width Modulation",permalink:"/docs/franzininho-wifi/exemplos-circuitpython/pwm"},next:{title:"Display OLED I2C",permalink:"/docs/franzininho-wifi/exemplos-circuitpython/display-oled-i2c"}},p={},c=[{value:"<strong>Materiais necess\xe1rios</strong>",id:"materiais-necess\xe1rios",level:2},{value:"<strong>Circuito</strong>",id:"circuito",level:2},{value:"<strong>C\xf3digo</strong>",id:"c\xf3digo",level:2},{value:"<strong>An\xe1lise do C\xf3digo</strong>",id:"an\xe1lise-do-c\xf3digo",level:2},{value:"<strong>Como ajustar a sensibilidade do touch?</strong>",id:"como-ajustar-a-sensibilidade-do-touch",level:2},{value:"<strong>Conclus\xe3o</strong>",id:"conclus\xe3o",level:2}],u={toc:c},l="wrapper";function m(e){let{components:o,...i}=e;return(0,r.kt)(l,(0,t.Z)({},u,i,{components:o,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A capacit\xe2ncia pode ser definida, basicamente, como a capacidade de um corpo de armazenar energia el\xe9trica. Dessa maneira, os pinos de toque capacitivo detectam a mudan\xe7a na capacit\xe2ncia de um elemento. Esses pinos, podem ser utilizados por toque, e at\xe9 mesmo, pela aproxima\xe7\xe3o de um dedo."),(0,r.kt)("p",null,"Neste exemplo, vamos fazer um \u201cinterruptor\u201d por aproxima\xe7\xe3o e, aprender como usar o m\xf3dulo respons\xe1vel pelos pinos de toque capacitivo. Ademais, veremos como ajustar a sensibilidade desse recurso."),(0,r.kt)("h2",{id:"materiais-necess\xe1rios"},(0,r.kt)("strong",{parentName:"h2"},"Materiais necess\xe1rios")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"1 Placa Franzininho WiFi com CircuitPython;"),(0,r.kt)("li",{parentName:"ul"},"1 Protoboard;"),(0,r.kt)("li",{parentName:"ul"},"1 LED;"),(0,r.kt)("li",{parentName:"ul"},"1 resistor de 220 \u03a9 ou 330 \u03a9;"),(0,r.kt)("li",{parentName:"ul"},"Jumpers.")),(0,r.kt)("h2",{id:"circuito"},(0,r.kt)("strong",{parentName:"h2"},"Circuito")),(0,r.kt)("p",null,"Realize a seguinte montagem para este projeto. No lugar do \u201csensor\u201d de toque capacitivo, pode ser utilizado um jumper, um peda\xe7o de fio ou qualquer outro material."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Circuito",src:a(8941).Z,width:"939",height:"693"})),(0,r.kt)("h2",{id:"c\xf3digo"},(0,r.kt)("strong",{parentName:"h2"},"C\xf3digo")),(0,r.kt)("p",null,"Implemente o c\xf3digo abaixo e teste seu circuito."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#Toque Capacitivo\n\nimport board \nimport touchio\nfrom digitalio import DigitalInOut, Direction\nfrom time import sleep \n\nestado = 0\n\npin = board.IO1\ntouch = touchio.TouchIn(pin)\n\nled = DigitalInOut(board.IO4)\nled.direction = Direction.OUTPUT\n\nwhile True:\n    if touch.value:\n        estado = not estado\n    \n    led.value = estado\n    sleep(1)\n")),(0,r.kt)("p",null,"Ap\xf3s finalizar a edi\xe7\xe3o do c\xf3digo, salve-o. Execute o programa. Ao aproximar, ou, encostar o dedo no \u201csensor\u201d escolhido por voc\xea, ele deve funcionar como um interruptor, ligando e desligando o LED."),(0,r.kt)("h2",{id:"an\xe1lise-do-c\xf3digo"},(0,r.kt)("strong",{parentName:"h2"},"An\xe1lise do C\xf3digo")),(0,r.kt)("p",null,"Para acessarmos os pinos da placa devemos importar o m\xf3dulo ",(0,r.kt)("strong",{parentName:"p"},"board"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import board\n")),(0,r.kt)("p",null,"Al\xe9m disso, para o uso dos pinos de toque capacitivo, usaremos a biblioteca ",(0,r.kt)("strong",{parentName:"p"},"touchio"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import touchio\n")),(0,r.kt)("p",null,"E, para configurarmos o LED como uma sa\xedda digital, temos que importar as fun\xe7\xf5es ",(0,r.kt)("strong",{parentName:"p"},"DigitalInOut")," e ",(0,r.kt)("strong",{parentName:"p"},"Direction")," do m\xf3dulo ",(0,r.kt)("strong",{parentName:"p"},"digitalio:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from digitalio import DigitalInOut,  Direction\n")),(0,r.kt)("p",null,"Por \xfaltimo, vamos chamar a fun\xe7\xe3o ",(0,r.kt)("strong",{parentName:"p"},"sleep")," do m\xf3dulo ",(0,r.kt)("strong",{parentName:"p"},"time"),", que usaremos para intervalos de temporiza\xe7\xe3o:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from time import sleep\n")),(0,r.kt)("p",null,"Ap\xf3s importarmos as bibliotecas necess\xe1rias, criaremos uma vari\xe1vel ",(0,r.kt)("strong",{parentName:"p"},"estado"),", que vai armazenar o estado do LED:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"estado  =  0\n")),(0,r.kt)("p",null,"Agora, vamos configurar o GPIO1, como um pino ",(0,r.kt)("strong",{parentName:"p"},"touch"),". Primeiro, iremos atribuir esse pino a uma vari\xe1vel, no caso, a vari\xe1vel ",(0,r.kt)("strong",{parentName:"p"},"pin"),". Ap\xf3s isso, iremos criar o objeto ",(0,r.kt)("strong",{parentName:"p"},"touch")," e atribuir o pin a esse objeto:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"pin  =  board.IO1\ntouch  =  touchio.TouchIn(pin)\n")),(0,r.kt)("p",null,"Ademais, iremos atribuir o GPIO4 a var\xe1vel ",(0,r.kt)("strong",{parentName:"p"},"led")," e, configur\xe1-lo como uma sa\xedda digital:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"led  =  DigitalInOut(board.IO4)\nled.direction  =  Direction.OUTPUT\n")),(0,r.kt)("p",null,"Na sequ\xeancia, criaremos um la\xe7o infinito (",(0,r.kt)("strong",{parentName:"p"},"while True"),"). Dentro do loop, verificamos se houve mudan\xe7a na capacit\xe2ncia do \u201csensor\u201d. Caso aconte\xe7a a mudan\xe7a, o estado do led tamb\xe9m mudar\xe1:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"while True:\n    if touch.value:\n        estado = not estado\n    \n    led.value = estado\n    sleep(1)\n")),(0,r.kt)("h2",{id:"como-ajustar-a-sensibilidade-do-touch"},(0,r.kt)("strong",{parentName:"h2"},"Como ajustar a sensibilidade do touch?")),(0,r.kt)("p",null,"Nesse exemplo, estamos acionando o led apenas por aproximar o dedo. Por\xe9m, pode ser que voc\xea deseje ajustar o seu \u201csensor\u201d para acionar por toque. Para isso, vamos utilizar o comando ",(0,r.kt)("strong",{parentName:"p"},"threshold"),"."),(0,r.kt)("p",null,"Primeiro, vamos verificar a medi\xe7\xe3o do toque bruto. Para isso, utilizaremos a fun\xe7\xe3o ",(0,r.kt)("strong",{parentName:"p"},"raw_value"),". Depois, ajustaremos a sensibilidade, para que ele seja acionado apenas por toque:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"pin = board.IO1\ntouch = touchio.TouchIn(pin)\nprint(touch.raw_value)\ntouch.threshold = 17300\n")),(0,r.kt)("p",null,"Ap\xf3s adicionarmos a fun\xe7\xe3o ",(0,r.kt)("strong",{parentName:"p"},"threshold"),", o led s\xf3 \xe9 acionado se tocarmos o \u201csensor\u201d. Isso acontece, pois, o configuramos com uma sensibilidade menor, ou seja, um valor m\xednimo de capacit\xe2ncia maior, para que a mudan\xe7a seja percebida pela placa."),(0,r.kt)("h2",{id:"conclus\xe3o"},(0,r.kt)("strong",{parentName:"h2"},"Conclus\xe3o")),(0,r.kt)("p",null,"Aprendemos, atrav\xe9s de um exemplo pr\xe1tico, a como usar um pino toque capacitivo, que, em muitas situa\xe7\xf5es pode ser usado para substituir bot\xf5es e interruptores, por exemplo, apresentando-se como uma solu\xe7\xe3o mais simples, pois seu funcionamento n\xe3o \xe9 mec\xe2nico. Al\xe9m disso, pudemos ver como ajustar a sensibilidade desse sensor as nossas necessidades."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Autor"),(0,r.kt)("th",{parentName:"tr",align:null},"Mateus Adriano Ventura Vieira"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data:"),(0,r.kt)("td",{parentName:"tr",align:null},"06/05/2022")))))}m.isMDXComponent=!0},8941:(e,o,a)=>{a.d(o,{Z:()=>t});const t=a.p+"assets/images/circuito-toque-capacitivo-baa986e339db82a3e64763d11f03a158.webp"}}]);