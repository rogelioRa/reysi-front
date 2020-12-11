export default {
  data () {
    return {
      loading: true,
      category: '',
      id: ''
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
    products () {
      let _products = this.$store.state.products.products.filter(_pro => _pro.CATEGORIA === this.categoryActive) // get products from store
      _products = _products.slice(0, 9)
      console.log('this productos category active', this.category, _products)
      return _products
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
    setActivecategory (category) {
      console.log(category, 'here category')
      this.category = category
    }
  },
  mounted () {
    console.log(this.$route.params.id, 'here products store')
    this.id = parseInt(this.$route.params.id)
  }
}
