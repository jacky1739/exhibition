import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Front/Dashboard.vue'),
    children: [
      {
        path: '',
        name: '',
        component: () => import('@/views/Front/Index.vue')
      },
      {
        path: 'about',
        name: 'aboutus',
        component: () => import('@/views/Front/About.vue')
      },
      {
        path: 'shopcart',
        name: 'shopcart',
        component: () => import('@/views/Front/ShopCart.vue')
      },
      {
        path: 'order',
        name: 'order',
        component: () => import('@/views/Front/Order.vue')
      },
      {
        path: 'checkout/:orderId',
        name: 'checkout',
        component: () => import('@/views/Front/Checkout.vue')
      },
      {
        path: 'allproducts',
        name: 'allproducts',
        component: () => import('@/views/Front/AllProducts.vue')
      },
      {
        path: 'singleproduct/:id',
        name: 'singleproduct',
        component: () => import('@/views/Front/SingleProduct.vue')
      },
      {
        path: 'product/:id',
        name: 'product',
        component: () => import('@/views/Front/Product.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Admin/Login.vue')
  },
  {
    path: '/backend',
    name: 'backend',
    component: () => import('@/views/Admin/Backend.vue'),
    children: [
      {
        path: 'admin',
        name: 'admin',
        component: () => import('@/views/Admin/Admin.vue')
      },
      {
        path: 'coupon',
        name: 'coupon',
        component: () => import('@/views/Admin/Coupon.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
