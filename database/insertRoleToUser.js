let db = require('./connection');
let selectRole = require('./selectRole');

module.exports = function(userId, roleKey) {
  return selectRole.withKey(
    roleKey
  ).then(role => {
    return db.none(
      `
        INSERT INTO user_role (user_id, role_id)
        VALUES ($1, $2)
      `,
      [ userId, role.id ]
    );
  });
};
