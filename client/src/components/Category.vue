<template>
  <!-- Container (Pricing Section) -->
  <div id="pricing" class="container">
    <div class="text-center">
      <h2>Các dịch vụ của chúng tôi</h2>
      <h4>Chọn cho mình một sản phẩm ưng ý nhất</h4>
    </div>
    <div class="row slideanim">
      <div v-for="(category, index) in categories" :key="category._id" class="col-sm-4 col-xs-12">
        <div class="panel panel-default text-center">
          <div class="panel-heading title">
            <h1>{{category.title}}</h1>
          </div>
          <div class="panel-body description">
            <p>{{category.description}}</p>
          </div>
          <div class="panel-footer">
            <!-- <h3 v-if="category.amount">Còn hàng<span class="badge">{{category.amount}}</span></h3>
                <h3 v-else>Tạm thời hết hàng</h3> -->
            <router-link :to="{path: 'products/' + category.name}" class="btn btn-lg">Xem chi tiết</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Services from '@/services/Services'

export default {
  name: 'hello',

  data () {
    return {
      categories: []
    }
  },

  methods: {
    // load categories on start up
    async loadCategory () {
      try {
        // call service to get list categories
        const categories = await Services.getCategory()
        this.categories = categories.data
        // setting list categories to global scope
        this.$root.categories = this.categories
      } catch (e) {
        console.log(e)
        this.$emit('error', e)
      }
    }
  },

  created () {
        // load list categories
    this.loadCategory()

    console.log(this.categories)

    // handle when have error
    this.$on('error', function (message) {
      this.showModal = true
    })
    console.log('Category.vue:  ' + this.$root.categories)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
. title {}

.description {
  min-height: 200px;
}

.panel {
  border: 1px solid #f4511e;
  border-radius: 0;
  transition: box-shadow 0.5s;
}

.panel:hover {
  box-shadow: 5px 0px 40px rgba(0, 0, 0, .2);
}

.panel-footer .btn:hover {
  border: 1px solid #f4511e;
  background-color: #fff !important;
  color: #f4511e;
}

.panel-heading {
  color: #fff !important;
  background-color: #f4511e !important;
  padding: 10px;
  border-bottom: 1px solid transparent;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}

.panel-footer {
  background-color: #fff !important;
}

.panel-footer h3 {
  font-size: 32px;
}

.panel-footer h4 {
  color: #aaa;
  font-size: 14px;
}

.panel-footer .btn {
  margin: 15px 0;
  background-color: #f4511e;
  color: #fff;
}

.slideanim {
  visibility: hidden;
}

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
