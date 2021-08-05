<template>
  <FrontNavBar />
  <div class="container">
    <div class="row justify-content-center">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="col-8">
          <form id="form" class="form-signin" @click.prevent="signin">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="username"
                placeholder="name@example.com"
                required
                autofocus
              />
              <label for="username">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="password"
                placeholder="Password"
                required
              />
              <label for="password">Password</label>
            </div>
            <button
              class="btn btn-lg btn-primary w-100 mt-3"
              id="login"
              type="submit"
            >
              登入
            </button>
          </form>
        </div>
    </div>
  </div>
</template>

<script>
import FrontNavBar from '@/components/FrontNavBar.vue'

export default {
  components: { FrontNavBar }
}
</script>
