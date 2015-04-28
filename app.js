/*
 * Module dependencies
 */
var express = require('express')
  , stylus = require('stylus')
  , nib = require('nib');

var app = express();

//find out where this __dirname varible is set  
app.set('views', __dirname + '/views');
console.log("The script executing is present here " + __dirname);
console.log("Setting view to " + app.get('views'));
app.set('view engine', 'jade');
console.log("Setting view to " + app.get('view engine'));

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index',
  { title : 'Jackie s website' })
});
app.listen(3000);
