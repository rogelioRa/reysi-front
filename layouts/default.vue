<script src="./js/default.js"></script>
<template>
  <div v-loading.fullscreen.lock="$store.state.admin.fullPageLoading">
    <header id="header" class="skel-layers-fixed">
      <a href="/" class="logo"><img class="ml-4" src="/images/logo-crop.png" alt="Reysi de la laguna" /></a>
      <nav id="nav">
        <ul>
          <li class="dropdown-submenu">
            <a tabindex="-1" class="dropdown-toggle topLevel" data-toggle="dropdown" href="#">
              MENÚ FÁBRICA
            </a>
            <ul class="dropdown-menu first-label">
              <li class="dropdown-submenu item-menu" v-for="category in categoriesFab" :key="category.ID_CART">
                <a href="#">{{category.CATEGORIA}}</a>
                <ul class="dropdown-menu">
                  <li class="item-menu"><a href="#">Elementary</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="dropdown-submenu">
            <a tabindex="-1" class="dropdown-toggle topLevel" data-toggle="dropdown" href="#">
              MENÚ PROVEEDORA
            </a>
            <ul class="dropdown-menu first-label">
              <li class="dropdown-submenu item-menu" v-for="category in categoriesProv" :key="category.ID_CART">
                <a href="#">{{category.CATEGORIA}}</a>
                <ul class="dropdown-menu">
                  <li class="item-menu"><a href="#">Elementary</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="section-item"><a href="/">INGRESAR <i class="icon fa fa-user"></i></a></li>
          <li class="section-item"><a href="/presencia"> PRESENCIA <i class="icon fa fa-truck"></i></a></li>
          <li  class="mr-4 section-item"><a href="/contacto">CONTACTO <i class="icon fa fa-phone"></i></a></li>
          <li @click="visible=!visible" title="Buscar" class="icon-search-special"><i class="fa fa-search"></i></li>
          <li title="Catálogo" class="icon-search-special icon-delete"><a href="/catalogo"><font-awesome-icon :icon="['fas','box-open']"></font-awesome-icon></a></li>
        </ul>
      </nav>
    </header>
    <el-dialog
      :visible.sync="visible"
      width="70%"
      :before-close="handleClose">
      <div class="row">
        <div class="offset-3 col-6">
          <div class="input-group mb-3">
            <input type="text" v-on:keyup.enter="searchProduct()" v-model="search" class="form-control form-search" placeholder="Buscar producto(s)" aria-label="Recipient's username" aria-describedby="basic-addon2">
            <div class="input-group-append">
              <button @click="searchProduct()" class="btn btn-outline-secondary btn-search" type="button"><i class="fa fa-search"></i></button>
            </div>
          </div>
        </div>
      </div>
    </el-dialog>
      <nuxt />
    <footer id="footer">
      <div class="container">
        <div class="row double">
          <div class="8u">
            <div class="row collapse-at-2">
              <div class="3u">
                <h3 class="title-footer">Navega</h3>
                <ul class="alt">
                  <li><a href="/">Inicio</a></li>
                  <li><a href="/contacto">Contacto</a></li>
                  <li><a href="/metodos">Formas de pago</a></li>
                </ul>
              </div>
              <div class="3u">
                <h3 class="title-footer">Nosotros</h3>
                <ul class="alt">
                  <li><a href="/nosotros">Historia</a></li>
                  <li><a href="/somos">Quienes somos</a></li>
                  <li><a href="/mision">Misión y visión</a></li>
                </ul>
              </div>
              <div class="3u">
                <h3 class="title-footer">Atencion al cliente</h3>
                <ul class="alt">
                  <li><a href="/devoluciones">Facturación</a></li>
                  <li><a href="/faq">Preguntas Frecuentes</a></li>
                  <li><a href="/privacidad">Solicita tu crédito</a></li>
                </ul>
              </div>
              <div class="3u">
                <h3 class="title-footer">Politicas</h3>
                <ul class="alt">
                <li><a href="/terminos">Términos y Condiciones</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="4u">
            <h3 class="title-footer">Horarios de atencion</h3>
            <p class="mb-1">Lunes a viernes de 8:00 am a 4:00 pm</p>
            <p class="mb-1">Sábado de 8:00 am a 1:00 pm</p>
            <ul class="icons">
              <li><a href="tel:528717142103" target="_blank" class="icon fa-phone"><span class="label">Teléfono</span></a></li>
              <li><a href="https://wa.me/528711492907" target="_blank" class="icon" aria-hidden="true"><font-awesome-icon :icon="['fab','whatsapp']"  class="icon icon-whatsapp"></font-awesome-icon><span class="label">Whatsap</span></a></li>
              <li><a href="mailto:proveedorareysi@hotmail.com" target="_blank" class="icon fa-envelope"><span class="label">Correo</span></a></li>
              <li><a href="https://www.facebook.com/Proveedora-REYSI-237512403124458" target="_blank"  class="icon fa-facebook"><span class="label">Facebook</span></a></li>
              <li><a href="https://www.instagram.com/proveedora.reysi/" target="_blank" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
              <li><a href="https://goo.gl/maps/w7zW86esBBY9YbiR8" target="_blank" class="icon fa-map-marker"><span class="label">Ubicación</span></a></li>
              </ul>
          </div>
          <div class="3u">
            <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.9466747412844!2d-103.51033728550786!3d25.57344082260966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fd8486fb3dfa9%3A0x4ae18f7fcd5e2859!2sProveedora%20Reysi!5e0!3m2!1ses-419!2smx!4v1605827894430!5m2!1ses-419!2smx" width="250" height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> -->
          </div>
          </div>
        <ul class="copyright">
          <li>&copy; {{new Date().getFullYear()}} Todos los derechos reservados. Reysi de la laguna</li>
          <li>Desarrollado por: <a href="http://uprevenue.mx">Uprevenue.mx</a></li>
        </ul>
      </div>
    </footer>
