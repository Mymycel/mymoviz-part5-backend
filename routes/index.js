var express = require('express');
var router = express.Router();


console.log('test')

router.get('/movie', (req, res) => {

const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.KEY}`
}
};
fetch(url, options)
  .then(res => res.json())
  .then(data => {
    res.json({ movies: data.results})
  })
  .catch(err => console.error(err));
});

module.exports = router;


