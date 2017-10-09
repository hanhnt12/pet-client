<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <login v-if="showLogin" @showLogin="showLogin = true"></login>
    <footerc></footerc>
    <modal-error :showModal="showModal" @close="showModal = false"></modal-error>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footerc from '@/components/Footerc'
import ModalError from '@/components/ModalError'
import Login from '@/components/Login'

export default {
  name: 'app',

  components: {
    Navbar,
    Footerc,
    ModalError,
    Login
  },

  data () {
    return {
      showModal: false,
      showLogin: false
    }
  },

  methods: {

  },

  created () {
    // Register event listener
    this.$bus.$on('error', message => {
      // log message error
      console.log(message)

      this.showModal = true
      console.log('showModal: ' + this.showModal)
    })
  }
}
</script>

<style>

</style>
