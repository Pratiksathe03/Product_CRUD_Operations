const db = require("../models");
const datetime = require('node-datetime');
exports.getProductDetails = reqArg => {
  return new Promise((resolve, reject) => {
    let whereCnd = {};
    if (reqArg) {
      reqArg.productid ? (whereCnd.productid = Number(reqArg.productid)) : "";
      reqArg.productname ? (whereCnd.productname = reqArg.productname) : "";
      reqArg.price ? (whereCnd.price = reqArg.price) : "";
      reqArg.qty ? (whereCnd.qty = reqArg.qty) : "";
      reqArg.catid ? (whereCnd.catid = reqArg.catid) : "";
    }
    db.productdetails
      .findAndCountAll({
        where: whereCnd,
        order: [
          ['createddate', 'DESC']
        ],
        offset : reqArg.offset,
        limit:reqArg.limit
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
        reject({
          status: 404,
          message: error.message || "Internal Server error",
          result: {}
        });
      });
  });
};

exports.createNewProductDetails = reqArg => {
    return new Promise((resolve, reject) => {
      let whereCnd = {};
      if (reqArg) {
        reqArg.productid ? (whereCnd.productid = reqArg.productid) : "";
        reqArg.productname ? (whereCnd.productname = reqArg.productname) : "";
      }
      db.productdetails
        .findAndCountAll({
          where: whereCnd,
        })
        .then(result => {
          if (result && result.count && result.count > 0) {
            resolve({
              status: 201,
              message: "Product Already Exist",
              result: {}
            });
          } else {
            let dt = datetime.create();
            dt = dt.format('Y-m-d H:M:S');
            db.productdetails
              .create({
                productname: reqArg.productname,
                catid: reqArg.catid,
                price: reqArg.price,
                qty: reqArg.qty ?reqArg.qty : null ,
                desctiption: reqArg.desctiption ?reqArg.desctiption : null,
                createdby: reqArg.createdby,
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
          console.log("error=========", error);
          reject({
            status: 404,
            message: error.message || "Internal Server error",
            result: {}
          });
        });
    });
  };

exports.updateProductDetails = (reqArg) => {
  return new Promise((resolve, reject) => {
    let whereCnd = {};
    if (reqArg) {
      reqArg.productid ? whereCnd.productid = Number(reqArg.productid) : "";
      // reqArg.productname ? whereCnd.productname = reqArg.productname : "";
    }
    db.productdetails
      .findAndCountAll({
        where: whereCnd,
      })
      .then(result => {
        if (result && result.count && result.count == 0) {
          resolve({
            status: 201,
            message: "Product Not Exits",
            result: {}
          });
        } else {
          let dt = datetime.create();
          dt = dt.format('Y-m-d H:M:S');
          let updateData = {};
          reqArg.productid
          ? updateData.productid = reqArg.productid
          : "";
          reqArg.productname
          ? updateData.productname = reqArg.productname
          : "";
          reqArg.desctiption
            ? updateData.desctiption = reqArg.desctiption
            : "";
            reqArg.lastmodifiedby
            ? updateData.lastmodifiedby = reqArg.lastmodifiedby
            : "";
            updateData.lastmodifieddate=dt

            reqArg.price
            ? updateData.price = reqArg.price
            : "";
            reqArg.qty
            ? updateData.qty = reqArg.qty
            : "";
            reqArg.catid
            ? updateData.catid = reqArg.catid
            : "";

            console.log("==============",reqArg,"==",updateData)
          db.productdetails
            .update(updateData, {
              where: whereCnd
            })
            .then(result => {
              resolve({
                status: 200,
                message: "Product Updated Successfully",
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