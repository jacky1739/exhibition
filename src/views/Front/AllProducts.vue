<template>
  <!-- <div class="container">
    <div class="row pt-5">
      <div class="col-md-2">
        <ul>
          <li class="d-grid gap-2 mb-2">
            <button class="btn btn-secondary" type="button">全部展覽</button>
          </li>
          <li class="d-grid gap-2 mb-2">
            <button class="btn btn-secondary" type="button">特別展覽</button>
          </li>
          <li class="d-grid gap-2 mb-2">
            <button class="btn btn-secondary" type="button">熱門展覽</button>
          </li>
          <li class="d-grid gap-2 mb-2">
            <button class="btn btn-secondary" type="button">一般展覽</button>
          </li>
        </ul>
      </div>
      <div class="col-md-10">
        <div class="d-flex">
          <div class="img-fluid">
            <img class="card-picture" src="../../../public/images/card-1.jpg" alt="">
          </div>
          <ul class="border">
            <li>
              <h2 class="card-title">香水特展</h2>
            </li>
            <li>
              <p class="card-text">一年一度的台味設計展由經濟部工業局主辦、台灣創意設計中心執行，每年，針對在地生活、文化及產業發展特色，運用設計思考詮釋新時代的意涵，並以展覽呈現在地設計。</p>
            </li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </div> -->
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
