<template>
  <Loading :isLoading="Loading"></Loading>
  <Products :tospecial="products" />
</template>

<script>
import Products from '@/components/Products.vue'

export default {
  components: { Products },
  data () {
    return {
      products: [],
      Loading: false
    }
  },
  methods: {
    getData () {
      this.Loading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`
      this.$http.get(url).then(res => {
        if (res.data.success) {
          this.products = res.data.products
          this.Loading = false
          // console.log(this.products)
        }
      })
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
