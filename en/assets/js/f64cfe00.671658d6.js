"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[5045],{3905:(e,o,a)=>{a.d(o,{Zo:()=>p,kt:()=>f});var t=a(7294);function i(e,o,a){return o in e?Object.defineProperty(e,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[o]=a,e}function n(e,o){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var o=1;o<arguments.length;o++){var a=null!=arguments[o]?arguments[o]:{};o%2?n(Object(a),!0).forEach((function(o){i(e,o,a[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(a,o))}))}return e}function s(e,o){if(null==e)return{};var a,t,i=function(e,o){if(null==e)return{};var a,t,i={},n=Object.keys(e);for(t=0;t<n.length;t++)a=n[t],o.indexOf(a)>=0||(i[a]=e[a]);return i}(e,o);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(t=0;t<n.length;t++)a=n[t],o.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=t.createContext({}),d=function(e){var o=t.useContext(l),a=o;return e&&(a="function"==typeof e?e(o):r(r({},o),e)),a},p=function(e){var o=d(e.components);return t.createElement(l.Provider,{value:o},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},m=t.forwardRef((function(e,o){var a=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=i,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||n;return a?t.createElement(f,r(r({ref:o},p),{},{components:a})):t.createElement(f,r({ref:o},p))}));function f(e,o){var a=arguments,i=o&&o.mdxType;if("string"==typeof e||i){var n=a.length,r=new Array(n);r[0]=m;var s={};for(var l in o)hasOwnProperty.call(o,l)&&(s[l]=o[l]);s.originalType=e,s[u]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<n;d++)r[d]=a[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},593:(e,o,a)=>{a.r(o),a.d(o,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>d});var t=a(3117),i=(a(7294),a(3905));const n={id:"franzininho-wifi-espidf-02",title:"Entrada digital",slug:"/franzininho-wifi/exemplos-espidf/entrada-digital",description:"Neste exemplo utilizou-se um bot\xe3o t\xe1ctil (entrada digital) para acionar um LED (sa\xedda digital) e mostra seu estado no terminal.",author:"Halysson Junior"},r=void 0,s={unversionedId:"FranzininhoWifi/exemplos-espidf/franzininho-wifi-espidf-02",id:"FranzininhoWifi/exemplos-espidf/franzininho-wifi-espidf-02",title:"Entrada digital",description:"Neste exemplo utilizou-se um bot\xe3o t\xe1ctil (entrada digital) para acionar um LED (sa\xedda digital) e mostra seu estado no terminal.",source:"@site/docs/FranzininhoWifi/exemplos-espidf/0x02-entrada-digital.md",sourceDirName:"FranzininhoWifi/exemplos-espidf",slug:"/franzininho-wifi/exemplos-espidf/entrada-digital",permalink:"/en/docs/franzininho-wifi/exemplos-espidf/entrada-digital",draft:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-espidf/0x02-entrada-digital.md",tags:[],version:"current",frontMatter:{id:"franzininho-wifi-espidf-02",title:"Entrada digital",slug:"/franzininho-wifi/exemplos-espidf/entrada-digital",description:"Neste exemplo utilizou-se um bot\xe3o t\xe1ctil (entrada digital) para acionar um LED (sa\xedda digital) e mostra seu estado no terminal.",author:"Halysson Junior"},sidebar:"docs",previous:{title:"Hello World! ESP-IDF",permalink:"/en/docs/franzininho-wifi/exemplos-espidf/hello-world-esp-idf"},next:{title:"Entrada Anal\xf3gica",permalink:"/en/docs/franzininho-wifi/exemplos-espidf/entrada-analogica"}},l={},d=[{value:"Recursos Necess\xe1rios",id:"recursos-necess\xe1rios",level:2},{value:"<strong>Recursos Necess\xe1rios</strong>",id:"recursos-necess\xe1rios-1",level:2},{value:"Desenvolvimento",id:"desenvolvimento",level:2},{value:"Esquem\xe1tico",id:"esquem\xe1tico",level:3},{value:"C\xf3digo",id:"c\xf3digo",level:3},{value:"Compila\xe7\xe3o",id:"compila\xe7\xe3o",level:3},{value:"Resultados",id:"resultados",level:2},{value:"Conclus\xe3o",id:"conclus\xe3o",level:2}],p={toc:d},u="wrapper";function c(e){let{components:o,...n}=e;return(0,i.kt)(u,(0,t.Z)({},p,n,{components:o,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Seguindo nas aplica\xe7\xf5es com o ESP-IDF naa placa Franzininho WiFi vamos dar continuidade aos trabalhos com o perif\xe9rico de Entrada/Sa\xedda de Prop\xf3sito Geral ou do ingl\xeas General Purpose Input/Output (GPIO) . O objetivo deste texto \xe9 apresentar um exemplo de projeto para configurar os pinos como entrada digital.  Ao final, estaremos preparados para manipular tanto as sa\xeddas digitais, vista anteriormente, quanto \xe0s entradas de digitais."),(0,i.kt)("h2",{id:"recursos-necess\xe1rios"},"Recursos Necess\xe1rios"),(0,i.kt)("p",null,"Os materiais necess\xe1rios para realizar esse exemplo s\xe3o:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Placa Franzininho WiFi;"),(0,i.kt)("li",{parentName:"ul"},"Protoboard;"),(0,i.kt)("li",{parentName:"ul"},"Bot\xe3o ou chave t\xe1ctil;"),(0,i.kt)("li",{parentName:"ul"},"LED;"),(0,i.kt)("li",{parentName:"ul"},"Resistor de 220 ou 330 Ohm;"),(0,i.kt)("li",{parentName:"ul"},"Cabos Jumpers;"),(0,i.kt)("li",{parentName:"ul"},"Computador com ESP-IDF instalado e configurado.")),(0,i.kt)("h2",{id:"recursos-necess\xe1rios-1"},(0,i.kt)("strong",{parentName:"h2"},"Recursos Necess\xe1rios")),(0,i.kt)("p",null,"Os materiais necess\xe1rios para realizar esse exemplo s\xe3o:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Placa Franzininho WiFi;"),(0,i.kt)("li",{parentName:"ul"},"Protoboard;"),(0,i.kt)("li",{parentName:"ul"},"Bot\xe3o ou chave t\xe1ctil;"),(0,i.kt)("li",{parentName:"ul"},"LED;"),(0,i.kt)("li",{parentName:"ul"},"Resistor de 220 ou 330 Ohm;"),(0,i.kt)("li",{parentName:"ul"},"Cabos Jumpers;"),(0,i.kt)("li",{parentName:"ul"},"Computador com ESP-IDF instalado e configurado.")),(0,i.kt)("h2",{id:"desenvolvimento"},"Desenvolvimento"),(0,i.kt)("p",null,"Nesse artigo vamos apresentar um exemplo de projeto utilizando as duas fun\xe7\xf5es do perif\xe9rico GPIO: entrada digital e sa\xedda digital. Na entrada digital vamos realizar a leitura do bot\xe3o t\xe1ctil e armazenar seu estado em uma vari\xe1vel que ir\xe1 interagir com o monitor e um LED externo, atuando como uma sa\xedda digital que ir\xe1 nos indicar o estado atual do bot\xe3o."),(0,i.kt)("p",null,"O programa desenvolvido possibilita utilizar duas topologias de circuito : ",(0,i.kt)("a",{parentName:"p",href:"https://www.embarcados.com.br/como-dimensionar-resistores-de-pull-up/"},(0,i.kt)("strong",{parentName:"a"},"pull up"))," ou ",(0,i.kt)("a",{parentName:"p",href:"https://www.embarcados.com.br/resistor-de-pull-down/"},(0,i.kt)("strong",{parentName:"a"},"pull down")),", para mais informa\xe7\xf5es sobre essas topologias acesse os links referente a cada circuito. Nesse exemplo de projeto iremos utilizar a topologia com o pull up interno do processador, desta forma deve-se observar os coment\xe1rios ao longo do c\xf3digo a fim de habilitar ou desabilitar as topologias de circuito."),(0,i.kt)("p",null,"Na placa Franzininho WiFI temos 38 pinos program\xe1veis com o perif\xe9rico GPIO, encorajamos aos leitores que alterem o c\xf3digo da forma como achar necess\xe1rio e praticar a codifica\xe7\xe3o do programa a fim de consolidar o conhecimento adquirido."),(0,i.kt)("h3",{id:"esquem\xe1tico"},"Esquem\xe1tico"),(0,i.kt)("p",null,"Para darmos in\xedcio ao projeto \xe9 importante realizar a montagem do circuito em protoboard observando com cuidado as conex\xf5es, iremos conectar um dos terminais do resistor no ",(0,i.kt)("strong",{parentName:"p"},"GPIO 2")," e outro no LED externo por fim ligamos a ",(0,i.kt)("strong",{parentName:"p"},"GPIO 15")," no bot\xe3o t\xe1ctil. Abaixo segue o esquem\xe1tico proposto:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"circuito",src:a(8346).Z,width:"1755",height:"702"})),(0,i.kt)("h3",{id:"c\xf3digo"},"C\xf3digo"),(0,i.kt)("p",null,"O programa desenvolvido possui uma estrutura bem simples e n\xe3o \xe9 necess\xe1rio acrescentar nenhuma biblioteca, apenas a manuten\xe7\xe3o dos arquivos de cabe\xe7alho j\xe1 presentes no projeto. Ao criar um novo projeto no IDF automaticamente j\xe1 temos arquivos configurados e prontos para programa\xe7\xe3o do dispositivo, desta forma digite e comente as linhas do seguinte c\xf3digo no arquivo ",(0,i.kt)("strong",{parentName:"p"},"main.c :")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c"},'/*\n    Autor : Halysson Junior\n    Data: 31/03/21\n    Descri\xe7\xe3o:\n    Neste exemplo utilizou-se um bot\xe3o t\xe1ctil (entrada digital) para acionar um LED (sa\xedda digital)\n    e mostra seu estado no terminal.\n\n*/\n\n// Inclus\xe3o arquivos de cabe\xe7alho\n\n#include <stdio.h>\n#include "freertos/FreeRTOS.h"\n#include "freertos/task.h"\n#include "driver/gpio.h"\n#include "sdkconfig.h"\n\n// Defini\xe7\xf5es de Pinos\n#define BTN 15\n#define LED 2\n\n// Defini\xe7\xe3o de habilita\xe7\xe3o (PULLUP / PULLDOWN)\n#define PULLUP\n// #define PULLDOWN (Para habilitar pulldown descomente aqui e comente -> " #define PULLUP ")\n\n// Defini\xe7\xf5es de estado l\xf3gico (caso altere para pulldown, deve-se inverter os estado l\xf3gicos)\n#define ON 1\n#define OFF 0\n\nvoid app_main(void){  // Main\n\n gpio_pad_select_gpio(LED);                \n gpio_set_direction(LED,GPIO_MODE_OUTPUT);// onfigura LED como sa\xedda digital\n\n gpio_pad_select_gpio(BTN);  \n gpio_set_direction(BTN,GPIO_MODE_INPUT); // Configura LED como sa\xedda digital\n\n  #ifdef PULLDOWN // Habilita pulldown\n\n   gpio_pulldown_en(BTN);\n   gpio_pullup_dis(BTN);  \n\n  #endif\n\n  #ifdef PULLUP  // Habilita pullup\n  gpio_pullup_en(BTN);\n  gpio_pulldown_dis(BTN);\n\n  #endif\n\n// V\xe1riavel Local\nbool last_state_btn = 0; // Armazena o \xfaltimo estado do bot\xe3o       \n\n    while (1) { // Loop\n\n    // V\xe1riavel Local  \n     bool state_btn = gpio_get_level(BTN); // Leitura do bot\xe3o\n\n      if(!state_btn && !last_state_btn) {\n          gpio_set_level(LED,ON);           // Se bot\xe3o for zero ent\xe3o ... liga LED\n          printf("LED LIGADO");             // Mostra informa\xe7\xe3o no monitor "LED LIGADO"\n          last_state_btn = true;            // Bot\xe3o pressionado\n      }\n\n      else if(state_btn && last_state_btn){\n        gpio_set_level(LED,OFF);            // Sen\xe3o... desliga LED\n         printf ("LED DESLIGADO");          // Mostra informa\xe7\xe3o no monitor "LED DESLIGADO"\n        last_state_btn = false;             // Bot\xe3o solto\n      }\n      vTaskDelay(1/ portTICK_PERIOD_MS);    // Rotina de Delay de 1 segundo\n      fflush(stdout);                       // Descarrega os buffers de sa\xedda de dados   \n\n    }// endLoop\n\n}// endMain\n')),(0,i.kt)("p",null,"Voc\xea encontra o projeto completo na documenta\xe7\xe3o da Franzininho: ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/Franzininho/exemplos-esp-idf/tree/main/exemplos/Button"},"Button"))),(0,i.kt)("p",null,"Caso ainda n\xe3o tenha instalado e configurado o IDF no seu computador ou tenha d\xfavidas sobre as ferramentas, acesse o tutorial de instala\xe7\xe3o (",(0,i.kt)("a",{parentName:"p",href:"https://franzininho.github.io/docs-franzininho-site/docs/franzininho-wifi-espidf/primeiros-passos"},"Clique Aqui"),")."),(0,i.kt)("h3",{id:"compila\xe7\xe3o"},"Compila\xe7\xe3o"),(0,i.kt)("p",null,"Ap\xf3s a codifica\xe7\xe3o vamos compilar o c\xf3digo, mas antes selecione o ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"set-target"))," para ESP 32-S2:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"idf.py set-target esp32s2\n")),(0,i.kt)("p",null,"Ao final da compila\xe7\xe3o o resultado final deve ser semelhante \xe0 imagem mostrada abaixo, em caso de erros retorne os passos anteriores e revise seu c\xf3digo."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"resultado da compila\xe7\xe3o",src:a(5823).Z,width:"1064",height:"349"})),(0,i.kt)("p",null,"Ap\xf3s a etapa de compila\xe7\xe3o vamos enviar o c\xf3digo fonte para nossa placa, no editor pressione o \xedcone abaixo e aguarde alguns segundos para assim dar in\xedcio ao programa \u201cButton\u201d(seta preta) e para vermos a sa\xedda de dados do nosso projeto clique no \xedcone no formato de monitor (seta vermelha):"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"atalhos de compila\xe7\xe3o",src:a(3159).Z,width:"528",height:"54"})),(0,i.kt)("h2",{id:"resultados"},"Resultados"),(0,i.kt)("p",null,"Finalizando o exemplo de projeto o leitor deve ter observado que no programa Button, foram utilizadas as estruturas de condi\xe7\xe3o IF / ELSE IF para interagir com o estado atual do bot\xe3o, adicionou-se \xe0s uma nova label nativa para indicar as entradas digitais (GPIO_MODE_INPUT) e as fun\xe7\xf5es para indicar topologia do circuito ( gpio_pullup_en()/gpio pulldown_dis()) utilizado e verificar a leitura digital no pino definido no cabe\xe7alho do c\xf3digo."),(0,i.kt)("p",null,"Abaixo segue o resultado final dos dados de sa\xedda no monitor:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"sa\xedda monitor serial",src:a(4983).Z,width:"539",height:"168"})),(0,i.kt)("p",null,"Abaixo segue o nosso circuito do nosso projeto:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"teste na bancada",src:a(9331).Z,width:"1336",height:"668"})),(0,i.kt)("h2",{id:"conclus\xe3o"},"Conclus\xe3o"),(0,i.kt)("p",null,"Nesse projeto conclu\xedmos o estudo do perif\xe9rico base para iniciar no mundo dos microcontroladores, pois a partir desse conhecimento adquirido podemos reciclar para as outras fam\xedlias do ESP32, como tamb\xe9m em outros chips baseados na linguagem C para estruturar seu programa. Como mencionado na se\xe7\xe3o de Desenvolvimento, este segundo artigo deseja consolidar o conhecimento nesse perif\xe9rico (GPIO), por tanto deixo o desafio de criar um contador de pulsos de 0 at\xe9 10 e reiniciado sempre quando forma maior que 10, ao final de cada contagem deve-se acionar um LED e mostrar quantas contagens j\xe1 foram feitas. Desejo sorte \xe0queles que ir\xe3o realizar o desafio e bons estudos, que a ",(0,i.kt)("strong",{parentName:"p"},"for\xe7a esteja com todos n\xf3s.")),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Autor"),(0,i.kt)("th",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"th",href:"https://github.com/halyssonJr"},"Halysson Junior")))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Data:"),(0,i.kt)("td",{parentName:"tr",align:null},"01/06/2021")))))}c.isMDXComponent=!0},8346:(e,o,a)=>{a.d(o,{Z:()=>t});const t=a.p+"assets/images/1-124f6f4ee8bacde41bd8a9e355dc439a.png"},5823:(e,o,a)=>{a.d(o,{Z:()=>t});const t=a.p+"assets/images/2-9dcac030cd53ee20f535abf4683f595c.png"},3159:(e,o,a)=>{a.d(o,{Z:()=>t});const t=a.p+"assets/images/3-e82c6cff8b1723ecc738df1fa83a7f4d.png"},4983:(e,o,a)=>{a.d(o,{Z:()=>t});const t=a.p+"assets/images/4-398af45ebe97733b089183f9be584ceb.png"},9331:(e,o,a)=>{a.d(o,{Z:()=>t});const t=a.p+"assets/images/5-38b38892827b20fb4c4fad0565d3620c.png"}}]);