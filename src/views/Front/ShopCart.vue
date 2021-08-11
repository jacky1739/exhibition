<template>
  <Loading :isLoading="Loading" />
  <div class="container">
    <div class="row justify-content-center wrap">
      <div class="col-md-10 bg-white shadow shopcart-layout mb-5">
        <div class="cart p-3">
          <div class="mt-4 mb-3">
            <span class="input-group-addon"><button class="btn btn-secondary btn-sm" type="button" @click.prevent="backToProducts"><i class="bi bi-arrow-left"></i></button></span>
            <span class="ml-1 font-size-light">返回</span>
          </div>
          <h2 class="font-weight-bold mb-3"><i class="bi bi-cart mr-0"></i><span class="mr-2">購物車清單</span></h2>
          <div class="cart-list d-flex bg-light mb-5" v-for="item in cart.carts" :key="item">
            <div class="img-fluid">
              <img :src="item.product.imageUrl" class="cart-img mr-0">
            </div>
            <div class="cart-content p-2">
              <div class="d-flex justify-content-between position-relative">
                <p class="font-size-light">{{ item.product.title }} / 一張 {{item.product.price}}</p>
                <button class="btn btn-third btn-sm delete-icon" @click.prevent="sweetAlertConfirm(item.id)" type="button"><i class="bi bi-trash" style="font-size: 15px;"></i></button>
              </div>
              <p class="ellipsis font-size-light">{{ item.product.description}}</p>
              <div class="d-flex justify-content-between">
                <div class="d-flex cart-input-group">
                  <button type="button" class="btn btn-secondary btn-sm px-2" @click.prevent="updateCart(item.id, item.qty-1)" :disabled="loadingStatus.loadingItem === item.id"><i class="bi bi-dash"></i></button>
                  <input class="form-control rounded-0" readonly="readonly" placeholder="1" v-model.number="item.qty">
                  <button type="button" class="btn btn-secondary btn-sm px-2" @click.prevent="updateCart(item.id, item.qty+1)" :disabled="loadingStatus.loadingItem === item.id"><i class="bi bi-plus"></i></button>
                </div>
                <p class="font-size-light">總共$ {{ item.total }}</p>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-around">
            <p class="font-size-Regular">總計</p>
            <p class="font-size-Regular text-danger">$ {{ totalPrice }}</p>
          </div>
          <div class="row justify-content-center mb-5">
            <div class="col-md-4">
              <div class="d-grid gap-2">
                <button class="btn btn-secondary d-flex justify-content-center" @click.prevent="toOrder" type="button">確認訂單</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import emitter from '../../assets/javascript/emitter'

export default {
  data () {
    return {
      cart: {},
      totalPrice: {},
      loadingStatus: {
        loadingItem: ''
      },
      Loading: false
    }
  },
  methods: {
    backToProducts () {
      this.$router.push('/')
    },
    getCartList () {
      this.Loading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url).then(res => {
        if (res.data.success) {
          // console.log(res.data.data.carts)
          this.cart = res.data.data
          this.totalPrice = res.data.data.final_total
          this.Loading = false
          // console.log(this.totalPrice)
        }
      }).catch(err => {
        alert(err.message)
      })
    },
    sweetAlertConfirm (id) {
      this.$swal({
        title: '確定刪除?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: '確認',
        cancelButtonText: '取消'
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteCart(id)
        }
      })
    },
    deleteCart (id) {
      console.log(id, this.cart.carts.length)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(url).then(res => {
        if (res.data.success) {
          this.getCartList()
          emitter.emit('update-cart')
          if (this.cart.carts.length === 0) {
            alert('購物車已經沒有東西，請重新購物')
            this.$http.router.push('/')
          }
        }
      }).catch(err => {
        alert(err.message)
      })
    },
    updateCart (id, qty) {
      this.loadingStatus.loadingItem = id // 點擊後使按鈕disable的功能
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      const data = {
        product_id: 'id',
        qty: qty
      }
      if (qty >= 1) {
        console.log(id, qty)
        this.$http.put(url, { data }).then(res => {
          // console.log(res)
          if (res.data.success) {
            this.getCartList()
            this.loadingStatus.loadingItem = ''
          }
        }).catch(err => {
          alert(err.message)
        })
      } else {
        this.loadingStatus.loadingItem = ''
        this.$swal({
          position: 'top',
          title: '票數不能少於1!',
          icon: 'error'
        })
      }
    },
    toOrder () {
      this.$router.push('/order')
    }
  },
  watch: {
    cart (n, o) {
      console.log(n.carts.length, o)
      if (n.carts.length === 0) {
        this.$swal({
          position: 'top',
          title: '購物車已經是空的，請重新加入購物車',
          icon: 'error'
        })
        this.$router.push('/')
      }
    }
  },
  mounted () {
    this.getCartList()
  }
}
</script>
