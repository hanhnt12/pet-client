import Api from '@/services/Api'
var path = require('path')

export default {
  // get list products
  getProducts (param) {
    var url = 'products'
    if (param) {
      url = path.resolve(url, param)
    }

    console.log(`param request: ${param}`)
    return Api().get(url)
  },

  // add product to cart
  addToCart (productId) {
    return Api().post('cart/add/' + productId)
  },

  // load category product
  getCategory (param) {
    return Api().get('categories')
  }
}
