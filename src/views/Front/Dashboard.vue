<template>
  <FrontNavBar />
  <router-view />
  <Footer />
</template>

<script>
import FrontNavBar from '@/components/FrontNavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
  data () {
    return {
      products: []
    }
  },
  components: {
    FrontNavBar,
    Footer
  },
  methods: {
    getData () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`
      this.$http.get(url).then(res => {
        if (res.data.success) {
          this.products = res.data.products
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
