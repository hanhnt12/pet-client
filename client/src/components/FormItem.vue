<template>
<div class="form-group">
  <label class="col-md-4 control-label" :for="itemFor">
    <slot name="label">Default Label</slot>
  </label>  
  <div class="col-md-8">
    <slot name="itemType" ></slot>
    <input :id="itemFor" 
      :name="itemName" 
      class="form-control input-md" 
      :placeholder="itemHolder" 
      :type="itemType" />
  </div>
</div>
</template>

<script>
export default {
  name: 'FormItem',
  data () {
    return {
    }
  },
  props: ['itemFor', 'itemName', 'itemType', 'itemHolder']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
