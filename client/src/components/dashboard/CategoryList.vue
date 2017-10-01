<template>
<div class="col-md-8">
  <h1>Categories</h1>
  <div v-for="row in this.$root.categories" :key="row._id" class="row slideanim">
    <div>
      <h1>{{row._id}}</h1>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'categoryList',
  data () {
    return {
    }
  },
  components: {
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
