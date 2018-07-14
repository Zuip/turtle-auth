let db = require('./connection');

module.exports = {
  all: function () {
    return db.any(`
      SELECT *
      FROM user_account
    `);
  }
};
