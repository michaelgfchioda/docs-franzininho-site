"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[7259],{3905:(e,a,o)=>{o.d(a,{Zo:()=>u,kt:()=>f});var r=o(7294);function t(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function n(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?n(Object(o),!0).forEach((function(a){t(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function l(e,a){if(null==e)return{};var o,r,t=function(e,a){if(null==e)return{};var o,r,t={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],a.indexOf(o)>=0||(t[o]=e[o]);return t}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(t[o]=e[o])}return t}var s=r.createContext({}),c=function(e){var a=r.useContext(s),o=a;return e&&(o="function"==typeof e?e(a):i(i({},a),e)),o},u=function(e){var a=c(e.components);return r.createElement(s.Provider,{value:a},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},m=r.forwardRef((function(e,a){var o=e.components,t=e.mdxType,n=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(o),m=t,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||n;return o?r.createElement(f,i(i({ref:a},u),{},{components:o})):r.createElement(f,i({ref:a},u))}));function f(e,a){var o=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var n=o.length,i=new Array(n);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l[d]="string"==typeof e?e:t,i[1]=l;for(var c=2;c<n;c++)i[c]=o[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},129:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var r=o(3117),t=(o(7294),o(3905));const n={id:"girassol-automatizado",title:"Girassol Automatizado",slug:"/franzininho-diy/girassol-automatizado",description:"Nesse exemplo vamos fazer um Girassol Automatizado com Franzininho DIY"},i=void 0,l={unversionedId:"FranzininhoDIY/exemplos-arduino/girassol-automatizado",id:"FranzininhoDIY/exemplos-arduino/girassol-automatizado",title:"Girassol Automatizado",description:"Nesse exemplo vamos fazer um Girassol Automatizado com Franzininho DIY",source:"@site/docs/FranzininhoDIY/exemplos-arduino/girassol-automatizado.md",sourceDirName:"FranzininhoDIY/exemplos-arduino",slug:"/franzininho-diy/girassol-automatizado",permalink:"/en/docs/franzininho-diy/girassol-automatizado",draft:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoDIY/exemplos-arduino/girassol-automatizado.md",tags:[],version:"current",frontMatter:{id:"girassol-automatizado",title:"Girassol Automatizado",slug:"/franzininho-diy/girassol-automatizado",description:"Nesse exemplo vamos fazer um Girassol Automatizado com Franzininho DIY"},sidebar:"docs",previous:{title:"Theremim",permalink:"/en/docs/franzininho-diy/theremim"},next:{title:"Primeiros Passos",permalink:"/en/docs/franzininho-diy/exemplos-avr-libc/primeiros-passos"}},s={},c=[{value:"Materiais:",id:"materiais",level:2},{value:"Circuito",id:"circuito",level:2},{value:"C\xf3digo",id:"c\xf3digo",level:2},{value:"Video explicativo",id:"video-explicativo",level:2},{value:"Co.Lab | Workshop: Rob\xf3tica Educacional - Aprenda sobre Ci\xeancia da Natureza e Eletr\xf4nica (Parte 1)",id:"colab--workshop-rob\xf3tica-educacional---aprenda-sobre-ci\xeancia-da-natureza-e-eletr\xf4nica-parte-1",level:3},{value:"Co.Lab | Workshop: Rob\xf3tica Educacional - Aprenda sobre Ci\xeancia da Natureza e Eletr\xf4nica (Parte 2)",id:"colab--workshop-rob\xf3tica-educacional---aprenda-sobre-ci\xeancia-da-natureza-e-eletr\xf4nica-parte-2",level:3},{value:"Refer\xeancia",id:"refer\xeancia",level:2}],u={toc:c},d="wrapper";function p(e){let{components:a,...n}=e;return(0,t.kt)(d,(0,r.Z)({},u,n,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Nesse exemplo vamos fazer um girassol automatizado que se movimenta conforme a posi\xe7\xe3o da luz."),(0,t.kt)("h2",{id:"materiais"},"Materiais:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Placa Franzininho DIY;"),(0,t.kt)("li",{parentName:"ul"},"Protoboard;"),(0,t.kt)("li",{parentName:"ul"},"LED 3mm;"),(0,t.kt)("li",{parentName:"ul"},"1 Resistor  LDR (foto resistores 10 k)"),(0,t.kt)("li",{parentName:"ul"},"1 Servo motor"),(0,t.kt)("li",{parentName:"ul"},"Jumpers macho/f\xeamea")),(0,t.kt)("h2",{id:"circuito"},"Circuito"),(0,t.kt)("p",null,"No protoboard voc\xea deve inserir o foto resistores e o servo motoro, conforme a imagem abaixo:"),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"Circuito",src:o(3190).Z,width:"1698",height:"1050"})),(0,t.kt)("h2",{id:"c\xf3digo"},"C\xf3digo"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-cpp"},"\n/*\nFranzininho\nExemplo:  Girassol Automatizado\nNesse exemplo \xe9 de um girassol automatizado com dois fotos resistores,  um servo motor, entre outros materiais, confira.\n*/\n//\n\n#include <Servo.h>\n\nint sensor = A;\nint servoMotor = 1;\n\nint valorSensor =0;\nint analogServo = 90;\n\nServo servo;\n\nvoid setup() {\n servo.attach(servoMotor);\n servo.write(anguloServo);\n}\n\nvoid loop() {\n valorSensor = analogRead(sensor);\n if(valorSensor <512)\n {\n   if(anguloServo < 170)anguloServo++;\n }\n if(valorSensor = >512)\n {\n   if(anguloServo > 10)anguloServo--;\n }\n\nservo.write(anguloServo);\ndelay(50);\n}\n\n")),(0,t.kt)("h2",{id:"video-explicativo"},"Video explicativo"),(0,t.kt)("p",null,"Este projeto foi feiro para colaborar no projeto Co.Lab da Red Hat, confira esse e outros na plataforma:",(0,t.kt)("a",{parentName:"p",href:"https://www.redhat.com/pt-br/colab-repo"},"https://www.redhat.com/pt-br/colab-repo")),(0,t.kt)("h3",{id:"colab--workshop-rob\xf3tica-educacional---aprenda-sobre-ci\xeancia-da-natureza-e-eletr\xf4nica-parte-1"},"Co.Lab | Workshop: Rob\xf3tica Educacional - Aprenda sobre Ci\xeancia da Natureza e Eletr\xf4nica (Parte 1)"),(0,t.kt)("iframe",{width:"100%",height:"422",src:"https://www.youtube.com/embed/wGXmITj9mHE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,t.kt)("h3",{id:"colab--workshop-rob\xf3tica-educacional---aprenda-sobre-ci\xeancia-da-natureza-e-eletr\xf4nica-parte-2"},"Co.Lab | Workshop: Rob\xf3tica Educacional - Aprenda sobre Ci\xeancia da Natureza e Eletr\xf4nica (Parte 2)"),(0,t.kt)("iframe",{width:"100%",height:"422",src:"https://www.youtube.com/embed/ANmRyWnvq4U",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,t.kt)("h2",{id:"refer\xeancia"},"Refer\xeancia"),(0,t.kt)("p",null," ",(0,t.kt)("a",{parentName:"p",href:"https://create.arduino.cc/projecthub/Mako_/arduino-sunflower-c4fd84"},"Arduino Sunflower")),(0,t.kt)("table",null,(0,t.kt)("thead",{parentName:"table"},(0,t.kt)("tr",{parentName:"thead"},(0,t.kt)("th",{parentName:"tr",align:null},"Autor"),(0,t.kt)("th",{parentName:"tr",align:null},"Diana Santos"))),(0,t.kt)("tbody",{parentName:"table"},(0,t.kt)("tr",{parentName:"tbody"},(0,t.kt)("td",{parentName:"tr",align:null},"Data:"),(0,t.kt)("td",{parentName:"tr",align:null},"22/01/2022")))))}p.isMDXComponent=!0},3190:(e,a,o)=>{o.d(a,{Z:()=>r});const r=o.p+"assets/images/girassol-atualizado-8574b109211295db7d1d61b5f40e69e8.png"}}]);