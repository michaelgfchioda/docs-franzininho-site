"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[6553],{3905:(a,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>g});var o=n(7294);function i(a,e,n){return e in a?Object.defineProperty(a,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):a[e]=n,a}function t(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(a);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,o)}return n}function r(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?t(Object(n),!0).forEach((function(e){i(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):t(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function l(a,e){if(null==a)return{};var n,o,i=function(a,e){if(null==a)return{};var n,o,i={},t=Object.keys(a);for(o=0;o<t.length;o++)n=t[o],e.indexOf(n)>=0||(i[n]=a[n]);return i}(a,e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);for(o=0;o<t.length;o++)n=t[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(a,n)&&(i[n]=a[n])}return i}var s=o.createContext({}),p=function(a){var e=o.useContext(s),n=e;return a&&(n="function"==typeof a?a(e):r(r({},e),a)),n},m=function(a){var e=p(a.components);return o.createElement(s.Provider,{value:e},a.children)},c="mdxType",d={inlineCode:"code",wrapper:function(a){var e=a.children;return o.createElement(o.Fragment,{},e)}},u=o.forwardRef((function(a,e){var n=a.components,i=a.mdxType,t=a.originalType,s=a.parentName,m=l(a,["components","mdxType","originalType","parentName"]),c=p(n),u=i,g=c["".concat(s,".").concat(u)]||c[u]||d[u]||t;return n?o.createElement(g,r(r({ref:e},m),{},{components:n})):o.createElement(g,r({ref:e},m))}));function g(a,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof a||i){var t=n.length,r=new Array(t);r[0]=u;var l={};for(var s in e)hasOwnProperty.call(e,s)&&(l[s]=e[s]);l.originalType=a,l[c]="string"==typeof a?a:i,r[1]=l;for(var p=2;p<t;p++)r[p]=n[p];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7946:(a,e,n)=>{n.r(e),n.d(e,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>t,metadata:()=>l,toc:()=>p});var o=n(3117),i=(n(7294),n(3905));const t={id:"circuitpython-entradas-analogicas",title:"Entrada Anal\xf3gica",slug:"/franzininho-wifi/exemplos-circuitpython/entradas-analogicas",description:"Este exemplo exibe como trabalhar com as entradas anal\xf3gicas na Franzininho WiFi",author:"Diana Santos e F\xe1bio Souza"},r=void 0,l={unversionedId:"FranzininhoWifi/exemplos-circuitpython/circuitpython-entradas-analogicas",id:"FranzininhoWifi/exemplos-circuitpython/circuitpython-entradas-analogicas",title:"Entrada Anal\xf3gica",description:"Este exemplo exibe como trabalhar com as entradas anal\xf3gicas na Franzininho WiFi",source:"@site/docs/FranzininhoWifi/exemplos-circuitpython/entrada-analogica.md",sourceDirName:"FranzininhoWifi/exemplos-circuitpython",slug:"/franzininho-wifi/exemplos-circuitpython/entradas-analogicas",permalink:"/en/docs/franzininho-wifi/exemplos-circuitpython/entradas-analogicas",draft:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-circuitpython/entrada-analogica.md",tags:[],version:"current",frontMatter:{id:"circuitpython-entradas-analogicas",title:"Entrada Anal\xf3gica",slug:"/franzininho-wifi/exemplos-circuitpython/entradas-analogicas",description:"Este exemplo exibe como trabalhar com as entradas anal\xf3gicas na Franzininho WiFi",author:"Diana Santos e F\xe1bio Souza"},sidebar:"docs",previous:{title:"Entradas e Sa\xeddas Digitais",permalink:"/en/docs/franzininho-wifi/exemplos-circuitpython/entradas-saidas-digitais"},next:{title:"PWM - Pulse Width Modulation",permalink:"/en/docs/franzininho-wifi/exemplos-circuitpython/pwm"}},s={},p=[{value:"Materiais necess\xe1rios",id:"materiais-necess\xe1rios",level:2},{value:"Circuito",id:"circuito",level:2},{value:"C\xf3digo",id:"c\xf3digo",level:2},{value:"An\xe1lise do c\xf3digo (Exemplos 1 e 2)",id:"an\xe1lise-do-c\xf3digo-exemplos-1-e-2",level:3},{value:"An\xe1lise do c\xf3digo (Exemplo 3)",id:"an\xe1lise-do-c\xf3digo-exemplo-3",level:3},{value:"Conclus\xe3o",id:"conclus\xe3o",level:2}],m={toc:p},c="wrapper";function d(a){let{components:e,...t}=a;return(0,i.kt)(c,(0,o.Z)({},m,t,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Neste exemplo aprenderemos como usar as entradas anal\xf3gicas. Veremos qual m\xf3dulo precisamos usar e como fazer a leitura do valor anal\xf3gico usando um potenci\xf4metro. Ao final faremos um exemplo para ligar e desligar um LED a partir do valor lido na entrada anal\xf3gica. Assim, ao final dessa etapa voc\xea estar\xe1 apto para ler sensores anal\xf3gicos."),(0,i.kt)("h2",{id:"materiais-necess\xe1rios"},"Materiais necess\xe1rios"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"1 Placa Franzininho WiFi com CircuitPython;"),(0,i.kt)("li",{parentName:"ul"},"1 Protoboard;"),(0,i.kt)("li",{parentName:"ul"},"1 potenci\xf4metro de 10K;"),(0,i.kt)("li",{parentName:"ul"},"1 LED vermelho de 3 mm;"),(0,i.kt)("li",{parentName:"ul"},"1 Resistor 330 \u03a9;"),(0,i.kt)("li",{parentName:"ul"},"Jumpers.")),(0,i.kt)("h2",{id:"circuito"},"Circuito"),(0,i.kt)("p",null,"Para os primeiros exemplos, fa\xe7a a seguinte montagem:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Circuito",src:n(3672).Z,width:"984",height:"1164"})),(0,i.kt)("h2",{id:"c\xf3digo"},"C\xf3digo"),(0,i.kt)("p",null,"Digite o c\xf3digo abaixo no arquivo code.py que est\xe1 no diret\xf3rio CIRCUITPY:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"#Leitura de Entrada anal\xf3gica -  Exemplo 2\nimport time            #importa m\xf3dulo de temporiza\xe7\xe3o\nimport board            #importa m\xf3dulo da placa\nfrom analogio import AnalogIn    #immport m\xf3dulo de entrada anal\xf3gica\n\nanalog_in = AnalogIn(board.IO1) #mapeia pino anal\xf3gico\n\nwhile True:             #loop infinito\n    print((analog_in.value,))    #imprime o valor da leitura anal\xf3gica\n    time.sleep(0.2)         #aguarda 200 ms\n")),(0,i.kt)("p",null,"Salve o arquivo e teste o funcionamento girando o potenci\xf4metro e no Mu Editor visualize os dados no terminal serial e no gr\xe1fico:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Teste 1",src:n(591).Z,width:"1861",height:"998"})),(0,i.kt)("p",null,"Note que os valores de convers\xe3o AD s\xe3o exibidos no terminal e no gr\xe1fico."),(0,i.kt)("p",null,"Agora faremos um exemplo para converter esses valores em tens\xe3o."),(0,i.kt)("p",null,"Digite o seguinte c\xf3digo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"#Leitura de Entrada anal\xf3gica - Exemplo 2\nimport time            #importa m\xf3dulo de temporiza\xe7\xe3o\nimport board            #importa m\xf3dulo da placa\nfrom analogio import AnalogIn    #import m\xf3dulo de entrada anal\xf3gica\n\nanalog_in = AnalogIn(board.IO1) #mapeia pino anal\xf3gico\n\ndef ler_tensao(pin):\n    return (pin.value * 3.3) / 65536\n\nwhile True:             #loop infinito\n    print((ler_tensao(analog_in),))    #imprime o valor da leitura anal\xf3gica\n    time.sleep(0.2)         #aguarda 200 ms\n")),(0,i.kt)("p",null,"Salve o arquivo e teste o funcionamento girando o potenci\xf4metro e no Mu Editor visualize os dados no terminal serial e no gr\xe1fico:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Teste 2",src:n(5402).Z,width:"1861",height:"998"})),(0,i.kt)("p",null,"Note que exibimos agora  o valor de tens\xe3o."),(0,i.kt)("h3",{id:"an\xe1lise-do-c\xf3digo-exemplos-1-e-2"},"An\xe1lise do c\xf3digo (Exemplos 1 e 2)"),(0,i.kt)("p",null,"Para acessar os pinos da placa precisamos importar o m\xf3dulo board:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import board\n")),(0,i.kt)("p",null,"Como precisaremos de intervalos de temporiza\xe7\xe3o importamos o m\xf3dulo time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"import time\n")),(0,i.kt)("p",null,"Trabalharemos como entradas anal\xf3gicas nesse exemplo, assim, precisamos importar o seguinte m\xf3dulo em analogio:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"from analogio import AnalogIn #import m\xf3dulo de entrada anal\xf3gica\n")),(0,i.kt)("p",null,"A Franzininho Wifi possui diversas entradas anal\xf3gicas. Para esse exemplo usamos a entrada anal\xf3gica no pino IO1"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"analog_in = AnalogIn(board.IO1) #mapeia pino anal\xf3gico\n")),(0,i.kt)("p",null,"No loop infinito fazemos a leitura da convers\xe3o AD lendo o valor presente no pino em intervalos de 200 ms. No primeiro exemplos fizemos apenas a impress\xe3o do valor convertido:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"while  True: #loop infinito  \n    print((analog_in.value,))  #imprime o valor da leitura anal\xf3gica  \n    time.sleep(0.2) #aguarda 200 ms\n")),(0,i.kt)("p",null,"J\xe1 no segundo exemplo fizemos uma fun\xe7\xe3o que converte o valor lido no pino em tens\xe3o:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"def  ler_tensao(pin):  \n    return (pin.value * 3.3) / 65536  \n  \nwhile  True: #loop infinito  \n    print((ler_tensao(analog_in),))  #imprime o valor da leitura anal\xf3gica  \n    time.sleep(0.2) #aguarda 200 ms\n")),(0,i.kt)("p",null,"Agora faremos uma aplica\xe7\xe3o para ligar e desligar um LED dependo do valor lido no potenci\xf4metro."),(0,i.kt)("p",null,"Digite o seguinte c\xf3digo:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"#Leitura de Entrada anal\xf3gica - Exemplo 3\nimport time            #importa m\xf3dulo de temporiza\xe7\xe3o\nimport board            #importa m\xf3dulo da placa\nfrom analogio import AnalogIn    #immport m\xf3dulo de entrada anal\xf3gica\nfrom digitalio import DigitalInOut, Direction\n\nanalog_in = AnalogIn(board.IO1) #mapeia pino anal\xf3gico\n\nled = DigitalInOut(board.IO4)\nled.direction = Direction.OUTPUT\n\ndef ler_tensao(pin):\n    return (pin.value * 3.3) / 65536\n\nwhile True:             #loop infinito\n    print((ler_tensao(analog_in),))    #imprime o valor da leitura anal\xf3gica\n    \n    if(ler_tensao(analog_in)>2.5):      #se valor lido for maior que 2.5V\n        led.value = 1               #liga LED\n    else:                   #se n\xe3o\n        led.value =0               #desliga o LED\n    \n    time.sleep(0.2)         #aguarda 200 ms\n")),(0,i.kt)("p",null,"Salve o arquivo e teste o funcionamento girando o potenci\xf4metro. Verifique se o LED acender\xe1 quando ultrapassar o valor de 2,5V (exibido no terminal). Quando abaixo de 2,5V o LED deve apagar."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Teste 3",src:n(3924).Z,width:"1861",height:"998"})),(0,i.kt)("h3",{id:"an\xe1lise-do-c\xf3digo-exemplo-3"},"An\xe1lise do c\xf3digo (Exemplo 3)"),(0,i.kt)("p",null,"Nesse exemplo adicionamos uma sa\xedda digital para controlar um LED."),(0,i.kt)("admonition",{title:"Dica",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Se voc\xea ainda n\xe3o sabe trabalhar com entradas anal\xf3gicas. Consulte o exemplo ",(0,i.kt)("a",{parentName:"p",href:"https://franzininho.github.io/docs-franzininho-site/docs/franzininho-wifi/exemplos-circuitpython/entradas-saidas-digitais"},"Entradas e Sa\xeddas Digitais"),".")),(0,i.kt)("p",null,"No loop principal fizemos um teste para verificar o valor de tens\xe3o da entrada anal\xf3gico, caso acima de 2,5V liga o LED e abaixo de 2,5 V desliga o LED."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},"while  True: #loop infinito  \n    print((ler_tensao(analog_in),))  #imprime o valor da leitura anal\xf3gica  \n  \n    if(ler_tensao(analog_in)>2.5): #se valor lido for maior que 2.5V  \n        led.value = 1  #liga LED  \n    else:  #se n\xe3o  \n        led.value =0  #desliga o LED  \n    \n    time.sleep(0.2) #aguarda 200 ms\n")),(0,i.kt)("h2",{id:"conclus\xe3o"},"Conclus\xe3o"),(0,i.kt)("p",null,"Neste exemplo, aprendemos como fazer a leitura de uma entrada anal\xf3gica. Para voc\xea ler outras entradas pode seguir o mesmo padr\xe3o. Por\xe9m, \xe9 importante verificar se o pino possui essa funcionalidade."),(0,i.kt)("p",null,"Com esse recurso poderemos ler diversos sensores anal\xf3gicos como de temperatura, aceler\xf4metro, som, etc."),(0,i.kt)("admonition",{title:"Desafio",type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Fa\xe7a a leitura de outro potenci\xf4metro usando outra entrada anal\xf3gica. Exiba no gr\xe1fico o valor dos 2 potenci\xf4metros em simult\xe2neo.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Autor"),(0,i.kt)("th",{parentName:"tr",align:null},"Diana Santos"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Autor"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/FBSeletronica"},"F\xe1bio Souza"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data:"),(0,i.kt)("td",{parentName:"tr",align:null},"16/09/2021")))))}d.isMDXComponent=!0},3672:(a,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/circuito-337482518ca8b8ea5e0631611abb8e67.png"},591:(a,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/grafico_entrada_analogica-1-76717640082c66f149c344256345a47c.gif"},5402:(a,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/grafico_entrada_analogica-2-6e0e667074f33acf85d9a4775bad2013.gif"},3924:(a,e,n)=>{n.d(e,{Z:()=>o});const o=n.p+"assets/images/grafico_entrada_analogica-3-a3dd8b9ac8f4c314d4ba9db8516dba43.gif"}}]);