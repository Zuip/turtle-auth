let formatUser = require('../services/formatUser');
let selectUser = require('../database/selectUser');
let password = require('../services/password');

module.exports = function(req, res) {
  selectUser.withUsername(
    req.params.username
  ).then(user => {
    password.validate(
      req.params.password,
      user.password,
      function isValid() {
        res.json(formatUser(user));
      },
      function isNotValid() {
        res.status('404').json({});
      }
    );
  }).catch(function(err) {
    res.status('500').json({});
  });
};
