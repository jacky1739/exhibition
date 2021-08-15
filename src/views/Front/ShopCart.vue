<template>
  <Loading :isLoading="Loading"></Loading>
  <div class="container">
    <div class="row justify-content-center wrap">
      <div class="col-md-10 bg-white shadow shopcart-layout mb-5">
        <div class="cart p-3">
          <div class="row d-flex justify-content-center">
            <div class="col-md-5">
              <ul class="d-flex justify-content-between" style="margin-bottom: 0px;">
                <li class="position-relative">
                  <p class="circle d-flex justify-content-center bg-secondary rounded-circle mb-2 text-white py-2 m0-auto">1</p>
                  <p class="font-size-light">購物車</p>
                </li>
                <li>
                  <p class="circle d-flex justify-content-center bg-third text-black rounded-circle mb-2 border border-secondary py-2 m0-auto">2</p>
                  <p class="font-size-light">填寫資料</p>
                </li>
                <li>
                  <p class="circle d-flex justify-content-center bg-third text-black rounded-circle mb-2 border border-secondary py-2 m0-auto">3</p>
                  <p class="font-size-light">確認訂單</p>
                </li>
              </ul>
            </div>
          </div>
          <div class="mt-4 mb-3 d-flex">
            <router-link :to="'/allproducts'">
              <button class="input-group-addon btn btn-secondary btn-sm" type="button"><i class="bi bi-arrow-left"></i></button>
            </router-link>
            <p class="ml-1 font-size-light" style="margin-bottom: 0px;">返回</p>
          </div>
          <h2 class="font-weight-bold mb-3"><i class="bi bi-cart mr-0"></i><span class="mr-2">購物車清單</span></h2>
          <div class="cart-list d-flex bg-light mb-5" v-for="item in cart.carts" :key="item">
            <div class="img-fluid">
              <img :src="item.product.imageUrl" class="cart-img mr-0" alt="購物車圖片">
            </div>
            <div class="cart-content p-2">
              <div class="d-flex justify-content-between position-relative">
                <p class="font-size-light">{{ item.product.title }} / 一張 {{item.product.price}}</p>
                <button class="btn btn-third btn-sm delete-icon" @click="sweetAlertConfirm(item.id)" type="button"><i class="bi bi-trash" style="font-size: 15px;"></i></button>
              </div>
              <p class="ellipsis font-size-light">{{ item.product.description}}</p>
              <div class="d-flex justify-content-between">
                <div class="d-flex cart-input-group">
                  <button type="button" class="btn btn-secondary btn-sm px-2" @click="updateCart(item.id, item.qty-1)" :disabled="loadingStatus.loadingItem === item.id"><i class="bi bi-dash"></i></button>
                  <input class="form-control rounded-0" readonly="readonly" placeholder="1" v-model.number="item.qty">
                  <button type="button" class="btn btn-secondary btn-sm px-2" @click="updateCart(item.id, item.qty+1)" :disabled="loadingStatus.loadingItem === item.id"><i class="bi bi-plus"></i></button>
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
              <router-link class="text-decoration-none" :to="'/order'">
                <div class="d-grid gap-2">
                  <button class="btn btn-secondary d-flex justify-content-center" type="button">確認訂單</button>
                </div>
              </router-link>
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
      this.$router.push('/allproducts')
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
    }
  },
  watch: {
    cart (newData, oldData) {
      // console.log(newData.carts.length, oldData)
      if (newData.carts.length === 0) {
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
