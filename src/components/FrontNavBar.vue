<template>
      <div class="container bg-white">
        <nav class="navbar navbar-expand-lg navbar-light d-flex">
          <div class="container-fluid justify-content-sapce-between">
            <a class="navbar-brand text-secondary font-size-Regular" href="./index.html">
              EXHIBITION
            </a>
            <div>
              <ul class="navbar-nav ms-auto">
                <li class="nav-item d-flex position-relative">
                  <a class="nav-item nav-link dropdown-menu-right me-4 font-size-Regular hover" href="#"  id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                    購物車
                    <i class="bi bi-cart2"></i>
                    <div class="rounded-circle bg-danger text-white position-absolute px-2" style="right: -7px;
    top: 3px; font-size: 13px;">{{ cart.carts !== undefined  &&  cart.carts.length }}</div>
                  </a>
                  <div class="dropdown-menu position-absolute" aria-labelledby="dropdownMenuLink" style="min-width: 350px; right: -15px; left: auto;">
                    <div class="px-4 pb-3 pt-2">
                      <h6 class="font-size-light text-center border-bottom pb-2">已選擇商品</h6>
                      <table class="table mb-4">
                        <thead class="border-bottom">
                          <tr>
                            <th style="width: 43px;"></th>
                            <th class="text-center" style="width: 95px">名稱</th>
                            <th class="text-center" style="width: 56px">數量</th>
                            <th class="text-center" style="width: 60px">單價</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in cart.carts" :key="item">
                            <td class="align-middle">
                              <button type="button" class="btn btn-secondary btn-sm" @click.stop="dropdownDeleteIcon(item.id)">
                                <i class="bi bi-trash"></i>
                              </button>
                            </td>
                            <td class="align-middle text-center">
                              {{ item.product.title }}
                            </td>
                            <td class="align-middle text-center">
                              {{ item.qty }}張
                            </td>
                            <td class="align-middle text-center">
                              ${{ item.final_total }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <router-link :to="'/shopcart'" class="btn btn-secondary d-block btn-tocart" :class="{ 'disabled': cartLength === 0 }">
                        點擊結帳
                      </router-link>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
</template>

<script>
import emmitter from '../assets/javascript/emitter'

export default {
  data () {
    return {
      cart: {},
      cartLength: 0
    }
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url).then(res => {
        this.cart = res.data.data
        this.cartLength = res.data.data.carts.length
        // console.log(this.cartLength)
      }).catch(err => {
        alert(err.message)
      })
    },
    dropdownDeleteIcon (id) {
      // console.log(id)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(url).then(res => {
        if (res.data.success) {
          this.getCart()
          // console.log(res)
        }
      }).catch(err => {
        alert(err.message)
      })
    }
  },
  mounted () {
    this.getCart()
    emmitter.on('update-cart', () => {
      this.getCart()
    })
  }
}
</script>
