export default {
  data () {
    return {
      loading: true
    }
  },
  computed: {
    productsMonths () {
      const products = this.productsList.filter(product => product.PMES === 1)
      return products.splice(0, 3)
    },
    routeImage () {
      const route = `${process.env.URL_REYSI}/img/`
      return route
    },
    productsList () {
      console.log(this.$store.state.products.products, 'here products computed store')
      return this.$store.state.products.products
    }
  },
  methods: {
  },
  mounted () {
    console.log(this.$store.state.products.products, 'here mounts products')
  }
}
