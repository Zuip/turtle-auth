let filterObjectProperties = require('./filterObjectProperties');

module.exports = function(rawUser) {
  return filterObjectProperties(
    rawUser,
    ['id', 'name', 'created']
  );
}
