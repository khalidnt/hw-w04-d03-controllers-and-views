var express = require('express');
var router = express.Router();

var angryBirds = require('../modules/angry_birds');

router.get('/', function(req, res){
    var mustachevariables ={
        birdList : angryBirds.birds
    }
    res.render('./angry_birds/index', mustachevariables);
})

router.get('/:id', function(req, res){
    var birdId = req.params.id;
    var mustachevariables = { bird : angryBirds.birds[birdId] }
    res.render('./angry_birds/show', mustachevariables);
})







module.exports = router;