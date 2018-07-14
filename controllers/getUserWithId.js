let formatUser = require('../services/formatUser');
let selectUser = require('../database/selectUser');

module.exports = function(req, res) {
  selectUser.withId(
    req.params.id
  ).then(
    user => formatUser(user)
  ).then(user => {
    res.json(user);
  }).catch(function(err) {
    res.status('404').json({});
  });
};
