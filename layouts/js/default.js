import ENV from '~/env.js'

export default {
  computed: {
    fullScreenLoading () {
      return this.$store.state.admin.fullPageLoading
    }
  },
  methods: {
    async verifyAuth () {
      const auth = await this.$axios.post(`${ENV.API}/admin/auth-verify`)
      if (!auth.data.status) { this.$router.push('/') }
      this.$store.commit('user/setUser', auth.data.user)
      this.$store.commit('admin/setFullPageLoading', false)
    },
    async getProductos () {
      // here code
      this.$axios(`${process.env.API}/products/`, null, {
        headers: {
          'content-type': 'multipart/form-data',
          'Content-Type': 'application/json'
        }
      }).then(result => {
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
