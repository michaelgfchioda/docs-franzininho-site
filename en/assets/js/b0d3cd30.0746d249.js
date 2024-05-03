"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[5632],{73412:(i,o,e)=>{e.r(o),e.d(o,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>t,toc:()=>c});var n=e(17624),r=e(4552);const a={id:"circuitpython-hello-world",title:"Hello World!",slug:"/franzininho-wifi/exemplos-circuitpython/hello-world",description:"Neste texto vamos fazer nosso Blink - Pisca LED com a Franzininho WiFi",author:"Diana Santos"},s=void 0,t={id:"FranzininhoWifi/exemplos-circuitpython/circuitpython-hello-world",title:"Hello World!",description:"Neste texto vamos fazer nosso Blink - Pisca LED com a Franzininho WiFi",source:"@site/docs/FranzininhoWifi/exemplos-circuitpython/hello-world.md",sourceDirName:"FranzininhoWifi/exemplos-circuitpython",slug:"/franzininho-wifi/exemplos-circuitpython/hello-world",permalink:"/en/docs/franzininho-wifi/exemplos-circuitpython/hello-world",draft:!1,unlisted:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-circuitpython/hello-world.md",tags:[],version:"current",frontMatter:{id:"circuitpython-hello-world",title:"Hello World!",slug:"/franzininho-wifi/exemplos-circuitpython/hello-world",description:"Neste texto vamos fazer nosso Blink - Pisca LED com a Franzininho WiFi",author:"Diana Santos"},sidebar:"docs",previous:{title:"Instalando as ferramentas",permalink:"/en/docs/franzininho-wifi/exemplos-circuitpython/ferramentas"},next:{title:"Serial Console",permalink:"/en/docs/franzininho-wifi/exemplos-circuitpython/serial-console"}},l={},c=[{value:"Materiais necess\xe1rios",id:"materiais-necess\xe1rios",level:2},{value:"Circuito",id:"circuito",level:2},{value:"C\xf3digo",id:"c\xf3digo",level:2},{value:"An\xe1lise do c\xf3digo",id:"an\xe1lise-do-c\xf3digo",level:2},{value:"Conclus\xe3o",id:"conclus\xe3o",level:2}];function d(i){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.M)(),...i.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"Nesse primeiro  exemplo faremos um blink LED, nosso \u201cHello, World!\u201d com a placa Franzininho WiFi programada em CircuitPython. Assim, aquecemos os motores para explorar diversas aplica\xe7\xf5es com CircuitPython na Franzininho WiFi."}),"\n",(0,n.jsx)(o.h2,{id:"materiais-necess\xe1rios",children:"Materiais necess\xe1rios"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"1 Placa Franzininho Wifi com CircuitPython;"}),"\n",(0,n.jsx)(o.li,{children:"1 Protoboard;"}),"\n",(0,n.jsx)(o.li,{children:"1 LED vermelho 3 mm;"}),"\n",(0,n.jsx)(o.li,{children:"1 resistor 330 \u03a9;"}),"\n",(0,n.jsx)(o.li,{children:"Jumpers."}),"\n"]}),"\n",(0,n.jsx)(o.h2,{id:"circuito",children:"Circuito"}),"\n",(0,n.jsx)(o.p,{children:"Nosso primeiro circuito \xe9 bem simples. Realize a seguinte montagem:"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"franzininho-wifi-hello-world",src:e(8688).c+"",width:"1728",height:"702"})}),"\n",(0,n.jsx)(o.h2,{id:"c\xf3digo",children:"C\xf3digo"}),"\n",(0,n.jsx)(o.p,{children:"Digite o c\xf3digo abaixo no arquivo code.py que est\xe1 no diret\xf3rio CIRCUITPY e salve o arquivo:"}),"\n",(0,n.jsx)(o.p,{children:"Obs. Provavelmente voc\xea encontrar\xe1 outro c\xf3digo no arquivo code.py. Apague-o e insira o c\xf3digo novo."}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-python",children:'""" Hello, World! (Pisca LED)"""\nimport board\nimport time\nfrom digitalio import DigitalInOut, Direction\n\n# Configurando o pino do LED, o led que configurei foi o pino 4 = IO4\nled = DigitalInOut(board.IO4)\nled.direction = Direction.OUTPUT\n\n#loop infinito - executando sempre\nwhile True:    \n    led.value = True\n    time.sleep(0.5)\n    led.value = False\n    time.sleep(0.5)\n'})}),"\n",(0,n.jsx)(o.p,{children:"Finalizando a edi\xe7\xe3o do arquivo, salve-o.\nAp\xf3s salvar o arquivo o LED pisca em intervalos de 0,5 segundos. (Blink LED)"}),"\n",(0,n.jsx)(o.h2,{id:"an\xe1lise-do-c\xf3digo",children:"An\xe1lise do c\xf3digo"}),"\n",(0,n.jsx)(o.p,{children:"Para acessar os pinos da placa precisamos importar o m\xf3dulo board:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-python",children:"import board\n"})}),"\n",(0,n.jsx)(o.p,{children:"Como  precisaremos de intervalos de temporiza\xe7\xe3o importamos o m\xf3dulo sleep:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"import time\n"})}),"\n",(0,n.jsx)(o.p,{children:"O LED foi conectado ao pino 4(IO4) da Franzininho WiFi. Como o LED \xe9 um atuador, preciamos configurar o pino como uma sa\xedda digital. Para isso, precisamos importar os seguintes m\xf3dulos:\nfrom digitalio import DigitalInOut, Direction"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{children:"from digitalio import DigitalInOut, Direction\n"})}),"\n",(0,n.jsx)(o.p,{children:"Com os m\xf3dulos importados podemos acessar as fun\xe7\xf5es de configura\xe7\xe3o do pino digital:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-python",children:"led = DigitalInOut(board.IO4)\nled.direction = Direction.OUTPUT\n"})}),"\n",(0,n.jsx)(o.p,{children:"Note que primeiro mapeamos o pino e depois  configuramos a dire\xe7\xe3o."}),"\n",(0,n.jsx)(o.p,{children:"Para que o LED fique piscando infinitamente em intervalos de 500 ms, fazemos um loop infinito com o la\xe7o while. O valor do LED \xe9 invertido a cada 0,5 s loop:"}),"\n",(0,n.jsx)(o.pre,{children:(0,n.jsx)(o.code,{className:"language-python",children:"while True:    \n    led.value = True\n    time.sleep(0.5)\n    led.value = False\n    time.sleep(0.5)\n"})}),"\n",(0,n.jsx)(o.admonition,{title:"Sugest\xe3o",type:"tip",children:(0,n.jsx)(o.p,{children:"Altere o tempo de intervalo para 0.1 e 1 e observe o efeito."})}),"\n",(0,n.jsx)(o.h2,{id:"conclus\xe3o",children:"Conclus\xe3o"}),"\n",(0,n.jsx)(o.p,{children:"Neste primeiro exemplo de programa\xe7\xe3o da  Franzininho WiFi com o CircuitPython fizemos um c\xf3digo simples em Python para piscar o LED em intervalos de 0,5 segundos. Esse exemplo serviu para nos ensinar como importar as bibliotecas, configurar o pino como sa\xedda digital e criar um loop infinito para piscar o LED. Voc\xea pode alterar o intervalo de tempo alterando o par\xe2metro na fun\xe7\xe3o sleep."}),"\n",(0,n.jsx)(o.p,{children:"Com esse exemplo dominado, podemos passar para a pr\xf3xima etapa."}),"\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Autor"}),(0,n.jsx)(o.th,{children:"Diana Santos"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Autor"}),(0,n.jsx)(o.td,{children:(0,n.jsx)(o.a,{href:"https://github.com/FBSeletronica",children:"F\xe1bio Souza"})})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Data:"}),(0,n.jsx)(o.td,{children:"16/09/2021"})]})]})]})]})}function p(i={}){const{wrapper:o}={...(0,r.M)(),...i.components};return o?(0,n.jsx)(o,{...i,children:(0,n.jsx)(d,{...i})}):d(i)}},8688:(i,o,e)=>{e.d(o,{c:()=>n});const n=e.p+"assets/images/0x00-Hello_world-6a2d3444f01a16a485a1084d37794f5d.png"},4552:(i,o,e)=>{e.d(o,{I:()=>t,M:()=>s});var n=e(11504);const r={},a=n.createContext(r);function s(i){const o=n.useContext(a);return n.useMemo((function(){return"function"==typeof i?i(o):{...o,...i}}),[o,i])}function t(i){let o;return o=i.disableParentContext?"function"==typeof i.components?i.components(r):i.components||r:s(i.components),n.createElement(a.Provider,{value:o},i.children)}}}]);