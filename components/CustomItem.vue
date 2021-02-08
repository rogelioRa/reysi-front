<script src="./js/CustomItem.js"></script>

<template>
  <div class="11u mr-4">
      <section class="special box" v-if="!isOnlyImage">
        <div @click="viewProduct(item)" class="bg-image-product" :style="'background-image: url('+ bgImage(item) +')'"/>
        <h4 class="card-title mt-3"> {{item.NART}} </h4>
        <p class="product-details"> MARCA: {{item.MARCA}} </p>
        <p class="product-details" v-if="item.MODELO"> MODELO: {{item.MODELO}} </p>
        <p class="product-details"> MEDIDAS: {{item.MEDIDAS}} </p>
        <center>
          <a :href="'/catalogo/'+ item.ID_CART" class="button special mt-4">Ver Producto</a>
        </center>
      </section>
      <section v-else>
        <img alt="Imagen carousel"  class="jet-carousel__item-img lazyloaded img-fluid" :src="item.image">
        <img v-if="item.image2" alt="Imagen carousel"  class="jet-carousel__item-img lazyloaded img-fluid" :src="item.image2">
      </section>
    </div>
</template>

<style lang="sass" scoped>
@import './sass/CustomItem.sass'
</style>
