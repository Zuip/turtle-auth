exports.up = function(knex, KnexPromise) {
  return knex.schema.createTable('user_role', function(table) {
    table.increments('id').unsigned().primary();
    table.integer('user_id').unsigned().references('id').inTable('user_account');
    table.integer('role_id').unsigned().references('id').inTable('role');
  });
};

exports.down = function(knex, KnexPromise) {
  return knex.schema.dropTableIfExists('user_role');
};