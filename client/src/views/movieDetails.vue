<template>
    <div>
        <div v-bind:style="{
            'background-image': 'url(' + background + ')',
            'background-repeat': 'no-repeat',
            'background-position': 'center',
            'background-size': 'cover',
            'height': '250px',
            'background-attachment': 'fixed',
            'max-width': '10000px',
            'opacity': '0.6',
            'position': 'relative'
        }"> 
        </div>
        <h1 class="movie-title">{{details.Title}}</h1>
        <div  class="container pt-5">
            <div class="row">
                <div class="col-md-6">
                    <b-img  :src= details.Poster alt="#"></b-img>
                    <b-button  class="mt-1" variant="outline-danger"  @click="showModal"><span class="strong">Watch Movie</span></b-button>
                    <b-modal ref="my-modal" size="xl" centered hide-footer >
                        <div class="d-block">
                            <video class="video" controls>
                                <source :src="src" type="video/mp4">
    
                            </video>
                        </div>
                    </b-modal>
                </div>
                <div class="col-md-6 pt-3">
                    <h2 >Movie Details :</h2>
                    <b-row class="px-3"><strong >OverView:</strong></b-row>
                    <b-row class="px-3"><p>{{details.Plot}}</p></b-row>
                    <b-row class="px-3"><strong >Rating:</strong></b-row>
                    <b-row class="px-3"><p><span class="strong">{{details.imdbRating}}</span> out of 10</p></b-row>
                    <b-row class="px-3"><strong >Length:</strong></b-row>
                    <b-row class="px-3"><p>{{details.Runtime}}</p></b-row>
                    <b-row class="px-3"><strong >Premiere:</strong></b-row>
                    <b-row class="px-3"><p>{{details.Released}}</p></b-row>
                    <b-row class="px-3"><strong >Category:</strong></b-row>
                    <b-row class="px-3"><p>{{details.Genre}}</p></b-row>
                    <b-row class="px-3"><strong >Directors:</strong></b-row>
                    <b-row class="px-3"><p>{{details.Director}}</p></b-row>
                    <b-row class="px-3"><strong >Writers:</strong></b-row>
                    <b-row class="px-3"><p>{{details.Writer}}</p></b-row>
                    <b-row class="px-3"><strong >Actors:</strong></b-row>
                    <b-row class="px-3"><p>{{details.Actors}}</p></b-row>
                </div>
            </div> 
        </div> 
        <div v-if="this.trailer == '' || this.trailer == null ">
        </div>
         <div class="p-3" v-else>
              <b-row class="px-3"><h3>Watch Trailer</h3></b-row>
            <iframe class="pb-3 video" 
                frameborder="0" vspace="0" hspace="0" webkitallowfullscreen=""
                mozallowfullscreen="" allowfullscreen="" scrolling="auto"
                :src= trailer>
            </iframe>
        </div>
    </div>
</template>

<!---------------------------SCRIPT--------------------------->
<script>
    const axios = require('axios'); 
    export default {
        name: 'movieDetails',
        props: ['id','background','trailer','hash'],
        data: function (){
            return {
                details:[],
                src: "http://localhost:8010/streaming/" + this.hash,
            }
        },
        mounted()
        {
            const data ={id :this.id}
            axios.post('http://localhost:8010/detail_movie',data)
            .then((r)=>{
                this.details = r.data
            })
            this.trailer = this.trailer.replace("watch?v=", "embed/")

        },
        methods: {
            showModal() {
                this.$refs['my-modal'].show()
            },
        }
    } 
</script>

<!----------------------------STYLE---------------------------->
<style scoped>

img{
    width: 90%;
    height: 85%;
    border-radius: 20px;
}
button{
    width: 90%;
}
h2{
    color:white;
    font-weight: bold;
}
strong{
    color: rgb(221, 30, 71);
    right: 100px;
}
h3{
    color: rgb(221, 30, 71);
}
.strong{

    font-weight: bold;
    font-size: 20px;
}
.icon{
    font-weight: bold;
    font-size: 20px;
}
p{
    color: #888;
    font-family: "Roboto", Arial, sans-serif;
}
.movie-title{
    color:white;
    font-weight: bold;
    text-align: left;
    position: absolute;
    top: 18%;
    left: 8%;
    right: 8%;
}
.video{
    display: block;
    width: 100%;
    height: 500px;
    overflow: hidden;
}

</style>