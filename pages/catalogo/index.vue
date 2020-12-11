<script src="~/assets/js/pages/products.js"></script>

<template>
  <div>
<!-- Banner -->
    <section id="banner" style="background-image: url('/images/banner2.jpg')">
        <div class="inner">
            <h2>Catálogo | {{category}}</h2>
        </div>
    </section>
    <div class="container-fluid">
         <div class="row" style="padding:75px;" v-if="!$store.state.admin.fullPageLoading">
            <div class="col-1" />
            <div class="col-2">
                <section id="categorySidebar">
                    <h3>Categorías</h3>
                        <ul class="alt">
                            <li :class="{'active':categoryActive === _category.CATEGORIA}" v-for="_category in categories" :key="_category.ID_CART" class="item-category" @click="setActivecategory(_category.CATEGORIA)">{{_category.CATEGORIA}}</li>
                        </ul>
                </section>
            </div>
            <div class="col-8">
                <div class="row">
                    <div class="col-4" v-for="product in products" :key="product.ID_CART">
                        <b-card
                            :title="product.NART"
                            :img-src="routeImage + product.CART + '.' + product.EXTENCION"
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem;"
                            class="mb-2"
                        >
                            <b-card-text>
                            MARCA: {{product.MARCA}}
                            <br>
                            MEDIDAS: {{product.MEDIDAS}}
                            </b-card-text>

                            <b-button :href="'/catalogo/'+ product.ID_CART" variant="primary bg-primary">VER PRODUCTO</b-button>
                        </b-card>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  @import '~/assets/sass/pages/products.sass'
</style>
