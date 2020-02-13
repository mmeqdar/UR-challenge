<template>
  <div class="style-movie">
    <b-img :src = pic alt=""></b-img>
    <b-row class="text middle" @click="profile">Read more</b-row>
    <p class="name md">{{this.title}}</p>
  </div>
</template>

<!----------------------------SCRIPT---------------------------->
<script>
import router from '@/router'

export default {
  name: 'listmovies',
  props: ['movie'],
  data: function (){
    return {
      pic:'',
      title:'',
      id: '',
      trailer:'',
      hash:''
    }
  },
  mounted()
  {
      this.pic = this.movie.images.poster
      this.title = this.movie.title
      this.id = this.movie.imdb_id
      this.trailer = this.movie.trailer
      this.hash = this.movie.torrents.en['720p'].url.split('magnet:?xt=urn:btih:')
      this.hash = this.hash[1].split('&tr=udp:')
      this.hash = this.hash[0]
   
  },
  methods:{
    profile()
    {
      router.push({path:"/movieDetails",query:{id:this.id,background:this.pic,trailer:this.trailer, hash:this.hash}})
    }
  }
}
</script>

<!----------------------------STYLE---------------------------->
<style scoped>
.style-movie {
  position: relative;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 58%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
.md {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.style-movie:hover img {
  opacity: 0.3;
}

.style-movie:hover .middle,
.style-movie:hover .md{
  opacity: 1;
}

.text {
  color: white;
  text-align: center;
  padding: 2px 5px 2px 5px;
  background-color: rgb(221, 30, 71);
  border-radius: 30px;
  font-family: 'Dosis', sans-serif;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
}
img{
  width: 200px;
  height: 300px;
}
.name{
  color: rgb(146, 143, 143);
  text-align: center;
  font-weight: bold;
}
</style>