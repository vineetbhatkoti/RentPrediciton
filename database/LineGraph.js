/**
 * New node file
 */
var Sync = require('async');





exports.getLineData=function(req,res)
{			
	
	var connectionPool = require('../database/connectionPooling');
	var pool = connectionPool.Pool();
	pool.connect();
	var cities = ['Chicago','Boston', 'Miami', 'San Francisco', 'San Diego', 'Los Angeles', 'Seattle', 'Washington', 'Las Vegas', 'Philadelphia', 'Minneapolis', 'Denver'];
	var results = [];
	var obj = new Object();
	var l = 0;
	var series = [];
	var data = [];

	for(var i in cities)
	{
		console.log("----->>"+cities[i]);
		
		var row;
		var queryString ="select Sep2013_1bedroom, Oct2013_1bedroom, Nov2013_1bedroom, Dec2013_1bedroom, Jan2014_1bedroom, Feb2014_1bedroom, Mar2014_1bedroom, Apr2014_1bedroom, May2014_1bedroom, Jun2014_1bedroom, Jul2014_1bedroom, Aug2014_1bedroom, Sep2014_1bedroom, Sep2013_2bedroom, Oct2013_2bedroom, Nov2013_2bedroom, Dec2013_2bedroom, Jan2014_2bedroom, Feb2014_2bedroom, Mar2014_2bedroom, Apr2014_2bedroom, May2014_2bedroom, Jun2014_2bedroom, Jul2014_2bedroom, Aug2014_2bedroom, Sep2014_2bedroom, Sep2013_3bedroom, Oct2013_3bedroom, Nov2013_3bedroom, Dec2013_3bedroom, Jan2014_3bedroom, Feb2014_3bedroom, Mar2014_3bedroom, Apr2014_3bedroom, May2014_3bedroom, Jun2014_3bedroom, Jul2014_3bedroom, Aug2014_3bedroom, Sep2014_3bedroom, Sep2013_4bedroom, Oct2013_4bedroom, Nov2013_4bedroom, Dec2013_4bedroom, Jan2014_4bedroom, Feb2014_4bedroom, Mar2014_4bedroom, Apr2014_4bedroom, May2014_4bedroom, Jun2014_4bedroom, Jul2014_4bedroom, Aug2014_4bedroom, Sep2014_4bedroom, Sep2013_5bedroom, Oct2013_5bedroom, Nov2013_5bedroom, Dec2013_5bedroom, Jan2014_5bedroom, Feb2014_5bedroom, Mar2014_5bedroom, Apr2014_5bedroom, May2014_5bedroom, Jun2014_5bedroom, Jul2014_5bedroom, Aug2014_5bedroom, Sep2014_5bedroom  from Rentdata where city='"+cities[i]+"'";
		pool.query(queryString, function(err, row1) {
			if (err) {
				console.log("ERROR: " + err.message);
			} 
					//console.log(i+"The result of the query "+JSON.stringify(row1)+ " and the lenght of the row"+row1.length);
					row=row1;
			
					obj = new Object();
			        data = [];
					
			        //console.log('cities: ', row[j].Sep2013_1bedroom,  row[j].Sep2014_1bedroom)
			   		//results = results + {'name':rows[i].city, }

			        var sep2013 = (row[0].Sep2013_1bedroom + row[0].Sep2013_2bedroom + row[0].Sep2013_3bedroom + row[0].Sep2013_4bedroom + row[0].Sep2013_5bedroom) / 5;
			        var oct2013 = (row[0].Oct2013_1bedroom + row[0].Oct2013_2bedroom + row[0].Oct2013_3bedroom + row[0].Oct2013_4bedroom + row[0].Oct2013_5bedroom) / 5;
			        var nov2013 = (row[0].Nov2013_1bedroom + row[0].Nov2013_2bedroom + row[0].Nov2013_3bedroom + row[0].Nov2013_4bedroom + row[0].Nov2013_5bedroom) / 5;
			        var dec2013 = (row[0].Dec2013_1bedroom + row[0].Dec2013_2bedroom + row[0].Dec2013_3bedroom + row[0].Dec2013_4bedroom + row[0].Dec2013_5bedroom) / 5;
			        var jan2014 = (row[0].Jan2014_1bedroom + row[0].Jan2014_2bedroom + row[0].Jan2014_3bedroom + row[0].Jan2014_4bedroom + row[0].Jan2014_5bedroom) / 5;
			        var feb2014 = (row[0].Feb2014_1bedroom + row[0].Feb2014_2bedroom + row[0].Feb2014_3bedroom + row[0].Feb2014_4bedroom + row[0].Feb2014_5bedroom) / 5;
			        var mar2014 = (row[0].Mar2014_1bedroom + row[0].Mar2014_2bedroom + row[0].Mar2014_3bedroom + row[0].Mar2014_4bedroom + row[0].Mar2014_5bedroom) / 5;
			        var apr2014 = (row[0].Apr2014_1bedroom + row[0].Apr2014_2bedroom + row[0].Apr2014_3bedroom + row[0].Apr2014_4bedroom + row[0].Apr2014_5bedroom) / 5;
			        var may2014 = (row[0].May2014_1bedroom + row[0].May2014_2bedroom + row[0].May2014_3bedroom + row[0].May2014_4bedroom + row[0].May2014_5bedroom) / 5;
			        var jun2014 = (row[0].Jun2014_1bedroom + row[0].Jun2014_2bedroom + row[0].Jun2014_3bedroom + row[0].Jun2014_4bedroom + row[0].Jun2014_5bedroom) / 5;
			        var jul2014 = (row[0].Jul2014_1bedroom + row[0].Jul2014_2bedroom + row[0].Jul2014_3bedroom + row[0].Jul2014_4bedroom + row[0].Jul2014_5bedroom) / 5;
			        var aug2014 = (row[0].Aug2014_1bedroom + row[0].Aug2014_2bedroom + row[0].Aug2014_3bedroom + row[0].Aug2014_4bedroom + row[0].Aug2014_5bedroom) / 5;
			        var sep2014 = (row[0].Sep2014_1bedroom + row[0].Sep2014_2bedroom + row[0].Sep2014_3bedroom + row[0].Sep2014_4bedroom + row[0].Sep2014_5bedroom) / 5;
			        		
			        	
			        obj.name = cities[l++];
			        data.push(sep2013+","+oct2013+","+nov2013+","+dec2013+","+jan2014+","+feb2014+","+mar2014+","+apr2014+","+may2014+","+jun2014+","+jul2014+","+aug2014+","+sep2014);
			        obj.data = data;


			        series.push(obj)
			        console.log("All the line data for object in array  ---->>"+JSON.stringify(obj));
				
		
		
		});	
		}
	setTimeout(function(){
		console.log("All the line data ---->>"+series);
	    res.render('linegraph.ejs',{data : series} );
	},100);		
	
			
			
				
};




