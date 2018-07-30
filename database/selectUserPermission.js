let db = require('./connection');

module.exports = {
  withUserIdAndTargetAndAction: function(userId, target, action) {
    return db.one(
      `
        SELECT DISTINCT permission.target, permission.action
        FROM user_account
        JOIN user_role ON user_role.user_id = user_account.id
        JOIN role ON role.id = user_role.role_id
        JOIN role_permission ON role_permission.role_id = role.id
        JOIN permission ON permission.id = role_permission.permission_id
        WHERE user_account.id = $1
        AND permission.target = $2
        AND permission.action = $3
      `,
      [ userId, target, action ]
    );
  }
};
