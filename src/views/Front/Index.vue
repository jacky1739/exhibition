<template>
  <Loading :isLoading="Loading"></Loading>
  <div class="banner d-flex">
    <div class="container d-flex align-items-center justify-content-center">
      <div class="row">
        <div class="col-lg-10 col-md-8">
          <h1 class="h2 font-color-secondary mb-4 font-size-bold wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">台北當代藝術展</h1>
          <p class="h3 font-color-secondary mb-4 font-size-Regular wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1s">01 JUN - 31 OCT</p>
          <div class="d-grid gap-2">
            <router-link :to="'/about'" class="btn btn-outline-secondary rounded-pill font-color-secondary rounded-pill border-white wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.5s">關於我們</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
  <GuessYouLike />
  <div class="container mb-5">
    <div class="row mb-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
      <div class="col-md-5 place-img"></div>
      <div class="col-md-7 card-body-color">
        <h2 class="text-center font-size-bold p-4">場所介紹</h2>
        <ul class="d-flex justify-content-around mb-5">
          <li>
            <i class="bi bi-geo-fill d-flex justify-content-center" style="font-size: 40px"></i>
            <h2>交通方便</h2>
          </li>
          <li>
            <i class="bi bi-cash-stack d-flex justify-content-center" style="font-size: 40px"></i>
            <h2>收費便宜</h2>
          </li>
          <li>
            <i class="bi bi-camera d-flex justify-content-center" style="font-size: 40px"></i>
            <h2>專業導覽</h2>
          </li>
        </ul>
        <p class="text-center font-size-light">肩負推動臺灣現當代藝術的保存、研究、發展與普及之使命，掌握全球趨勢、建立多元交流管道，提升普羅大眾對現當代藝術的認知與參與，促使臺灣現當代藝術發展臻至蓬勃，全民藝術涵養更加豐沛，以期形成具有美感修為及文化思辨力的當代社會。</p>
      </div>
    </div>

    <h2 class="text-center font-size-bold p-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">館舍建築</h2>
    <div class="row mb-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s">
      <div class="col-md-5 building-img"></div>
      <div class="col-md-7 d-flex border-top border-end border-bottom border-third">
        <div class="d-flex align-items-center justify-content-center">
          <ul>
            <li>
              <p class="text-center text-third font-size-light">因應市民生活品質需要與文化藝術水準之提昇，，七十二年元月完工，並於同年十二月二十四日正式落成開館，開啟了為市民服務之使命。</p>
            </li>
            <li>
              <p class="text-center text-third font-size-light">採「井」字形結體，將傳統建築元素之斗拱堆砌為主體架構，意在以美術館為文化活水之泉源。四周牆面設計使用整片玻璃採光，中樞內庭承接自然光源，光影隨時間移動而變化，顯現出自然生動之特質。</p>
            </li>
            <li>
              <p class="text-center text-third font-size-light">您"的感覺外，也要在消費者的心中建立起"FITNESSMALL的早餐是專屬為我現做的"。</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="building-banner wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.5s"></div>
    </div>
  </div>
</template>

<script>
import GuessYouLike from '@/components/GuessYouLike.vue'

export default {
  components: {
    GuessYouLike
  },
  data () {
    return {
      products: [],
      Loading: false
    }
  },
  methods: {
    getData () {
      this.Loading = true
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/products`
      this.$http.get(url).then(res => {
        if (res.data.success) {
          this.products = res.data.products
          this.Loading = false
        }
      })
    }
  },
  created () {
    this.getData()
  }
}
</script>
