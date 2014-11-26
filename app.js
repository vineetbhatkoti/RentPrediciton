
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

var net = require('net');


// all environments

//var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
//var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'


app.set('ip', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');
app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8080);
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

http.createServer(app,function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(app.get('port'), app.get('ip'));


// http.createServer(app).listen(app.get('port'), function(){
//   console.log('Express server listening on port ' + app.get('port'));
// });
