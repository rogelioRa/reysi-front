<script src="~/assets/js/pages/products.js"></script>

<template>
  <div v-if="!$store.state.admin.fullPageLoading">

<!-- Banner -->
<section id="banner" style="background-image: url('/images/banner2.jpg')">
      <div class="inner">
      <h2>{{ product.NART }} </h2>
      </div>
  </section>

<section id="two" class="wrapper style1">
            <header class="major">
                <h2>{{ product.NART }} </h2>
                <p>{{ product.CATEGORIA }}</p>
            </header>
            <div class="container">
                <div class="row">
                    <div class="6u">
                        <a class="image fit"><img :src="routeImage + product.CART + '.' + product.EXTENCION" alt="" /></a>
                    </div>
                    <div class="6u">
                        <p>MARCA: {{ product.MARCA }}</p>
                        <p>MODELO: {{ product.MODELO }}</p>
                        <p>MEDIDAS{{ product.MEDIDAS }}</p>
                        <p>Categoría: {{ product.CATEGORIA }}</p>
                        <a href="#" class="button big special">Leer más</a>
                    </div>
                </div>
            </div>
    </section>
  </div>
</template>

<style lang="sass" scoped>
  @import '~/assets/sass/pages/products.sass'
</style>
