var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/test';
// var assert = require('assert');
// var ObjectId = require('mongodb').ObjectID;

function insertOne(item, collection, db, callback) {
	db.collection(collection).insertOne(item, function(err, res) {
		if(err) {
			throw err;
		}
		callback(res);
	})
}

function processItem(err, doc) {
	if(err) { throw err; }
	if(doc != null) {
		console.dir(doc);
	} else {
		
	}
}

describe('db.js', function () {
    describe('connect', function () {
        it('The function should succefully connect to the Mongo instance', function () {
			MongoClient.connect(url, function(err, db) {
				console.log("Connected correctly to server.");
				db.close();
			});
		});
	});
	
	describe('insert', function() {
		it('Should insert object into the collection', function() {
			var item = {
				"text": "INSERT TEST",
				"number": 1000
			};
			
			MongoClient.connect(url, function(err, db) {
				insertOne(item, 'nano-test', db, function() { db.close(); });
			});			
		});
	});
	
	describe('read', function() {
		it('Should read  object from the collection', function() {
			var item = {
				"text": "INSERT TEST",
				"number": 1000
			};
			
			MongoClient.connect(url, function(err, db) {
				insertOne(item, 'nano-test', db, function() { db.close(); });
			});			
		});
	});
});
