<template>
    <div>
        <b-row class="justify-content-center">
            <list-movies v-for="movie in movies" :key="movie.id" v-bind:movie="movie" />
        </b-row>
    </div>
</template>

<script>
import listmovies from "../components/listmovies";
const axios = require('axios'); 
export default {
    name: "library",
    components:{
      'list-movies': listmovies
    },
    data: function (){
    return {
      movies:[],
      page:1,
    }
    },
    mounted()
    {
       this.list_movies(this.page)
    },
    methods:
    {
      list_movies(page)
      {
        const data ={page :page}
        axios.post('http://localhost:8010/all_movies',data)
        .then((r)=>
        {
          for(var i = 0;i < r.data.length;i++)
          {
            this.movies.push(r.data[i])
          }
        })
        .catch()
      }
    },
     updated(){
      window.onscroll = () => {
      let e = document.documentElement
      let bottomOfWindow = e.scrollHeight - e.scrollTop - e.clientHeight < 50
      if (bottomOfWindow) {
        this.page++
        this.list_movies(this.page)
      }
    };
  }
}
</script>