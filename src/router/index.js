import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import AddProduct from '../views/AddProdcut.vue'
import Admin from '../views/Admin.vue'
import EditProduct from '../views/EditProduct.vue'
import ProductDetails from '../views/ProductDetails'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
  {
    path: '/add',
    name: 'addProduct',
    component: AddProduct
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditProduct
  },

  {
    path: '/product/:id',
    name: 'product',
    component: ProductDetails
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
