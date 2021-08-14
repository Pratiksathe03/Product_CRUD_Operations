const categorymasterService = require("../services/categorymaster.service.js");
const categorymasterValidator = require("../validator/categorymaster.validator.js");

// to fetch categorymaster details
exports.getCategoryMasterDetails = (req, res) => {
  try {
    const data = req.query;
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

// to craete new categorymaster details
exports.createCategoryMasterDetails = (req, res) => {
  try {
    const data = req.body;
    const validation = categorymasterValidator.ValidateCreateRquest(data);
    if (validation && validation.error) {
      throw new Error(validation.error.message);
    } else {
      categorymasterService
        .createNewCategoryMasterDetails(data)
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
exports.updateCategoryMasterDetails = (req, res) => {
  try {
    const data = req.body;
    const validation = categorymasterValidator.ValidateUpdateRquest(data);
    if (validation && validation.error) {
      throw new Error(validation.error.message);
    } else {
      categorymasterService
        .updateCategoryMasterDetails(data)
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
