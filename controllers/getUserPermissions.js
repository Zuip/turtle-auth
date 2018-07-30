let formatPermission = require('../services/formatPermission');
let selectUserPermission = require('../database/selectUserPermission');
let selectUserPermissions = require('../database/selectUserPermissions');

module.exports = function(req, res) {

  if(typeof req.query.target !== 'undefined' && typeof req.query.action !== 'undefined') {
    return selectUserPermission.withUserIdAndTargetAndAction(
      req.params.userId,
      req.query.target,
      req.query.action
    ).then(
      permission => formatPermission(permission)
    ).then(permission => {
      res.json(permission);
    }).catch(() => {
      res.status('404').json({});
    });
  }

  if(typeof req.query.target !== 'undefined') {
    return selectUserPermissions.withUserIdAndTarget(
      req.params.userId,
      req.query.target
    ).then(
      permissions => permissions.map(permission => {
        return formatPermission(permission)
      })
    ).then(permissions => {
      res.json(permissions);
    }).catch(function(error) {
      console.log(error);
      res.status('500').json({});
    });
  }

  selectUserPermissions.withUserId(
    req.params.userId
  ).then(
    permissions => permissions.map(permission => {
      return formatPermission(permission)
    })
  ).then(permissions => {
    res.json(permissions);
  }).catch(function(error) {
    console.log(error);
    res.status('500').json({});
  });
};
