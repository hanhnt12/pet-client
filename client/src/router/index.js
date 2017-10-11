import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ProductList from '@/components/ProductList'
import ProductDetails from '@/components/ProductDetails'
import About from '@/components/About'
import DashBoard from '@/components/dashboard/Index'
import CategoryList from '@/components/dashboard/CategoryList'
import ProductDashBoard from '@/components/dashboard/ProductDashBoard'
import NewProduct from '@/components/dashboard/NewProduct'
import Login from '@/components/Login'

Vue.use(Router)
Vue.use(require('vue-resource'))

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/products',
      name: 'Product',
      component: ProductList,
      children: [
        {
          path: ':id',
          component: ProductDetails,
          name: 'ProductDetails'
        }
      ]
    },
    {
      path: '/products/:category',
      name: 'ProductCategory',
      component: ProductList
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: DashBoard,
      children: [
        {
          path: '/',
          component: ProductDashBoard,
          name: 'ProductDashBoard'
        },
        {
          path: 'categories',
          component: CategoryList,
          name: 'CategoryList'
        },
        {
          path: 'products',
          component: ProductDashBoard,
          name: 'ProductDashBoard'
        },
        {
          path: 'new-product',
          component: NewProduct,
          name: 'NewProduct'
        }
      ]
    }
  ]
})
