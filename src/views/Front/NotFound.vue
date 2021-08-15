<template>
  <section class="about-banner d-flex mb-5">
    <div class="container d-flex align-items-center justify-content-center">
        <div class="row">
            <div class="col-md-12">
                <div class="d-flex align-items-center justify-content-center">
                  <h1 class="text-secondary font-size-bold">404沒有這個頁面</h1>
                </div>
            </div>
        </div>
    </div>
  </section>
  <section class="container mb-5">
    <div class="row d-flex jutify-content-center">
      <div class="col-md-12">
        <div class="d-flex justify-content-center mb-5">
          <router-link :to="'/'">
            <button class="input-group-addon btn btn-secondary btn-sm" type="button"><i class="bi bi-arrow-left"></i></button>
          </router-link>
          <p class="ml-1 font-size-light" style="margin-bottom: 0px;">點擊返回首頁</p>
        </div>
        <div class="w-100 about-content-img"></div>
      </div>
    </div>
  </section>
</template>
