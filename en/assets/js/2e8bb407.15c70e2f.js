"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[2687],{3905:(e,a,o)=>{o.d(a,{Zo:()=>m,kt:()=>f});var n=o(7294);function s(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function t(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?t(Object(o),!0).forEach((function(a){s(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):t(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,n,s=function(e,a){if(null==e)return{};var o,n,s={},t=Object.keys(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||(s[o]=e[o]);return s}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(n=0;n<t.length;n++)o=t[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(s[o]=e[o])}return s}var l=n.createContext({}),p=function(e){var a=n.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):r(r({},a),e)),o},m=function(e){var a=p(e.components);return n.createElement(l.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var o=e.components,s=e.mdxType,t=e.originalType,l=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=p(o),c=s,f=d["".concat(l,".").concat(c)]||d[c]||u[c]||t;return o?n.createElement(f,r(r({ref:a},m),{},{components:o})):n.createElement(f,r({ref:a},m))}));function f(e,a){var o=arguments,s=a&&a.mdxType;if("string"==typeof e||s){var t=o.length,r=new Array(t);r[0]=c;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[d]="string"==typeof e?e:s,r[1]=i;for(var p=2;p<t;p++)r[p]=o[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},6722:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>l,contentTitle:()=>r,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>p});var n=o(3117),s=(o(7294),o(3905));const t={id:"franzininho-wifi-espidf-00",title:"Primeiros Passos com ESP-IDF",slug:"/franzininho-wifi/exemplos-espidf/primeiros-passos",description:"Este documento tem como objetivo ajud\xe1-lo a configurar o ESP-IDF",author:"F\xe1bio Souza"},r=void 0,i={unversionedId:"FranzininhoWifi/exemplos-espidf/franzininho-wifi-espidf-00",id:"FranzininhoWifi/exemplos-espidf/franzininho-wifi-espidf-00",title:"Primeiros Passos com ESP-IDF",description:"Este documento tem como objetivo ajud\xe1-lo a configurar o ESP-IDF",source:"@site/docs/FranzininhoWifi/exemplos-espidf/0x00-Primeiros-passos.md",sourceDirName:"FranzininhoWifi/exemplos-espidf",slug:"/franzininho-wifi/exemplos-espidf/primeiros-passos",permalink:"/en/docs/franzininho-wifi/exemplos-espidf/primeiros-passos",draft:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-espidf/0x00-Primeiros-passos.md",tags:[],version:"current",frontMatter:{id:"franzininho-wifi-espidf-00",title:"Primeiros Passos com ESP-IDF",slug:"/franzininho-wifi/exemplos-espidf/primeiros-passos",description:"Este documento tem como objetivo ajud\xe1-lo a configurar o ESP-IDF",author:"F\xe1bio Souza"},sidebar:"docs",previous:{title:"Como simular a Franzininho WiFi no Wokwi",permalink:"/en/docs/franzininho-wifi/wokwi/primeiros-passos"},next:{title:"Hello World! ESP-IDF",permalink:"/en/docs/franzininho-wifi/exemplos-espidf/hello-world-esp-idf"}},l={},p=[{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o",level:2},{value:"Passo 1 - Instala\xe7\xe3o dos pr\xe9-requisitos",id:"passo-1---instala\xe7\xe3o-dos-pr\xe9-requisitos",level:2},{value:"Passo 2 - Instala\xe7\xe3o do ESP-IDF",id:"passo-2---instala\xe7\xe3o-do-esp-idf",level:2},{value:"Linux e macOS",id:"linux-e-macos",level:3},{value:"Windows",id:"windows",level:3},{value:"Instalando O ESP-IDF e ferramentas",id:"instalando-o-esp-idf-e-ferramentas",level:3},{value:"Windows",id:"windows-1",level:4},{value:"Linux e macOS",id:"linux-e-macos-1",level:4},{value:"Configurando as vari\xe1veis de ambientes",id:"configurando-as-vari\xe1veis-de-ambientes",level:3},{value:"Windows",id:"windows-2",level:4},{value:"Linux e macOS",id:"linux-e-macos-2",level:4},{value:"Passo 3 - Criando um novo projeto",id:"passo-3---criando-um-novo-projeto",level:2},{value:"Copiando um projeto exemplo",id:"copiando-um-projeto-exemplo",level:3},{value:"Windows",id:"windows-3",level:4},{value:"Linux e macOS",id:"linux-e-macos-3",level:4},{value:"Configura\xe7\xe3o",id:"configura\xe7\xe3o",level:3},{value:"Windows",id:"windows-4",level:4},{value:"Linux e macOS",id:"linux-e-macos-4",level:4},{value:"Compilando o projeto em modo DFU",id:"compilando-o-projeto-em-modo-dfu",level:3},{value:"Compila\xe7\xe3o, grava\xe7\xe3o e monitor em modo normal",id:"compila\xe7\xe3o-grava\xe7\xe3o-e-monitor-em-modo-normal",level:3}],m={toc:p},d="wrapper";function u(e){let{components:a,...t}=e;return(0,s.kt)(d,(0,n.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Este documento tem como objetivo ajud\xe1-lo a configurar o ESP-IDF (Espressif IoT Development Framework) para trabalhar com a Franzininho WiFi que usa o ESP32-S2 da Espressif."),(0,s.kt)("p",null,"Ao final, faremos um exemplo simples para compilar, gravar e monitorar usando o ESP-IDF, assim, garantiremos que tudo estar\xe1 funcionando."),(0,s.kt)("h2",{id:"introdu\xe7\xe3o"},"Introdu\xe7\xe3o"),(0,s.kt)("p",null,"Para essa configura\xe7\xe3o, vamos instalar o ESP-IDF e us\xe1-lo atrav\xe9s de linha de comando. Caso voc\xea queira usar o IDF integrado a ambientes de desenvolvimento integrado (IDE) como VScode e Eclipse, confira os seguintes links:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/espressif/idf-eclipse-plugin"},"Eclipse Plugin")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://github.com/espressif/vscode-esp-idf-extension"},"VS Code Extension"))),(0,s.kt)("p",null,"Voc\xea poder\xe1 instalar o ESP-IDF no seu sistema operacional preferido (Linux, Windows, macOS)."),(0,s.kt)("p",null,"Para a experi\xeancia completa, voc\xea precisar\xe1 de uma placa Franzininho WiFi, Computador: com Windows, Linux ou macOS"),(0,s.kt)("h2",{id:"passo-1---instala\xe7\xe3o-dos-pr\xe9-requisitos"},"Passo 1 - Instala\xe7\xe3o dos pr\xe9-requisitos"),(0,s.kt)("p",null,"Algumas ferramentas precisam ser instaladas no computador antes de prosseguir para as pr\xf3ximas etapas. Siga os links abaixo para obter as instru\xe7\xf5es para o seu sistema operacional:"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32s2/get-started/windows-setup.html"},"Windows")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32s2/get-started/linux-setup.html"},"Linux")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32s2/get-started/macos-setup.html"},"Mac OS"))),(0,s.kt)("p",null,"\xc9 muito importante a instala\xe7\xe3o de todos os pr\xe9-requisitos."),(0,s.kt)("h2",{id:"passo-2---instala\xe7\xe3o-do-esp-idf"},"Passo 2 - Instala\xe7\xe3o do ESP-IDF"),(0,s.kt)("p",null,"Nessa etapa vamos instalar o ESP-IDF e conjunto de ferramentas e bibliotecas. Vamos usar o c\xf3digo mantido pela Espressif no reposit\xf3rio do ",(0,s.kt)("a",{parentName:"p",href:"https://github.com/espressif/esp-idf"},"ESP-IDF")),(0,s.kt)("p",null,"O ESP-IDF \xe9 o framework oficial da Espressif para o desenvolvimento de aplica\xe7\xf5es parar toda a fam\xedlia ESP32. O procedimento apresentado aqui servir\xe1 para trabalhar com toda a fam\xedlia ESP32. Por\xe9m, vamos dar foco ao ESP32-S2 que \xe9 usado na Franzininho WiFi."),(0,s.kt)("h3",{id:"linux-e-macos"},"Linux e macOS"),(0,s.kt)("p",null,"Abra o terminal e execute:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir -p ~/esp\ncd ~/esp\ngit clone --recursive https://github.com/espressif/esp-idf.git\n")),(0,s.kt)("p",null,"O ESP-IDF ser\xe1 baixado no seguinte reposit\xf3rio ",(0,s.kt)("inlineCode",{parentName:"p"},"~/esp/esp-idf"),"."),(0,s.kt)("h3",{id:"windows"},"Windows"),(0,s.kt)("p",null,"Al\xe9m de instalar as ferramentas, o ",(0,s.kt)("a",{parentName:"p",href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32s2/get-started/windows-setup.html#get-started-windows-tools-installer"},"ESP-IDF Tools Installer para Windows")," apresentado no passo 1 ele tamb\xe9m baixa uma c\xf3pia do ESP-IDF. Dessa forma voc\xea n\xe3o precisar\xe1 baixar o ESP-IDF agora, se j\xe1 tiver baixado anteriormente junto aos pr\xe9-requisitos."),(0,s.kt)("p",null,"Se desejar fazer o download do ESP-IDF sem a ajuda do ESP-IDF Tools Installer, consulte ",(0,s.kt)("a",{parentName:"p",href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32s2/get-started/windows-setup-scratch.html#get-esp-idf-windows-command-line"},"estas instru\xe7\xf5es"),"."),(0,s.kt)("h3",{id:"instalando-o-esp-idf-e-ferramentas"},"Instalando O ESP-IDF e ferramentas"),(0,s.kt)("p",null,"Al\xe9m do ESP-IDF, voc\xea tamb\xe9m precisa instalar as ferramentas usadas pelo ESP-IDF, como compilador, depurador, pacotes Python, etc."),(0,s.kt)("h4",{id:"windows-1"},"Windows"),(0,s.kt)("p",null,"O ESP-IDF Tools Installer para Windows apresentado no passo 1 instala todas as ferramentas necess\xe1rias."),(0,s.kt)("p",null,"Se voc\xea deseja instalar as ferramentas sem a ajuda do ESP-IDF Tools Installer, abra o Prompt de Comando e siga estas etapas:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd %userprofile%\\esp\\esp-idf\ninstall.bat\n")),(0,s.kt)("p",null,"Ou no Windows PowerShell"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/esp/esp-idf\n./install.ps1\n")),(0,s.kt)("h4",{id:"linux-e-macos-1"},"Linux e macOS"),(0,s.kt)("p",null,"No Linux ou macOS h\xe1 um script para instala\xe7\xe3o.Abra o terminal e execute:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/esp/esp-idf\n./install.sh\n")),(0,s.kt)("p",null,"Ou se tiver usando o Fish:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/esp/esp-idf\n./install.fish\n")),(0,s.kt)("h3",{id:"configurando-as-vari\xe1veis-de-ambientes"},"Configurando as vari\xe1veis de ambientes"),(0,s.kt)("p",null,"As ferramentas instaladas ainda n\xe3o foram adicionadas \xe0 vari\xe1vel de ambiente PATH. Para tornar as ferramentas utiliz\xe1veis na linha de comando, algumas vari\xe1veis de ambiente devem ser definidas. ESP-IDF fornece alguns scripts que ajudam nesse processo."),(0,s.kt)("h4",{id:"windows-2"},"Windows"),(0,s.kt)("p",null,"O ESP-IDF Tools Installer para Windows cria um atalho \u201cESP-IDF Command Prompt\u201d no menu Iniciar. Este atalho abre o Prompt de Comando e configura todas as vari\xe1veis de ambiente necess\xe1rias. Voc\xea pode abrir este atalho e prosseguir para a pr\xf3xima etapa."),(0,s.kt)("p",null,"Caso n\xe3o funcione e voc\xea precise configurar manualmente, execute os seguintes comandos:"),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Prompt de Comando"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"%userprofile%\\esp\\esp-idf\\export.bat\n")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Windows PowerShell"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},".$HOME/esp/esp-idf/export.ps1\n")),(0,s.kt)("h4",{id:"linux-e-macos-2"},"Linux e macOS"),(0,s.kt)("p",null,"No terminal execute:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},". $HOME/esp/esp-idf/export.sh\n")),(0,s.kt)("p",null,"Ou no Fish(suportado apenas em vers\xf5es a partir da 3.0.0):"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},". $HOME/esp/esp-idf/export.fish\n")),(0,s.kt)("admonition",{title:"Importante",type:"important"},(0,s.kt)("p",{parentName:"admonition"},"Voc\xea precisa fazer isso toda vez que iniciar o terminal para usar o ESP-IDF.")),(0,s.kt)("h2",{id:"passo-3---criando-um-novo-projeto"},"Passo 3 - Criando um novo projeto"),(0,s.kt)("p",null,"Agora que j\xe1 temos as ferramentas instaladas, vamos fazer um exemplo para validar o funcionamento das mesmas. Vamos executar o exemplo blink que j\xe1 vem no IDF."),(0,s.kt)("h3",{id:"copiando-um-projeto-exemplo"},"Copiando um projeto exemplo"),(0,s.kt)("p",null,"Vamos copiar o projeto blink para preservarmos o exemplo presente na pasta do IDF:"),(0,s.kt)("h4",{id:"windows-3"},"Windows"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd %userprofile%\\esp\nxcopy /e /i %IDF_PATH%\\examples\\get-started\\blink blink\n")),(0,s.kt)("h4",{id:"linux-e-macos-3"},"Linux e macOS"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/esp\ncp -r $IDF_PATH/examples/get-started/blink .\n")),(0,s.kt)("p",null,"Fique a vontade para testar os outros exemplos tamb\xe9m."),(0,s.kt)("p",null,"O sistema de compila\xe7\xe3o ESP-IDF n\xe3o oferece suporte a espa\xe7os nos caminhos para o ESP-IDF ou para projetos."),(0,s.kt)("h3",{id:"configura\xe7\xe3o"},"Configura\xe7\xe3o"),(0,s.kt)("p",null,"Agora vamos configurar o target para qual ser\xe1 compilado e j\xe1 fazer uma configura\xe7\xe3o no menuconfig. No nosso caso vamos trabalhar com o ESP32-S2:"),(0,s.kt)("h4",{id:"windows-4"},"Windows"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd %userprofile%\\esp\\blink\nidf.py set-target esp32s2\nidf.py menuconfig\n")),(0,s.kt)("h4",{id:"linux-e-macos-4"},"Linux e macOS"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"cd ~/esp/blink\nidf.py set-target esp32s2\nidf.py menuconfig\n")),(0,s.kt)("p",null,"Ser\xe1 aberto o menuconfig:\n",(0,s.kt)("img",{alt:"menuconfig",src:o(2315).Z,width:"866",height:"562"})),(0,s.kt)("p",null,"Acesse a op\xe7\xe3o Component config ---\x3e\n",(0,s.kt)("img",{alt:"menuconfig",src:o(9165).Z,width:"866",height:"562"})),(0,s.kt)("p",null,"Em seguida ESP System Settings  ---\x3e\n",(0,s.kt)("img",{alt:"menuconfig",src:o(9630).Z,width:"866",height:"562"})),(0,s.kt)("p",null,"Agora selecione Channel for console output (Default: UART0)  ---\x3e\n",(0,s.kt)("img",{alt:"menuconfig",src:o(7666).Z,width:"866",height:"562"})),(0,s.kt)("p",null,"E por fim, selecione (X) USB CDC:\n",(0,s.kt)("img",{alt:"menuconfig",src:o(7642).Z,width:"866",height:"562"})),(0,s.kt)("p",null,"Salve(S), Enter, enter, Saia do menu(ESC)"),(0,s.kt)("p",null,"Essa configura\xe7\xe3o permitir\xe1 que usemos a USB no pr\xf3ximo upload."),(0,s.kt)("admonition",{title:"Importante",type:"important"},(0,s.kt)("p",{parentName:"admonition"},"Sempre que iniciar um projeto novo fa\xe7a essas configura\xe7\xe3o para que continue usando a USB como interface de programa\xe7\xe3o.")),(0,s.kt)("p",null,"Para mais detalhes acesse:"),(0,s.kt)("iframe",{width:"100%",height:"422",src:"https://www.youtube.com/embed/zg9IMDaoImA",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,s.kt)("h3",{id:"compilando-o-projeto-em-modo-dfu"},"Compilando o projeto em modo DFU"),(0,s.kt)("p",null,"A primeira compila\xe7\xe3o n\xf3s vamos fazer usando o modo DFU, que j\xe1 vem por padr\xe3o no ESP32-S2 permitindo o upload atrav\xe9s da USB:"),(0,s.kt)("p",null,"Para crie a imagem DFU:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"idf.py dfu\n")),(0,s.kt)("p",null,"A primeira compila\xe7\xe3o pode demorar um pouco. Da at\xe9 pra ir pegar um caf\xe9 ;)"),(0,s.kt)("p",null,"Ap\xf3s a compila\xe7\xe3o, conecte a Franzininho WiFi no computador. Antes de fazermos o upload \xe9 necess\xe1rio entrar no modo DFU. Para entrar no modo DFU pressione as teclas na seguinte sequencia:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"pressione e segure a tecla BOOT"),(0,s.kt)("li",{parentName:"ol"},"pressione rapidamente e solte a tecla RESET"),(0,s.kt)("li",{parentName:"ol"},"solte a tecla BOOT")),(0,s.kt)("p",null,"Dessa forma a placa entrar\xe1 no modo DFU e poder\xe1 receber o firmware atrav\xe9s da USB."),(0,s.kt)("p",null,"Para fazer a grava\xe7\xe3o, digite:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"idf.py dfu-flash\n")),(0,s.kt)("admonition",{title:"Dica",type:"tip"},(0,s.kt)("p",{parentName:"admonition"},"Caso a grava\xe7\xe3o atrav\xe9s da USB n\xe3o funcione, veja esse ",(0,s.kt)("a",{parentName:"p",href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32s2/api-guides/dfu.html#udev-rule-linux-only"},"link com as instru\xe7\xf5es de configura\xe7\xf5es da USB"))),(0,s.kt)("p",null,"Ap\xf3s alguns segundos a placa estar\xe1 gravada."),(0,s.kt)("p",null,"Pressione novamente o bot\xe3o RESET."),(0,s.kt)("h3",{id:"compila\xe7\xe3o-grava\xe7\xe3o-e-monitor-em-modo-normal"},"Compila\xe7\xe3o, grava\xe7\xe3o e monitor em modo normal"),(0,s.kt)("p",null,"Agora voc\xea poder\xe1 compilar, gravar e monitorar usando a porta USB. Esse processo \xe9 id\xeantico ao que fazemos para desenvolver com o ESP32:"),(0,s.kt)("p",null,"Compilar:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"idf.py build\n")),(0,s.kt)("p",null,"Gravar:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"idf.py -p PORT [-b BAUD] flash\n")),(0,s.kt)("p",null,"Monitorar:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"idf.py -p /dev/ttyUSB0 monitor\n")),(0,s.kt)("p",null,"Maravilha, voc\xea configurou o ambiente para trabalhar com o ESP-IDF."),(0,s.kt)("p",null,"Caso queira trabalhar com a extens\xe3o para VSCODE, confira o video:"),(0,s.kt)("iframe",{width:"100%",height:"422",src:"https://www.youtube.com/embed/rxMg_zxO0q0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}u.isMDXComponent=!0},2315:(e,a,o)=>{o.d(a,{Z:()=>n});const n=o.p+"assets/images/1-cf224b69c503620285cee56dc7457999.png"},9165:(e,a,o)=>{o.d(a,{Z:()=>n});const n=o.p+"assets/images/2-4806954a1b4006bb78b6e50a23eba7b5.png"},9630:(e,a,o)=>{o.d(a,{Z:()=>n});const n=o.p+"assets/images/3-c0afeaa310f4501913ccaf8190c00334.png"},7642:(e,a,o)=>{o.d(a,{Z:()=>n});const n=o.p+"assets/images/4-c250e820888c2d31288214e41376a1dd.png"},7666:(e,a,o)=>{o.d(a,{Z:()=>n});const n=o.p+"assets/images/5-0821b04d00bb4ccc716759540cf7954a.png"}}]);