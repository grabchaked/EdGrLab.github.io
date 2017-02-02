var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var db = mongojs(process.env.MONGODB_URI || 'publisher', ['publisher']);
var stats = require("./stats.json");
var fs = require("fs");
var sha256 = require("js-sha256").sha256;


var secret = 'word';
var adminPassword = 'c08413af894e39c804a0c8dcd293e37d3e4523923684587034cd22baee9695cf';

app.use(express.static(__dirname+'/public'));
app.use(bodyParser.json());

app.get('/publisher/stats', function(req,res) {
	stats.visits = stats.visits + 1;
	fs.writeFile( "stats.json", JSON.stringify( stats ), "utf8", function() {
		
	});
	res.json(stats);
});

app.get('/publisher', function(req,res) {
	console.log('get req');

	db.publisher.find(function(err,docs) {
		console.log(docs);
		res.json(docs);
	});

});

app.get('/publisher/like/:id', function(req,res) {
	var id = req.params.id;
	/*db.publisher.update({_id: mongojs.ObjectId(id)}, { $inc : { "likes" : 1 }}, function(err, docs) { 
		res.json(docs);
	});*/
	db.publisher.update({_id: mongojs.ObjectId(id)}, {$inc: {likes: 1}}, {multi: true}, function () {
    res.json({success: true});
	});
});

app.post('/publisher', function(req,res) {
	console.log(req.body);
	var newPost = req.body;
	newPost.created = new Date();
	newPost.likes = 0;
	db.publisher.insert(newPost, function(err,doc) {
		res.json(doc);
	});
}); 

app.post('/publisher/checkAdminPassword', function(req,res) {
	console.log(req.body.pass);

	if (sha256(req.body.pass) == adminPassword) {
		res.json({result: true});
	} else {
		res.json({result: false});
	}
});

/*app.delete('/publisher/:id', function(req,res) {
	var id = req.params.id;
	console.log(id);
	db.publisher.remove({_id: mongojs.ObjectId(id)}, function(err,doc) {
		res.json(doc);
	});
});*/


app.get('/publisher/remove/', function(req,res){
	var id = req.query.id;
	var pass = req.query.pass;
	if (sha256(pass) != adminPassword) {
		res.json({result: "nope"});
		return;
	}
	console.log(id);
	db.publisher.remove({_id: mongojs.ObjectId(id)}, function(err,doc){
		res.json(doc);
	});
});

app.listen(process.env.PORT || 3000);
console.log('Server running on port 3000');