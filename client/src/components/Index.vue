<template>
<div>
  <HeaderBar></HeaderBar>
  <Category></Category>
  <Contact></Contact>
  </div>
</template>

<script>
import HeaderBar from '@/components/HeaderBar'
import Category from '@/components/Category'
import Contact from '@/components/Contact'

export default {
  name: 'index',

  data () {
    return {}
  },

  components: {
    HeaderBar,
    Category,
    Contact
  },

  methods: {
  },

  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
