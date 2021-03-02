export default {
  data: () => {
    return {
      visible: false,
      search: '',
      products: []
    }
  },
  computed: {
    fullScreenLoading () {
      return this.$store.state.admin.fullPageLoading
    },
    categoriesFab () {
      const _products = this.products.filter(_pro => _pro.FAB === 1) // get products from store
      var _categories = []
      for (let i = 0; i < _products.length; i++) {
        const element = _products[i]
        const category = _categories.find(_category => _category.CATEGORIA === element.CATEGORIA)
        if (!category) {
          if (element.CATEGORIA) {
            _categories.push(element)
          }
        }
      }
      this.category = this.category === '' && _categories.length > 0 ? _categories[0].CATEGORIA : this.category
      return _categories
    },
    categoriesProv () {
      const _products = this.products.filter(_pro => _pro.FAB === 0) // get products from store
      var _categories = []
      for (let i = 0; i < _products.length; i++) {
        const element = _products[i]
        const category = _categories.find(_category => _category.CATEGORIA === element.CATEGORIA)
        if (!category) {
          if (element.CATEGORIA) {
            _categories.push(element)
          }
        }
      }
      this.category = this.category === '' && _categories.length > 0 ? _categories[0].CATEGORIA : this.category
      return _categories
    }
  },
  methods: {
    searchProduct () {
      console.log(this.search, 'here product to search')
      localStorage.setItem('search', this.search)
      this.search = ''
      this.visible = false
      window.location.href = '/catalogo'
      // this.$router.push('/catalogo')
    },
    goCategory (category) {
      localStorage.setItem('search', category)
      this.visible = false
      window.location.href = '/catalogo'
    },
    handleClose () {
      // here logic close
      this.visible = !this.visible
    },
    async getProductos () {
      // here code
      this.$axios(`${process.env.API}/products/`, null, {
        headers: {
          'content-type': 'multipart/form-data',
          'Content-Type': 'application/json'
        }
      }).then(result => {
        console.log(result.data, 'here cart string')
        const cart = result.data
        this.products = cart
        this.$store.commit('products/setProducts', this.products)
        this.$store.commit('admin/setFullPageLoading', false)
      })
    }
  },
  mounted () {
    this.getProductos()
  }
}
