let prompt = require('prompt');

let db = require('./database/connection');
let passwordHandler = require('./services/password');

prompt.start();

prompt.get(['username', 'password'], function (err, result) {

  if(result.username.length < 3) {
    console.log('Too short username!');
    return;
  }

  if(result.password.length < 7) {
    console.log('Too short password!');
    return;
  }

  passwordHandler.generateHash(result.password, function(hashedPassword) {

    db.none(
      `
        INSERT INTO user_account (name, password)
        VALUES ($1, $2)
      `,
      [result.username, hashedPassword]
    );

    console.log('User was created!');

    process.exit(1);
  });
});
