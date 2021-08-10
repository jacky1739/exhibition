<template>
  <div class="container">
      <FrontNavBar class="mb-4" />
      <div class="row align-items-center">
        <div class="mb-4">
          <span class="input-group-addon"><button class="btn btn-secondary btn-sm" type="button" @click.prevent="backToProducts"><i class="bi bi-arrow-left"></i></button></span>
          <span class="ml-1 font-size-light">返回</span>
        </div>
        <div class="col-md-6">
          <img class="checkOut-image" :src="product.imagesUrl[1]" alt="...">
        </div>
        <div class="col-md-6">
          <h2 class="fw-bold h1 product-title mb-1">{{ product.title }}</h2>
          <p class="mb-0 text-muted text-end text-sm-start"><del>NT$ {{ product.origin_price }}</del></p>
          <p class="h4 fw-bold text-end text-sm-start">NT$ {{ product.price }}</p>
          <div class="row align-items-center">
            <div class="col-6">
              <div class="input-group my-3 bg-light rounded">
                <div class="input-group-prepend">
                  <button class="btn btn-outline-secondary border-0 py-2" @click.prevent="minus" type="button" id="button-addon1">
                    <i class="bi bi-dash"></i>
                  </button>
                </div>
                <input type="number" class="form-control border-0 text-center my-auto shadow-none bg-light" v-model.number="count" placeholder="" readonly="readonly" aria-label="Example text with button addon" aria-describedby="button-addon1">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary border-0 py-2" @click.prevent="add" type="button" id="button-addon2">
                    <i class="bi bi-plus"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-6">
              <a href="./checkout.html" class="text-nowrap btn btn-secondary w-100" @click.prevent="addToCart" :class="{ disabled : loadingStatus.loadingItem }">加入購物車</a>
            </div>
          </div>
        </div>
      </div>
      <div class="row my-4">
        <div class="col-md-6">
          <p class="font-size-light">{{ product.description }}</p>
        </div>
      </div>
      <h3 class="fw-bold">{{ product.content }}</h3>
      <div class="swiper-container mt-4 mb-5">
        <div class="swiper-wrapper">
          <div class="swiper-slide mb-5">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img :src="product.imagesUrl[0]" class="card-img-top rounded-0" alt="...">
              <!-- <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="text-muted mt-3">Lorem ipsum</p>
              </div> -->
            </div>
          </div>
          <div class="swiper-slide mb-5">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img :src="product.imagesUrl[2]" class="card-img-top rounded-0" alt="...">
              <!-- <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="text-muted mt-3"></p>
              </div> -->
            </div>
          </div>
          <div class="swiper-slide mb-5">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img :src="product.imagesUrl[3]" class="card-img-top rounded-0" alt="...">
              <!-- <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="text-muted mt-3"></p>
              </div> -->
            </div>
          </div>
          <div class="swiper-slide mb-5">
            <div class="card border-0 mb-4 position-relative position-relative">
              <img :src="product.imagesUrl[4]" class="card-img-top rounded-0" alt="...">
              <!-- <div class="card-body p-0">
                <h4 class="mb-0 mt-3"><a href="#">Lorem ipsum</a></h4>
                <p class="text-muted mt-3"></p>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
</template>

<script>
import FrontNavBar from '@/components/FrontNavBar.vue'
import Footer from '@/components/Footer.vue'

import emitter from '../../assets/javascript/emitter'

export default {
  data () {
    return {
      count: 1,
      product: {
        imagesUrl: []
      },
      loadingStatus: {
        loadingItem: false
      }
    }
  },
  components: { FrontNavBar, Footer },
  methods: {
    backToProducts () {
      this.$router.push('/')
    },
    add () {
      console.log('add')
      this.count += 1
      console.log(this.count)
    },
    minus () {
      if (this.count > 1) {
        this.count -= 1
        // console.log(this.count)
      } else {
        alert('票數不可低於1')
      }
    },
    toPurchase () {
      console.log('click')
      console.log(this.$router)
      this.$router.push('/checkout/form')
    },
    getSingleProduct () {
      const id = this.$route.params.id
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/product/${id}`
      this.$http.get(url).then(res => {
        if (res.data.success) {
          this.product = res.data.product
          console.log(this.product)
        }
      }).catch(err => {
        alert(err.message)
      })
    },
    addToCart () {
    //   console.log('click')
      this.loadingStatus.loadingItem = true
      const cart = {
        product_id: this.product.id,
        qty: this.count
      }
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.post(url, { data: cart }).then(res => {
        console.log(res)
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
    console.log(this.$route.params.id)
    this.getSingleProduct()
    // emitter.emit('toFrontNavBar')
  }
}
</script>
