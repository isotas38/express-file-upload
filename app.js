var express = require('express')
var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

var spawn = require('child_process').spawn

var app = express()

app.get('/', function(req, res) {
  res.send('hello world');
});

app.post('/upload', upload.single('upName'), function(req, res) {
    console.log(req.file.originalname)
    console.log(req.file.path)
    spawn('mv', [req.file.path, req.file.originalname]);
    res.send(JSON.stringify({ok: true}))
})

app.listen("3000")
