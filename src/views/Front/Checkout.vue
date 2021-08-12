<template>
  <Loading :isLoading="Loading" />
  <div class="wrap container">
      <div class="row shadow p-4 mb-5">
        <div class="row d-flex justify-content-center">
          <div class="col-md-5">
            <ul class="d-flex justify-content-between" style="margin-bottom: 0px;">
              <li>
                <p class="circle d-flex justify-content-center bg-third text-black rounded-circle mb-2 border border-secondary py-2 m0-auto">1</p>
                <p class="font-size-light">購物車</p>
              </li>
              <li>
                <p class="circle d-flex justify-content-center bg-third text-black rounded-circle mb-2 border border-secondary py-2 m0-auto">2</p>
                <p class="font-size-light">填寫資料</p>
              </li>
              <li class="position-relative">
                <p class="circle d-flex justify-content-center bg-secondary rounded-circle mb-2 text-white py-2 m0-auto">3</p>
                <p class="font-size-light">確認訂單</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-7">
          <h2>訂單成立</h2>
          <p class="font-size-light">感謝您訂購本次的展覽，祝您參觀愉快</p>
          <div class="checkout-img"></div>
        </div>
        <div class="col-md-5">
            <div class="boder-primary p-3 mb-4">
              <h3 class="mb-4"><i class="bi bi-cart"></i> 訂單明細</h3>
              <div class="d-flex mb-4" v-for="item in allProducts" :key="item">
                <img :src="item.product.imageUrl" class="orderImg mr-0">
                <div class="w-100">
                  <div class="d-flex justify-content-between">
                    <p class="font-size-light">{{ item.product.title }}</p>
                    <p class="font-size-light">X {{ item.qty }}</p>
                  </div>
                  <div class="d-flex justify-content-between w-100">
                    <p class="font-size-light">$ {{ item.product.price}}/ 張</p>
                    <p class="font-size-light">$ {{ item.final_total }}</p>
                  </div>
                </div>
              </div>
              <div class="w-100">
                <div class="d-flex justify-content-between border-top pt-4">
                  <p class="font-size-Regular">總計</p>
                  <p class="font-size-Regular text-danger">$ {{ sum }}</p>
                </div>
              </div>
              <div class="w-100">
                <div class="d-flex justify-content-between border-top pt-4">
                  <p class="font-size-Regular">付款狀態</p>
                  <p class="font-size-Regular" :class="{ 'text-success': isPaid === true }">{{ pay }}</p>
                </div>
              </div>
            </div>
            <div class="w-100" :class="{ 'd-none' : isPaid === true }">
              <div class="d-grid gap-2">
                <button class="btn btn-secondary py-3 px-7" type="submit" @click.prevent="payOrder">確認結帳</button>
              </div>
            </div>
            <div class="mt-4 mb-3">
              <span class="input-group-addon"><button class="btn btn-secondary btn-sm" type="button" @click.prevent="backToProducts"><i class="bi bi-arrow-left"></i></button></span>
              <span class="ml-1 font-size-light">返回展覽</span>
            </div>
        </div>
      </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      allProducts: [],
      order: {
        user: {}
      },
      orderId: '',
      sum: 0,
      isPaid: false,
      pay: '尚未付款',
      Loading: false
    }
  },
  methods: {
    getOrder () {
      this.Loading = true
      this.orderId = this.$route.params.orderId
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/order/${this.orderId}`
      this.$http.get(url).then(res => {
        this.allProducts = res.data.order.products
        this.sum = res.data.order.total
        // console.log(res.data.order)
        this.Loading = false
      }).catch(err => {
        alert(err.message)
      })
    },
    payOrder () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`
      this.$http.post(url).then(res => {
        console.log(res.data.success)
        if (res.data.success) {
          this.isPaid = res.data.success
          this.pay = '付款成功'
          this.$swal('付款成功!!')
        }
      })
    },
    backToProducts () {
      this.$router.push('/allproducts')
    }
  },
  mounted () {
    this.getOrder()
  }
}
</script>
