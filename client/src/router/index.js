import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import ProductList from '@/components/ProductList'
import About from '@/components/About'
import DashBoard from '@/components/dashboard/Index'
import CategoryList from '@/components/dashboard/CategoryList'

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
      path: '/products',
      name: 'Product',
      component: ProductList
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
      component: DashBoard,
      children: [
        {
          path: 'categories',
          component: CategoryList,
          name: 'categoryList'
        }
      ]
    }
  ]
})
