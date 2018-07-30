let db = require('./connection');

module.exports = {
  withUserId: function(userId) {
    return db.any(
      `
        SELECT DISTINCT permission.target, permission.action
        FROM user_account
        JOIN user_role ON user_role.user_id = user_account.id
        JOIN role ON role.id = user_role.role_id
        JOIN role_permission ON role_permission.role_id = role.id
        JOIN permission ON permission.id = role_permission.permission_id
        WHERE user_account.id = $1
      `,
      userId
    );
  },
  withUserIdAndTarget: function(userId, target) {
    return db.any(
      `
        SELECT DISTINCT permission.target, permission.action
        FROM user_account
        JOIN user_role ON user_role.user_id = user_account.id
        JOIN role ON role.id = user_role.role_id
        JOIN role_permission ON role_permission.role_id = role.id
        JOIN permission ON permission.id = role_permission.permission_id
        WHERE user_account.id = $1
        AND permission.target = $2
      `,
      [ userId, target ]
    );
  }
};
