<script src="~/assets/js/pages/products.js"></script>

<template>
<div>
  <section id="banner" style="background-image: url('/images/banner1.jpg')" >
      <div class="inner">
          <h2>Formas de pago</h2>
      </div>
  </section>
  <section id="three" class="wrapper style1">
    <header class="major">
        <h2>Conoce las distintas opciones de pago que ofrecemos</h2>
    </header>
    <div class="container">
      <div class="row">
        <CustomItemsCarousel :perPageCustom="[[400, 2], [768, 3], [1024, 4]]" :isOnlyImage="true" :itemList="methods" title="Prueba"/>
      </div>
    </div>
  </section>
  <section id="three" class="wrapper style1">
    <header class="major">
        <h2>Corresponsales bancarios</h2>
    </header>
    <div class="container">
      <div class="row">
        <CustomItemsCarousel :perPageCustom="[[400, 2], [768, 3], [1024, 4]]" :isOnlyImage="true" :itemList="banks" title="Prueba"/>
      </div>
    </div>
  </section>
</div>
</template>

<style lang="sass" scoped>
  @import '~/assets/sass/pages/products.sass'
</style>
