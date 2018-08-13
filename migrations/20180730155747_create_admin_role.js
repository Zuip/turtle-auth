exports.up = function(knex, KnexPromise) {
  return Promise.all([
      knex('role').insert([
        {key: 'admin'}
      ]).returning('id'),
      knex('permission').insert([
        { target: 'cities',          action: 'update' },
        { target: 'cities',          action: 'create' },
        { target: 'cities',          action: 'remove' },
        { target: 'city-questions',  action: 'update' },
        { target: 'city-questions',  action: 'create' },
        { target: 'city-questions',  action: 'remove' },
        { target: 'users',           action: 'update' },
        { target: 'users',           action: 'create' },
        { target: 'users',           action: 'remove' }
      ]).returning('id')
  ]).then(data => {
    let roleId = data[0][0];
    let permissionIds = data[1];
    return knex('role_permission').insert(
      permissionIds.map(permissionId => {
        return {
          permission_id: permissionId,
          role_id: roleId
        };
      })
    );
  });
};

exports.down = function(knex, KnexPromise) {
  return Promise.resolve();
};