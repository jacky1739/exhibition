<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#/backend/admin">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#/backend/admin">後臺產品列表</a>
                    <a class="nav-link" @click.prevent="toCoupon" href="/backend/coupon">優惠券</a>
                </div>
            </div>
        </div>
    </nav>
    <router-view></router-view>
</template>

<script>
export default {
  methods: {
    toCoupon () {
      this.$router.push('/backend/coupon')
    }
  }
}
</script>
