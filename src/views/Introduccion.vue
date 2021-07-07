<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.img-200.justify-content-around.align-items-center
      figure.mb-5
        img(src='@/assets/tema1/img-intro.svg', alt='Marketing')
    
    p.mb-5 El servicio al cliente es uno de los principales temas en el ámbito empresarial, profesional y personal, puesto que brinda la oportunidad de analizar el enfoque organizacional con el fin de aplicar técnicas que contribuyan a la satisfacción de necesidades de los diferentes usuarios y la excelencia en el servicio.



</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
