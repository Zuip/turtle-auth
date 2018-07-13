let db = require('./connection');

module.exports = {
  withId: function(userId) {
    return db.one(
      'SELECT * FROM user_account WHERE id = $1',
      userId
    );
  },
  withUsername: function (username) {
    return db.one(
      'SELECT * FROM user_account WHERE lower(name) = $1',
      username.toLowerCase()
    );
  }
};
