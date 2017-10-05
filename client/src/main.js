// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Bus from './api/Bus'

Object.defineProperty(Vue.prototype, '$bus', {
  get () {
    return this.$root.bus
  }
})

Vue.use(BootstrapVue)
Vue.use(VueResource)

var bus = new Vue(Bus)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    bus: bus // Here we bind our event bus to our $root Vue model.
  },
  router,
  template: '<App/>',
  components: { App }
})
