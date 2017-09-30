<template>
  <div>
    <!-- <div class="jumbotron text-center header-bar">
          <h1>Lam Trang pet shop</h1>
          <p>We specialize in blablabla</p>
        </div> -->
    <div id="myCarousel" class="carousel slide text-center" data-ride="carousel">
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
      </ol>

      <!-- Wrapper for slides -->
      <div class="carousel-inner" role="listbox">
        <div class="item active">
          <h4><img src="https://static.wixstatic.com/media/3b1f25_72a2689f4d6b4a1597f8b740a08cd7b9.jpg/v1/fill/w_2060,h_660,al_c,q_85,usm_0.66_1.00_0.01/3b1f25_72a2689f4d6b4a1597f8b740a08cd7b9.jpg" />
          </h4>
        </div>
        <div class="item">
          <h4><img src="https://static.wixstatic.com/media/3b1f25_8523e6d64a7a4b71ad9361e1b156b796.jpg/v1/fill/w_2060,h_660,al_c,q_85,usm_0.66_1.00_0.01/3b1f25_8523e6d64a7a4b71ad9361e1b156b796.jpg" />
          </h4>
        </div>
        <div class="item">
          <h4>
            <img src="https://static.wixstatic.com/media/3b1f25_93f29e1f88754c86b425ae065281f0f3.jpg/v1/fill/w_2060,h_660,al_c,q_85,usm_0.66_1.00_0.01/3b1f25_93f29e1f88754c86b425ae065281f0f3.jpg" />
          </h4>
        </div>
      </div>

      <!-- Left and right controls -->
      <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
        <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
        <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.carousel-control.right, .carousel-control.left {
    background-image: none;
    color: #f4511e;
}

.carousel-indicators li {
    border-color: #f4511e;
}

.carousel-indicators li.active {
    background-color: #f4511e;
}

.item h4 {
  margin: 0;
}

.item h4 img {
  width: 100%;
  height: 40%;
}

.item span {
    font-style: normal;
}
</style>
