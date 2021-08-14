const productdetailsService = require("../services/productdetails.service.js");
const productdetailsValidator = require("../validator/productdetails.validator.js");


// to fetch productdetails details
exports.getProductDetails = (req, res) => {
    try {
      const data = req.params;
      const validation = categorymasterValidator.ValidateGetRquest(data);
      if (validation && validation.error) {
        throw new Error(validation.error.message);
      } else {
        categorymasterService
          .getCategoryMasterDetails(data)
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