export default {
  computed: {
    fullScreenLoading () {
      return this.$store.state.admin.fullPageLoading
    }
  },
  methods: {
    verifyAuth () {
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
        const cart = JSON.parse(result.data)
        this.products = cart.Cat01
        this.$store.commit('products/setProducts', this.products)
        this.$store.commit('admin/setFullPageLoading', false)
      })
    }
  },
  mounted () {
    this.getProductos()
  }
}
