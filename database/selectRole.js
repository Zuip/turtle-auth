let db = require('./connection');

module.exports = {
  withKey: function(roleKey) {
    return db.one(
      'SELECT * FROM role WHERE key = $1',
      roleKey
    );
  }
};
