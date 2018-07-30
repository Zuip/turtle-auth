let db = require('./connection');

module.exports = function(permissionId, roleId) {
  return db.none(
    `
      INSERT INTO role_permission (permission_id, role_id)
      VALUES ($1, $2)
    `,
    [ permissionId, roleId ]
  );
};
