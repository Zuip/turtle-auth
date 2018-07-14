let formatUser = require('../services/formatUser');
let selectUsers = require('../database/selectUsers');

module.exports = function(req, res) {
  selectUsers.all().then(
    users => formatUsers(users)
  ).then(users => {
    res.json(users);
  }).catch(function(err) {
    res.status('500').json({});
  });
};

function formatUsers(users) {
  return users.map(user => {
    return formatUser(user);
  });
}
