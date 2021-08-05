import { createApp } from 'vue'
// import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

// loading
import Loading from 'vue3-loading-overlay'
import 'vue3-loading-overlay/dist/vue3-loading-overlay.css'

// vee-validate
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'

// 匯入 vee-validate 相關規則
import { required, email, min } from '@vee-validate/rules'

// 匯入多國語系的功能
import { localize, setLocale } from '@vee-validate/i18n'

// sweet Alert 套件
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// 匯入繁體中文語系檔案
import App from './App.vue'
import router from './router'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

import $httpMessageState from '@/methods/pushMessageState'

// 小數點千分號
import toCurrency from './assets/javascript/toCurrency'

// coupon
import { date, currency } from './methods/filters'

// createApp(App).use(router).mount('#app')
const app = createApp(App)
// 註冊 vee-validate 三個全域元件
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

// loading
app.component('Loading', Loading)

// coupon
app.config.globalProperties.$filters = {
  date,
  currency
}

// sweetalert 樣式
const options = {
  confirmButtonColor: '#630834',
  icon: 'success'
}

// 將 toCurrency 加到 vue 的全域屬性下
app.config.globalProperties.$toCurrency = toCurrency

app.config.globalProperties.$httpMessageState = $httpMessageState

app.use(router)
app.use(VueAxios, axios)
app.use(VueSweetalert2, options)

app.mount('#app')

// 註冊 vee-validate 三個全域元件
defineRule('required', required)
defineRule('email', email)
defineRule('min', min)

// Activate the locale
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true // 調整為輸入字元立即進行驗證
})

// 設定預設語系
setLocale('zh_TW')
