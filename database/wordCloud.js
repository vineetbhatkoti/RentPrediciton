/**
 * New node file
 */
exports.wordCloud=function(req,res)
{
	var connectionPool = require('../database/connectionPooling');
	var pool = connectionPool.Pool();
	pool.connect();
	console.log("success");
	pool.query('SELECT city,Sep2014_1bedroom as rent from Rentdata group by city order by Sep2014_1bedroom desc LIMIT 50', function(err, rows) {
			if(err)throw err;
			console.log('EJS Demo server started on port 8080');
			var arr=[];
			for(var i = 0; i < rows.length; i++)
			{
				arr.push({"text": rows[i].city, "weight": 34-(i/(2.65)) });
//				arr[i].text=rows[i].city;
//				arr[i].weight=34-(i/(2.65));
				//rows[i].weight = 34-(i/(2.65));
				
			}
			
			res.render("diststate.html", {
	    data: arr
	  });
	  	});

};


exports.getData=function(req,res)
{
	
	
	var connectionPool = require('../database/connectionPooling');
	var pool = connectionPool.Pool();
	pool.connect();
	var a = JSON.stringify(req.body);
	console.log("Word cloud for "+JSON.stringify(req.body));
	var json = JSON.parse(a);
	var b = json["roomtype"];
	var roomtype=parseInt(b);
	if(roomtype==2){
		pool.query('SELECT city,Sep2014_2bedroom as rent from Rentdata group by city order by Sep2014_2bedroom desc LIMIT 50', function(err, rows) {
			if(err)throw err;
			var arr=[];
			for(var i = 0; i < rows.length; i++)
			{
				arr.push({"text": rows[i].city, "weight": 34-(i/(2.65)) });
			}
			
			res.render("diststate.html", {
											data: arr
					});
			});
	}
	else if(roomtype==3){
		pool.query('SELECT city,Sep2014_3bedroom as rent from Rentdata group by city order by Sep2014_3bedroom desc LIMIT 50', function(err, rows) {
			if(err)throw err;
			var arr=[];
			for(var i = 0; i < rows.length; i++)
			{
				arr.push({"text": rows[i].city, "weight": 34-(i/(2.65)) });
			}
			
			res.render("diststate.html", {
											data: arr
					});
			});
	}
	else if(roomtype==4){
		pool.query('SELECT city,Sep2014_4bedroom as rent from Rentdata group by city order by Sep2014_4bedroom desc LIMIT 50', function(err, rows) {
			if(err)throw err;
			var arr=[];
			for(var i = 0; i < rows.length; i++)
			{
				arr.push({"text": rows[i].city, "weight": 34-(i/(2.65)) });
			}
			
			res.render("diststate.html", {
											data: arr
					});
			});
		

	}
	else if(roomtype==5){
		pool.query('SELECT city,Sep2014_5bedroom as rent from Rentdata group by city order by Sep2014_5bedroom desc LIMIT 50', function(err, rows) {
			if(err)throw err;
			var arr=[];
			for(var i = 0; i < rows.length; i++)
			{
				arr.push({"text": rows[i].city, "weight": 34-(i/(2.65)) });
			}
			
			res.render("diststate.html", {
											data: arr
					});
			});
	}
	else
	{
		pool.query('SELECT city,Sep2014_1bedroom as rent from Rentdata group by city order by Sep2014_1bedroom desc LIMIT 50', function(err, rows) {
	if(err)throw err;
	var arr=[];
	for(var i = 0; i < rows.length; i++)
	{
		arr.push({"text": rows[i].city, "weight": 34-(i/(2.65)) });
	}
	
	res.render("diststate.html", {
									data: arr
			});
	});
	}
	
	
	

};