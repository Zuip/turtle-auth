exports.up = function(knex, KnexPromise) {
  return knex.transaction(function(trx) {
    return knex.schema.createTable('permission', function(table) {
      table.increments('id').unsigned().primary();
      table.text('target').notNull();
      table.text('action').notNull();
    }).then(
      () => trx.commit
    ).catch(
      () => trx.rollback
    );
  });
};

exports.down = function(knex, KnexPromise) {
  return knex.schema.dropTableIfExists('permission');
};