<script src="~/assets/js/index.js"></script>

<template>
  <div>
      <section id="banner" style="background-image: url('/images/banner1.jpg')">
        <div class="inner">
          <h2>Proveedora Reysi</h2>
          <p>Productos para el hogar, blancos y novedades </p>
          <ul class="actions">
            <li><nuxt-link to="/contacto/" class="button big alt">Contacto</nuxt-link></li>
            <li><a href="/catalogo" class="button big special">Formas de pago</a></li>
          </ul>
        </div>
      </section>
        <!-- Sub Hero -->
    <section id="one" class="wrapper style1">
      <header class="major">
        <h2>Nuestras Marcas</h2>
        <p class="mt-2">Contamos con las mejores marcas</p>
      </header>
      <div class="container">
        <div class="row"  v-if="!$store.state.admin.fullPageLoading">
          <CustomItemsCarousel :perPageCustom="[[400, 3], [768, 4], [1024, 5]]" :isOnlyImage="true" :itemList="brands" title="Prueba" />
        </div>
      </div>
    </section>
    <!-- Divisiones -->
    <section id="two" class="wrapper style2">
      <header class="major">
        <h2>Todo lo que buscas en un solo lugar</h2>
        <p class="mt-2">Lo mejor en electrodomesticos y linea blanca</p>
      </header>
      <div class="container">
        <div class="row">
          <div class="6u">
            <section style="padding: 0 50px" class="special">
              <a href="#" style="padding: 0 50px" class="image fit"><img src="images/pic01.jpg" alt="" /></a>
              <h3>División Proveedora</h3>
              <p>Encargada de proveer articulos de cocina, utensilios, blancos, electrodomésticos.  </p>
              <ul class="actions">
                <li><a :href="'/divicion/'+0" class="button alt">Ir al catálogo</a></li>
              </ul>
            </section>
          </div>
          <div class="6u">
            <section style="padding: 0 50px" class="special">
              <a href="#" style="padding: 0 50px" class="image fit"><img src="images/pic02.jpg" alt="" /></a>
              <h3>División fabrica</h3>
              <p>Aquí encontraras productos para el hogar en general tales como electrónica, línea blanca, muebles en general.</p>
              <ul class="actions">
                <li><a :href="'/divicion/'+1" class="button alt">Ir al catálogo</a></li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </section>
    <!-- Nuestra Empresa -->
    <section id="three" class="wrapper style1">
      <div class="container">
        <div class="row">
          <div class="8u">
            <section style="padding: 20px 0">
              <h2>Nuestra Empresa</h2>
              <p>Somos una empresa mexicana con 50 años de experiencia en comercialización y reconocida a nivel norte en el país. Presentes en cada espacio de los hogares mexicanos brindando soluciones a sus necesidades.</p>
              <p>Todo en productos para tu hogar desde línea blanca, electrodomésticos, blancos, muebles y más. Comprometidos con seguir ofreciendo variedad de productos en cada una de nuestras categorías.</p>
              <p>Somos tu proveedor líder… Reysi de la Laguna.</p>
            </section>
            </div>
            <div class="4u">
              <section style="padding: 0 20px">
                <a href="#" class="image fit"><img src="images/logoprincipalnaranja.png" alt="" /></a>
            </section>
          </div>
        </div>
      </div>
    </section>
      <!-- Sub Hero -->
      <section id="one" class="wrapper style2">
        <header class="major">
          <h2>Nuestro Catálogo</h2>
          <p class="mt-2">Productos que harán tu vida más cómoda</p>
        </header>
        <div class="container">
          <div class="row"  v-if="!$store.state.admin.fullPageLoading">
            <CustomItemsCarousel :itemList="productsMonths" title="Prueba" />
          </div>
        </div>
      </section>
  </div>
</template>

<style lang="sass" scoped>
  @import '~/assets/sass/pages/index.sass'
</style>
