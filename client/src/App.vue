<template>
  <div id="app">
    <navbar-top></navbar-top>
    <router-view></router-view>
    <modal-error :showModal="showModal" @close="showModal = false"></modal-error>
    <footerc></footerc>
  </div>
</template>

<script>
import NavbarTop from '@/components/NavbarTop'
import Footerc from '@/components/Footerc'
import ModalError from '@/components/ModalError'

export default {
  name: 'app',

  components: {
    NavbarTop,
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

  },

  beforeCreate () {
  },

  ready () {
  }
}
</script>

<style>

</style>
