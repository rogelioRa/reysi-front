import numeral from 'numeral'

export default {
  props: {
    item: {},
    isOnlyImage: { type: Boolean, default: false }
  },
  computed: {
    metaLink () {
      return this.$store.state.app.metaLink
    },
    routeImage () {
      return `${process.env.URL_REYSI}/img/`
    },
    routeLocal () {
      return process.env.BASE_URL + '/storage/'
    }
  },
  methods: {
    price (_price) {
      return numeral(_price).format('$0,0.00')
    },
    bgImage (product) {
      const urlbg = product.stored_local === 0 ? (this.routeImage + product.CART + '.' + product.EXTENCION) : (this.routeLocal + product.image)
      return urlbg
    },
    viewProduct (product) {
      if (product.ID_CART) {
        window.location = '/catalogo/' + product.ID_CART
      } else {
        localStorage.setItem('product_id', product.id)
        window.location = '/catalogo/' + 0
      }
    },
    toggleFavorite (event) {
      let btn = event.target.tagName === 'SVG' ? event.target.parentElement : event.target
      btn = btn.tagName === 'path' ? btn.parentElement.parentElement : btn
      if (btn.classList.contains('active')) { btn.classList.remove('active') } else { btn.classList.add('active') }
    },
    goLink (_item) {
      // localStorage.setItem(ENV.keyProductSelected, JSON.stringify(_item))
      if (_item.link) {
        this.$router.push(_item.link)
      } else {
        this.$router.push(`/product/${Math.round(Math.random() * 10000)}${this.metaLink}`)
      }
    }
  },
  mounted () {
    this.$forceUpdate()
  }
}
