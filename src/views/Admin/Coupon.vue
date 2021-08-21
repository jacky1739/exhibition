<template>
  <Loading :isLoading="Loading" />
  <div>
    <div class="sticky-top bg-white ps-2 py-3 mb-1">
      <h2 class="h3">優惠券列表</h2>
      <div class="d-flex">
        <input
          type="button"
          value="新增"
          class="btn btn-secondary me-2"
          @click="openCouponModal(true)"
        />
      </div>
    </div>
    <table class="table">
      <thead>
        <tr>
          <th class="text-center border-secondary">優惠券名稱</th>
          <th class="border-secondary">優惠券代碼</th>
          <th class="text-center border-secondary">折扣率</th>
          <th class="border-secondary">期限</th>
          <th class="border-secondary">啟用</th>
          <th class="border-secondary">操作</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item">
          <td class="align-middle text-center">{{ item.title }}</td>
          <td class="align-middle">{{ item.code }}</td>
          <td class="align-middle text-center">{{ item.percent }}</td>
          <td class="align-middle">{{ new Date(item.due_date * 1000).toLocaleDateString() }}</td>
          <td class="align-middle">
            <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <div class="btn-group">
              <input type="button" value="編輯" class="btn btn-outline-success border-success" @click="openCouponModal(false, item)"/>
            </div>
            <div class="btn-group">
              <input type="button" value="刪除" class="btn btn-outline-danger border-secondary" @click="deleteCoupon(item.id)"/>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <CouponModal ref="couponModal" :is-new="isNew" :coupon="tempCoupon" @update-coupon="updateCoupon"></CouponModal>
    <DelModal ref="deleteModal"></DelModal>
  </div>
</template>

<script>
import CouponModal from '@/components/CouponModal.vue'
import DelModal from '@/components/DelModal.vue'

export default {
  data () {
    return {
      coupons: [],
      Loading: false,
      tempCoupon: {
        title: '',
        is_enabled: 1,
        percent: 100,
        code: ''
      },
      isNew: true
    }
  },
  methods: {
    getCoupons () {
      this.Loading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupons`
      this.axios.get(url).then((res) => {
        if (res.data.success) {
          this.coupons = res.data.coupons
          this.Loading = false
        }
      }).catch(() => {
        this.swal('無法取得優惠券資料喔～快去看什麼問題吧！', 'error')
      })
    },
    updateCoupon (tempCoupon) {
      if (this.isNew) {
        this.tempCoupon.is_enabled = 1
        const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon`
        this.$http.post(url, { data: tempCoupon }).then(res => {
          if (res.data.success) {
            this.getCoupons()
            this.$refs.couponModal.hideModal()
          }
        }).catch(err => {
          alert(err.message)
        })
      } else {
        const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
        this.$http.put(url, { data: this.tempCoupon }).then(res => {
          if (res.data.success) {
            this.getCoupons()
            this.$refs.couponModal.hideModal()
          }
        }).catch(err => {
          alert(err.message)
        })
      }
    },
    deleteCoupon (id) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/coupon/${id}`
      this.axios.delete(url).then((res) => {
        this.getCoupons()
      }).catch(() => {
        this.swal('無法刪除資料喔～快去看什麼問題吧！', 'error')
      })
    },
    openCouponModal (isNew, item) {
      this.isNew = isNew
      if (this.isNew) {
        this.tempCoupon = {
          due_date: Math.floor(new Date().getTime() / 1000)
        }
      } else {
        this.tempCoupon = { ...item }
      }
      this.$refs.couponModal.openModal()
    }
  },
  mounted () {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1')
    this.$http.defaults.headers.common.Authorization = token
    this.getCoupons()
  },
  components: { CouponModal, DelModal }
}
</script>
