var express = require('express');
var app = express();
var port = 3000;
var mustache = require('mustache-express');

app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


var angryBirdsController = require('./controllers/angryBirdsController');

app.get('/', function(req, res){
    res.render('./index');
})

app.use('/angry_birds', angryBirdsController);


app.listen(port, function(){
    console.log(`listeniing on port ${port}`);
})