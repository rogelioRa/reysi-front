import paginator from '~/assets/js/tools/paginator.js'

export default {
  data () {
    return {
      loading: true,
      category: '',
      id: '',
      paginatorConfig: {},
      perPage: 12,
      currentPage: 1,
      text: ''
    }
  },
  computed: {
    categoryActive () {
      return this.category
    },
    product () {
      let pro = null
      if (this.id === 0) {
        const id = parseInt(localStorage.getItem('product_id'))
        pro = this.$store.state.products.products.find(_pro => _pro.id === id) // get products from store
      } else {
        pro = this.$store.state.products.products.find(_pro => _pro.ID_CART === this.id) // get products from store
      }
      console.log(pro, this.id, this.$store.state.products.products, 'here product active')
      if (pro) {
        return pro
      }
      return {}
    },
    routeImage () {
      const route = `${process.env.URL_REYSI}/img/`
      return route
    },
    routeLocal () {
      return process.env.BASE_URL + '/storage/'
    },
    categories () {
      const _products = this.$store.state.products.products // get products from store
      var _categories = []
      for (let i = 0; i < _products.length; i++) {
        const element = _products[i]
        const category = _categories.find(_category => _category.CATEGORIA === element.CATEGORIA)
        if (!category) {
          _categories.push(element)
        }
      }
      this.category = this.category === '' && _categories.length > 0 ? _categories[0].CATEGORIA : this.category
      console.log(this.category, 'here categirues ibhects')
      return _categories
    },
    currentPageComputed () {
      return this.currentPage
    },
    products () {
      let _products = this.$store.state.products.products.filter(_pro => _pro.CATEGORIA === this.categoryActive) // get products from store
      if (this.text !== '') {
        _products = _products.filter(_pro => {
          const text = this.text
          return _pro.id.toString().toLowerCase().indexOf(text) !== -1 || _pro.NART.toLowerCase().indexOf(text) !== -1 || _pro.CATEGORIA.toLowerCase().indexOf(text) !== -1 || _pro.MEDIDAS.toLowerCase().indexOf(text) !== -1
        })
      }
      const paginated = paginator.paginate(_products, this.perPage)
      this.paginatorConfig = paginated.meta
      const indexPage = this.currentPageComputed - 1
      return paginated.pageList[indexPage > this.paginatorConfig.pages ? 0 : indexPage]
    }
  },
  methods: {
    paginate (array, pageSize, pageNumber) {
      // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
      return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
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
    changePaginate (index) {
      this.currentPage = index
    },
    getIndex (row, index) {
      console.log(index, row)
    },
    setActivecategory (category) {
      console.log(category, 'here category')
      this.category = category
    }
  },
  mounted () {
    console.log(this.$route.params.id, 'here products store')
    this.id = parseInt(this.$route.params.id)
    const search = localStorage.getItem('search')
    if (search && search !== '') {
      this.text = search
      localStorage.removeItem('search')
    }
  }
}
