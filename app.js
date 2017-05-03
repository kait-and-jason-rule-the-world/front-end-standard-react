//dependencies
const express = require('express'),
      app = express(),
      cors = require('cors'),
      morgan = require('morgan'),
      path = require('path'),
      PORT = process.env.PORT || 8080;

//hook up buildpack
app.use(express.static('build'));

//hook up cors
app.use(cors());

//hook up morgan
app.use(morgan('dev'));

//serve up react files

app.get(/\/*/, (req, res) =>{
  res.sendFile(path.join(__dirname + '/index.html'))
});

//check for life
app.listen(PORT, ()=>{
  console.log(`ALIVE ON PORT ${PORT}`)
});
