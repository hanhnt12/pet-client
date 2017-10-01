<template>
<div class="row">
  <side-bar></side-bar>
  <router-view></router-view>
</div>
</template>

<script>
import SideBar from '@/components/dashboard/SideBar'

export default {
  name: 'index',
  data () {
    return {}
  },
  components: {
    SideBar
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
