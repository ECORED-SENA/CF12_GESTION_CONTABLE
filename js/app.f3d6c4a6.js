(function(e){function a(a){for(var o,i,c=a[0],l=a[1],s=a[2],d=0,u=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&u.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);m&&m(a);while(u.length)u.shift()();return t.push.apply(t,s||[]),n()}function n(){for(var e,a=0;a<t.length;a++){for(var n=t[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==r[c]&&(o=!1)}o&&(t.splice(a--,1),e=l(l.s=n[0]))}return e}var o={},i={app:0},r={app:0},t=[];function c(e){return l.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"0bccb555","chunk-0206bfa0":"437d143f","chunk-04b93936":"fd16ded1","chunk-13a6037e":"2a75b727","chunk-16015154":"41ea4cf0","chunk-17977988":"37b64e3d","chunk-2c06842c":"2adc65bc","chunk-2d208d90":"87e5662c","chunk-2d21d0e2":"f106e4d2","chunk-2d22c123":"359613c1","chunk-2e80bb9a":"837a5b81","chunk-3145fe0f":"81cad3e6","chunk-328f70dd":"44333403","chunk-3807499c":"d2010add","chunk-3c94cd2f":"5f6bc2c6","chunk-3dc647fd":"561691fc","chunk-4cdd78c0":"7c0e3d39","chunk-515a8379":"bc0ecfc8","chunk-53ccb27e":"e17296c9","chunk-59974754":"1b5cf5ea","chunk-766a929b":"d79bc69c","chunk-839300a6":"69333345","chunk-c796899c":"731c2a63",comple:"9fab02ca",creditos:"6a35bd21",glosario:"9d6a2d9b",intro:"472b2bab",referencias:"0d49b598",tema1:"be042a7b",tema2:"47438670",tema3:"fc853e3b"}[e]+".js"}function l(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.e=function(e){var a=[],n={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3c94cd2f":1,"chunk-3dc647fd":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3c94cd2f":"1dbe8d4a","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"0459bc8c","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"49fc7758","chunk-766a929b":"239be14b","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0",comple:"e2f65924",creditos:"28468235",glosario:"096bdd61",intro:"0e433876",referencias:"e7d3f467",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",r=l.p+o,t=document.getElementsByTagName("link"),c=0;c<t.length;c++){var s=t[c],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===o||d===r))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){s=u[c],d=s.getAttribute("data-href");if(d===o||d===r)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var o=a&&a.target&&a.target.src||r,t=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");t.code="CSS_CHUNK_LOAD_FAILED",t.request=o,delete i[e],m.parentNode.removeChild(m),n(t)},m.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){i[e]=0})));var o=r[e];if(0!==o)if(o)a.push(o[2]);else{var t=new Promise((function(a,n){o=r[e]=[a,n]}));a.push(o[2]=t);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=c(e);var u=new Error;s=function(a){d.onerror=d.onload=null,clearTimeout(m);var n=r[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}r[e]=void 0}};var m=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(a)},l.m=e,l.c=o,l.d=function(e,a,n){l.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,a){if(1&a&&(e=l(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)l.d(n,o,function(a){return e[a]}.bind(null,o));return n},l.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(a,"a",a),a},l.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},l.p="",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=a,s=s.slice();for(var u=0;u<s.length;u++)a(s[u]);var m=d;t.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},r=[],t={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=t,l=n("2877"),s=Object(l["a"])(c,i,r,!1,null,null,null),d=s.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),m=n("8c4f"),p=n("ae58"),f=n("7e58");u["a"].use(m["a"]);var h=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),g=h,b=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Servicio al cliente",descripcionCurso:"En el ámbito empresarial y profesional es fundamental aplicar técnicas y herramientas de servicio al cliente, que satisfagan las necesidades y expectativas de los diferentes usuarios; por lo anterior, se trabajará la temática de servicio al cliente, donde se desarrolla su clasificación, tipología, técnicas de comunicación, etiqueta y protocolo empresarial, normatividad vigente y operación del servicio referente al manejo de información, solicitudes y respuestas.",imagenBannerPrincipal:n("ae0a"),fondoBannerPrincipal:n("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Políticas: normas y procedimientos del servicio",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Normatividad vigente aplicada al sector",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Portafolio de productos: características y tipos",hash:"t_1_2"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Servicio: definición, ciclo, triángulo, momentos de verdad, protocolo, procedimiento, normas técnicas, canales",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Cliente o usuario: definición, clasificación, tipología, características de población vulnerable",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Comunicación: definición, técnicas, tipos, expresión oral y escrita",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Etiqueta y protocolo empresarial: concepto, reglas, imagen corporativa, normas de cortesía",hash:"t_2_3"}]},{nombreRuta:"tema3",icono:"far fa-file-alt",numero:"3",titulo:"Operación del servicio",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"3.1",titulo:"Normas para el manejo de la información",hash:"t_3_1"},{icono:"far fa-file-alt",numero:"3.2",titulo:"Solicitudes – tipos",hash:"t_3_2"},{icono:"far fa-file-alt",numero:"3.3",titulo:"Planes de contingencia",hash:"t_3_3"},{icono:"far fa-file-alt",numero:"3.4",titulo:"Reportes de fallas",hash:"t_3_4"},{icono:"far fa-file-alt",numero:"3.5",titulo:"Respuesta: definición, técnicas, tiempo",hash:"t_3_5"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Abello, M. C., Abello, V., y Molina, H. (2016). Atención al cliente: Ciclo del servicio. [Gráfico].",link:"https://1.bp.blogspot.com/-4y0z4as4h-U/WAWYnuiQSUI/AAAAAAAAAJ0/biKAyFHT624wRCcbFQZsExtGqphyHFj7wCLcB/s1600/cooonc.png"},{referencia:"Albrecht, K. (1992). Triángulo del servicio [Esquema]. En La excelencia en el servicio. Legis Ltda."},{referencia:"Albrecht, K., y Bradford, L. J. (1992). La excelencia en el servicio. Legis Ltda."},{referencia:"Alcázar P. (2020). El cliente- relación empresa-cliente UT9.",link:"https://www.edebe.com/ciclosformativos/zona-publica/UT09_830030_LA_CEyAC_CAS.pdf"},{referencia:"Cámara de Comercio de Bogotá. (2010). Cartilla práctica. Etiqueta empresarial.",link:"https://bibliotecadigital.ccb.org.co/bitstream/handle/11520/1172/4614_cartilla_etiquetaempresarial.pdf?sequence=1&isAllowed=y"},{referencia:"Congreso de la República. (18 de octubre de 2012). Ley 1581 de 2012.",link:"http://www.secretariasenado.gov.co/senado/basedoc/ley_1581_2012.html"},{referencia:"Da Silva, D. (2020). Protocolo de atención y servicio al cliente: ¿qué es, por qué es importante para tu empresa, cómo hacerlo y cuáles son sus ventajas?",link:"https://www.zendesk.com.mx/blog/protocolo-de-atencion-al-cliente/"},{referencia:"Fórmate. (16 de agosto de 2017). 5 consejos y técnicas de comunicación con el cliente. ",link:"https://www.formate.es/blog/consejos/5-consejos-y-tecnicas-de-comunicacion-con-el-cliente/"},{referencia:"Martínez, M. (2013). Manual básico de protocolo empresarial y social. Díaz de Santos.",link:"http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=4043"},{referencia:"Ministerio de Comercio, Industria y Turismo. (27 de junio de 2013). Decreto 1377 de 2013.",link:"http://wsp.presidencia.gov.co/Normativa/Decretos/2013/Documents/JUNIO/27/DECRETO%201377%20DEL%2027%20DE%20JUNIO%20DE%202013.pdf"},{referencia:"Organización Internacional de Normalización. (2015). Sistemas de gestión de la calidad (ISO 9001).",link:"https://www.iso.org/obp/ui/#iso:std:iso:9001:ed-5:v1:es"},{referencia:"Pérez, O. (13 marzo de 2017). 5 reportes esenciales para mejorar el servicio a clientes.",link:"https://blog.nextup.com.mx/5-reportes-esenciales-para-mejorar-el-servicio-a-clientes"},{referencia:"Pérez, P., y Merino, M. (2021). Definición de protocolo.",link:"https://definicion.de/protocolo/"},{referencia:"Prieto, J. E. (2018). Esquema de un momento de verdad [Esquema]. Gerencia del servicio: La clave para ganar todos. ",link:"https://www.ecoeediciones.com/wp-content/uploads/2018/03/Gerencia-del-servicio-4ed.pdf"},{referencia:"Prieto, J. E. (2018). Gerencia del servicio: la clave para ganar todos. (4 ed.) [Libro electrónico]. ECOE Ediciones. ",link:"https://www.ecoeediciones.com/wp-content/uploads/2018/03/Gerencia-del-servicio-4ed.pdf"},{referencia:"Thompson, I. (2006). Tipos de clientes.",link:"https://www.promonegocios.net/clientes/tipos-clientes.html#:%7E:text=%2D%20Clasificaci%C3%B3n%20Espec%C3%ADfica%3A&text=Clasificaci%C3%B3n%20de%20los%20Clientes%20Actuales,satisfacci%C3%B3n%20y%20grado%20de%20influencia."},{referencia:"Villanueva, R. (2017). Comunicación y atención al cliente en hostelería y turismo. IC Editorial. ",link:"http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=8742"},{referencia:"WTS. (16 julio de 2019). El tiempo de respuesta al cliente, vital en una venta. Way to Success. ",link:"https://www.wtseo.co/la-importancia-del-tiempo-respuesta-al-cliente/"}],glosario:[{termino:"Atención al cliente",significado:"las acciones que se ejecutan para satisfacer necesidades y expectativas."},{termino:"Calidad",significado:"conjunto de características relacionadas con la capacidad de satisfacer expectativas."},{termino:"Ciclo de servicio",significado:"herramienta secuencial de pasos lógicos donde existen interacciones que muestran el inicio del proceso, puntos de contactos denominados momentos de la verdad y el final del ciclo."},{termino:"Cliente",significado:"persona que adquiere productos o servicios."},{termino:"Comunicación",significado:"intercambio de información entre dos o más personas, con el fin de comunicar un mensaje."},{termino:"Etiqueta",significado:"normas y directrices aplicables en diferentes escenarios."},{termino:"ISO",significado:"International Organization for Standardization. Organismo emisor de normas internacionales enfocadas a la calidad, seguridad y eficiencia de productos y servicios."},{termino:"Momentos de verdad",significado:"interacción que existe entre el cliente y la empresa. Se presentan una serie de actividades y/o acciones con el fin de adquirir el producto o servicio, como resultado se generan momentos negativos o positivos de acuerdo con la percepción del cliente y originadas por la experiencia obtenida desde que realizó contacto con la empresa."},{termino:"Servicio",significado:"conjunto de actividades que se realizan para satisfacer las necesidades de los clientes desde que realiza contacto con la empresa hasta finalizar el ciclo del servicio."}],complementario:[{texto:"Gerencia del servicio.\tPrieto, J. (2018). Gerencia del servicio. (4a. ed.). Ecoe Ediciones. ",tipo:"Capítulo I, II, III",link:"http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=6320"},{texto:"Política de Atención al Cliente - Pymerang.\tUgalde, R., A., (16 de septiembre de 2019) Política de Atención al Cliente. Pymerang.com",tipo:"Página web",link:"http://www.pymerang.com/direccion-de-negocios/1003-cuando-la-responsabilidad-social-mejora-el-servicio-al-cliente"},{texto:"Métricas e indicadores para la gestión de servicios ITL.\tFernández, P., J. L. (14 de septiembre de 2019). Midiendo ITIL, métricas e indicadores para la gestión de servicios ITL. Proactivanet.com",tipo:"Página web",descarga:"/downloads/Metricas_ITIL.pdf"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Patricia Mantilla Galvis",cargo:"Instructora",centro:"Centro de Servicios Financieros - Regional Distrito Capital"},{nombre:"Maryuri Agudelo Franco",cargo:"Diseñadora instruccional",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Vilma Lucía Perilla M.",cargo:"Revisora metodológica y pedagógica",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"José Gabriel Ortiz Abella",cargo:"Corrector de estilo",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Marcela Gonzalez Gómez",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Jorge Leonardo Camacho Pardo",cargo:"Desarrollo Front-End",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Ángela María Maldonado Jaime",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"John Jairo Arciniegas González",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Víctor Raúl Cárdenas Cáceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy Maria Ruiz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Jenny Paola Montillo Gélvez",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});o["a"].prototype.$config=v;var y=n("9224");o["a"].prototype.$package=y,new o["a"]({router:g,store:b["a"],render:function(e){return e(d)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.0.3","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,a,n){e.exports=n.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,n){},ae0a:function(e,a,n){e.exports=n.p+"img/banner-princiapal.9e76671c.svg"},e6b0:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.1a23e7aa.png"}});
//# sourceMappingURL=app.f3d6c4a6.js.map