"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[5123],{3905:(e,a,o)=>{o.d(a,{Zo:()=>c,kt:()=>f});var n=o(7294);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function s(e,a){if(null==e)return{};var o,n,t=function(e,a){if(null==e)return{};var o,n,t={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var d=n.createContext({}),l=function(e){var a=n.useContext(d),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},c=function(e){var a=l(e.components);return n.createElement(d.Provider,{value:a},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var o=e.components,t=e.mdxType,r=e.originalType,d=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(o),u=t,f=p["".concat(d,".").concat(u)]||p[u]||m[u]||r;return o?n.createElement(f,i(i({ref:a},c),{},{components:o})):n.createElement(f,i({ref:a},c))}));function f(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var r=o.length,i=new Array(r);i[0]=u;var s={};for(var d in a)hasOwnProperty.call(a,d)&&(s[d]=a[d]);s.originalType=e,s[p]="string"==typeof e?e:t,i[1]=s;for(var l=2;l<r;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},7866:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=o(3117),t=(o(7294),o(3905));const r={id:"franzininho-wifi-espidf-04",title:"PWM com LEDC",slug:"/franzininho-wifi/exemplos-espidf/ledc",description:"Neste exemplo utilizou-se um bot\xe3o t\xe1ctil (entrada digital) para acionar um LED (sa\xedda digital) e mostra seu estado no terminal.",author:"Halysson Junior"},i=void 0,s={unversionedId:"FranzininhoWifi/exemplos-espidf/franzininho-wifi-espidf-04",id:"FranzininhoWifi/exemplos-espidf/franzininho-wifi-espidf-04",title:"PWM com LEDC",description:"Neste exemplo utilizou-se um bot\xe3o t\xe1ctil (entrada digital) para acionar um LED (sa\xedda digital) e mostra seu estado no terminal.",source:"@site/docs/FranzininhoWifi/exemplos-espidf/0x04-LEDC.md",sourceDirName:"FranzininhoWifi/exemplos-espidf",slug:"/franzininho-wifi/exemplos-espidf/ledc",permalink:"/docs/franzininho-wifi/exemplos-espidf/ledc",draft:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-espidf/0x04-LEDC.md",tags:[],version:"current",frontMatter:{id:"franzininho-wifi-espidf-04",title:"PWM com LEDC",slug:"/franzininho-wifi/exemplos-espidf/ledc",description:"Neste exemplo utilizou-se um bot\xe3o t\xe1ctil (entrada digital) para acionar um LED (sa\xedda digital) e mostra seu estado no terminal.",author:"Halysson Junior"},sidebar:"docs",previous:{title:"Entrada Anal\xf3gica",permalink:"/docs/franzininho-wifi/exemplos-espidf/entrada-analogica"},next:{title:"Primeiros passos com a AWS",permalink:"/docs/franzininho-wifi/exemplos-espidf/aws"}},d={},l=[{value:"<strong>Recursos Necess\xe1rios</strong>",id:"recursos-necess\xe1rios",level:2},{value:"<strong>Desenvolvimento</strong>",id:"desenvolvimento",level:2},{value:"<strong>Esquem\xe1tico</strong>",id:"esquem\xe1tico",level:3},{value:"<strong>C\xf3digo</strong>",id:"c\xf3digo",level:3},{value:"<strong>Compila\xe7\xe3o</strong>",id:"compila\xe7\xe3o",level:3},{value:"<strong>Resultados</strong>",id:"resultados",level:3},{value:"<strong>Conclus\xe3o</strong>",id:"conclus\xe3o",level:2}],c={toc:l},p="wrapper";function m(e){let{components:a,...r}=e;return(0,t.kt)(p,(0,n.Z)({},c,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Seguindo os estudos do ESP-IDF, vamos agora estudar um novo perif\xe9rico, o LED Control (LEDC), o qual tem a fun\xe7\xe3o de controlar a intensidade luminosa do LED e tamb\xe9m servir como fonte geradora de sinal pulsado, ",(0,t.kt)("strong",{parentName:"p"},"Pulse Width Modulation")," (PWM), para diferentes prop\xf3sitos como: controle de velocidade em motores de corrente cont\xednua (CC), angula\xe7\xe3o em servomotores, mudan\xe7a de cores em LED RGB e outras mais aplica\xe7\xf5es."),(0,t.kt)("p",null,"Com isso, ao final deste artigo estaremos familiarizados com os recursos oferecidos pelo perif\xe9rico al\xe9m de dominar as configura\xe7\xf5es b\xe1sicas para implementar em projetos."),(0,t.kt)("h2",{id:"recursos-necess\xe1rios"},(0,t.kt)("strong",{parentName:"h2"},"Recursos Necess\xe1rios")),(0,t.kt)("p",null,"Os materiais necess\xe1rios para realizar esse exemplo s\xe3o:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Placa Franzininho WiFi;"),(0,t.kt)("li",{parentName:"ul"},"Protoboard;"),(0,t.kt)("li",{parentName:"ul"},"LED;"),(0,t.kt)("li",{parentName:"ul"},"Resistor de 220 Ohm;"),(0,t.kt)("li",{parentName:"ul"},"Cabos Jumpers;"),(0,t.kt)("li",{parentName:"ul"},"Computador com ESP-IDF instalado e configurado.")),(0,t.kt)("h2",{id:"desenvolvimento"},(0,t.kt)("strong",{parentName:"h2"},"Desenvolvimento")),(0,t.kt)("p",null,"Na placa Franzininho WiFi o perif\xe9rico LEDC est\xe1 disposto em dois grupos de oito canais, sendo um grupo operando no ",(0,t.kt)("strong",{parentName:"p"},"High Speed Mode (HSM)")," e outro em ",(0,t.kt)("strong",{parentName:"p"},"Low Speed Mode (LSM)")," operando independente uns dos outros ",(0,t.kt)("strong",{parentName:"p"},".")," O modo High Speed \xe9 implementado em hardware oferecendo mudan\xe7as autom\xe1ticas sem interferir no duty cycle do PWM, ou seja, caso haja altera\xe7\xf5es na temporiza\xe7\xe3o ser\xe3o atualizadas no pr\xf3ximo estouro do timer. Em contraste isso o modo Low Speed deve ser explicitar o via software as configura\xe7\xf5es de temporiza\xe7\xe3o."),(0,t.kt)("p",null,"Para utilizarmos esse perif\xe9ricos precisamos seguir algumas etapas fundamentais para nossa aplica\xe7\xe3o de estudo que s\xe3o: Configura\xe7\xe3o do Temporizador , Configura\xe7\xe3o do Canal e Altera\xe7\xe3o do PWM."),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Configura\xe7\xe3o do Temporizador : nessa primeira etapa vamos especificar a frequ\xeancia e a resolu\xe7\xe3o do sinal PWM preenchendo a estrutura de dados ",(0,t.kt)("a",{parentName:"p",href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/peripherals/ledc.html#_CPPv419ledc_timer_config_t"},(0,t.kt)("strong",{parentName:"a"},"ledc_timer_config_t"))," e apontando-a para a fun\xe7\xe3o ",(0,t.kt)("strong",{parentName:"p"},"led_timer_config() ."))),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Configura\xe7\xe3o do Canal: nessa segunda etapa iremos direcionar o GPIO que ser\xe1 a sa\xedda do sinal PWM, o qual \xe9 selecionado dentro da estrutura de configura\xe7\xe3o do perif\xe9rico.")),(0,t.kt)("li",{parentName:"ul"},(0,t.kt)("p",{parentName:"li"},"Altera\xe7\xe3o do PWM: na \xfaltima etapa vamos realizar o aumento e a redu\xe7\xe3o do duty cycle na sa\xedda da geradora de sinal criando assim o ",(0,t.kt)("strong",{parentName:"p"},"fade")," no LED externo, o qual ser\xe1 habilitado via hardware pela fun\xe7\xe3o ",(0,t.kt)("a",{parentName:"p",href:"https://docs.espressif.com/projects/esp-idf/en/latest/esp32/api-reference/peripherals/ledc.html#_CPPv422ledc_fade_func_installi"},(0,t.kt)("strong",{parentName:"a"},"ledc_fade_func_install()")),(0,t.kt)("strong",{parentName:"p"},".")))),(0,t.kt)("p",null,"Com a finaliza\xe7\xe3o das tr\xeas etapas de configura\xe7\xe3o o acionamento do perif\xe9rico LED Control estar\xe1 em funcionamento, contudo devemos agora seguir para montagem do circuito para concluir o projeto."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Configura\xe7\xe3o do Perif\xe9rico LED Control",src:o(5530).Z,width:"768",height:"384"})),(0,t.kt)("h3",{id:"esquem\xe1tico"},(0,t.kt)("strong",{parentName:"h3"},"Esquem\xe1tico")),(0,t.kt)("p",null,"Nesta parte daremos in\xedcio a montagem do circuito em protoboard, iremos conectar um dos terminais do resistor no ",(0,t.kt)("strong",{parentName:"p"},"GPIO 2")," e outro no LED externo."),(0,t.kt)("p",null,"Abaixo segue o esquem\xe1tico proposto :"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Imagem do Circuito",src:o(8223).Z,width:"1024",height:"367"})),(0,t.kt)("h3",{id:"c\xf3digo"},(0,t.kt)("strong",{parentName:"h3"},"C\xf3digo")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-c"},'/*\n   Autor: Halysson Junior\n   Data : 10/04/21   \n\n    Nesse exemplo foi configurado o periferico LEDC para controlar a intensidade do LED.\n     \n*/\n\n// Inclus\xe3o de arqivos de cabe\xe7alho\n#include <stdio.h>\n#include "freertos/FreeRTOS.h"\n#include "freertos/task.h"\n#include "driver/ledc.h"\n#include "esp_err.h"\n\n// Defini\xe7\xe3o para configura\xe7\xe3o do perif\xe9rico\n#define LEDC_GPIO         2\n#define LEDC_FADE_TIME    500\n#define LEDC_RESOLUTION   1024\n#define LEDC_FREQ         5000\n\n\nvoid app_main(void) // Main\n{\n\n  //  Estrutura de dados para receber  as v\xe1riaveis  de configura\xe7\xe3o de frequ\xeancia (1Hz, 100 Hz e outros), modo (HIGH ou LOW) e selecionar o TIMER (0,1,2)  \n  \n  ledc_timer_config_t timer = {                   // Configura\xe7\xe3o do timer \n\n      .speed_mode      = LEDC_LOW_SPEED_MODE,     // Modo de Velocidade -> LOW\n      .duty_resolution = LEDC_TIMER_10_BIT,       // Resolu\xe7\xe3o do do ciclo de trabalho (2^10 = 1024 valores)\n      .timer_num       = LEDC_TIMER_0,            // Utilizado o TIMER 0\n      .freq_hz         = LEDC_FREQ,               // Frequ\xeancia de opera\xe7\xe3o do sinal PWM\n      .clk_cfg         = LEDC_AUTO_CLK            // Sele\xe7\xe3o automatica da fonte geradora do clock (interna ou externa)\n    \n  };\n\n  \n  ledc_timer_config(&timer); // Envia o endere\xe7o  da estrutura timer para a fun\xe7\xe3o de configura\xe7\xe3o do canal PWM \n \n /*\n   NOTA:\n   A frequencia e a resolu\xe7\xe3o do ciclo de trabalho s\xe3o independentes. Para uma elevada frequ\xeancia do PWM, \n   ter\xe1 uma baixa resolu\xe7\xe3o do ciclo de trabalho disponivel e vice-versa  \n */\n\n //  Estrutura de dados para receber  as v\xe1riaveis  de configura\xe7\xe3o de frequencia (1Hz, 100 Hz e outros), modo (HIGH ou LOW), selecionar o TIMER (0,1,2) \n  \n  ledc_channel_config_t channel_LEDC = {\n      .gpio_num   =   LEDC_GPIO,             // Seleciona o pino para atuar o PWM\n      .speed_mode =   LEDC_LOW_SPEED_MODE,   // Modo de Velocidade -> LOW\n      .channel    =   LEDC_CHANNEL_0,           \n      .timer_sel  =   LEDC_TIMER_0,\n      .duty       =   0,\n      .hpoint     =   0\n    \n    };\n  \n  ledc_channel_config(&channel_LEDC);\n \n \n  ledc_fade_func_install(0); // Inicializa o servi\xe7o do Fade\n  \n  for(;;){ // Loop\n\n   // Define e inicia a fun\xe7\xe3o de fade no perif\xe9rico LEDC\n    ledc_set_fade_time_and_start( channel_LEDC.speed_mode , channel_LEDC.channel , 0               , LEDC_FADE_TIME , LEDC_FADE_WAIT_DONE);\n    ledc_set_fade_time_and_start( channel_LEDC.speed_mode , channel_LEDC.channel , LEDC_RESOLUTION , LEDC_FADE_TIME , LEDC_FADE_WAIT_DONE);\n  \n  \n  }// endLoop\n\n}//endMain\n\n/*\n *** Paramentriza\xe7\xe3o da fun\xe7\xe3o " ledc_set_fade_time_and_start(); " ***\n\nledc_set_fade_time_and_start(ledc_mode_tspeed_mode, ledc_channel_tchannel, uint32_t target_duty, uint32_t max_fade_time_ms, ledc_fade_mode_tfade_mode)\n\n  ledc_mode_tspeed_mode     -> modo do timer utilizado\n  ledc_channel_tchannel     -> indice do canal LEDC (0-7)\n  uint32_t target_duty      -> (2 ** resolu\xe7\xe3o_ciclo_de_trabalho) -  1\n  uint32_t max_fade_time_ms -> tempo m\xe1ximo (ms) para o fading  \n  ledc_fade_mode_tfade_mode ->  \n*/\n')),(0,t.kt)("p",null,"O programa desenvolvido possui uma estrutura bem simples e n\xe3o \xe9 necess\xe1rio acrescentar nenhuma biblioteca, apenas a manuten\xe7\xe3o dos arquivos de cabe\xe7alho j\xe1 presentes no projeto."),(0,t.kt)("p",null,"Ao criar um novo projeto no IDF automaticamente j\xe1 temos arquivos configurados e prontos para programa\xe7\xe3o do dispositivo, desta forma digite e comente as linhas do seguinte c\xf3digo no arquivo ",(0,t.kt)("strong",{parentName:"p"},"main.c :")),(0,t.kt)("p",null,"Voc\xea encontra o projeto completo na documenta\xe7\xe3o da Franzininho: ",(0,t.kt)("a",{parentName:"p",href:"https://github.com/Franzininho/exemplos-esp-idf/tree/main/exemplos/PWM_LEDC"},(0,t.kt)("strong",{parentName:"a"},"PWM_LEDC"))),(0,t.kt)("p",null,"Caso ainda n\xe3o tenha instalado e configurado o IDF no seu computador ou tenha d\xfavidas sobre as ferramentas, acesse o tutorial de instala\xe7\xe3o (",(0,t.kt)("a",{parentName:"p",href:"https://franzininho.github.io/docs-franzininho-site/docs/franzininho-wifi/exemplos-espidf/primeiros-passos"},"Clique Aqui"),")."),(0,t.kt)("h3",{id:"compila\xe7\xe3o"},(0,t.kt)("strong",{parentName:"h3"},"Compila\xe7\xe3o")),(0,t.kt)("p",null,"Ap\xf3s a codifica\xe7\xe3o vamos compilar o c\xf3digo, mas antes selecione o ",(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("em",{parentName:"strong"},"set-target"))," para ESP32-S2. Caso n\xe3o possua a placa Franzininho WiFi altere o target para o modelo de ESP32 utilizando em seu projeto."),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"idf.py set-target esp32s2\n")),(0,t.kt)("p",null,"Ao final da compila\xe7\xe3o o resultado final deve ser semelhante \xe0 imagem mostrada abaixo, em caso de erros retorne os passos anteriores e revise seu c\xf3digo."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Imagem do Terminal Visual Code",src:o(3648).Z,width:"1024",height:"607"})),(0,t.kt)("p",null,"Ap\xf3s a etapa de compila\xe7\xe3o vamos enviar o c\xf3digo fonte para nossa placa, no editor pressione o \xedcone abaixo e aguarde alguns segundos para assim dar in\xedcio ao upload do programa \u201cPWM\u201d (seta preta) ."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Barra inferior do Visual Code",src:o(7899).Z,width:"528",height:"54"})),(0,t.kt)("h3",{id:"resultados"},(0,t.kt)("strong",{parentName:"h3"},"Resultados")),(0,t.kt)("p",null,"Ap\xf3s enviar seu c\xf3digo e com o circuito devidamente montado o LED externo conectado come\xe7ar\xe1 a aumentar e diminuir sua intensidade luminosa gradualmente criando o fade desejado. Na figura 5 temos a imagem do oscilosc\xf3pio mostrando a forma de onda gerada e o duty cycle atuando no momento e na figura 6 o circuito em perfeito funcionamento."),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Sa\xedda do sinal PWM",src:o(683).Z,width:"1024",height:"1024"})),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Imagem do circuito em funcionamento",src:o(5099).Z,width:"1024",height:"768"})),(0,t.kt)("h2",{id:"conclus\xe3o"},(0,t.kt)("strong",{parentName:"h2"},"Conclus\xe3o")),(0,t.kt)("p",null,"Neste exemplo apresentamos t\xf3picos intermedi\xe1rios sobre a manipula\xe7\xe3o do perif\xe9rico LED Control, utilizamos conceitos importantes da linguagem C estrutura de dados e ponteiros implementado na configura\xe7\xe3o do sinal pulsado."),(0,t.kt)("p",null,"Deve-se deixar claro que o artigo aborda um conte\xfado para darmos os primeiros passo com este perif\xe9rico, encorajamos que o leitor reconfigure a sa\xedda do sinal PWM como tamb\xe9m acesse a documenta\xe7\xe3o oferecida pela Espressif para compreender como o hardware do chip comporta-se com cada configura\xe7\xe3o realizada al\xe9m das fun\xe7\xf5es implementadas em software."),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:null},"Autor"),(0,t.kt)("th",{parentName:"tr",align:null},(0,t.kt)("a",{parentName:"th",href:"https://github.com/halyssonJr"},"Halysson Junior")))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"Data:"),(0,t.kt)("td",{parentName:"tr",align:null},"22/07/2021")))))}m.isMDXComponent=!0},5530:(e,a,o)=>{o.d(a,{Z:()=>n});const n=o.p+"assets/images/1-f7885fb7827c5c17fea371b5f8452645.png"},8223:(e,a,o)=>{o.d(a,{Z:()=>n});const n=o.p+"assets/images/2-0a531df80a496fe52ef1cd273f3306a5.png"},3648:(e,a,o)=>{o.d(a,{Z:()=>n});const n=o.p+"assets/images/3-413df3a4edbd9eeef3237bc8e6bd0894.png"},7899:(e,a,o)=>{o.d(a,{Z:()=>n});const n=o.p+"assets/images/4-e64a6a5ed6db5ad1206c547c1b106046.png"},683:(e,a,o)=>{o.d(a,{Z:()=>n});const n=o.p+"assets/images/5-921eb8572a537a8d55e8dddc33727221.jpeg"},5099:(e,a,o)=>{o.d(a,{Z:()=>n});const n=o.p+"assets/images/6-7477a50ccfa225dc8f32e7ce6cf22339.jpeg"}}]);