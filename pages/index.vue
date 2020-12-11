<script src="~/assets/js/index.js"></script>

<template>
  <div>
      <section id="banner" style="background-image: url('/images/banner.jpg')">
        <div class="inner">
          <h2>Proveedora Reysi</h2>
          <p>Productos para el hogar, blancos y novedades </p>
          <ul class="actions">
            <li><a href="/admin-reysi-2020" class="button big special">Iniciar Sesion</a></li>
            <li><nuxt-link to="/catalogo/" class="button big alt">Ver Catálogo</nuxt-link></li>
          </ul>
        </div>
      </section>
      <!-- Sub Hero -->
      <section id="one" class="wrapper style1">
        <header class="major">
          <h2>Nuestro Catálogo</h2>
          <p class="mt-4">Productos que harán tu vida más cómoda</p>
        </header>
        <div class="container">
          <div class="row"  v-if="!$store.state.admin.fullPageLoading">
            <div class="4u" v-for="product in productsMonths" :key="product.ID_CART">
              <section class="special box">
                <a :href="'/catalogo/'+ product.ID_CART" class="image fit"><img :src="routeImage + product.CART + '.' + product.EXTENCION" alt="" /></a>
                <h3> {{product.NART}} </h3>
                <p class="product-details"> Marca: {{product.MARCA}} </p>
                <p class="product-details" v-if="product.MODELO"> MODELO: {{product.MODELO}} </p>
                <p class="product-details"> MEDIDAS: {{product.MEDIDAS}} </p>
                <center>
                  <a :href="'/catalogo/'+ product.ID_CART" class="button special mt-4">Ver Producto</a>
                </center>
              </section>
            </div>
          </div>
        </div>
      </section>

      <!-- Divisiones -->
    <section id="two" class="wrapper style2">
      <header class="major">
        <h2>Todo lo que buscas en un solo lugar</h2>
        <p class="mt-4">Lo mejor en electrodomesticos y linea blanca</p>
      </header>
      <div class="container">
        <div class="row">
          <div class="6u">
            <section style="padding: 0 50px" class="special">
              <a href="#" style="padding: 0 50px" class="image fit"><img src="images/pic01.jpg" alt="" /></a>
              <h3>División Proveedora</h3>
              <p>Encargada de proveer articulos de cocina, utensilios, blancos, electrodomésticos.  </p>
              <ul class="actions">
                <li><a href="/catalogo" class="button alt">Ir al catálogo</a></li>
              </ul>
            </section>
          </div>
          <div class="6u">
            <section style="padding: 0 50px" class="special">
              <a href="#" style="padding: 0 50px" class="image fit"><img src="images/pic02.jpg" alt="" /></a>
              <h3>División fabrica</h3>
              <p>Aquí encontraras productos para el hogar en general tales como electrónica, línea blanca, muebles en general.</p>
              <ul class="actions">
                <li><a href="/catalogo" class="button alt">Ir al catálogo</a></li>
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
              <p>Inició en el año de 1970 en la ciudad de Gómez Palacio, Durango, cuando Don Benjamín Reynoso Ibarra y su esposa la Sra. Irene Silva Contreras crearon un negocio de venta de ropa, blancos y novedades. Con el paso del tiempo fueron incrementando sus oportunidades de mercado iniciando a vender medio mayoreo y mayoreo. Tambien se fueron diversificando los productos como hasta el día de hoy. Hasta el año de 1989 se decidió darle a la empresa el nombre comercial de "PROVEEDORA REYSI" que proviene de los apellidos paternos de ambos señores.</p>
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
  </div>
</template>

<style lang="sass" scoped>
  @import '~/assets/sass/pages/index.sass'
</style>
