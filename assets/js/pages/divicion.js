import paginator from '~/assets/js/tools/paginator.js'

export default {
  data () {
    return {
      loading: true,
      category: '',
      id: '',
      paginatorConfig: {},
      perPage: 6,
      currentPage: 1,
      text: ''
    }
  },
  computed: {
    categoryActive () {
      return this.category
    },
    product () {
      const pro = this.$store.state.products.products.find(_pro => _pro.ID_CART === this.id) // get products from store
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
      const _products = this.$store.state.products.products.filter(_pro => _pro.FAB === this.id) // get products from store
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
      let _products = this.$store.state.products.products.filter(_pro => _pro.CATEGORIA === this.categoryActive && _pro.FAB === this.id) // get products from store
      if (this.text !== '') {
        _products = _products.filter(_pro => {
          const text = this.text
          return _pro.id.toString().toLowerCase().indexOf(text) !== -1 || _pro.NART.toLowerCase().indexOf(text) !== -1 || _pro.CATEGORIA.toLowerCase().indexOf(text) !== -1
        })
      }
      console.log('this productos category active', this.category, _products)
      const paginated = paginator.paginate(_products, this.perPage)
      this.paginatorConfig = paginated.meta
      const indexPage = this.currentPageComputed - 1
      return paginated.pageList[indexPage > this.paginatorConfig.pages ? 0 : indexPage]
      // const productsByPage = Math.ceil(_products.length / 3) // get number rows
      // let begin = 1 // page run time
      // var rows = []
      // console.log(productsByPage, productsByPage >= begin, 'product by page')
      // while (begin <= productsByPage && begin <= 10) {
      //   rows.push(this.paginate(_products, 3, begin))
      //   begin += 1
      // }
      // console.log(rows, 'here products')
      // return rows
      // return this.$store.state.products.products
    }
  },
  methods: {
    paginate (array, pageSize, pageNumber) {
      // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
      return array.slice((pageNumber - 1) * pageSize, pageNumber * pageSize)
    },
    getIndex (row, index) {
      console.log(index, row)
    },
    bgImage (product) {
      const urlbg = product.stored_local === 0 ? (this.routeImage + product.CART + '.' + product.EXTENCION) : (this.routeLocal + product.image)
      return urlbg
    },
    setActivecategory (category) {
      console.log(category, 'here category')
      this.category = category
    },
    changePaginate (index) {
      this.currentPage = index
    }
  },
  mounted () {
    console.log(this.$route.params.id, 'here products store')
    this.id = parseInt(this.$route.params.id)
  }
}
