<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Operación del servicio
    p En la operación del servicio al cliente se tienen en cuenta los diferentes procesos para dar respuesta a las diferentes necesidades de los usuarios, aunado a ello, se realiza medición de cada uno de estos con el fin de diseñar e implementar acciones de mejora continua.
    separador


    #t_3_1.titulo-segundo
      h2 3.1 Normas para el manejo de la información
    p Dentro del marco normativo para la protección de datos está la Ley 1581 de 2012, la cual expresa:          

    .crd_01.mb-5
      .crd_01__icon
        img(src="@/assets/tema3/img-1.svg", alt="alt").class          
      .crd_01__txt.m-4
        p #[strong Artículo 1°. Objeto.] La presente ley tiene por objeto desarrollar el derecho constitucional que tienen todas las personas a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bases de datos o archivos, y los demás derechos, libertades y garantías constitucionales a que se refiere el artículo 15 de la Constitución Política; así como el derecho a la información consagrado en el artículo 20 de la misma. (Congreso de la República, 2012).

    .crd_01.mb-5
      .crd_01__icon
        img(src="@/assets/tema3/img-1.svg", alt="alt").class          
      .crd_01__txt.m-4
        p #[strong Artículo 2°. Ámbito de aplicación.] Los principios y disposiciones contenidas en la presente ley serán aplicables a los datos personales registrados en cualquier base de datos que los haga susceptibles de tratamiento por entidades de naturaleza pública o privada. La presente ley aplicará al tratamiento de datos personales efectuado en territorio colombiano o cuando al responsable del tratamiento o encargado del tratamiento no establecido en territorio nacional le sea aplicable la legislación colombiana en virtud de normas y tratados internacionales. (Congreso de la República, 2012).      
    br
    .row.justify-content-around.align-items-center.mb-5
      .col-lg-10.justify-content-md-center.align-self-center
        .tarjeta.color-primario.mb-5.fond1.px-4.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/tema1/img-5.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.mb-1.texto-blanco Para ampliar los lineamientos aplicables es importante revisar la norma vigente; para ello se recomienda explorar el siguiente enlace:
                  
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('http://www.secretariasenado.gov.co/senado/basedoc/ley_1581_2012.html')" target="_blank")
                    span.px-4 Ver  
                    i.fas.fa-link    

    .cajon.color-primario.p-4.m-4.fondo5.mb-5

        p.mt-5 De igual forma, el Decreto 1377 de 2013, establece directrices para el tratamiento y protección de datos, la cual reglamenta parcialmente la Ley 1581 de 2012, que dice:
        p.m-l #[span(style="margin.left:5px;")  ]  Que mediante la Ley 1581 de 2012 se expidió el Régimen General de Protección de Datos Personales, el cual, de conformidad con su artículo 1, tiene por objeto "( .. .) desarrollar el derecho constitucional que tienen todas las personas a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre ellas en bases de datos o archivos, y los demás derechos, libertades y garantías constitucionales a que se refiere el artículo 15 de la Constitución Política; así como el derecho a la información consagrado en el artículo 20 de la misma” (Ministerio de Comercio, Industria y Turismo, 2013).
        p.m-l Que la Ley 1581 de 2012 constituye el marco general de la protección de los datos personales en Colombia (Ministerio de Comercio, Industria y turismo, 2013).
        p.m-l Que mediante sentencia C-748 del 6 de octubre de 2011 la Corte Constitucional declaró exequible el Proyecto de Ley Estatutaria No. 184 de 2010 Senado, 046 de 2010 Cámara (Ministerio de Comercio, Industria y Turismo, 2013).
        p.m-l Que con el fin de facilitar la implementación y cumplimiento de la Ley 1581 de 2012 se deben reglamentar aspectos relacionados con la autorización del Titular de información para el Tratamiento de sus datos personales, las políticas de Tratamiento de los Responsables y Encargados, el ejercicio de los derechos de los Titulares de información, las transferencias de datos personales y la responsabilidad demostrada frente al Tratamiento de datos personales, este último tema referido a la rendición de cuentas. 
        p.m-l En virtud de lo expuesto:
        p.m-l.text-bold DECRETA
        p.m-l.text-bold CAPÍTULO 1. DISPOSICIONES GENERALES
        p.m-l #[strong Artículo 1. Objeto.] El presente Decreto tiene como objeto reglamentar parcialmente la Ley 1581 de 2012, por la cual se dictan disposiciones generales para la protección de datos personales (Ministerio de Comercio, Industria y Turismo, 2013).
        p Actualmente existe la Ley de Protección de Datos, que tiene como objetivo proteger el derecho de las personas a conocer, actualizar y rectificar su información; por lo tanto, es importante que las empresas conozcan y apliquen las directrices dadas en estas sobre el tratamiento de la información de los clientes. Cabe resaltar que el incumplimiento de la Ley acarrea sanciones, multas y cierre temporal o definitivo de las operaciones.

    p Una vez analizada y revisada la norma aplicable, es importante tener en cuenta las políticas internas en cuanto a archivo y documentación de la información relacionada con los clientes donde se tenga en cuenta:

    .row.justify-content-around.p-5  
      .col-12.col-lg-auto.justify-content-md-center.mb-4  
        figure
          img(src='@/assets/tema3/img-2.svg', alt='')  

      .col-lg.justify-content-md-center
        .ul.lista-ul--color
              li 
                i.fas.fa-check
                p Generar copias de seguridad.
              li 
                i.fas.fa-check
                p Normas de conservación de documentos.
              li 
                i.fas.fa-check
                p Directrices de seguridad de la información.
              li 
                i.fas.fa-check
                p Organización de los documentos para fácil acceso.
              li 
                i.fas.fa-check
                p Identificación de la información para su consulta

    #t_3_2.titulo-segundo
      h2 3.2 Solicitudes – tipos
    p En el desarrollo de las actividades empresariales y en atención del objeto social, se presentan diversas solicitudes de los clientes; por ello, es importante que se encuentre diseñado el manual de políticas, que expresen las directrices que se deben de tener en cuenta en un proceso determinado.       
    p.mb-0 Dentro de las solicitudes de los clientes encontramos:
    .row.p-5  
      .col-4
        
        .ul.lista-ul--color
              li 
                i.fas.fa-check
                p Peticiones.
              li 
                i.fas.fa-check
                p Quejas.
              li 
                i.fas.fa-check
                p Reclamos.
              li 
                i.fas.fa-check
                p Denuncia.
              li 
                i.fas.fa-check
                p Consulta.
              li 
                i.fas.fa-check
                p Felicitaciones.
              li 
                i.fas.fa-check
                p Sugerencias.
              li 
                i.fas.fa-check
                p Devoluciones.
        
      .col-12.col-lg-auto.mb-4.aling-items-start
        figure
          img(src='@/assets/tema3/img-3.svg', alt='')  
    separador
    #t_3_3.titulo-segundo
      h2 3.3 Planes de contingencia
    p El plan de contingencia relaciona las medidas que debe tener en cuenta la empresa para garantizar la atención de los clientes y cumplir con los requerimientos y solicitudes de acuerdo con los eventos presentados; por ello, la organización debe mantener los planes en caso de algún tipo de riesgo o eventualidad.
    separador

    #t_3_4.titulo-segundo
      h2 3.4 Reportes de fallas
    p Para ofrecer un excelente servicio al cliente, atendiendo las necesidades y expectativas en pro de superarlas, se requiere diseñar un plan que relacione la identificación de las fallas y las estrategias pertinentes para cada una, con el fin de mejorar continuamente los procesos y lograr los objetivos propuestos.
    p Cabe resaltar que las tecnologías de la información contribuyen al fortalecimiento de este proceso, teniendo en cuenta que presentan herramientas ofimáticas para realizar el seguimiento y control a las fallas presentadas en un tiempo determinado. Dentro de este proceso es fundamental que la empresa determine sus características, causas, consecuencias, soluciones y tiempo de respuesta.
    p El factor tiempo y estructura de la respuesta contribuyen a fortalecer la interacción entre el cliente y la empresa, demostrando interés, responsabilidad y compromiso con las necesidades y expectativas de los clientes.
    p.mb-5 Algunos reportes que se deben analizar son:

    .row.justify-content-around.align-items-center.mb-5
      .col-lg-10.justify-content-md-center.align-self-center
        LineaTiempoD.color-primario
          .row.tar(numero="1" titulo="Preguntas frecuentes (FAQ)")
            .col-md-6.mb-4.mb-md-0
              p Se deben analizar las diferentes dudas e inquietudes de los clientes, con el fin de implementar estrategias de mejoramiento o tomar acciones correctivas. Algunas empresas diseñan un manual con preguntas frecuentes con el fin de anticiparse a las posibles preguntas de los clientes, esto garantiza atención de forma oportuna. 
              p Cabe resaltar que los colaboradores deben conocer muy bien cada uno de sus procesos para dar respuesta clara y concisa a las necesidades planteadas.

            .col-md-6
              figure
                img(src='@/assets/tema3/img-4.svg', alt='Texto que describa la imagen')
                
          .row.tar(numero="2" titulo="Listado de casos pendientes")
            .col-md-6.mb-4.mb-md-0
              p Se requiere seguimiento y monitoreo constante a los casos presentados con los clientes, teniendo en cuenta responder, oportunamente, dando una solución acorde a la necesidad con el fin de lograr la satisfacción del cliente y, por ende, su fidelización; no hay que olvidar que un caso no gestionado adecuadamente, genera malestar en el cliente, pérdida de este y disminución en los ingresos. 

            .col-md-6
              figure
                img.img-350(src='@/assets/tema3/img-5.svg', alt='Texto que describa la imagen') 
          

          .row.tar(numero="3" titulo="Tiempo de respuesta")
            .col-md-6.mb-4.mb-md-0.align-self-start
              p Deben implementarse indicadores que permitan monitorear la gestión de los casos por parte de los colaboradores; por ello, se requiere que se establezca un tiempo prudente para la atención de estos, cabe resaltar que se deben tener en cuenta el tipo de caso, sus características y el tiempo promedio de respuesta. 

            .col-md-6.align-self-start
              figure
                img.img-350(src='@/assets/tema3/img-6.svg', alt='Texto que describa la imagen')
          .row.tar(numero="4" titulo="Calificaciones o puntajes de tus colaboradores")
            .col-md-6.mb-4.mb-md-0
              p En las calificaciones de los colaboradores es importante analizar la percepción que tienen los clientes, esta información contribuye en el diseño de acciones correctivas, además que permite fortalecer las competencias y habilidades; por ello, es importante implementar encuestas de satisfacción que permitan identificar las debilidades y fortalezas de cada uno. 

            .col-md-6
              figure
                img.img-350(src='@/assets/tema3/img-7.svg', alt='Texto que describa la imagen')

          .row.tar(numero="5" titulo="Cantidad de casos recibidos")
            .col-md-6.mb-4.mb-md-0
              p Se debe analizar el número de reportes que se generan en un tiempo determinado, puede ser quincenal o mensual de acuerdo con la política establecida por la organización; esto permite identificar las solicitudes atendidas por los clientes internos y el cumplimiento de acuerdo con el tiempo acordado (Pérez, 2017).

            .col-md-6
              figure
                img.img-350(src='@/assets/tema3/img-8.svg', alt='Texto que describa la imagen')
    br
    #t_3_5.titulo-segundo
      h2 3.5 Respuesta: definición, técnicas, tiempo
    p A diario las organizaciones deben dar respuesta a los diferentes requerimientos y solicitudes de sus clientes; por ello, deben contar con personal que tenga suficiente experiencia en los procesos, productos y servicios para resolver oportunamente cualquier inquietud que se derive del desarrollo normal de las operaciones de la empresa.
    p.mb-5 Algunas técnicas que se tienen en cuenta para llevar a cabo el proceso de forma satisfactoria son:
    .row.justify-content-around.align-items-center.mb-3
      .col-lg-10.justify-content-md-center.align-self-center
        .row
          .col-6
            .ul.lista-ul--color
              li 
                i.fas.fa-check
                p Escuchar atentamente al cliente.
              li 
                i.fas.fa-check
                p Analizar el caso y, en lo posible, otorgar una respuesta que resuelva la duda o inconvenientes.
              li 
                i.fas.fa-check
                p Evitar que el caso trascienda, para ello se debe dialogar y conciliar.
              li 
                i.fas.fa-check
                p Realizar llamadas telefónicas al cliente, si el caso lo requiere.
              li 
                i.fas.fa-check
                p Tener excelente actitud y disposición.

          .col-6
            .ul.lista-ul--color
              li 
                i.fas.fa-check
                p Aplicar principios y valores éticos.
              li 
                i.fas.fa-check
                p Tener en cuenta las políticas de la empresa.
              li 
                i.fas.fa-check
                p Registrar el caso y dar a conocer al cliente que su solicitud se encuentra en proceso.
              li 
                i.fas.fa-check
                p Soportar las respuestas otorgadas al cliente.
              li 
                i.fas.fa-check
                p Manejar un tiempo prudente para solución de casos y atender el cliente.


    p.mb-5 Para atender oportunamente las solicitudes, peticiones y requerimientos de los clientes es fundamental otorgar respuesta en el menor tiempo posible con el fin de lograr la satisfacción y fidelización de este. Por ello, existen técnicas de optimización de tiempo, entre las cuales figuran:                 


    .row.mb-5
      .col-6
        .row.px-4
         .crd_03.hr1
            .crd_03__icon.mx-4
              .cc1
                h1.cc3 1

            .crd_03__txt
            
              h4 Investigación de prospectos: 
              p Para ello se debe conocer el cliente, su comportamiento y características con el fin de determinar el tiempo justo de respuesta, lo que conducirá a fidelizar y aumentar clientes. 
             
         .crd_03.hr2
            .crd_03__icon.mx-4
              .cc1
                h1.cc3 2

            .crd_03__txt
            
              h4 Envío de mensajes por el canal idóneo: 
              p De acuerdo con el perfil de cliente, se observa cuál es el canal de comunicación más adecuado para proporcionar la información. 
         .crd_03.hr2
            .crd_03__icon.mx-4
              .cc1
                h1.cc3 3

            .crd_03__txt
            
              h4 Difundir mensajes en periodos de descanso: 
              p Se debe buscar el tiempo propicio para dar respuesta, teniendo en cuenta las diversas actividades que realizan los clientes a diario. 
              br


      .col-6
        .row
         .crd_03.hr1
            .crd_03__icon.mx-4
              .cc1
                h1.cc3 4

            .crd_03__txt
            
              h4 Adecuar la información a sus necesidades: 
              p Se trata de ser detallado y claro con la información que se suministra para anticiparse a los eventos y disminuir algún tipo de solicitud de los clientes.
         .crd_03.hr2
            .crd_03__icon.mx-4
              .cc1
                h1.cc3 5

            .crd_03__txt
            
              h4 Más planificación y organización: 
              p Se requiere planificación y organización para atender los requerimientos de los clientes en el tiempo justo, dando respuesta y solución a los mismos. 
         .crd_03.hr2
            .crd_03__icon.mx-4
              .cc1
                h1.cc3 6

            .crd_03__txt
            
              h4 Seguimiento y control:
              p Todo proceso se debe monitorear con el fin de generar acciones correctivas que contribuyan al mejoramiento continuo de la organización. Simplemente lo que no se mide y controla, no funciona adecuadamente (WTS, 2019).


         





</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
