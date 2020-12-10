<script src="~/assets/js/pages/products.js"></script>

<template>
  <div>
<!-- Banner -->
        <section id="banner" style="background-image: url('/images/banner2.jpg')">
            <div class="inner">
                <h2>Catálogo | {{category}}</h2>
            </div>
        </section>

        <div class="row" style="padding:75px;" v-if="!$store.state.admin.fullPageLoading">
            <div class="4u">
                <section id="categorySidebar">
                    <h3>Categorías</h3>
                        <ul class="alt">
                            <li :class="{'active':categoryActive === _category.CATEGORIA}" v-for="_category in categories" :key="_category.ID_CART" class="item-category" @click="setActivecategory(_category.CATEGORIA)">{{_category.CATEGORIA}}</li>
                        </ul>
                </section>
            </div>

            <div class="8u">
                <div class="row" v-for="(row, index) in products" :key="getIndex(row,index)">
                    <div class="3u" v-for="product in row" :key="product.ID_CART">
                        <section class="section special">
                            <a :href="'/catalogo/'+product.ID_CART" class="image fit"><img :src="routeImage + product.CART + '.' + product.EXTENCION" width="150" heigth="150"/></a>
                            <h3>{{ product.NART }}</h3>
                            <p class="product-details"> Marca: {{product.MARCA}} </p>
                            <p class="product-details" v-if="product.MODELO"> MODELO: {{product.MODELO}} </p>
                            <p class="product-details"> MEDIDAS: {{product.MEDIDAS}} </p>
                            <a :href="'/catalogo/'+product.ID_CART" class="button special mt-5">Ver Producto</a>
                        </section>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<style lang="sass" scoped>
  @import '~/assets/sass/pages/products.sass'
</style>
