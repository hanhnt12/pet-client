<template>
<div>
  <HeaderBar></HeaderBar>
  <Category></Category>
  <Contact></Contact>
  <modal-error :showModal="showModal" @close="showModal = false"></modal-error>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import Category from '@/components/Category'
import Contact from '@/components/Contact'
import ModalError from '@/components/ModalError'

export default {
  name: 'index',

  data () {
    return {
      showModal: false
    }
  },

  components: {
    HeaderBar,
    Category,
    Contact,
    ModalError
  },

  methods: {
  },

  created () {
    console.log('Index created.')
    this.$on('error', function () {
      console.log('have error')
      this.showModal = true
    })
  },

  ready () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
