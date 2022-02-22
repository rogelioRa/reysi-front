export default () => {
  var body = document.getElementsByTagName('body')[0]
  body.setAttribute('id', 'top')
  var nav = document.getElementById('navPanel')
<<<<<<< HEAD
  if (window.screen.width < 800) {
    //nav.innerHTML = '<div data-action="moveElement" data-args="nav"><div id="skel-layers-placeholder-nav"></div><nav id="nav" class="skel-layers-moved"><ul><li><a href="/" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Inicio</a></li> <li><a href="/nosotros" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Nosotros</a></li> <li><a href="/catalogo" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Catálogo</a></li> <li><a href="/contacto" class="button special" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Contacto</a></li></ul></nav></div>'
    nav.innerHTML = '<ul><li class="dropdown-submenu"><a tabindex="-1" class="dropdown-toggle topLevel" data-toggle="dropdown" href="#">MENÚ FÁBRICA</a><ul class="dropdown-menu first-label"><li class="dropdown-submenu item-menu" v-for="category in categoriesFab" :key="category.ID_CART"><a href="#" @click="goCategory(category.CATEGORIA)">{{category.CATEGORIA}}</a></li></ul></li><li class="dropdown-submenu"><a tabindex="-1" class="dropdown-toggle topLevel" data-toggle="dropdown" href="#">MENÚ PROVEEDORA</a><ul class="dropdown-menu first-label"><li class="dropdown-submenu item-menu" v-for="category in categoriesProv" :key="category.ID_CART"><a @click="goCategory(category.CATEGORIA)" href="#">{{category.CATEGORIA}}</a></li></ul></li><li class="section-item"><a href="/">INGRESAR <i class="icon fa fa-user"></i></a></li><li class="section-item"><a href="/presencia"> PRESENCIA <i class="icon fa fa-truck"></i></a></li><li  class="mr-4 section-item"><a href="/contacto">CONTACTO<i class="icon fa fa-phone"></i></a></li><li @click="visible=!visible" title="Buscar" class="icon-search-special"><i class="fa fa-search"></i></li><li title="Catálogo" class="icon-search-special icon-delete"><a href="/catalogo"><font-awesome-icon :icon="["fas","box-open"]"></font-awesome-icon></a></li></ul>';
  }
=======
if (window.screen.width < 800) {
  //nav.innerHTML = '<div data-action="moveElement" data-args="nav"><div id="skel-layers-placeholder-nav"></div><nav id="nav" class="skel-layers-moved"><ul><li><a href="/" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Inicio</a></li> <li><a href="/nosotros" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Nosotros</a></li> <li><a href="/catalogo" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Catálogo</a></li> <li><a href="/contacto" class="button special" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Contacto</a></li></ul></nav></div>'
  nav.innerHTML = '<ul><li class="dropdown-submenu"><a tabindex="-1" class="dropdown-toggle topLevel" data-toggle="dropdown" href="#">MENÚ FÁBRICA</a><ul class="dropdown-menu first-label"><li class="dropdown-submenu item-menu" v-for="category in categoriesFab" :key="category.ID_CART"><a href="#" @click="goCategory(category.CATEGORIA)">{{category.CATEGORIA}}</a></li></ul></li><li class="dropdown-submenu"><a tabindex="-1" class="dropdown-toggle topLevel" data-toggle="dropdown" href="#">MENÚ PROVEEDORA</a><ul class="dropdown-menu first-label"><li class="dropdown-submenu item-menu" v-for="category in categoriesProv" :key="category.ID_CART"><a @click="goCategory(category.CATEGORIA)" href="#">{{category.CATEGORIA}}</a></li></ul></li><li class="section-item"><a href="/">INGRESAR <i class="icon fa fa-user"></i></a></li><li class="section-item"><a href="/presencia"> PRESENCIA <i class="icon fa fa-truck"></i></a></li><li  class="mr-4 section-item"><a href="/contacto">CONTACTO<i class="icon fa fa-phone"></i></a></li><li @click="visible=!visible" title="Buscar" class="icon-search-special"><i class="fa fa-search"></i></li><li title="Catálogo" class="icon-search-special icon-delete"><a href="/catalogo"><font-awesome-icon :icon="["fas","box-open"]"></font-awesome-icon></a></li></ul>';
}
  var pagNumbers = document.getElementsByClassName('number');
  for(var i = 0; i < pagNumbers.length; i++) {
    var pagNumber = pagNumbers[i];
    pagNumber.onclick = function() {
      window.scrollTo( 0, 0 );
    }
>>>>>>> 86ec5a36b12fb00af9a5b9e1a64d9e876a99e306
}
}