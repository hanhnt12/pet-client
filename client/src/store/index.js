import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
// import * as getters from './getters'
// import cart from './modules/cart'
// import products from './modules/products'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  // actions,
  // getters,
  // modules: {
  //   // cart,
  //   // products
  // },
  strict: debug,
  state: {
    token: null,
    user: null,
    isLogedIn: false,
    categories: []
  },
  mutations: {
    setToken (state, token) {
      state.token = token

      if (token) {
        state.isLogedIn = true
      } else {
        state.isLogedIn = false
      }
    },

    setUser (state, user) {
      state.user = user
    },

    setCategories (state, categories) {
      state.categories = categories
    }
  },
  actions: {
    setToken ({commit}, token) {
      commit('setToken', token)
    },

    setUser ({commit}, user) {
      commit('setUser', user)
    },

    setCategories ({commit}, categories) {
      commit('setCategories', categories)
    }
  }
})
