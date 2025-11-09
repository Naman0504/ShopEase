// Router: defines routes for Home (Landing), Products, Order, Contact
import { createRouter, createWebHistory } from 'vue-router'
import Landing from '../pages/Landing.vue'
import Products from '../pages/Products.vue'
import Order from '../pages/Order.vue'
import Contact from '../pages/Contact.vue'
import WishList from '../pages/WishList.vue'

const routes = [
  { path: '/', name: 'Home', component: Landing },
  { path: '/products', name: 'Products', component: Products },
  { path: '/order', name: 'Order', component: Order },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/wishlist', name: 'WishList', component: WishList },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
