<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
    <footerc></footerc>
    <modal-error :showModal="showModal" @close="showModal = false"></modal-error>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Footerc from '@/components/Footerc'
import ModalError from '@/components/ModalError'

export default {
  name: 'app',

  components: {
    Navbar,
    Footerc,
    ModalError
  },

  data () {
    return {
      showModal: false
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
