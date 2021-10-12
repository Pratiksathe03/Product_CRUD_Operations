const UserMasterService = require("../services/usermaster.service.js");
const UserMasterValidator = require("../validator/usermaster.validator.js");

exports.getUserDetails = (req, res) => {
  try {
    const data = req.query;
    const validation = UserMasterValidator.ValidateGetRquest(data);
    if (validation && validation.error) {
      throw new Error(validation.error.message);
    } else {
        UserMasterService
        .getUserMasterDetails(data)
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

exports.createUserDetails = (req, res) => {
  try {
    const data = req.body;
    const validation = UserMasterValidator.ValidateCreateRquest(data);
    if (validation && validation.error) {
      throw new Error(validation.error.message);
    } else {
        UserMasterService
        .createNewUserMasterDetails(data)
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

exports.updateMasterDetails = (req, res) => {
  try {
    const data = req.body;
    const validation = UserMasterValidator.ValidateUpdateRquest(data);
    if (validation && validation.error) {
      throw new Error(validation.error.message);
    } else {
        UserMasterService
        .updateUserMasterDetails(data)
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
