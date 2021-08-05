<template>
  <FrontNavBar />
  <router-view />
  <GassYouLike />
  <Products class="mb-5" :tospecial = "products" />
  <Footer />
</template>

<script>
import FrontNavBar from '@/components/FrontNavBar.vue'
import Products from '@/components/Products.vue'
import Footer from '@/components/Footer.vue'
import GassYouLike from '@/components/GassYouLike.vue'

export default {
  data () {
    return {
      products: []
    }
  },
  components: {
    FrontNavBar,
    Products,
    Footer,
    GassYouLike
  },
  methods: {
    getData () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`
      this.$http.get(url).then(res => {
        if (res.data.success) {
          this.products = res.data.products
          // console.log(res)
        } else {
          alert('err')
        }
      })
    }
  },
  created () {
    this.getData()
  }
}
</script>
