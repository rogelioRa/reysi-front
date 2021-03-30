import customItem from '~/components/CustomItem.vue'
import { Carousel, Slide } from 'vue-carousel'
import paginator from '~/assets/js/tools/paginator.js'

export default {
  components: {
    Carousel,
    Slide,
    customItem
  },
  props: {
    title: { type: String },
    paginationEnabled: { type: Boolean, default: true },
    itemList: { type: [Array, String], default: () => ([]) },
    isOnlyImage: { type: Boolean, default: false },
    perPageCustom: { type: [Array, String], default: () => [[400, 3], [768, 3], [1024, 3]] }
  },
  data: () => ({
    count: 1,
    loading: false,
    currentPage: 1,
    perPage: 40,
    paginatorConfig: {}
  }),
  computed: {
    noMore () {
      return this.count >= 3
    },
    disabled () {
      return this.loading || this.noMore
    },
    itemsOrganized () {
      if (!this.isCarousel) {
        const paginated = paginator.paginate(this.itemList, this.perPage)
        this.paginatorConfig = paginated.meta
        return paginated.pageList[this.currentPage - 1]
      } else {
        return this.itemList.length > 20 ? this.itemList.slice(0, 19) : this.itemList
      }
    }
  },
  methods: {
    load () {
      this.loading = true
      setTimeout(() => {
        this.count += 1
        this.loading = false
      }, 2000)
    },
    changePaginate (index) {
      this.currentPage = index
      window.scrollTo(0, window.scrollY * 0.65)
    }
  }
}
