<script src="~/assets/js/pages/products.js"></script>

<template>
  <div>
<!-- Banner -->
    <section id="banner" style="background-image: url('/images/banner2.jpg')">
        <div class="inner">
            <h2>Catálogo | {{category}}</h2>
        </div>
    </section>
    <div class="container">
         <div class="row" style="padding-top: 75px; padding-right:45px;" v-if="!$store.state.admin.fullPageLoading">
            <div class="col-6 col-lg-4 col-xs-12 col-sm-5 col-xl-3">
                <section id="categorySidebar">
                    <h3>Categorías</h3>
                    <div class="row mb-1">
                        <div class="col-8">
                            <el-input placeholder="Buscar producto" v-model="text"></el-input>
                        </div>
                    </div>
                    <ul class="alt">
                        <li :class="{'active':categoryActive === _category.CATEGORIA}" v-for="_category in categories" :key="_category.ID_CART" class="item-category" @click="setActivecategory(_category.CATEGORIA)">{{_category.CATEGORIA}}</li>
                    </ul>
                </section>
            </div>
            <div class="col-lg-8 col-lg-8 col-xs-12 col-sm-7 col-xl-9">
                <div class="row">
                    <div class="col-lg-6 col-12 col-md-12 col-xl-4 col-sm-12" v-for="product in products" :key="product.ID_CART">
                     <div class="card mb-5" style="width: 18rem;">
                            <div @click="viewProduct(product)" class="bg-image-product" :style="'background-image: url('+ bgImage(product) +')'"/>
                            <div class="card-body">
                                <h4 class="card-title">{{product.NART}}</h4>
                                <b-card-text>
                                MARCA: {{product.MARCA}}
                                <br>
                                MEDIDAS: {{product.MEDIDAS}}
                                </b-card-text>
                            </div>
                            <b-button @click="viewProduct(product)" variant="primary bg-primary btn-details nt-3 mb-3 mr-4 ml-4">VER PRODUCTO</b-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row"  style="padding:25px;">
            <div class="col-lg-8 offset-lg-4 col-sm-12 col-xs-12 col-12">
                <el-pagination
                    hide-on-single-page
                    layout="prev, pager, next"
                    :page-size="paginatorConfig.perPage"
                    :current-page.sync="currentPageComputed"
                    :total="paginatorConfig.length"
                    @current-change="changePaginate">
                </el-pagination>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="sass" scoped>
  @import '~/assets/sass/pages/products.sass'
</style>
