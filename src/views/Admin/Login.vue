<template>
  <div class="container position-relative">
    <div class="row justify-content-center position-relative">
        <div class="col-8 position-absolute" style="top: 327px;">
            <h1 class="h3 mb-3 font-weight-normal text-center">
            後台登入系統
            </h1>
            <form id="form" class="form-signin" @submit.prevent="signin">
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="username" v-model="user.username"
                        placeholder="name@example.com" required autofocus>
                    <label for="username">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="password" v-model="user.password"
                        placeholder="Password" required>
                    <label for="password">Password</label>
                </div>
                <button class="btn btn-lg btn-secondary w-100 mt-3" id="login" type="submit">
                登入
                </button>
            </form>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    signin () {
      const url = `${process.env.VUE_APP_API}/admin/signin`
      console.log(this.user.username, this.user.password)
      this.$http.post(url, this.user).then(res => {
        if (res.data.success) {
          console.log(res.data.success)
          const { token, expired } = res.data
          document.cookie = `hexToken=${token};expires=${new Date(expired)};`
          this.$router.push('/admin')
        } else {
          alert('請輸入正確的帳號密碼')
        }
        console.log(res)
      }).catch(err => {
        alert(err.message)
      })
    }
  }
}
</script>
