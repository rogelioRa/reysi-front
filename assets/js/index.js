import CustomItemsCarousel from '~/components/CustomItemsCarousel'

export default {
  data () {
    return {
      loading: true,
      brands: [
        {
          image: 'https://casola.mx/wp-content/uploads/2020/10/logo_blackdecker2-190x190.jpg'
        },
        {
          image: 'https://casola.mx/wp-content/uploads/2020/10/logo_hamiltonbeach-190x190.jpg'
        },
        {
          image: 'https://casola.mx/wp-content/uploads/2020/10/logo_cinsa-190x190.jpg'
        },
        {
          image: 'https://casola.mx/wp-content/uploads/2020/10/logo_crisa-1-190x190.jpg'
        },
        {
          image: 'https://casola.mx/wp-content/uploads/2020/10/logo_cubasa-190x190.jpg'
        },
        {
          image: 'https://casola.mx/wp-content/uploads/2020/10/logo_libbey-190x190.jpg'
        },
        {
          image: 'https://casola.mx/wp-content/uploads/2020/10/logo_oster1-190x190.jpg'
        },
        {
          image: 'https://casola.mx/wp-content/uploads/2020/10/logo_proctorsilex-190x190.jpg'
        },
        {
          image: 'https://casola.mx/wp-content/uploads/2020/10/logo_pyrorey-190x190.jpg'
        },
        {
          image: 'https://casola.mx/wp-content/uploads/2020/10/logo_tramontina1-190x190.jpg'
        },
        {
          image: 'https://casola.mx/wp-content/uploads/2020/10/logo_anfora-1-190x190.jpeg'
        },
        {
          image: 'https://casola.mx/wp-content/uploads/2020/10/logo_lunita-190x190.jpeg'
        },
        {
          image: 'https://casola.mx/wp-content/uploads/2020/10/logo_tavola1-190x190.jpeg'
        },
        {
          image: 'https://casola.mx/wp-content/uploads/2020/10/logo_valery-190x190.jpeg'
        }
      ]
    }
  },
  components: {
    CustomItemsCarousel
  },
  computed: {
    productsMonths () {
      const products = this.productsList.filter(product => product.PMES === 1)
      return products
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
