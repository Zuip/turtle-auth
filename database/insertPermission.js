let db = require('./connection');

module.exports = function(target, action) {
  return db.one(
    `
      INSERT INTO permission (target, action)
      VALUES ($1, $2)
      RETURNING id
    `,
    [ target, action ]
  );
};
