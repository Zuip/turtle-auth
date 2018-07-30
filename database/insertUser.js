let db = require('./connection');
let passwordHandler = require('../services/password');

module.exports = function(username, password, languageId) {
  return new Promise((resolve, reject) => {
    passwordHandler.generateHash(password, function(hashedPassword) {
      return db.one(
        `
          INSERT INTO user_account (name, password, language_id)
          VALUES ($1, $2, $3)
          RETURNING id AS user_id
        `,
        [ username, hashedPassword, languageId ]
      ).then(data => {
        resolve(data.user_id)
      }).catch(
        error => reject(error)
      );
    });
  });
};
