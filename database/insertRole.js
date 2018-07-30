let db = require('./connection');

module.exports = function(roleKey) {
  return db.one(
    `
      INSERT INTO role (key)
      VALUES ($1)
      RETURNING id
    `,
    [ roleKey ]
  ).then(
    role => role.id
  );
};
