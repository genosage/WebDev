var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')
var bodyParser = require('body-parser')
var port = process.env.Port || 3000
var app = express()

app.set('views', './views/pages')
app.set('view engine', 'jade')
app.use(serveStatic('bower_components'))
app.use(bodyParser.urlencoded())
app.listen(port)

console.log('Magic Garden start on port ' + port)

// index page
app.get('/', function(req, res) {
  res.render('index', {
    title: 'Magic Garden',
    tickets: [{
      title: 'Penguin Parade',
      _id: 1,
      image: 'http://www.visitphillipisland.com/wp-content/uploads/2012/11/Penguin-2-700x476.jpg'
    },{
      title: 'Penguin Parade',
      _id: 2,
      image: 'http://www.visitphillipisland.com/wp-content/uploads/2012/11/Penguin-2-700x476.jpg'
    },{
      title: 'Penguin Parade',
      _id: 3,
      image: 'http://www.visitphillipisland.com/wp-content/uploads/2012/11/Penguin-2-700x476.jpg'
    },{
      title: 'Penguin Parade',
      _id: 4,
      image: 'http://www.visitphillipisland.com/wp-content/uploads/2012/11/Penguin-2-700x476.jpg'
    },{
      title: 'Penguin Parade',
      _id: 5,
      image: 'http://www.visitphillipisland.com/wp-content/uploads/2012/11/Penguin-2-700x476.jpg'
    },{
      title: 'Penguin Parade',
      _id: 6,
      image: 'http://www.visitphillipisland.com/wp-content/uploads/2012/11/Penguin-2-700x476.jpg'
    }]
  })
})

// detail page
app.get('/ticket/:id', function(req, res) {
  res.render('detail', {
    title: 'Ticket Detail',
    ticket: {
      title: 'Penguin Parade General Viewing',
      attraction: 'Penguin Parade',
      type: 'General Viewing',
      price: '$57.00',
      address: '1019 Ventnor Rd, Summerlands, Victoria 3922',
      video: 'http://player.youku.com/player.php/sid/XODg4OTIxNjYw/v.swf',
      description: 'The beachfront viewing stands and boardwalks offer great outlooks across the beach to start your viewing experience.'
    }
  })
})

// admin page
app.get('/admin/ticket', function(req, res) {
  res.render('admin', {
    title : 'Magic Garden Admin',
    ticket: {
      title: '',
      attraction: '',
      type: '',
      price: '',
      address: '',
      image: '',
      video: '',
      description: ''
    }
  })
})

// list page
app.get('/admin/list', function(req, res) {
  res.render('list', {
    title : 'Ticket List',
    tickets: [{
      title: 'Penguin Parade General Viewing',
      _id: 1,
      attraction: 'Penguin Parade',
      type: 'General Viewing',
      price: '$57.00'
    }]
  })
})

app.locals.pretty = true