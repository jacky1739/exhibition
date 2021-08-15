<template>
  <Loading :isLoading="Loading"></Loading>
  <div class="container">
      <div class="row align-items-center mb-5">
        <div class="mb-4 d-flex">
          <button class="input-group-addon btn btn-secondary btn-sm" type="button" @click="backToProducts"><i class="bi bi-arrow-left"></i></button>
          <p class="ml-1 font-size-light" style="margin-bottom: 0px;">返回</p>
        </div>
        <div class="col-md-5 d-flex">
          <div class="checkOut-image-box d-flex justify-content-center">
            <img class="checkOut-image" :src="product.imageUrl" alt="商品主要圖片">
          </div>
        </div>
        <div class="col-md-7">
          <h2 class="font-size-Regular mb-4">{{ product.title }}</h2>
          <p class="font-size-light">{{ product.description }}</p>
          <p class="mb-0 text-muted text-end text-sm-start"><del>NT$ {{ product.origin_price }}</del></p>
          <p class="h4 fw-bold text-end text-sm-start">NT$ {{ product.price }}</p>
          <div class="row align-items-center">
            <div class="col-6">
              <div class="input-group my-3 bg-light rounded">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-secondary border-0 py-2" @click="minus" type="button" id="button-addon1">
                    <i class="bi bi-dash"></i>
                  </button>
                </div>
                <input type="number" class="form-control border-0 text-center my-auto shadow-none bg-light" v-model.number="count" placeholder="" readonly="readonly" aria-label="Example text with button addon" aria-describedby="button-addon1">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary border-0 py-2" @click="add" type="button" id="button-addon2">
                    <i class="bi bi-plus"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-6">
              <button type="button" @click="addToCart" :disabled="loadingStatus.loadingItem === true" class="text-nowrap btn btn-secondary w-100">加入購物車</button>
            </div>
          </div>
        </div>
      </div>
      <h3 class="fw-bold text-center">{{ product.content }}</h3>

      <div class="row d-flex justify-content-center">
        <div class="col-md-7 mb-5">
          <img :src="product.imagesUrl[0]" alt="展場圖片-1">
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-md-7 mb-5">
          <img :src="product.imagesUrl[2]" alt="展場圖片-2">
        </div>
      </div>
      <div class="row d-flex justify-content-center">
        <div class="col-md-7 mb-5">
          <img :src="product.imagesUrl[3]" alt="展場圖片-3">
        </div>
      </div>
    </div>
</template>

<script>
import emitter from '../../assets/javascript/emitter'

export default {
  data () {
    return {
      count: 1,
      Loading: false,
      product: {
        imagesUrl: []
      },
      loadingStatus: {
        loadingItem: false
      }
    }
  },
  methods: {
    backToProducts () {
      this.$router.push('/allproducts')
    },
    add () {
      this.count += 1
    },
    minus () {
      if (this.count > 1) {
        this.count -= 1
      } else {
        this.$swal({
          position: 'top',
          title: '票數不可低於1',
          icon: 'error'
        })
      }
    },
    getSingleProduct () {
      this.Loading = true
      const id = this.$route.params.id
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
      this.$http.get(url).then(res => {
        if (res.data.success) {
          this.product = res.data.product
          this.Loading = false
        }
      }).catch(err => {
        alert(err.message)
      })
    },
    addToCart () {
      this.loadingStatus.loadingItem = true
      const cart = {
        product_id: this.product.id,
        qty: this.count
      }
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(url, { data: cart }).then(res => {
        this.loadingStatus.loadingItem = false
        emitter.emit('update-cart')
        this.$swal({
          title: '已加入購物車!!',
          position: 'top-end',
          showConfirmButton: false,
          timer: 1500
        })
      }).catch(err => {
        alert(err.message)
      })
    }
  },
  mounted () {
    window.scrollTo(0, 0) // 切換葉面自動滾回頂部
    this.getSingleProduct()
    // emitter.emit('toFrontNavBar')
  }
}
</script>
