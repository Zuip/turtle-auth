module.exports = function(objectToFilter, propertyNames) {
  return Object.keys(
    objectToFilter
  ).filter(
    key => propertyNames.includes(key)
  ).reduce(
    (obj, key) => {
      obj[key] = objectToFilter[key];
      return obj;
    },
    {}
  );
};
