export default () => {
  var body = document.getElementsByTagName('body')[0]
  body.setAttribute('id', 'top')
  var nav = document.getElementById('navPanel')
  if (nav) {
    nav.innerHTML = '<div data-action="moveElement" data-args="nav"><div id="skel-layers-placeholder-nav"></div><nav id="nav" class="skel-layers-moved"><ul><li><a href="/" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Inicio</a></li> <li><a href="/nosotros" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Nosotros</a></li> <li><a href="/catalogo" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Catálogo</a></li> <li><a href="/contacto" class="button special" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">Contacto</a></li></ul></nav></div>'
  }
}
