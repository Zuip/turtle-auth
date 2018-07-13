let bodyParser = require('body-parser');
let express = require('express');

let postAuthenticationController = require('./controllers/postAuthenticationController');

let app = express();

// This makes it easier to handle posted JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3001, () => console.log('turtle-auth listening on port 3001!'));

app.set('etag', false);

app.post('/api/authenticate', postAuthenticationController);
