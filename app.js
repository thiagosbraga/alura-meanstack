var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

var routes=require('./routes');


app.set('views',path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));
app.use(express.static(path.join(__dirname,'public')));

app.get('/',routes.index);
app.get('/lista',routes.lista);
app.post('/grava',routes.grava);
app.delete('/filme/:id',routes.deleta);
app.put('/filme',routes.atualiza);

app.set('view engine', 'ejs');
app.set('port', process.env.PORT || 3000);


var server = app.listen(app.get('port'),function(){


	console.log('Servidor foi startado na porta '+ server.address().port);
});

