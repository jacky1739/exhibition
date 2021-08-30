<template>
  <div class="product-banner mb-5"></div>
  <section class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-md-10">
        <ul class="col-md-10 m0-auto d-flex justify-content-center category mb-4 border-bottom border-secondary mb-5 flex-wrap">
          <li>
            <button class="btn btn-secondary category-btn rounded-0" @click.prevent="addWordToData('all')">全部展覽</button>
          </li>
          <li>
            <button class="btn btn-secondary category-btn rounded-0" @click.prevent="addWordToData('special')">特別展覽</button>
          </li>
          <li>
            <button class="btn btn-secondary category-btn rounded-0" @click.prevent="addWordToData('hot')">熱門展覽</button>
          </li>
           <li>
            <button class="btn btn-secondary category-btn rounded-0" @click.prevent="addWordToData('normal')">一般展覽</button>
          </li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 cursor mb-5" @click.prevent="">
        <div class="product-img">
          <img src="../../../public/images/card-1.jpg" alt="">
        </div>
        <div class="card-body border">
          <h2 class="text-center">2020 台味設計展</h2>
          <!-- <p class="text-center">這是一個專屬於設計系畢業生的展覽，沒有華</p> -->
          <p class="card-price text-center"><small class="text-muted"><del>NT$ 750</del>/ 500</small></p>
          <div class="d-flex justify-content-center">
            <button type="button" class="btn btn-secondary mr-0">查看詳情</button>
            <button type="button" class="btn btn-third border-secondary">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    getData () {
      console.log('hi')
    },
    click () {
      console.log('click')
    }
  },
  mounted () {
    this.getData()
  }
}
</script>
