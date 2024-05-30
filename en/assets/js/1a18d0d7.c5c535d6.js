"use strict";(self.webpackChunkFranzininho=self.webpackChunkFranzininho||[]).push([[2316],{67808:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>t,toc:()=>l});var a=i(17624),s=i(4552);const r={id:"micropython-dht11",title:"DHT11 - Sensor de temperatura e umidade",slug:"/franzininho-wifi/exemplos-micropython/dht11",description:"Aprenda como monitorar temperatura e umidade em tempo real utilizando MicroPython. Descubra os recursos do sensor DHT11 e como utiliz\xe1-los com um display OLED.",author:"Sthefania Fernandes"},o=void 0,t={id:"FranzininhoWifi/exemplos-micropython/micropython-dht11",title:"DHT11 - Sensor de temperatura e umidade",description:"Aprenda como monitorar temperatura e umidade em tempo real utilizando MicroPython. Descubra os recursos do sensor DHT11 e como utiliz\xe1-los com um display OLED.",source:"@site/docs/FranzininhoWifi/exemplos-micropython/DHT11.md",sourceDirName:"FranzininhoWifi/exemplos-micropython",slug:"/franzininho-wifi/exemplos-micropython/dht11",permalink:"/en/docs/franzininho-wifi/exemplos-micropython/dht11",draft:!1,unlisted:!1,editUrl:"https://github.com/Franzininho/docs-franzininho-site/edit/main/docs/FranzininhoWifi/exemplos-micropython/DHT11.md",tags:[],version:"current",frontMatter:{id:"micropython-dht11",title:"DHT11 - Sensor de temperatura e umidade",slug:"/franzininho-wifi/exemplos-micropython/dht11",description:"Aprenda como monitorar temperatura e umidade em tempo real utilizando MicroPython. Descubra os recursos do sensor DHT11 e como utiliz\xe1-los com um display OLED.",author:"Sthefania Fernandes"},sidebar:"docs",previous:{title:"Display OLED",permalink:"/en/docs/franzininho-wifi/exemplos-micropython/display-oled"},next:{title:"Fotoc\xe9lula",permalink:"/en/docs/franzininho-wifi/exemplos-micropython/rgb-ldr"}},d={},l=[{value:"Introdu\xe7\xe3o",id:"introdu\xe7\xe3o",level:2},{value:"Sensor DTH11",id:"sensor-dth11",level:2},{value:"Recursos necess\xe1rios",id:"recursos-necess\xe1rios",level:2},{value:"Upload da biblioteca OLED com o Thonny IDE",id:"upload-da-biblioteca-oled-com-o-thonny-ide",level:3},{value:"C\xf3digo",id:"c\xf3digo",level:2},{value:"Conclus\xe3o",id:"conclus\xe3o",level:2}];function c(e){const n={code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"introdu\xe7\xe3o",children:"Introdu\xe7\xe3o"}),"\n",(0,a.jsx)(n.p,{children:"Neste artigo, exploraremos como utilizar o sensor DHT11, presente na Franzininho WiFi Lab01, em conjunto com um display OLED para criar um sistema de monitoramento de temperatura em tempo real utilizando MicroPython."}),"\n",(0,a.jsx)(n.p,{children:"Detalharemos como os coletar dados de temperatura e umidade e, em seguida, exibir essas informa\xe7\xf5es no display OLED, juntamente da data e hora. O intuito \xe9 ter uma nova atualiza\xe7\xe3o a cada minuto para acompanhar as varia\xe7\xf5es do ambiente observado."}),"\n",(0,a.jsx)(n.h2,{id:"sensor-dth11",children:"Sensor DTH11"}),"\n",(0,a.jsx)(n.p,{children:"O sensor DHT11 \xe9 um dispositivo projetado para medir com precis\xe3o a temperatura e a umidade do ambiente, por meio de uma sa\xedda digital. Embutido em seu encapsulamento, h\xe1 um microcontrolador de 8 bits, que contribui para a alta performance do m\xf3dulo."}),"\n",(0,a.jsx)(n.p,{children:"A principal caracter\xedstica do DHT11 \xe9 o elemento resistivo NTC, que \xe9 respons\xe1vel pela medi\xe7\xe3o precisa da temperatura. Com isso, o sensor demonstra uma resposta r\xe1pida \xe0s varia\xe7\xf5es ambientais, al\xe9m de possuir uma \xf3tima capacidade de resistir a interfer\xeancias externas."}),"\n",(0,a.jsx)(n.p,{children:"O dispositivo opera em uma faixa de medi\xe7\xe3o de temperatura de 0 a 50\xbaC e em uma faixa de umidade de 20 a 80%."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:i(70052).c+"",width:"194",height:"250"})}),"\n",(0,a.jsx)(n.p,{children:"Figura 1 \u2013 Sensor DHT11"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:i(95776).c+"",width:"800",height:"640"})}),"\n",(0,a.jsx)(n.p,{children:"Figura 2 \u2013 Localiza\xe7\xe3o do sensor DHT11 na Franzininho WiFi Lab01"}),"\n",(0,a.jsx)(n.h2,{id:"recursos-necess\xe1rios",children:"Recursos necess\xe1rios"}),"\n",(0,a.jsx)(n.p,{children:"Para iniciar o trabalho com os GPIOs, \xe9 essencial possuir o diagrama de pinos da placa \xe0 disposi\xe7\xe3o, pois isso permitir\xe1 que voc\xea identifique tanto os nomes quanto as fun\xe7\xf5es associadas a cada um deles."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Pino"}),(0,a.jsx)(n.th,{children:"Recurso"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"IO1"}),(0,a.jsx)(n.td,{children:"LDR"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"IO2"}),(0,a.jsx)(n.td,{children:"BT6"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"IO3"}),(0,a.jsx)(n.td,{children:"BT5"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"IO4"}),(0,a.jsx)(n.td,{children:"BT4"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"IO5"}),(0,a.jsx)(n.td,{children:"BT3"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"IO6"}),(0,a.jsx)(n.td,{children:"BT2"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"IO7"}),(0,a.jsx)(n.td,{children:"BT1"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"IO8"}),(0,a.jsx)(n.td,{children:"OLED_SDA"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"IO9"}),(0,a.jsx)(n.td,{children:"OLED_SCL"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"IO10"}),(0,a.jsx)(n.td,{children:"TFT_DC"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"IO11"}),(0,a.jsx)(n.td,{children:"TFT_RES"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"IO12"}),(0,a.jsx)(n.td,{children:"LED AZUL"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"IO13"}),(0,a.jsx)(n.td,{children:"LED VERDE"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"IO14"}),(0,a.jsx)(n.td,{children:"LED VERMELHO"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"IO15"}),(0,a.jsx)(n.td,{children:"DHT11"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"IO17"}),(0,a.jsx)(n.td,{children:"BUZZER"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"IO35"}),(0,a.jsx)(n.td,{children:"TFT_SDA"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"IO36"}),(0,a.jsx)(n.td,{children:"TFT_SCL"})]})]})]}),"\n",(0,a.jsx)(n.p,{children:"Tabela 1 \u2013 Franzininho WiFi Lab01 pinout"}),"\n",(0,a.jsx)(n.h3,{id:"upload-da-biblioteca-oled-com-o-thonny-ide",children:"Upload da biblioteca OLED com o Thonny IDE"}),"\n",(0,a.jsx)(n.p,{children:"A biblioteca para escrever no display OLED n\xe3o faz parte da biblioteca padr\xe3o do MicroPython. Portanto, voc\xea precisa fazer o upload da biblioteca na sua placa Franzininho WiFi para poder utiliz\xe1-la."}),"\n",(0,a.jsx)(n.p,{children:"Para adicionar a biblioteca usando o Thonny IDE, siga os passos abaixo:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Crie um novo arquivo no Thonny e copie o c\xf3digo da biblioteca:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:"#MicroPython SSD1306 OLED driver, I2C and SPI interfaces created by Adafruit\n\nimport time\nimport framebuf\n\n# register definitions\nSET_CONTRAST        = const(0x81)\nSET_ENTIRE_ON       = const(0xa4)\nSET_NORM_INV        = const(0xa6)\nSET_DISP            = const(0xae)\nSET_MEM_ADDR        = const(0x20)\nSET_COL_ADDR        = const(0x21)\nSET_PAGE_ADDR       = const(0x22)\nSET_DISP_START_LINE = const(0x40)\nSET_SEG_REMAP       = const(0xa0)\nSET_MUX_RATIO       = const(0xa8)\nSET_COM_OUT_DIR     = const(0xc0)\nSET_DISP_OFFSET     = const(0xd3)\nSET_COM_PIN_CFG     = const(0xda)\nSET_DISP_CLK_DIV    = const(0xd5)\nSET_PRECHARGE       = const(0xd9)\nSET_VCOM_DESEL      = const(0xdb)\nSET_CHARGE_PUMP     = const(0x8d)\n\n\nclass SSD1306:\n    def __init__(self, width, height, external_vcc):\n        self.width = width\n        self.height = height\n        self.external_vcc = external_vcc\n        self.pages = self.height // 8\n        # Note the subclass must initialize self.framebuf to a framebuffer.\n        # This is necessary because the underlying data buffer is different\n        # between I2C and SPI implementations (I2C needs an extra byte).\n        self.poweron()\n        self.init_display()\n\n    def init_display(self):\n        for cmd in (\n            SET_DISP | 0x00, # off\n            # address setting\n            SET_MEM_ADDR, 0x00, # horizontal\n            # resolution and layout\n            SET_DISP_START_LINE | 0x00,\n            SET_SEG_REMAP | 0x01, # column addr 127 mapped to SEG0\n            SET_MUX_RATIO, self.height - 1,\n            SET_COM_OUT_DIR | 0x08, # scan from COM[N] to COM0\n            SET_DISP_OFFSET, 0x00,\n            SET_COM_PIN_CFG, 0x02 if self.height == 32 else 0x12,\n            # timing and driving scheme\n            SET_DISP_CLK_DIV, 0x80,\n            SET_PRECHARGE, 0x22 if self.external_vcc else 0xf1,\n            SET_VCOM_DESEL, 0x30, # 0.83*Vcc\n            # display\n            SET_CONTRAST, 0xff, # maximum\n            SET_ENTIRE_ON, # output follows RAM contents\n            SET_NORM_INV, # not inverted\n            # charge pump\n            SET_CHARGE_PUMP, 0x10 if self.external_vcc else 0x14,\n            SET_DISP | 0x01): # on\n            self.write_cmd(cmd)\n        self.fill(0)\n        self.show()\n\n    def poweroff(self):\n        self.write_cmd(SET_DISP | 0x00)\n\n    def contrast(self, contrast):\n        self.write_cmd(SET_CONTRAST)\n        self.write_cmd(contrast)\n\n    def invert(self, invert):\n        self.write_cmd(SET_NORM_INV | (invert & 1))\n\n    def show(self):\n        x0 = 0\n        x1 = self.width - 1\n        if self.width == 64:\n            # displays with width of 64 pixels are shifted by 32\n            x0 += 32\n            x1 += 32\n        self.write_cmd(SET_COL_ADDR)\n        self.write_cmd(x0)\n        self.write_cmd(x1)\n        self.write_cmd(SET_PAGE_ADDR)\n        self.write_cmd(0)\n        self.write_cmd(self.pages - 1)\n        self.write_framebuf()\n\n    def fill(self, col):\n        self.framebuf.fill(col)\n\n    def pixel(self, x, y, col):\n        self.framebuf.pixel(x, y, col)\n\n    def scroll(self, dx, dy):\n        self.framebuf.scroll(dx, dy)\n\n    def text(self, string, x, y, col=1):\n        self.framebuf.text(string, x, y, col)\n\n\nclass SSD1306_I2C(SSD1306):\n    def __init__(self, width, height, i2c, addr=0x3c, external_vcc=False):\n        self.i2c = i2c\n        self.addr = addr\n        self.temp = bytearray(2)\n        # Add an extra byte to the data buffer to hold an I2C data/command byte\n        # to use hardware-compatible I2C transactions.  A memoryview of the\n        # buffer is used to mask this byte from the framebuffer operations\n        # (without a major memory hit as memoryview doesn't copy to a separate\n        # buffer).\n        self.buffer = bytearray(((height // 8) * width) + 1)\n        self.buffer[0] = 0x40  # Set first byte of data buffer to Co=0, D/C=1\n        self.framebuf = framebuf.FrameBuffer1(memoryview(self.buffer)[1:], width, height)\n        super().__init__(width, height, external_vcc)\n\n    def write_cmd(self, cmd):\n        self.temp[0] = 0x80 # Co=1, D/C#=0\n        self.temp[1] = cmd\n        self.i2c.writeto(self.addr, self.temp)\n\n    def write_framebuf(self):\n        # Blast out the frame buffer using a single I2C transaction to support\n        # hardware I2C interfaces.\n        self.i2c.writeto(self.addr, self.buffer)\n\n    def poweron(self):\n        pass\n\n\nclass SSD1306_SPI(SSD1306):\n    def __init__(self, width, height, spi, dc, res, cs, external_vcc=False):\n        self.rate = 10 * 1024 * 1024\n        dc.init(dc.OUT, value=0)\n        res.init(res.OUT, value=0)\n        cs.init(cs.OUT, value=1)\n        self.spi = spi\n        self.dc = dc\n        self.res = res\n        self.cs = cs\n        self.buffer = bytearray((height // 8) * width)\n        self.framebuf = framebuf.FrameBuffer1(self.buffer, width, height)\n        super().__init__(width, height, external_vcc)\n\n    def write_cmd(self, cmd):\n        self.spi.init(baudrate=self.rate, polarity=0, phase=0)\n        self.cs.high()\n        self.dc.low()\n        self.cs.low()\n        self.spi.write(bytearray([cmd]))\n        self.cs.high()\n\n    def write_framebuf(self):\n        self.spi.init(baudrate=self.rate, polarity=0, phase=0)\n        self.cs.high()\n        self.dc.high()\n        self.cs.low()\n        self.spi.write(self.buffer)\n        self.cs.high()\n\n    def poweron(self):\n        self.res.high()\n        time.sleep_ms(1)\n        self.res.low()\n        time.sleep_ms(10)\n        self.res.high()\n"})}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Acesse Arquivo > Salvar como e selecione o dispositivo MicroPython."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:i(70032).c+"",width:"318",height:"239"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Nomeie o arquivo como \u201cssd1306.py\u201d e clique em OK para salv\xe1-lo na placa."}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"E \xe9 apenas isso, a biblioteca foi carregada na sua placa. Agora, voc\xea pode usar suas funcionalidades no seu c\xf3digo, importando a biblioteca."}),"\n",(0,a.jsx)(n.h2,{id:"c\xf3digo",children:"C\xf3digo"}),"\n",(0,a.jsx)(n.p,{children:"Com a Franzininho WiFi Lab01 conectada ao seu computador, abra o Thonny e crie um novo arquivo contendo o c\xf3digo a seguir:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-python",children:'from machine import Pin, SoftI2C\nimport ssd1306, dht, framebuf, time\n\n# atribui\xe7\xe3o de pinos da Franzininho \ni2c = SoftI2C(scl=Pin(9), sda=Pin(8))\n\n# configurando display\noled_width = 128\noled_height = 64\noled = ssd1306.SSD1306_I2C(oled_width, oled_height, i2c)\n\n# criando s\xedmbolo para representar graus no display\ndegree = bytearray([0x00, 0x0e, 0x11, 0x11, 0x0e, 0x00, 0x00, 0x00])\nfb = framebuf.FrameBuffer(degree, 8, 8, framebuf.MONO_HLSB)\n\n# configurando DHT\nd = dht.DHT11(Pin(15))\n\nwhile True:\n    # coletando dados de umidade e temperatura\n    d.measure()\n    temperatura = d.temperature() # em \xb0C\n    umidade= d.humidity() # em % \n\n    temperatura_str="Temp: "+str(temperatura)\n    umidade_str="Umid: "+str(umidade)+" %"\n    \n    #coletando data e hora atual\n    current_time = time.localtime()\n    formatted_time = "{:02d}/{:02d}/{} {:02d}:{:02d}".format(current_time[2], current_time[1], current_time[0], current_time[3], current_time[4])\n\n    # limpa display\n    oled.fill(0)\n    \n    # exibi\xe7\xe3o no display\n    oled.text(formatted_time, 0, 0)\n    oled.framebuf.blit(fb, 63, 20)\n    oled.text(temperatura_str+ " " + "C", 0, 25)\n    oled.text(umidade_str, 0, 40)\n    oled.show()\n    time.sleep(60)\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Vamos come\xe7ar com \u201c",(0,a.jsx)(n.code,{children:"from machine import Pin, SoftI2C"}),"\u201c. Para poder ser acessado os pinos da placa e utilizar a comunica\xe7\xe3o I2C para configurar o display. Al\xe9m disso, importe a biblioteca \u201c",(0,a.jsx)(n.code,{children:"ssd1306"}),"\u201d, que foi previamente instalada na sua placa, e framebuf para utilizar o display oled."]}),"\n",(0,a.jsxs)(n.p,{children:["Tamb\xe9m \xe9 preciso importar a biblioteca \u201c",(0,a.jsx)(n.code,{children:"dht"}),"\u201d para trabalhar com o sensor DHT11 e \u201c",(0,a.jsx)(n.code,{children:"time"}),"\u201d para adicionar atrasos ao programa."]}),"\n",(0,a.jsxs)(n.p,{children:["De acordo com a tabela de pinagem, os pinos SCL e SDA do OLED s\xe3o os pinos 9 e 8, respectivamente. Assim, o I2C \xe9 configurado. Em seguida, definimos a largura e altura do display, que no caso s\xe3o 128\xd764. Com todas essas informa\xe7\xf5es, crie uma vari\xe1vel chamada \u2018",(0,a.jsx)(n.code,{children:"oled"}),"\u2018 para controlar o display. Esta vari\xe1vel recebe a largura e altura do OLED, bem como os pinos I2C que definimos anteriormente."]}),"\n",(0,a.jsx)(n.p,{children:"O display \xe9 utilizado para exibir a temperatura e a umidade medidos pelo sensor, e tamb\xe9m a data e hora atual. No entanto, o display n\xe3o \xe9 compat\xedvel com o s\xedmbolo de grau (\xba) de temperatura, por essa raz\xe3o foi preciso criar o s\xedmbolo utilizando um bitmap."}),"\n",(0,a.jsx)(n.p,{children:"Com o pino do dht configurado, dentro do loop, iniciamos a coleta da temperatura e da umidade local. Em seguida, o valor medido \xe9 convertido em string para ser poss\xedvel exibir no display."}),"\n",(0,a.jsxs)(n.p,{children:["Para obter a data e hora atuais, utilizamos a fun\xe7\xe3o \u2018localtime\u2019 da biblioteca \u201ctime\u201d, que retorna o ano, m\xeas, dia, hora, minuto, segundo, dia da semana (variando de 0 a 6, onde 0 \xe9 segunda-feira e 6 \xe9 domingo) e o dia do ano (varia de 1 a 366). Para apresentar essas informa\xe7\xf5es no formato comum, foi criada a vari\xe1vel \u2018",(0,a.jsx)(n.code,{children:"formatted_time"}),"\u2018 que organiza a data e hora no formato \u2018",(0,a.jsx)(n.code,{children:"dd/mm/aaaa, hh:mm"}),"\u2018"]}),"\n",(0,a.jsx)(n.p,{children:"Assim, a exibi\xe7\xe3o no display inicia com a data e hora atuais, seguidas pelas leituras de temperatura e umidade. O bitmap que representa o s\xedmbolo de grau (\xb0) \xe9 inserido entre o valor da temperatura e a unidade de medida Celsius (\xb0C)."}),"\n",(0,a.jsx)(n.p,{children:"A cada 60 segundos, as medi\xe7\xf5es de temperatura e umidade s\xe3o atualizadas e exibidas novamente no display. Para garantir que a nova informa\xe7\xe3o seja exibida corretamente, o display \xe9 limpo antes de cada atualiza\xe7\xe3o."}),"\n",(0,a.jsx)(n.p,{children:"A sa\xedda do display \xe9 a mostrada na abaixo:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:i(30164).c+"",width:"600",height:"450"})}),"\n",(0,a.jsx)(n.p,{children:"Figura 3 \u2013 Sa\xedda do display."}),"\n",(0,a.jsx)(n.h2,{id:"conclus\xe3o",children:"Conclus\xe3o"}),"\n",(0,a.jsx)(n.p,{children:"Neste artigo, vimos como coletar medi\xe7\xf5es de temperatura e umidade com o sensor DHT11 e como apresentar essas informa\xe7\xf5es de maneira eficaz em um display OLED. Al\xe9m disso, integramos a exibi\xe7\xe3o da data e hora atual, criando um sistema completo de monitoramento ambiental em tempo real com MicroPython."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Autor"}),(0,a.jsx)(n.th,{children:"Sthefania Fernandes"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Data:"}),(0,a.jsx)(n.td,{children:"17/11/2023"})]})})]})]})}function m(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},70052:(e,n,i)=>{i.d(n,{c:()=>a});const a=i.p+"assets/images/1-dht11-545173243c9494791d1a6462e545b8af.png"},95776:(e,n,i)=>{i.d(n,{c:()=>a});const a=i.p+"assets/images/2-dht11-lab01-19ce984820d7520c0df784191bcac53d.webp"},70032:(e,n,i)=>{i.d(n,{c:()=>a});const a="data:image/webp;base64,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"},30164:(e,n,i)=>{i.d(n,{c:()=>a});const a=i.p+"assets/images/4-resultado-1c97cbf0e6468363608ce84db84ceb61.jpeg"},4552:(e,n,i)=>{i.d(n,{I:()=>t,M:()=>o});var a=i(11504);const s={},r=a.createContext(s);function o(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);