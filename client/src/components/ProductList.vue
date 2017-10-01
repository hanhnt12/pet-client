<template>
<div class="container">
  <h1>Product list</h1>
  <div v-if="loopRow > 0">
  <!-- <div v-for="row in loopRow" :key="row._id" class="row slideanim">
    <Prd @addToCart="addToCart(product)" v-for="(product, index) in getSection(row)" :index="index" :product="product" :key="product._id"></Prd>
  </div> -->
    <div class="row">
      <product v-for="(product, index) in products" 
      :index="index" :product="product" :key="product._id">
      </product>
    </div>
  </div>
  <div v-else>
    <h1>No data found</h1>
  </div>
  <modal-error></modal-error>
</div>
</template>

<script>
import Product from '@/components/Prd'
import Service from '@/services/Services'
import ModalError from '@/components/ModalError'

export default {
  name: 'hello',
  data () {
    return {
      products: [],
      loopRow: 0
    }
  },
  components: {
    Product,
    ModalError
  },

  methods: {
    async getProducts (category) {
      try {
        // console.log('before')
        var response = await Service.getProducts(category)
        // console.log(response.data)
        this.products = response.data
        this.loopRow = Math.ceil(this.products.length / 3)
        // console.log(this.products.length)
      } catch (e) {
        this.$emit('error', e)
        console.log(e)
        return
      }

      return response.data
    },

    async addToCart (product) {
      console.log('add to cart: ' + product._id)
      const result = await Service.addToCart(product._id)
      console.log(result)
    },

    getSection (section) {
      return this.products.slice((section - 1) * 3, section * 3)
    }
  },
  created () {
    console.log('Productlist.vue:  ' + this.$root.categories)
    // get prarameter
    let category = this.$route.params.category
    console.log(category)
    this.getProducts(category)
    // console.log('looprow' + this.loopRow)
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slideanim {visibility:hidden;}
.slide {
    /* The name of the animation */
    animation-name: slide;
    -webkit-animation-name: slide; 
    /* The duration of the animation */
    animation-duration: 1s; 
    -webkit-animation-duration: 1s;
    /* Make the element visible */
    visibility: visible; 
}

/* Go from 0% to 100% opacity (see-through) and specify the percentage from when to slide in the element along the Y-axis */
@keyframes slide {
    0% {
        opacity: 0;
        transform: translateY(70%);
    } 
    100% {
        opacity: 1;
        transform: translateY(0%);
    } 
}
@-webkit-keyframes slide {
    0% {
        opacity: 0;
        -webkit-transform: translateY(70%);
    } 
    100% {
        opacity: 1;
        -webkit-transform: translateY(0%);
    }
}
</style>
