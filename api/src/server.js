const express = require('express');
const http = require('http');
const cors = require('cors');
const bodyParser = require('body-parser');

const all_movies = require('./router/movie')
const detail_movie =  require('./router/movie')
const streaming =  require('./router/movie')



class Server{
    constructor()
    {
        this.app = express()
        this.app.use(bodyParser.json())
        this.app.use(cors())
        this.http = http.Server(this.app)


        this.app.post('/all_movies', all_movies)
        this.app.post('/detail_movie', detail_movie)
        this.app.get('/streaming/:hash', streaming)
   }
    listen() {
          this.http.listen(8010, ()=> {
          console.log(`Listening on http://localhost:8010`)
        })
      }
 }
 const server = new Server()
 server.listen()

