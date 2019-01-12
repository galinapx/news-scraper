if(process.env.NODE_ENV == 'production') {
  module.exports = {mongoURI: 'mongodb://brianpx1:milka1998@ds255784.mlab.com:55784/news-scraper'}
  } else {
  module.exports= {mongoURI: 'mongodb://localhost/news-scraper'}
}


