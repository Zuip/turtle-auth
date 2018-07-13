let bcrypt = require('bcrypt');

module.exports = {
  generateHash: function(password, callback) {
    bcrypt.hash(password, 10, function(err, hash) {
      callback(hash);
    });
  },
  validate: function(password, hash, isValidCallback, isNotValidCallback) {
    bcrypt.compare(password, hash, function(err, res) {
      if(res) {
        isValidCallback();
      } else {
        isNotValidCallback();
      }
    });
  }
};
