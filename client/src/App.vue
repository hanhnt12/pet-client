<template>
  <div id="app">
    <NavbarTop></NavbarTop>
    <router-view></router-view>
    <Footerc></Footerc>
  </div>
</template>

<script>
import NavbarTop from '@/components/NavbarTop'
import Footerc from '@/components/Footerc'

export default {
  name: 'app',
  components: {
    NavbarTop,
    Footerc
  },
  data () {
    return {}
  }
}
</script>

<style>

</style>
