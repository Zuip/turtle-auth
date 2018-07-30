exports.up = function(knex, KnexPromise) {
  return knex.schema.createTable('role_permission', function(table) {
    table.increments('id').unsigned().primary();
    table.integer('permission_id').unsigned().references('id').inTable('permission');
    table.integer('role_id').unsigned().references('id').inTable('role');
  });
};

exports.down = function(knex, KnexPromise) {
  return knex.schema.dropTableIfExists('role_permission');
};