const sequelize = require("sequelize");
const db = require("../models");
const datetime = require('node-datetime');

exports.getUserRoleDetails = reqArg => {
  return new Promise((resolve, reject) => {
    let whereCnd = {};
    if (reqArg) {
      reqArg.userroleid ? whereCnd.userroleid = Number(reqArg.userroleid) : "";
      reqArg.userid ? whereCnd.userid = reqArg.userid : "";
      reqArg.isactive ? whereCnd.isactive = reqArg.isactive : "";
      reqArg.username ? whereCnd.username = reqArg.username : "";
    }
    db.usermaster
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
        // reqArg.userroleid ? whereCnd.userroleid = Number(reqArg.userroleid) : "";
        reqArg.isactive ? whereCnd.isactive = reqArg.isactive : "";
        reqArg.username ? whereCnd.username = reqArg.username : "";
        reqArg.phoneno ? whereCnd.phoneno = reqArg.phoneno : "";
    }
    db.usermaster
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
                // userroleid: reqArg.userroleid,
              isactive: reqArg.isactive,
              createdby:reqArg.createdby,
              username : reqArg.username,
              phoneno:reqArg.phoneno,
              createddate: dt
            })
            .then(result => {
              resolve({
                status: 200,
                message: "User Created Successfully",
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
      reqArg.userid ? whereCnd.userid = Number(reqArg.userid) : "";
      reqArg.userroleid ? whereCnd.userroleid = Number(reqArg.userroleid) : "";
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
          reqArg.userroleid
          ? updateData.userroleid = reqArg.userroleid
          : "";
          reqArg.username
          ? updateData.username = reqArg.username
          : "";
          reqArg.isactive
            ? updateData.isactive = reqArg.isactive
            : "";
            reqArg.lastmodifiedby
            ? updateData.lastmodifiedby = reqArg.lastmodifiedby
            : "";
            updateData.lastmodifieddate=dt
          db.userrolemaster
            .update(updateData, {
              where: whereCnd
            })
            .then(result => {
              resolve({
                status: 200,
                message: "User Updated Successfully",
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