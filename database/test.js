/**
 * New node file
 */

exports.test =function(req,res)
{
	var connectionPool = require('../database/connectionPooling');
	var pool = connectionPool.Pool();
	pool.connect();

	var res;
	var sql1='select avg(Jan2014_1bedroom) , state from Rentdata group by state';
	pool.query(sql1, function(err, results) {
		if(err)throw err;
		
		console.log(results);
		
		
		
	});
	
//	var query2=connection.query('SELECT distinct(state) from Rentdata',function(err, result,fields){
//		if(err)throw err;
//		console.log(result);
//		for(i in result)
//		{
//			console.log("i"+i);
//			connection.query('SELECT avg(rent) from Rentdata where state=\''+result[i].state+'\'',function(err,result1,fields){
//			console.log('SELECT avg(rent) from ziprent where state=\''+result[i].state+'\'');
//				console.log("result1",result1);
//			});
//		}
//
//	});
//	
	
	
};



