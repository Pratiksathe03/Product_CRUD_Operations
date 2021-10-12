const UserRoleService = require("../services/userrolemaster.service.js");
const UserRoleValidator = require("../validator/userrolemaster.validator.js");

exports.getUserRoleDetails = (req, res) => {
  try {
    const data = req.query;
    const validation = UserRoleValidator.ValidateGetRquest(data);
    if (validation && validation.error) {
      throw new Error(validation.error.message);
    } else {
      UserRoleService
        .getUserRoleDetails(data)
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

exports.createUserRoleDetails = (req, res) => {
  try {
    const data = req.body;
    const validation = UserRoleValidator.ValidateCreateRquest(data);
    if (validation && validation.error) {
      throw new Error(validation.error.message);
    } else {
      UserRoleService
        .createNewUserRoleMasterDetails(data)
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

exports.updateUserRoleMasterDetails = (req, res) => {
  try {
    const data = req.body;
    const validation = UserRoleValidator.ValidateUpdateRquest(data);
    if (validation && validation.error) {
      throw new Error(validation.error.message);
    } else {
      UserRoleService
        .updateUserRoleMasterDetails(data)
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
