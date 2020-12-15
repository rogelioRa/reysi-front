<script src="./js/default.js"></script>
<template>
  <div v-loading.fullscreen.lock="$store.state.admin.fullPageLoading">
    <header id="header" class="skel-layers-fixed">
      <a href="/" class="logo"><img class="ml-4" src="/images/logo_50.png" alt="Proveedora Reysi" /></a>
      <nav id="nav">
        <ul>
          <li><a href="/">INICIO</a></li>
          <li><a href="/nosotros">NOSOTROS</a></li>
          <li><a href="/catalogo">CATÁLOGO</a></li>
          <li><a href="/contacto" class="button special">CONTACTO</a></li>
        </ul>
      </nav>
    </header>
      <nuxt />
    <footer id="footer">
      <div class="container">
        <div class="row double">
          <div class="7u">
            <div class="row collapse-at-2">
              <div class="6u">
                <h3 class="title-footer">Navega</h3>
                <ul class="alt">
                  <li><a href="/">Inicio</a></li>
                  <li><a href="/nosotros">Nosotros</a></li>
                  <li><a href="/contacto">Contacto</a></li>
                  <li><a href="/catalogo">Contácto</a></li>
                </ul>
              </div>
              <div class="6u">
                <h3 class="title-footer">Información</h3>
                <ul class="alt">
                  <li><a href="/faq">Preguntas Frecuentes</a></li>
                  <li><a href="/privacidad">Privacidad</a></li>
                  <li><a href="/terminos">Términos y Condiciones</a></li>
                  <li><a href="/devoluciones">Devoluciones</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="4u">
            <h3 class="title-footer">Ponte en contacto</h3>
            <p>Envíanos un mensaje o contactános a traves de nuestas redes sociales</p>
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
</style>
