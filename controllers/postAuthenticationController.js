let selectUser = require('../database/selectUser');
let password = require('../services/password');

module.exports = function(req, res) {
  selectUser.withUsername(
    req.body.username
  ).then(data => {
    password.validate(
      req.body.password,
      data.password,
      function isValid() {
        res.json({
          user: data,
          success: true
        });
      },
      function isNotValid() {
        res.json({ success: false });
      }
    );
  }).catch(function(err) {
    res.json({ success: false });
  });
};
