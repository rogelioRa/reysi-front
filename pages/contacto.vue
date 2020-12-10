<script src="~/assets/js/pages/products.js"></script>

<template>
  <div>

 <!-- Banner -->
 <section id="banner" style="background-image: url('/images/banner.jpg')" >
    <div class="inner">
        <h2>Contacto</h2>
    </div>
</section>

<section class="wrapper style1">
<header class="major">
    <h2>Ponte en contacto con nosotros</h2>
</header>
<div class="container">
    <div class="row">
        <div class="6u">
            <h3>Déjanos un mensaje</h3>
            <form action="email">
                <label for="name">Nombre:</label>
                <input type="text" id="name" name="name">
                <label for="email">Correo electrónico:</label>
                <input type="email" id="email" name="email">
                <label for="message">Mensaje:</label>
                <textarea name="Message" cols="40" rows="4"></textarea><br><br>
                <input type="submit" value="Enviar">
            </form>
        </div>
        <div class="6u">
            <h3>Visítanos</h3>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3598.946674741256!2d-103.5103372857937!3d25.57344082261032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x868fd8486fb3dfa9%3A0x4ae18f7fcd5e2859!2sProveedora%20Reysi!5e0!3m2!1ses!2smx!4v1605827822965!5m2!1ses!2smx" width="600" height="400" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
    </div>
</div>
</section>
  </div>
</template>

<style lang="sass" scoped>
  @import '~/assets/sass/pages/products.sass'
</style>
