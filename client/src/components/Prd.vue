<template>
  <div class="col-sm-6 col-md-4">
    <div class="thumbnail">
      <img :src="product.imagePath" :alt="product.title" class="img-response">
      <div class="caption">
        <h3 class="title">{{product.title}}</h3>
        <p class="description">{{ cutCharacter(product.description, 200) }}</p>
        <div class="clearfix control">
          <div class="price pull-left">$ {{product.price}}</div>
          <button @click="addToCart" class="btn btn-success pull-right" role="button">
            <i class="fa fa-cart-plus" aria-hidden="true"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {}
  },
  props: ['product', 'index'],
  computed: {

  },
  methods: {
    addToCart () {
      this.$emit('addToCart')
    },

    // cut characters
    cutCharacter (strInput, length) {
      if (strInput.length > length) {
        return strInput.slice(0, length) + '...'
      } else {
        return strInput
      }
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.thumbnail {
  height: 400px;
}

.title {
  height: 50px;
}

.description {
  height: 100px;
}

.thumbnail img {
    max-height: 150px;
}

.thumbnail .description {
    color: #7f7f7f;
}

.price {
    font-weight: bold;
    font-size: 16px;
    color: #9D0D0D;
}

.table>tbody>tr>td, .table>tfoot>tr>td{
    vertical-align: middle;
}
</style>
