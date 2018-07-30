let prompt = require('prompt');

let insertRoleToUser = require('./database/insertRoleToUser');
let insertUser = require('./database/insertUser');

prompt.start();

prompt.get([
  'username',
  'password',
  {
    name: 'addAdmin',
    message: 'Add admin permissions (y/n)'
  }
], function (err, result) {

  if(result.username.length < 3) {
    console.log('Too short username!');
    return;
  }

  if(result.password.length < 7) {
    console.log('Too short password!');
    return;
  }

  insertUser(
    result.username,
    result.password,
    1
  ).then(userId => {

    if(result.addAdmin !== 'y') {
      return;
    }

    return insertRoleToUser(userId, 'admin');
    
  }).then(() => {
    console.log('User was created!');
    process.exit(1);
  }).catch(
    error => console.log(error)
  );
});
