<template>
  <div class="banner d-flex">
    <div class="container d-flex align-items-center justify-content-center">
      <div class="row">
        <div class="col-lg-10 col-md-8">
          <h2 class="h2 font-color-secondary mb-4 font-size-bold wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">台北當代藝術展</h2>
          <p class="h3 font-color-secondary mb-4 font-size-Regular wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.5s">01 JUN - 31 OCT</p>
          <div class="d-grid gap-2">
            <a class="btn btn-outline-secondary rounded-pill font-color-secondary rounded-pill border-white wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1.5s" href="#/about">關於我們</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <GassYouLike />
  <div class="container mb-5">
    <div class="row">
      <div class="col-md-5 place-img">
      </div>
      <div class="col-md-7 palce-info card-body-color">
        <h2 class="text-center font-size-bold p-4">場所介紹</h2>
        <ul class="d-flex justify-content-around mb-5">
          <li>
            <i class="bi bi-geo-fill d-flex justify-content-center" style="font-size: 40px"></i>
            <h2>地點方便</h2>
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
        <p class="text-center font-size-light">食物能夠傳遞喜悅與滿足。從蔬果產地、水質清洗到人工逐葉揀選，講究新鮮品質與食安衛生，無毒且口感水嫩清脆， 打造安心且獨一無二的輕食品，讓您在味蕾間，品嘗疏食鮮甜的感動與原味本質。打造安心且獨一無二的輕食品，讓您在味蕾間，品嘗疏食鮮甜的感動與原味本質</p>
      </div>
    </div>
  </div>
</template>

<script>
import GassYouLike from '@/components/GassYouLike.vue'

export default {
  components: {
    GassYouLike
  },
  data () {
    return {
      products: []
    }
  },
  methods: {
    toProducts () {
      window.scrollTo(0, 850)
    }
  }
}
</script>
