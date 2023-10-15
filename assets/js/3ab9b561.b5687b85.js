"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[1013],{3905:(a,o,e)=>{e.d(o,{Zo:()=>c,kt:()=>h});var r=e(7294);function n(a,o,e){return o in a?Object.defineProperty(a,o,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[o]=e,a}function t(a,o){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(a);o&&(r=r.filter((function(o){return Object.getOwnPropertyDescriptor(a,o).enumerable}))),e.push.apply(e,r)}return e}function i(a){for(var o=1;o<arguments.length;o++){var e=null!=arguments[o]?arguments[o]:{};o%2?t(Object(e),!0).forEach((function(o){n(a,o,e[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):t(Object(e)).forEach((function(o){Object.defineProperty(a,o,Object.getOwnPropertyDescriptor(e,o))}))}return a}function s(a,o){if(null==a)return{};var e,r,n=function(a,o){if(null==a)return{};var e,r,n={},t=Object.keys(a);for(r=0;r<t.length;r++)e=t[r],o.indexOf(e)>=0||(n[e]=a[e]);return n}(a,o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);for(r=0;r<t.length;r++)e=t[r],o.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(a,e)&&(n[e]=a[e])}return n}var d=r.createContext({}),l=function(a){var o=r.useContext(d),e=o;return a&&(e="function"==typeof a?a(o):i(i({},o),a)),e},c=function(a){var o=l(a.components);return r.createElement(d.Provider,{value:o},a.children)},p="mdxType",u={inlineCode:"code",wrapper:function(a){var o=a.children;return r.createElement(r.Fragment,{},o)}},m=r.forwardRef((function(a,o){var e=a.components,n=a.mdxType,t=a.originalType,d=a.parentName,c=s(a,["components","mdxType","originalType","parentName"]),p=l(e),m=n,h=p["".concat(d,".").concat(m)]||p[m]||u[m]||t;return e?r.createElement(h,i(i({ref:o},c),{},{components:e})):r.createElement(h,i({ref:o},c))}));function h(a,o){var e=arguments,n=o&&o.mdxType;if("string"==typeof a||n){var t=e.length,i=new Array(t);i[0]=m;var s={};for(var d in o)hasOwnProperty.call(o,d)&&(s[d]=o[d]);s.originalType=a,s[p]="string"==typeof a?a:n,i[1]=s;for(var l=2;l<t;l++)i[l]=e[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,e)}m.displayName="MDXCreateElement"},8159:(a,o,e)=>{e.r(o),e.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>s,toc:()=>l});var r=e(3117),n=(e(7294),e(3905));const t={id:"bootloader",title:"Bootloader",slug:"/franzininho-diy/bootloader",description:"Grava\xe7\xe3o do Bootloader na Franzininho DIY"},i=void 0,s={unversionedId:"FranzininhoDIY/bootloader/bootloader",id:"FranzininhoDIY/bootloader/bootloader",title:"Bootloader",description:"Grava\xe7\xe3o do Bootloader na Franzininho DIY",source:"@site/docs/FranzininhoDIY/bootloader/bootloader.md",sourceDirName:"FranzininhoDIY/bootloader",slug:"/franzininho-diy/bootloader",permalink:"/docs/franzininho-diy/bootloader",draft:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/bootloader/bootloader.md",tags:[],version:"current",frontMatter:{id:"bootloader",title:"Bootloader",slug:"/franzininho-diy/bootloader",description:"Grava\xe7\xe3o do Bootloader na Franzininho DIY"},sidebar:"docs",previous:{title:"Montagem da Franzininho DIY",permalink:"/docs/franzininho-diy/montagem"},next:{title:"Instala\xe7\xe3o de drivers e configura\xe7\xe3o da USB",permalink:"/docs/franzininho-diy/drivers-micronucleus"}},d={},l=[{value:"Materiais Necess\xe1rios",id:"materiais-necess\xe1rios",level:2},{value:"Circuito",id:"circuito",level:2},{value:"Gravando o FranzBoot no Arduino UNO",id:"gravando-o-franzboot-no-arduino-uno",level:2},{value:"Pr\xf3ximos passos",id:"pr\xf3ximos-passos",level:2},{value:"Gravar muitos chips",id:"gravar-muitos-chips",level:2}],c={toc:l},p="wrapper";function u(a){let{components:o,...t}=a;return(0,n.kt)(p,(0,r.Z)({},c,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Para que a placa Franzininho possa ser gravada atrav\xe9s da USB \xe9 necess\xe1rio gravar o bootloader. O bootloader \xe9 um pequeno programa que roda toda vez que a placa \xe9 iniciada e verifica se tem um comando de atualiza\xe7\xe3o de firmware. Caso tenha esse comando, ele recebe o bin\xe1rio atrav\xe9s da USB (no caso da Franzininho DIY) e grava na mem\xf3ria flash."),(0,n.kt)("p",null,"Na Franzininho DIY usamos o ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/micronucleus/micronucleus/blob/master/Devices_with_Micronucleus.md"},"Micronucleus")," que \xe9 um bootloader pequeno e bem flex\xedvel desenvolvido para a fam\xedlia ATtiny usando o projeto ",(0,n.kt)("a",{parentName:"p",href:"https://www.obdev.at/products/vusb/index.html"},"VUSB")," como base."),(0,n.kt)("p",null,"A seguir vamos exibir como voc\xea pode gravar o ATtiny85 para usar o Micronucleus."),(0,n.kt)("h2",{id:"materiais-necess\xe1rios"},"Materiais Necess\xe1rios"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Arduino UNO ou similar"),(0,n.kt)("li",{parentName:"ul"},"Fios ","(","Jumpers",")"),(0,n.kt)("li",{parentName:"ul"},"Protoboard")),(0,n.kt)("h2",{id:"circuito"},"Circuito"),(0,n.kt)("p",null,"Voc\xea precisar\xe1 montar o seguinte circuito:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Circuito para Grava\xe7\xe3o",src:e(5487).Z,width:"431",height:"408"})),(0,n.kt)("admonition",{title:"Fa\xe7a uma dupla checagem antes de ligar o Arduino Uno no computador.",type:"warning"}),(0,n.kt)("p",null,"Com o circuito Montado, vamos para a grava\xe7\xe3o do bootloader."),(0,n.kt)("h2",{id:"gravando-o-franzboot-no-arduino-uno"},"Gravando o FranzBoot no Arduino UNO"),(0,n.kt)("p",null,"Para facilitar a grava\xe7\xe3o do bootloader vamos usar o ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Franzininho/FranzBoot"},"FranzBoot"),", um programa para grava\xe7\xe3o do bootloader micronucleus para Franzininho DIY usando Arduino UNO."),(0,n.kt)("p",null,"Baixe o projeto no seu computador: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Franzininho/FranzBoot/archive/refs/heads/main.zip"},"Download"),"."),(0,n.kt)("p",null,"Descompacte a pasta e abra o arquivo FranzBoot.ino"),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("mdxAdmonitionTitle",{parentName:"admonition"},"Se ainda n\xe3o tem a IDE Arduino no seu computador, baixe-a no site do ",(0,n.kt)("a",{parentName:"mdxAdmonitionTitle",href:"https://www.arduino.cc/en/software"},"Arduino")," ")),(0,n.kt)("p",null,"Ser\xe1 aberta a IDE do Arduino:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Circuito para Grava\xe7\xe3o",src:e(6861).Z,width:"1300",height:"1071"})),(0,n.kt)("p",null,"Antes de gravar na placa precisamos configurar a IDE para a placa Arduino UNO. Em Placa selecione Arduino UNO e em porta a porta Serial criada para o seu Arduino UNO:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Circuito para Grava\xe7\xe3o",src:e(8525).Z,width:"879",height:"706"})),(0,n.kt)("p",null,"Pronto, agora pressione Upload(Carregar) e aguarde a grava\xe7\xe3o no Arduino UNO:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Circuito para Grava\xe7\xe3o",src:e(446).Z,width:"1300",height:"1071"})),(0,n.kt)("p",null,"Agora abra o terminal serial:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Circuito para Grava\xe7\xe3o",src:e(6164).Z,width:"1185",height:"569"})),(0,n.kt)("admonition",{title:"Verifique se a velocidade est\xe1 configurada em 9600. ",type:"tip"}),(0,n.kt)("p",null,"Agora digite G e pressione enviar. Ap\xf3s a grava\xe7\xe3o deve ser apresentada a seguinte mensagem no terminal:"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Circuito para Grava\xe7\xe3o",src:e(7287).Z,width:"1185",height:"569"})),(0,n.kt)("admonition",{title:"ERRO",type:"warning"},(0,n.kt)("p",{parentName:"admonition"},"Se receber uma mensagem de erro, verifique as conex\xf5es el\xe9tricas e envie novamente o comando G.")),(0,n.kt)("p",null,"Pronto, o ATtiny85 est\xe1 pronto para ser encaixado na sua Franzininho DIY. Retire-o com cuidado da matriz de contatos e encaixe-o corretamente na Franzininho DIY, conforme imagem abaixo"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Placa Franzininho DIY",src:e(4936).Z,width:"500",height:"233"})),(0,n.kt)("h2",{id:"pr\xf3ximos-passos"},"Pr\xf3ximos passos"),(0,n.kt)("p",null,"Agora que j\xe1 tem a sua placa Franzininho DIY preparada voc\xea pode partir para a programa\xe7\xe3o."),(0,n.kt)("h2",{id:"gravar-muitos-chips"},"Gravar muitos chips"),(0,n.kt)("p",null,"Caso voc\xea necessite gravar muitos chips voc\xea pode gravar sem usar o PC. Verifique a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/Franzininho/FranzBoot#readme"},"documenta\xe7\xe3o do FranzBoot")," para mais detalhes."))}u.isMDXComponent=!0},8525:(a,o,e)=>{e.d(o,{Z:()=>r});const r=e.p+"assets/images/IDE-Arduino-Configuracao-dde65494e76bfd5fe726b61692f4707c.png"},7287:(a,o,e)=>{e.d(o,{Z:()=>r});const r=e.p+"assets/images/IDE-Arduino-Gravando-a69ad020e2520590375ce6a7c601429f.png"},6164:(a,o,e)=>{e.d(o,{Z:()=>r});const r=e.p+"assets/images/IDE-Arduino-Terminal-serial-248aa58aa3f811c7df29648366143242.png"},446:(a,o,e)=>{e.d(o,{Z:()=>r});const r=e.p+"assets/images/IDE-Arduino-Upload-802877937fd66a36829d4c86bf1097c3.png"},6861:(a,o,e)=>{e.d(o,{Z:()=>r});const r=e.p+"assets/images/IDE-Arduino-cabe65705eb2af6ca4940b4dada79e45.png"},5487:(a,o,e)=>{e.d(o,{Z:()=>r});const r=e.p+"assets/images/circuito-58c7cff2dc28fe98b6f923e076cdb2d4.png"},4936:(a,o,e)=>{e.d(o,{Z:()=>r});const r=e.p+"assets/images/placa-franzininho-diy-d8459c4e0e0d4c724d1c4d619ffc0350.png"}}]);