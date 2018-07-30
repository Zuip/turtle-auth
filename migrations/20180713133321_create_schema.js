exports.up = function(knex, KnexPromise) {
  return knex.schema.createTable('user_account', function(table) {
    table.increments('id').unsigned().primary();
    table.text('name').notNull();
    table.text('password').notNull();
    table.integer('language_id').unsigned().notNull();
    table.dateTime('created').notNull().defaultTo(
      knex.raw('now()')
    );
  });
};

exports.down = function(knex, KnexPromise) {
  return knex.schema.dropTableIfExists('user_account');
};
