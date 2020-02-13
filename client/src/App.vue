<template>
  <div id="app">
    <Header />
    <hr class="new4">
    <router-view/>
  </div>
</template>
<script>
import header from "../src/components/header"
export default {
  name: "app",
     components:{
      'Header': header
    }, 
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

hr.new4 {
  border-top: 1px solid white;
}

</style>
