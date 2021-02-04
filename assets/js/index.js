import CustomItemsCarousel from '~/components/CustomItemsCarousel'

export default {
  data () {
    return {
      loading: true,
      brands: [
        {
          image: '/images/brands/adriver.jpg'
        },
        {
          image: '/images/brands/alcapet.jpg'
        },
        {
          image: '/images/brands/anfora.jpg'
        },
        {
          image: '/images/brands/baby_mink.jpg'
        },
        {
          image: '/images/brands/black_decker.jpg'
        },
        {
          image: '/images/brands/cinsa.jpg'
        },
        {
          image: '/images/brands/crisa.jpg'
        },
        {
          image: '/images/brands/crock_pot.jpg'
        },
        {
          image: '/images/brands/cubasa.jpg'
        },
        {
          image: '/images/brands/cufin.jpg'
        },
        {
          image: '/images/brands/dafer.jpg'
        },
        {
          image: '/images/brands/dolmen.jpg'
        },
        {
          image: '/images/brands/duna.jpg'
        },
        {
          image: '/images/brands/ecko.jpg'
        },
        {
          image: '/images/brands/foodkeepers.jpg'
        },
        {
          image: '/images/brands/hamilton_beach.jpg'
        },
        {
          image: '/images/brands/igoto.jpg'
        },
        {
          image: '/images/brands/libbey.jpg'
        },
        {
          image: '/images/brands/libbey2.jpg'
        },
        {
          image: '/images/brands/lunita.jpg'
        }
      ],
      brands2: [
        {
          image: '/images/brands/man.jpg'
        },
        {
          image: '/images/brands/mexasia.jpg'
        },
        {
          image: '/images/brands/mosa.jpg'
        },
        {
          image: '/images/brands/navia.jpg'
        },
        {
          image: '/images/brands/nisato.jpg'
        },
        {
          image: '/images/brands/oster.jpg'
        },
        {
          image: '/images/brands/plastic_trends.jpg'
        },
        {
          image: '/images/brands/plastymet.jpg'
        },
        {
          image: '/images/brands/presto.jpg'
        },
        {
          image: '/images/brands/proctor_silex.jpg'
        },
        {
          image: '/images/brands/providencia.jpg'
        },
        {
          image: '/images/brands/pyrorey.jpg'
        },
        {
          image: '/images/brands/san_miguel.jpg'
        },
        {
          image: '/images/brands/santa_anita.jpg'
        },
        {
          image: '/images/brands/santa_elenita.jpg'
        },
        {
          image: '/images/brands/sunbeam.jpg'
        },
        {
          image: '/images/brands/tavola.jpg'
        },
        {
          image: '/images/brands/tramontina.jpg'
        },
        {
          image: '/images/brands/valery.jpg'
        },
        {
          image: '/images/brands/vasconia.jpg'
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
