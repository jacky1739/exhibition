<template>
  <div class="banner d-flex">
    <div class="container d-flex align-items-center justify-content-center">
      <div class="row">
        <div class="col-lg-10 col-md-8">
          <h2 class="h2 font-color-secondary mb-4 font-size-bold">台北當代藝術展</h2>
          <p class="h3 font-color-secondary mb-4 font-size-Regular">01 JUN - 31 OCT</p>
          <div class="d-grid gap-2">
            <a class="btn btn-outline-secondary rounded-pill font-color-secondary rounded-pill border-white" href="#/about">關於我們</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
