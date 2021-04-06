<script src="~/assets/js/pages/products.js"></script>

<template>
  <div v-if="!$store.state.admin.fullPageLoading">

<!-- Banner -->
<section id="banner" style="background-image: url('/images/banner2.jpg')">
      <div class="inner">
      <h2>{{ product.NART }} </h2>
      </div>
  </section>
   <b-modal id="modal-1" title="FICHA TÉCNICA" hide-footer>
    <p class="my-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <b-button class="mt-3 bg-primary" block @click="$bvModal.hide('modal-1')">ACEPTAR</b-button>
  </b-modal>
  <section id="two" class="wrapper style1">
      <header class="major">
          <h2>{{ product.NART }} </h2>
          <p class="mt-4">{{ product.CATEGORIA }}</p>
      </header>
      <div class="container">
          <div class="row">
              <div class="6u">
                  <a class="image fit"><img :src="bgImage(product)" alt="" /></a>
              </div>
              <div class="6u">
                  <p>MARCA: {{ product.MARCA }}</p>
                  <p>MODELO: {{ product.MODELO }}</p>
                  <p>MEDIDAS: {{ product.MEDIDAS }}</p>
                  <p>Categoría: {{ product.CATEGORIA }}</p>
                  <a :href="`/pdf/${product.CART}.pdf`" target="_blank" class="button big special btn-details">Ficha Técnica</a>
              </div>
          </div>
      </div>
    </section>
  </div>
</template>

<style lang="sass" scoped>
  @import '~/assets/sass/pages/products.sass'
</style>
