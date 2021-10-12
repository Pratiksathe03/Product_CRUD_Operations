const sequelize = require("sequelize");
const db = require("../models");
const datetime = require('node-datetime');

exports.getUserRoleDetails = reqArg => {
  return new Promise((resolve, reject) => {
    let whereCnd = {};
    if (reqArg) {
      reqArg.roleid ? whereCnd.roleid = Number(reqArg.roleid) : "";
      reqArg.rolename ? whereCnd.rolename = reqArg.rolename : "";
    }

    db.userrolemaster
      .findAndCountAll({
        where: whereCnd,
        // order: [
        //    ['createddate', 'DESC']
        // ]
      })
      .then(result => {
        if (result && result.count) {
          resolve({
            status: 200,
            message: "Details Found Successfully",
            result: {
              totalCount: result.count,
              data: result.rows
            }
          });
        } else {
          resolve({
            status: 200,
            message: "Details not found",
            result: {
              totalCount: 0,
              data: []
            }
          });
        }
      })
      .catch(error => {
        console.log("error=========", error);
        reject({
          status: 404,
          message: error.message || "Internal Server error",
          result: {}
        });
      });
  });
};

exports.createNewUserRoleMasterDetails = reqArg => {
  return new Promise((resolve, reject) => {
    let whereCnd = {};
    if (reqArg) {
      reqArg.rolename ? (whereCnd.rolename = reqArg.rolename) : "";
    }
    db.userrolemaster
      .findAndCountAll({
        where: whereCnd,
        order: [["createddate", "DESC"]]
      })
      .then(result => {
        if (result && result.count && result.count > 0) {
          resolve({
            status: 201,
            message: "Role Already Exist",
            result: {}
          });
        } else {
          let dt = datetime.create();
          dt = dt.format('Y-m-d H:M:S')
          db.userrolemaster
            .create({
                rolename: reqArg.rolename,
              isactive: reqArg.isactive,
              createdby:reqArg.createdby,
              createddate: dt
            })
            .then(result => {
              resolve({
                status: 200,
                message: "Role Created Successfully",
                result: result
              });
            });
        }
      })
      .catch(error => {
        reject({
          status: 404,
          message: error.message || "Internal Server error",
          result: {}
        });
      });
  });
};

exports.updateCategoryMasterDetails = (reqArg) => {
  return new Promise((resolve, reject) => {
    let whereCnd = {};
    if (reqArg) {
      reqArg.roleid ? whereCnd.roleid = Number(reqArg.roleid) : "";
      // reqArg.rolename ? whereCnd.rolename = reqArg.rolename : "";
    }
    db.userrolemaster
      .findAndCountAll({
        where: whereCnd,
        order: [["createddate", "DESC"]]
      })
      .then(result => {
        console.log("===========result", result);
        if (result && result.count && result.count == 0) {
          resolve({
            status: 201,
            message: "Role Not Exits",
            result: {}
          });
        } else {
          let dt = datetime.create();
          dt = dt.format('Y-m-d H:M:S');
          let updateData = {};
          reqArg.rolename
          ? updateData.rolename = reqArg.rolename
          : "";
          reqArg.isactive
            ? updateData.isactive = reqArg.isactive
            : "";
            reqArg.lastmodifiedby
            ? updateData.lastmodifiedby = reqArg.lastmodifiedby
            : "";
            updateData.lastmodifieddate=dt

            // console.log("==============",reqArg,"==",updateData)
          db.userrolemaster
            .update(updateData, {
              where: whereCnd
            })
            .then(result => {
              resolve({
                status: 200,
                message: "Role Updated Successfully",
                result: result
              });
            });
        }
      })
      .catch(error => {
        // console.log("error=========", error);
        reject({
          status: 404,
          message: error.message || "Internal Server error",
          result: {}
        });
      });
  });
};