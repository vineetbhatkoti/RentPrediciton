
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , engines= require('consolidate')
  , path = require('path');
var hbs = require('hbs');
var app = express();




// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
//app.engine('html', engines.mustache);
app.engine('html', hbs.__express);
app.set('view engine', 'html');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);
app.get('/users', user.list);
app.get('/map',user.map);
app.post('/submitZipcode',routes.submitZip);
app.get('/test',routes.test);
app.post('/displaycities',routes.display);
app.get('/getWordColud',routes.wordCloudDislplay);
app.post('/getWordData',routes.getWordData);
app.get('/getLineGraph',routes.getLineGraph);
app.get('/Piechart',routes.getPieChart);




http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
