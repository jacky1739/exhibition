<template>
  <Products :tospecial="products" />
</template>

<script>
import Products from '@/components/Products.vue'

export default {
  components: { Products },
  data () {
    return {
      products: []
    }
  },
  methods: {
    getData () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`
      this.$http.get(url).then(res => {
        if (res.data.success) {
          this.products = res.data.products
          console.log(this.products)
        }
      })
    }
  },
  created () {
    this.getData()
  }
}
</script>
