let bodyParser = require('body-parser');
let express = require('express');

let getUsersController = require('./controllers/getUsers');
let getUserWithIdController = require('./controllers/getUserWithId');
let getUserPermissionsController = require('./controllers/getUserPermissions');

let app = express();

// This makes it easier to handle posted JSON
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(3001, () => console.log('turtle-auth listening on port 3001!'));

app.set('etag', false);

app.get('/api/users', getUsersController);
app.get('/api/users/:id', getUserWithIdController);
app.get('/api/users/:userId/permissions', getUserPermissionsController);
