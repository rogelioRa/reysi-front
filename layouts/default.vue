<script src="./js/default.js"></script>
<template>
  <div v-loading.fullscreen.lock="$store.state.admin.fullPageLoading">
    <header id="header" class="skel-layers-fixed">
      <a href="/" class="logo"><img class="ml-4" src="/images/logo_50.png" alt="Proveedora Reysi" /></a>
      <nav id="nav">
        <ul>
          <li><a href="/">INGRESAR <i class="fa fa-user"></i></a></li>
          <li><a href="/presencia"> PRESENCIA <i class="fa fa-truck"></i></a></li>
          <li class="mr-4"><a href="/contacto">CONTACTO <i class="fa fa-phone"></i></a></li>
          <li @click="visible=!visible" title="Buscar" class="icon-search-special"><i class="fa fa-search"></i></li>
          <li title="Catálogo" class="icon-search-special"><a href="/catalogo"><i class="fa fa-shopping-cart"></i></a></li>
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
              <div class="4u">
                <h3 class="title-footer">Navega</h3>
                <ul class="alt">
                  <li><a href="/">Inicio</a></li>
                  <li><a href="/contacto">Contacto</a></li>
                  <li><a href="/nosotros">Formas de pago</a></li>
                </ul>
              </div>
              <div class="4u">
                <h3 class="title-footer">Nosotros</h3>
                <ul class="alt">
                  <li><a href="/nosotros">Historia</a></li>
                  <li><a href="/somos">Quienes somos</a></li>
                  <li><a href="/mision">Misión y visión</a></li>
                </ul>
              </div>
              <div class="4u">
                <h3 class="title-footer">Atención al cliente</h3>
                <ul class="alt">
                <li><a href="/devoluciones">Facturación</a></li>
                  <li><a href="/faq">Preguntas Frecuentes</a></li>
                  <li><a href="/privacidad">Solicita tu crédito</a></li>
                  <li><a href="/terminos">Términos y Condiciones</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="4u">
            <h3 class="title-footer">Horarios de atención</h3>
            <p class="mb-1">Lunes a viernes de 8:00 am a 4:00 pm</p>
            <p class="mb-1">Sábado de 8:00 am a 1:00 pm</p>
            <p class="mb-1">Teléfono: +52 (871) 714 2103</p>
            <p>Whatsapp: +52 (871) 149 2907</p>
            <ul class="icons">
              <li><a href="tel:528717159986" class="icon fa-phone"><span class="label">Teléfono</span></a></li>
              <li><a href="mailto:proveedorareysi@hotmail.com" class="icon fa-envelope"><span class="label">Correo</span></a></li>
              <li><a href="https://www.facebook.com/Proveedora-REYSI-237512403124458" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
              <li><a href="https://www.instagram.com/proveedora.reysi/" class="icon fa-instagram"><span class="label">Instagram</span></a></li>
              <li><a href="https://goo.gl/maps/w7zW86esBBY9YbiR8" class="icon fa-map-marker"><span class="label">Ubicación</span></a></li>
              </ul>
          </div>
            <div class="3u">
              <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.9466747412844!2d-103.51033728550786!3d25.57344082260966!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fd8486fb3dfa9%3A0x4ae18f7fcd5e2859!2sProveedora%20Reysi!5e0!3m2!1ses-419!2smx!4v1605827894430!5m2!1ses-419!2smx" width="250" height="250" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe> -->
            </div>
          </div>
        <ul class="copyright">
          <li>&copy; Todos los derechos reservados. Proveedora Reysi</li>
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
  .alt > li {
    line-height: .8rem;
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
</style>
