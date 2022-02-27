import paginator from '~/assets/js/tools/paginator.js'
import CustomItemsCarousel from '~/components/CustomItemsCarousel'

export default {
  components: {
    CustomItemsCarousel
  },
  data () {
    return {
      loading: true,
      category: '',
      id: '',
      paginatorConfig: {},
      perPage: 12,
      currentPage: 1,
      text: '',
      methods: [
        {
          image: '/images/metodos/1.png'
        },
        {
          image: '/images/metodos/2.jpg'
        },
        {
          image: '/images/metodos/3.jpg'
        },
        {
          image: '/images/metodos/4.png'
        },
        {
          image: '/images/metodos/5.png'
        },
        {
          image: '/images/metodos/6.png'
        },
        {
          image: '/images/metodos/7.jpg'
        },
        {
          image: '/images/metodos/8.png'
        }
      ],
      banks: [
        {
          image: '/images/metodos/9.png'
        },
        {
          image: '/images/metodos/10.png'
        },
        {
          image: '/images/metodos/11.png'
        },
        {
          image: '/images/metodos/12.png'
        },
        {
          image: '/images/metodos/13.png'
        },
        {
          image: '/images/metodos/14.png'
        },
        {
          image: '/images/metodos/15.png'
        }
      ]
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
      return _categories
    },
    currentPageComputed () {
      return this.currentPage
    },
    products () {
      let _products = this.$store.state.products.products.filter(_pro => _pro.CATEGORIA === this.categoryActive) // get products from store
      if (this.text !== '') {
        _products = this.$store.state.products.products.filter(_pro => {
          let text = this.text
          text = text.toLowerCase()
          return (_pro.id ? _pro.id : '').toString().toLowerCase().indexOf(text) !== -1 || (_pro.NART ? _pro.NART : '').toLowerCase().indexOf(text) !== -1 || (_pro.CATEGORIA ? _pro.CATEGORIA : '').toLowerCase().indexOf(text) !== -1 || (_pro.MEDIDAS ? _pro.MEDIDAS : '').toLowerCase().indexOf(text) !== -1
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
    setActivecategory (category) {
      this.text = ''
      this.category = category
    }
  },
  mounted () {
    this.id = parseInt(this.$route.params.id)
    const search = localStorage.getItem('search')
    if (search && search !== '') {
      this.text = search
      localStorage.removeItem('search')
    }
  }
}
