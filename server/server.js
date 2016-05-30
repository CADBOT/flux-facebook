var express = require('express')

var app = express()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

var posts = [
  {friend: 'bob', post: 'I ate some cake'},
  {friend: 'jill', post: 'Had some great pizza'}
]

app.get('/posts', (req, res) => {
  res.json(posts)
})


app.listen(3000, () => {
  console.log('listening on port 3000')
})
