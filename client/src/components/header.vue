<template>
  <div  id="nav">
    <b-navbar class="navbar" toggleable="lg" type="dark">
      <b-navbar-brand href="#">
        <img src="../pic/logo.png" class="d-inline-block align-top" alt="">
        <router-link class="text home" to="/"> MeqdarAlloul.<span class="span">tube</span></router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav >
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="col " ><router-link to="/library">Library</router-link></b-nav-item>
            <b-nav-item class="col " ><router-link to="/about">About</router-link></b-nav-item>
          </b-navbar-nav>
        </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#nav-collapse a {
  font-weight: bold;
  color: #f0f0f0;
  text-decoration: none;
}
#nav a{
  font-weight: bold;
  color: #f0f0f0;
  text-decoration: none;
}
#nav a.router-link-exact-active {
  color: #f0f0f0;
}
#nav-collapse a.router-link-exact-active {
  color: rgb(221, 30, 71);
}
img{
  width: 35px
}
.span{
  color: rgb(221, 30, 71);
}
</style>
