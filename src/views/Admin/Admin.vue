<template>
  <Loading :isLoading="Loading" />
  <div class="container">
    <div class="d-flex justify-content-end mt-4">
    </div>
    <table class="table">
      <thead>
        <tr>
          <th width="120">
            姓名
          </th>
          <th>地址</th>
          <th width="120">
            訂單ID
          </th>
          <th width="120">
            金額
          </th>
          <th width="100">
            是否啟用
          </th>
          <th width="120">
            編輯
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in orders.orders" :key="item">
         <td>{{ item.user.name }}</td>
         <td>{{ item.user.address }}</td>
         <td>{{ item.id }}</td>
         <td>{{ item.total }}</td>
         <td>
          <span v-if="item.is_paid" class="text-success">已付款</span>
          <span v-else>未付款</span>
         </td>
         <td>
           <div class="btn-group">
            <button type="button" class="btn btn-outline-secondary btn-sm" @click="openModal(item)">
              詳情
            </button>
            <button type="button" class="btn btn-outline-danger btn-sm" @click.prevent="deleteOrder(item.id)">
              刪除
            </button>
          </div>
         </td>
        </tr>
      </tbody>
    </table>
    <!-- ProductModal -->
    <Pagiantion :pages="pagination" @get-product="getOrders" />
    <AdminModal ref="productModal" :orderdetail="tempProduct"></AdminModal>
  </div>
</template>

<script>
import AdminModal from '@/components/AdminModal.vue'
import Pagiantion from '@/components/Pagination.vue'

export default {
  components: {
    AdminModal, Pagiantion
  },
  data () {
    return {
      orders: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      Loading: false,
      status: {
        fileUploading: false
      },
      modal: {
        editModal: '',
        delModal: ''
      }
    }
  },
  methods: {
    getOrders (page) {
      this.Loading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.orders = res.data
          this.totalPages = res.data.pagination.total_pages
          this.pagination = res.data.pagination
          // console.log(this.orders)
          this.Loading = false
        }
      }).catch(err => {
        alert(err.message)
      })
    },
    openModal (item) {
      this.$refs.productModal.openModal()
      this.tempProduct = item
      // console.log(this.tempProduct)
    },
    deleteOrder (id) {
      console.log(id)
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/order/${id}`
      this.$http.delete(url).then(res => {
        console.log(res)
        this.getOrders(this.pagination.current_page)
      }).catch(err => {
        alert(err.message)
      })
    }
  },
  mounted () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    console.log(token)
    this.getOrders()
  }
}
</script>
