var express = require('express');
var app = express();

// Remove/change the port if needed
app.set('port', (process.env.PORT || 8080 ));

/* Libraries redirects */
app.use(express.static(__dirname + '/dist'));

app.all('/*', function(req, res, next){
  res.sendFile('/dist/index.html', {root: __dirname});
});

app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
