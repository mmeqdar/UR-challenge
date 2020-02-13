const router = require('express').Router()
const  unirest = require('unirest');
const torrentStream = require('torrent-stream')
const path = require('path')
const parseRange = require('range-parser')

//---------------------------------------Get Movies---------------------------------------
const all_movies = router.post('/all_movies', (req, res) => {

  const url =  unirest('GET','https://tv-v2.api-fetch.website/movies/'+req.body.page+'?order=-1') 
  return new Promise((resolve, reject) => ( 
      url.end((response) => {
        if(response.error) 
          {
            console.log("errrooorrr ")
          }
         else
          {
            res.send(response.body)
          }
      })
   ))
  })

//--------------------------------------Movie Details---------------------------------------
  const detail_movie = router.post('/detail_movie', (req, res) => {
    const url =  unirest('GET','https://movie-database-imdb-alternative.p.rapidapi.com/')
        return new Promise((resolve, reject) => ( 
          url.query({
              "i": req.body.id,
              "r": "json"
          }),
          url.headers({
              "x-rapidapi-host": "movie-database-imdb-alternative.p.rapidapi.com",
              "x-rapidapi-key": "db3470b86dmsh44414db70092568p12b435jsnd73f9b17a0d9"
          }),
          url.end((response) => 
          {
              if(response.error) 
              {
                console.log("errrooorrr")
              }
              else
              {
                res.send(response.body)
              }
          })     
        ))
  })

//------------------------------------------Streaming-----------------------------------------

const getTorrentFile = (hash) =>{
  return new Promise((resolve, reject) =>{
    console.log("******************getTorrentFile************************")
    const engine = torrentStream(`magnet:?xt=urn:btih:${hash}`);
    engine.on('ready', function() {
          engine.files.forEach(function (file, idx) {
            const ext = path.extname(file.name).slice(1);
            if (ext === 'mkv' || ext === 'mp4') {
              file.ext = ext;
              resolve(file);
            }
          })
    })
  })
}

const streaming = router.get('/streaming/:hash', (req,res) =>{
    return new Promise((resolve, reject) =>{
      console.log("*********************streaming*********************")
      getTorrentFile(req.params.hash)
      .then((file) =>{
        res.setHeader('Content-Length', file.length);
        res.setHeader('Content-Type', `video/${file.ext}`);
        const ranges = parseRange(file.length, req.headers.range, { combine: true });
        if (ranges === -1) {
          // 416 Requested Range Not Satisfiable
          res.statusCode = 416;
          return res.end();
        } else if (ranges === -2 || ranges.type !== 'bytes' || ranges.length > 1) {
          // 200 OK requested range malformed or multiple ranges requested, stream entire video
          if (req.method !== 'GET') return res.end();
          return file.createReadStream().pipe(res);
        } else {
          // 206 Partial Content valid range requested
          const range = ranges[0];
          res.statusCode = 206;
          res.setHeader('Content-Length', 1 + range.end - range.start);
          res.setHeader('Content-Range', `bytes ${range.start}-${range.end}/${file.length}`);
          if (req.method !== 'GET') return res.end();
          return file.createReadStream(range).pipe(res);
        }
      })  
    })
})
  module.exports= all_movies
  module.exports= detail_movie
  module.exports= streaming