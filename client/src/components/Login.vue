<template lang="pug">
div.container
  div(class='col-sm-6 col-sm-offset-3')
    h1
      span(class='fa fa-sign-in')
      |  Đăng nhập

    // show any messages that come back with authentication
    div(
      class='alert alert-danger' 
      v-if='message'
    )
      p {{message}}

    <!-- LOGIN FORM -->
    <div class="form-group">
      <label for="username">Username</label>
      <input class="form-control" id="username" placeholder="enter your user name" v-model="username">
    </div>
    <div class="form-group">
      <label for="password" >Password</label>
      <input type="password" class="form-control" id="password" placeholder="enter your password" v-model="password">
    </div>
    <button @click="login" class="btn btn-warning btn-lg">Đăng nhập</button>

    hr

    p Bạn chưa có tài khoản?  
      a(href='/register') Đăng ký
    p Hoặc đi tới 
      a(href='/') Trang chủ
</template>

<script>
import Services from '@/api/Services'

export default {
  name: 'login',

  data () {
    return {
      username: '',
      password: '',
      message: ''
    }
  },

  methods: {
    async login () {
      try {
        let response = await Services.doLogin({
          username: this.username,
          password: this.password
        })

        let data = response.data
        console.log(data)

        if (!data.success) {
          this.message = data.message
        } else {
          // set state
          this.$store.dispatch('setToken', data.token)
          this.$store.dispatch('setUser', data.user)

          // router to init page
          let routerName = 'Index'
          // if role is admin then route to system dashboard
          if (data.user.role === 'admin') {
            routerName = 'Dashboard'
          }

          // redirect to route
          this.$router.push({
            name: routerName
          })
        }
      } catch (err) {
        this.$bus.$emit('error', err)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
