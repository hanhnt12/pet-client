<template>
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <a class="navbar-brand" href="/">Hotline: 0123456789</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><router-link to="/">Home</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li><router-link to="/cart"> Giỏ hàng </router-link></li>
        <li v-if="!$store.state.isLogedIn">
          <router-link to="/login">
            <i class="fa fa-sign-out" aria-hidden="true"> Login </i>
          </router-link>
        </li>
        <li v-else class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" 
          role="button" aria-haspopup="true" aria-expanded="false">
            {{$store.state.user.username}} <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li v-if="$store.state.user.role === 'admin'">
              <router-link to="/dashboard">System Dashboard</router-link>
            </li>
            <li><a href="/user/profile"> Profile </a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#" @click.prevent="logOut"><i class="fa fa-sign-out" aria-hidden="true"></i> Logout </a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>

<script>
export default {
  name: 'NavBar',
  data () {
    return {
    }
  },
  methods: {
    logOut () {
      if (this.$store.state.isLogedIn) {
        // clear data
        this.$store.dispatch('setToken', null)
        this.$store.dispatch('setUser', null)

        // router to home page
        this.$router.push({
          name: 'Index'
        })
      }
    }
  },
  created () {
    this.$bus.loadCategory()
    console.log('NavBar get categories')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
  margin-bottom: 0;
}
</style>
