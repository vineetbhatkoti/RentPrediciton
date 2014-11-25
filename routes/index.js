
/*
 * GET home page.
 */

exports.index = function(req, res){
	var retrieveZipcode = require('../database/Zip');
	retrieveZipcode.getZip(req,res);
};

exports.submitZip = function(req, res){
	var retrieveZipcode = require('../database/Zip');
	retrieveZipcode.zipPointInfo(req,res);
	//console.log(JSON.stringify(req.body));
};



exports.zipcode = function(req, res){
  res.render('Zipcode.html');
};


exports.test=function(req,res)
{
	var retrieveZipcode = require('../database/test');
	retrieveZipcode.test(req,res);
};

exports.wordCloudDislplay=function(req,res)
{
	var wordCloud = require('../database/wordCloud');
	wordCloud.wordCloud(req,res);
};

exports.getWordData=function(req,res)
{
	var wordCloud = require('../database/wordCloud');
	wordCloud.getData(req,res);

};



exports.getLineGraph = function(req,res)
{
	
	var lineGraph = require('../database/LineGraph');
	lineGraph.getLineData(req,res);

};


// redundant 
exports.display =function(req, res){

	console.log("success have got all teh params:"+JSON.stringify(req.body));

if(queryparam=="2bed"){
	connection.query('SELECT city,Sep2014_2bedroom as rent from csv_db.rentdata group by city order by Sep2014_2bedroom desc LIMIT 50', function(err, rows) {
		if(err)throw err;
			console.log('EJS Demo server started on port 8080');
			res.render("diststate.ejs", {
										data: rows
				});
		});
}
else if(queryparam=="3bed"){
	connection.query('SELECT city,Sep2014_3bedroom as rent from csv_db.rentdata group by city order by Sep2014_3bedroom desc LIMIT 50', function(err, rows) {
		if(err)throw err;
			console.log('EJS Demo server started on port 8080');
			res.render("diststate.ejs", {
										data: rows
				});
		});
}
else if(queryparam=="4bed"){
	connection.query('SELECT city,Sep2014_4bedroom as rent from csv_db.rentdata group by city order by Sep2014_4bedroom desc LIMIT 50', function(err, rows) {
		if(err)throw err;
			console.log('EJS Demo server started on port 8080');
			res.render("diststate.ejs", {
										data: rows
				});
		});
	

}
else if(queryparam=="5bed"){
	connection.query('SELECT city,Sep2014_5bedroom as rent from csv_db.rentdata group by city order by Sep2014_5bedroom desc LIMIT 50', function(err, rows) {
		if(err)throw err;
			console.log('EJS Demo server started on port 8080');
			res.render("diststate.ejs", {
										data: rows
				});
		});
}
else
{
connection.query('SELECT city,Sep2014_1bedroom as rent from csv_db.rentdata group by city order by Sep2014_1bedroom desc LIMIT 50', function(err, rows) {
if(err)throw err;
	console.log('EJS Demo server started on port 8080');
	res.render("diststate.ejs", {
								data: rows
		});
});
}
};

