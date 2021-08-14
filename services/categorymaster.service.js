const sequelize = require("sequelize");
const db = require("../models");
const datetime = require('node-datetime');


exports.getCategoryMasterDetails = reqArg => {
  return new Promise((resolve, reject) => {
    let whereCnd = {};
    if (reqArg) {
      reqArg.catid ? whereCnd.catid = Number(reqArg.catid) : "";
      reqArg.category ? whereCnd.category = reqArg.category : "";
      reqArg.desctiption ? whereCnd.desctiption = reqArg.desctiption : "";
    }

    db.categorymaster
      .findAndCountAll({
        where: whereCnd,
        order: [
          // ['createddate', 'DESC']
        ]
      })
      .then(result => {
        console.log("===========result", result);
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

exports.createNewCategoryMasterDetails = reqArg => {
  return new Promise((resolve, reject) => {
    let whereCnd = {};
    if (reqArg) {
      reqArg.category ? (whereCnd.category = reqArg.category) : "";
    }
    db.categorymaster
      .findAndCountAll({
        where: whereCnd,
        order: [["createddate", "DESC"]]
      })
      .then(result => {
        if (result && result.count && result.count > 0) {
          resolve({
            status: 201,
            message: "Category Already Exist",
            result: {}
          });
        } else {
          let dt = datetime.create();
          dt = dt.format('Y-m-d H:M:S')
          db.categorymaster
            .create({
              category: reqArg.category,
              desctiption: reqArg.desctiption,
              createdby:reqArg.createdby,
              createddate: dt
            })
            .then(result => {
              resolve({
                status: 200,
                message: "Category Created Successfully",
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
      reqArg.catid ? whereCnd.catid = Number(reqArg.catid) : "";
      // reqArg.category ? whereCnd.category = reqArg.category : "";
    }
    db.categorymaster
      .findAndCountAll({
        where: whereCnd,
        order: [["createddate", "DESC"]]
      })
      .then(result => {
        console.log("===========result", result);
        if (result && result.count && result.count == 0) {
          resolve({
            status: 201,
            message: "Category Not Exits",
            result: {}
          });
        } else {
          let dt = datetime.create();
          dt = dt.format('Y-m-d H:M:S');
          let updateData = {};
          reqArg.category
          ? updateData.category = reqArg.category
          : "";
          reqArg.desctiption
            ? updateData.desctiption = reqArg.desctiption
            : "";
            reqArg.lastmodifiedby
            ? updateData.lastmodifiedby = reqArg.lastmodifiedby
            : "";
            updateData.lastmodifieddate=dt

            console.log("==============",reqArg,"==",updateData)
          db.categorymaster
            .update(updateData, {
              where: whereCnd
            })
            .then(result => {
              resolve({
                status: 200,
                message: "Category Updated Successfully",
                result: result
              });
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
