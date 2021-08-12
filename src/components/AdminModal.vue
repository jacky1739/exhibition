<template>
  <div
    class="modal fade"
    id="productModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <!-- <span v-if="isNew">新增產品</span>
            <span v-else>編輯產品</span> -->
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-8" v-for="item in detail" :key="item">
              <div class="border-bottom">
                <h2>品項</h2>
                <p>{{ item.product.title }}</p>
                <h2>分類</h2>
                <p>{{ item.product.category }}</p>
                <h2>售價</h2>
                <p>{{ item.product.price }}</p>
                <h2>數量</h2>
                <p>{{ item.qty }}</p>
                <h2>總計</h2>
                <p>{{ item.final_total }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
          >
            確認
          </button>
          <!-- <button
            type="button"
            class="btn btn-primary"
          >
            取消
          </button> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modalMixin from '@/mixins/modalMixin'

export default {
  props: ['orderdetail'],
  data () {
    return {
      detail: []
    }
  },
  watch: {
    orderdetail () {
      this.detail = this.orderdetail.products
      console.log(this.detail)
    }
  },
  mixins: [modalMixin]
}
</script>
