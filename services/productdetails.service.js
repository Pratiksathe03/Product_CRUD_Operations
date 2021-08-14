const sequelize = require("sequelize");
const db = require("../models");
const datetime = require('datetime');
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

    productdetails
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


exports.createNewProductDetails = reqArg => {
    return new Promise((resolve, reject) => {
      let whereCnd = {};
      if (reqArg) {
        reqArg.productid ? (whereCnd.productid = reqArg.productid) : "";
        reqArg.productname ? (whereCnd.productname = reqArg.productname) : "";
      }

      productdetails
        .findAndCountAll({
          where: whereCnd,
        })
        .then(result => {
          console.log("===========result", result);
          if (result && result.count && result.count > 0) {
            resolve({
              status: 201,
              message: "Product Already Exist",
              result: {}
            });
          } else {
            let dt = dateTime.create();
            dt = dt.format('Y-m-d H:M:S');
            productdetails
              .create({
                productname: reqArg.productname,
                catid: reqArg.catid,
                price: reqArg.price,
                qty: reqArg.qty ?reqArg.qty : null ,
                desctiption: reqArg.desctiption ?reqArg.desctiption : null,
                createddateby: reqArg.createddateby,
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