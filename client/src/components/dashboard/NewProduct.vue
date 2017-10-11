<template>
<div class="col-md-9">
  <h1>Add new product</h1>
  <form-item 
    itemFor="productName"
    itemName="productName"
    itemHolder="Input product name"
    itemType="text"
    v-model="productName"
  ><span slot="label">Product name</span></form-item>
  <h1>{{productName}}</h1>
</div>
</template>

<script>
import FormItem from '@/components/FormItem'
export default {
  name: 'NewProduct',
  data () {
    return {
      productName: ''
    }
  },
  components: {
    FormItem
  },

  methods: {
  },
  created () {
    console.log('created new product')
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
