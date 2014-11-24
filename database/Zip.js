/**
 * New node file
 */


exports.getZip= function(req,res)
{
	var connectionPool = require('../database/connectionPooling');
	var pool = connectionPool.Pool();
	pool.connect();
	var sqlSelect = 'select zipcode from Rentdata';
	pool.query(sqlSelect, function(err, results) {
		if (err) {
			console.log("ERROR: " + err.message);
		} 
		else
			{
			results.sort(function(x,y){
				return x.zipcode - y.zipcode; 
			});
			res.render('index.html', 
				{allZipcodes : results}
			);
			}
	});
	
};



exports.zipPointInfo = function(req,res)
{
	var connectionPool = require('../database/connectionPooling');
	var pool = connectionPool.Pool();
	pool.connect();
	var a = JSON.stringify(req.body);
	console.log("The value of body is :"+a);
	var json = JSON.parse(a);
	var b = json["zipcode"];
	var c = json["roomtype"];
	var roomtype=parseInt(c);
	var rent;
	console.log("I have receiverd zip :------->"+b);
	var sqlSelect = 'select latitude,logitude from zipToLatitude where zip='+ parseInt(b);
	pool.query(sqlSelect, function(err, results) {
		if (err) {
			console.log("ERROR: " + err.message);
		} 
		else
			{//success
				console.log(results);
				var sqlSelectAllInfo = 'select * from Rentdata where zipcode='+ parseInt(b);
						pool.query(sqlSelectAllInfo, function(err, results1) {
							if (err) {
								console.log("ERROR: " + err.message);
							} 
							else
								{
								var annual_payroll=results1[0].annual_payroll;
								var cost_of_living_index=results1[0].cost_of_living_index;
								var housing = results1[0].housing;
								var utilities=results1[0].utilities;
								var employees=results1[0].employees;
								var Oct2013_1bedroom=results1[0].Oct2013_1bedroom;
								var Nov2013_1bedroom=results1[0].Nov2013_1bedroom;
								var Jan2014_1bedroom=results1[0].Jan2014_1bedroom;
								var May2014_1bedroom=results1[0].May2014_1bedroom;
								var city =results1[0].city;
								var state=results1[0].state;
								if(roomtype ==1)
									{
									console.log("i am in 1 bedrroom");
							    rent =  0.0006 * employees +
							      0      * annual_payroll +
							      0.81   * cost_of_living_index +
							     -0.2659 * housing +
							     -0.5481 * utilities +
							     -0.3353 * Oct2013_1bedroom +
							      0.3772 * Nov2013_1bedroom +
							     -0.4018 * Jan2014_1bedroom +
							      1.3756 * May2014_1bedroom +
							     -7.3789;
									}
								
								if(roomtype ==2)
								{
								console.log("i am in 2 bedrroom");
						    rent =  0.0006 * employees +
						      0      * annual_payroll +
						      0.81   * cost_of_living_index +
						     -0.2659 * housing +
						     -0.5481 * utilities +
						     -0.3353 * Oct2013_1bedroom +
						      0.3772 * Nov2013_1bedroom +
						     -0.4018 * Jan2014_1bedroom +
						      1.3756 * May2014_1bedroom +
						     -7.3789;
								}
								
								if(roomtype ==3)
								{
								console.log("i am in 3 bedrroom");
						    rent =  0.0006 * employees +
						      0      * annual_payroll +
						      0.81   * cost_of_living_index +
						     -0.2659 * housing +
						     -0.5481 * utilities +
						     -0.3353 * Oct2013_1bedroom +
						      0.3772 * Nov2013_1bedroom +
						     -0.4018 * Jan2014_1bedroom +
						      1.3756 * May2014_1bedroom +
						     -7.3789;
								}
								
								if(roomtype ==4)
								{
								console.log("i am in 4 bedrroom");
						    rent =  0.0006 * employees +
						      0      * annual_payroll +
						      0.81   * cost_of_living_index +
						     -0.2659 * housing +
						     -0.5481 * utilities +
						     -0.3353 * Oct2013_1bedroom +
						      0.3772 * Nov2013_1bedroom +
						     -0.4018 * Jan2014_1bedroom +
						      1.3756 * May2014_1bedroom +
						     -7.3789;
								}
								
								
								if(roomtype ==5)
								{
								console.log("i am in 5 bedrroom");
						    rent =  0.0006 * employees +
						      0      * annual_payroll +
						      0.81   * cost_of_living_index +
						     -0.2659 * housing +
						     -0.5481 * utilities +
						     -0.3353 * Oct2013_1bedroom +
						      0.3772 * Nov2013_1bedroom +
						     -0.4018 * Jan2014_1bedroom +
						      1.3756 * May2014_1bedroom +
						     -7.3789;
								}
								
								
								
								
								
//								var rent = 0.072* annual_pay + 153.147*cost_living + 57.47*housing + 1693.88*healthcare - 728764.70;
//								console.log("annual payroll "+annual_pay);
//								console.log("cost_living"+cost_living);
//								console.log("housing "+housing);
//								console.log("healthcare "+healthcare);
//								console.log("The rent calculated is : == "+rent);
								for(var i = 0; i < results.length; i++)
								{
									results[i].rentMap = Math.round(rent * 100) / 100;
									results[i].city=city;
									results[i].state=state;
								}
								console.log("Final results is "+ JSON.stringify(results));
								res.send(results);
								}
							});
			}
	});
	
};