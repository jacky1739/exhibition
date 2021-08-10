<template>
  <div class="container pt-4">
    <div class="mb-4">
      <span class="input-group-addon"><button class="btn btn-secondary btn-sm" type="button"><i class="bi bi-arrow-left"></i></button></span>
      <span class="ml-1 font-size-light">返回</span>
    </div>
    <div class="row d-flex mb-4">
      <div class="col-md-6 product-img"></div>
      <div class="col-md-6 p-3">
        <h2 class="font-size-Regular mb-4">香水特展</h2>
        <p class="font-size-light">香水是一個人隱形的名片、代表著特別的生活風格，對香水迷來說，除了收藏香水，懂得用香、了解香氛知識會帶來更深更有感的體驗，包含淡香精，淡香水、香水、古龍水，香水調性有哪些？怎麼用香最持久？香水過期到底能不能用？本期展覽將會揭曉。</p>
        <p class="mb-0 text-muted text-end text-sm-start"><del>NT$ 1200</del></p>
        <p class="h4 fw-bold text-end text-sm-start">NT$ 500</p>
        <div class="row align-items-center">
          <div class="col-6">
            <div class="input-group my-3 bg-light rounded">
              <div class="input-group-prepend">
                <button class="btn btn-outline-secondary border-0 py-2" id="button-addon1">
                  <i class="bi bi-dash"></i>
                </button>
              </div>
              <input type="number" class="form-control border-0 text-center my-auto shadow-none bg-light" v-model.number="count" placeholder="" readonly="readonly" aria-label="Example text with button addon" aria-describedby="button-addon1">
               <div class="input-group-append">
                <button class="btn btn-outline-secondary border-0 py-2" type="button" id="button-addon2">
                  <i class="bi bi-plus"></i>
                </button>
              </div>
            </div>
           </div>
          <div class="col-6">
            <a href="./checkout.html" class="text-nowrap btn btn-secondary w-100">加入購物車</a>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <h2>展覽照片</h2>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      count: 1
    }
  }
}
</script>
