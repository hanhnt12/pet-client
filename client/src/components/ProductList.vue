<template>
<div class="container">
    <div class="well well-sm">
        <strong>Products</strong>
        <div class="btn-group">
            <a href="#" id="list" @click="changeToList" class="btn btn-default btn-sm"><span class="glyphicon glyphicon-th-list">
            </span>List</a> <a href="#" id="grid" @click="changeToGrid" class="btn btn-default btn-sm"><span
                class="glyphicon glyphicon-th"></span>Grid</a>
        </div>
    </div>
    <div id="products" class="row list-group" >
        <div :class="listOrGrid" class="item col-sm-6 col-md-4"
          v-for="(product, index) in products"
          :key="product._id">
            <div class="thumbnail">
                <img class="group list-group-image img-response" :src="product.imagePath" alt="" />
                <div class="caption">
                    <h3 class="title">{{product.title}}</h3>
                    <h4 class="group inner list-group-item-heading">
                        {{product.name}}
                    </h4>
                    <p class="group inner list-group-item-text description">
                      {{cutCharacter(product.description, 200)}}
                    </p>
                    <div class="row">
                        <div class="col-sm-6 col-md-4">
                            <p class="lead price">
                              $ {{product.price}}
                            </p>
                        </div>
                        <div class="col-sm-6 col-md-4">
                            <a class="btn btn-success" href="/#">Add to cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import Service from '@/api/Services'

export default {
  name: 'NavBar',

  data () {
    return {
      products: [],
      listOrGrid: 'grid-group-item'
    }
  },
  methods: {
    async getProducts (category) {
      try {
        // console.log('before')
        var response = await Service.getProducts(category)
        // console.log(response.data)
        this.products = response.data
        // console.log(this.products.length)
      } catch (e) {
        this.$emit('error', e)
        console.log(e)
      }
    },

    changeToGrid () {
      this.listOrGrid = 'grid-group-item'
    },

    changeToList () {
      this.listOrGrid = 'list-group-item'
    },

    // cut characters
    cutCharacter (strInput, length) {
      if (strInput.length > length) {
        return strInput.slice(0, length) + '...'
      } else {
        return strInput
      }
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

.thumbnail {
  max-height: 400px;
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

.item.list-group-item
{
    float: none;
    width: 100%;
    background-color: #fff;
    margin-bottom: 10px;
}
.item.list-group-item:nth-of-type(odd):hover,.item.list-group-item:hover
{
    background: #428bca;
}

.item.list-group-item .list-group-image
{
    margin-right: 10px;
}
.item.list-group-item .thumbnail
{
    margin-bottom: 0px;
}
.item.list-group-item .caption
{
    padding: 9px 9px 0px 9px;
}
.item.list-group-item:nth-of-type(odd)
{
    background: #eeeeee;
}

.item.list-group-item:before, .item.list-group-item:after
{
    display: table;
    content: " ";
}

.item.grid-group-item img
{
    max-height: 150px;
}

.item.list-group-item img
{
    float: left;
    max-height: 150px;
}
.item.list-group-item:after
{
    clear: both;
}
.list-group-item-text
{
    margin: 0 0 11px;
}
</style>
