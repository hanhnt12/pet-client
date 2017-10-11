<template lang="pug">
<div class="col-md-9">
  <div>
    <table id="products" class="table table-hover table-condensed" v-if="products">
      <thead>
        <tr>
          <th style="width:50%">Sản phẩm</th>
          <th style="width:10%">Giá</th>
          <th style="width:8%">Số lượng</th>
          <th style="width:22%" class="text-center">Thành tiền</th>
          <th style="width:10%"></th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="product in products">
            <td data-th="Product">
              <div class="row">
                <div class="col-sm-2 hidden-xs"><img :src="product.imagePath" alt="..." class="img-responsive"/></div>
                <div class="col-sm-10">
                  <h4 class="nomargin">{{product.title}}</h4>
                  <p>{{product.description}}</p>
                </div>
              </div>
            </td>
            <td data-th="Price" class="price">{{product.price}}</td>
            <td data-th="Quantity">
              <input type="number" class="form-control text-center" value="">
            </td>
            <td data-th="Subtotal" class="text-center price">{{product.price}}</td>
            <td class="actions" data-th="">
              <a href="/#" class="btn btn-warning btn-sm"><i class="fa fa-pencil"></i></a>
              <a href="/#" class="btn btn-danger btn-sm"><i class="fa fa-trash-o"></i></a>                
            </td>
          </tr>
      </tbody>
      <tfoot>
        <tr class="visible-xs">
          <td class="text-center"><strong class="price">Tổng cộng $</strong></td>
        </tr>
        <tr>
          <td><a href="/" class="btn btn-warning"><i class="fa fa-angle-left"></i> Tiếp tục xem</a></td>
          <td colspan="2" class="hidden-xs"></td>
          <td class="hidden-xs text-center"><strong>Tổng cộng</strong><strong class="price"> $#</strong></td>
          <td><a href="#" class="btn btn-success btn-block">Đặt hàng <i class="fa fa-angle-right"></i></a></td>
        </tr>
      </tfoot>
    </table>
    div(class='jumbotron text-center' v-else) No pet found
  </div>
</div>  
</template>

<script>
import Service from '@/api/Services'

export default {
  name: 'ProductDashBoard',
  data () {
    return {
      products: []
    }
  },
  methods: {
    // get list products
    async getProducts (category) {
      try {
        // console.log('before')
        var response = await Service.getProducts(category)
        // console.log(response.data)
        this.products = response.data
        // console.log(this.products.length)
      } catch (e) {
        this.$bus.$emit('error', e)
        console.log(e)
      }
    }
  },
  created () {
    // get prarameter
    let category = this.$route.params.category
    // get product list
    this.getProducts(category)
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
