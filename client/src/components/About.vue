<template>
<div>
    <!-- Container (About Section) -->
    <div id="about" class="container-fluid">
      <div class="row">
        <div class="col-sm-8">
          <h2>About Company Page</h2><br>
          <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <br>
          <button class="btn btn-default btn-lg">Get in Touch</button>
        </div>
        <div class="col-sm-4">
          <span class="glyphicon glyphicon-signal logo"></span>
        </div>
      </div>
    </div>
    <div class="container-fluid bg-grey">
      <div class="row">
        <div class="col-sm-4">
          <span class="glyphicon glyphicon-globe logo slideanim"></span>
        </div>
        <div class="col-sm-8">
          <h2>Our Values</h2><br>
          <h4>
            <strong>MISSION:</strong> Our mission lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</h4><br>
          <p>
            <strong>VISION:</strong> Our vision Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
      </div>
    </div>
    <!-- Container (Services Section) -->
    <div id="services" class="container-fluid text-center">
      <h2>SERVICES</h2>
      <h4>What we offer</h4>
      <br>
      <div class="row slideanim">
        <div class="col-sm-4">
          <span class="glyphicon glyphicon-off logo-small"></span>
          <h4>POWER</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
        <div class="col-sm-4">
          <span class="glyphicon glyphicon-heart logo-small"></span>
          <h4>LOVE</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
        <div class="col-sm-4">
          <span class="glyphicon glyphicon-lock logo-small"></span>
          <h4>JOB DONE</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
      </div>
      <br><br>
      <div class="row slideanim">
        <div class="col-sm-4">
          <span class="glyphicon glyphicon-leaf logo-small"></span>
          <h4>GREEN</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
        <div class="col-sm-4">
          <span class="glyphicon glyphicon-certificate logo-small"></span>
          <h4>CERTIFIED</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
        <div class="col-sm-4">
          <span class="glyphicon glyphicon-wrench logo-small"></span>
          <h4 style="color:#303030;">HARD WORK</h4>
          <p>Lorem ipsum dolor sit amet..</p>
        </div>
      </div>
    </div>

    <!-- Container (Portfolio Section) -->
    <div id="portfolio" class="container-fluid text-center bg-grey">
      <h2>Portfolio</h2><br>
      <h4>What we have created</h4>
      <div class="row text-center slideanim">
        <div class="col-sm-4">
          <div class="thumbnail">
            <img src="paris.jpg" alt="Paris" width="400" height="300">
            <p>
              <strong>Paris</strong>
            </p>
            <p>Yes, we built Paris</p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="thumbnail">
            <img src="newyork.jpg" alt="New York" width="400" height="300">
            <p>
              <strong>New York</strong>
            </p>
            <p>We built New York</p>
          </div>
        </div>
        <div class="col-sm-4">
          <div class="thumbnail">
            <img src="sanfran.jpg" alt="San Francisco" width="400" height="300">
            <p>
              <strong>San Francisco</strong>
            </p>
            <p>Yes, San Fran is ours</p>
          </div>
        </div>
      </div><br>
    </div>
    <!-- Container (Contact Section) -->
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
  .jumbotron {
      background-color: #f4511e;
      color: #fff;
  }
  .bg-grey {
      background-color: #f6f6f6;
  }
  .logo {
    font-size: 200px;
  }
  .logo-small {
    color: #f4511e;
    font-size: 50px;
  }

  .logo {
      color: #f4511e;
      font-size: 200px;
  }
  @media screen and (max-width: 768px) {
      .col-sm-4 {
          text-align: center;
          margin: 25px 0;
      }
  }
  .thumbnail {
    padding: 0 0 15px 0;
    border: none;
    border-radius: 0;
  }

  .thumbnail img {
      width: 100%;
      height: 100%;
      margin-bottom: 10px;
  }

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
