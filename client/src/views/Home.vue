<template >
  <div>
    <div class="hero">
    </div>
    <div class="common-hero">
      <h1 class="h1 py-2">Unlimited movies, TV shows, and more.</h1>
      <h2 class="h2 py-2">Watch anywhere. Cancel anytime.</h2>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'home',
  }
</script>
<style scoped>
  .hero {
    background-position: center;
    background-size: cover;
    justify-content: center;
    position: relative;
    height: 1100px;
    background: url('../pic/MA-en-20200203-popsignuptwoweeks-perspective_alpha_website_small.jpg') ;
    opacity: 0.5;
  }
  .h1 {
    font-family: 'Dosis', sans-serif;
    font-size: 36px;
    color: #f0f0f0;
    font-weight: 700;
    font-weight: bold;
    text-transform: uppercase;
  }
  .h2 {
    font-family: 'Dosis', sans-serif;
    color: #f0f0f0;
  }
  .common-hero {
    position: absolute;
    top: 30%;
    left: 20%;
    right: 20%;
  }
 button{
    background-color: rgb(221, 30, 71);
    border-color: rgb(221, 30, 71);
    border-radius: 20px;
    padding: 8px 25px;
    color: white;
    font-weight: bold;
 }
 button:focus {
      outline: none;
      box-shadow: 0 0 0 
    }
</style>