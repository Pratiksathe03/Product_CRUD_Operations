const productdetailsService = require("../services/productdetails.service.js");
const productdetailsValidator = require("../validator/productdetails.validator.js");

// to fetch productdetails details
exports.getProductDetails = (req, res) => {
    try {
      const data = req.query;
      const validation = productdetailsValidator.ValidateGetRquest(data);
      if (validation && validation.error) {
        throw new Error(validation.error.message);
      } else {
        productdetailsService
          .getProductDetails(data)
          .then(result => {
            res.status(200).send(result);
          })
          .catch(error => {
            res.status(500).send(error);
          });
      }
    } catch (error) {
      res.status(500).send({
        status: 500,
        message: error.message || "Internal Server Error"
      });
    }
  };

  exports.createProductDetails = (req, res) => {
    try {
      const data = req.body;
      const validation = productdetailsValidator.ValidateCreateRquest(data);
      if (validation && validation.error) {
        throw new Error(validation.error.message);
      } else {
        productdetailsService
          .createNewProductDetails(data)
          .then(result => {
            //   console.log("rerererre=",result)
            res.status(200).send(result);
          })
          .catch(error => {
            res.status(500).send(error);
          });
      }
    } catch (error) {
      // console.log("error===",error)
      res.status(500).send({
        status: 500,
        message: error.message || "Internal Server Error"
      });
    }
  };
  
  // to update categorymaster details
  exports.updateProductDetails = (req, res) => {
    try {
      const data = req.body;
      const validation = productdetailsValidator.ValidateUpdateRquest(data);
      if (validation && validation.error) {
        throw new Error(validation.error.message);
      } else {
        productdetailsService
          .updateProductDetails(data)
          .then(result => {
            res.status(200).send(result);
          })
          .catch(error => {
            res.status(500).send(error);
          });
      }
    } catch (error) {
      res.status(500).send({
        status: 500,
        message: error.message || "Internal Server Error"
      });
    }
  };