exports.up = function(knex, KnexPromise) {
  return knex.schema.createTable('role', function(table) {
    table.increments('id').unsigned().primary();
    table.text('key').notNull();
  });
};

exports.down = function(knex, KnexPromise) {
  return knex.schema.dropTableIfExists('role');
};