</div>
</template>
<style scoped>
  .title-footer {
    font-size: 1rem;
    line-height: 1.5;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  .icon {
    margin-left: 5px;
    font-weight: 600;
  }
  .section-item{
    font-weight: 600;
  }
  .alt > li {
    line-height: 1rem;
    font-weight: 100;
  }
  .icon-search-special {
    font-weight: bold;
    cursor: pointer;
    line-height: 1;
    font-size: 1.5rem;
    margin-left: 1rem !important;
  }
  .icon-search-special:hover {
    color: #044484;
    transform: scale(1.2);
    transition: .8s;
  }
  .icon-delete{
    margin-bottom: -4rem !important;
  }
  .form-search {
    background: #fff !important;
  }
  .el-dialog{
    background: transparent !important;
    box-shadow: none !important;
  }
  .btn-search{
    background-color: #044484 !important;
    color: #fff
  }
  i.el-dialog__close{
    font-weight: bold !important;
    font-size: 2rem !important;
    border: 2px solid #909399 !important;
    border-radius: .4rem !important;
  }
  .el-dialog__wrapper{
    z-index:999999!important;
  }
  .icon-whatsapp{
    font-size: 1.5rem !important;
    font-weight: bold;
  }
  .dropdown-submenu {
    position: relative;
  }

.dropdown-submenu>.dropdown-menu {
  top: 0;
  left: 100%;
  -webkit-border-radius: 0 6px 6px 6px;
  -moz-border-radius: 0 6px 6px 6px;
  border-radius: 0 6px 6px 6px;
}

.dropdown-submenu>.dropdown-menu.first-label {
  left: .1rem;
  top: 4rem;
}
.dropdown-submenu:hover>.dropdown-menu {
  display: block;
}

.dropdown-submenu:hover>a:after {
  border-left-color: #ffffff;
}
.item-menu {
  line-height: 2.5rem;
  padding: .1rem .5rem;
  font-size: .8rem;
}
.item-menu > a {
  line-height: 2.5rem;
}
.dropdown-submenu.pull-left {
  float: none;
}

.dropdown-submenu.pull-left>.dropdown-menu {
  left: -100%;
  margin-left: 10px;
  -webkit-border-radius: 6px 0 6px 6px;
  -moz-border-radius: 6px 0 6px 6px;
  border-radius: 6px 0 6px 6px;
}

@media screen and (max-width: 500px) {
  .dropdown-submenu {
    display: none;
  }
}
</style>
