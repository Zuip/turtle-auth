let bcrypt = require('bcrypt-nodejs');

module.exports = {
  generateHash: function(password, callback) {
    bcrypt.hash(password, bcrypt.genSaltSync(12), null, function(err, hash) {
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
