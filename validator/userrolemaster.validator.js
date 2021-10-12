const Joi = require("joi");

// validate fetch api request
exports.ValidateGetRquest = data => {
  try {
    const schema = Joi.object().keys({
       rolename: Joi.string().optional().error(new Error("Provide rolename(string)")),
      roleid: Joi.number().optional().error(new Error("Provide roleid(number)")),
      isactive: Joi.boolean().optional().error(new Error("Provide isactive(boolean)")),
      offset: Joi.number().optional().error(new Error("Provide offset(number)")),
      limit: Joi.number().optional().error(new Error("Provide limit(number)"))
    });
    return schema.validate(data);
  } catch (e) {
    return e;
  }
};

exports.ValidateUpdateRquest = data => {
    try {
      const schema = Joi.object().keys({
        rolename: Joi.string().optional().error(new Error("Provide rolename(string)")),
        roleid: Joi.number().required().error(new Error("Provide roleid(number)")),
        isactive: Joi.boolean().optional().error(new Error("Provide isactive(boolean)")),
        lastmodifiedby:Joi.string().required().error(new Error("Provide lastmodifiedby(string)")),
    });
      return schema.validate(data);
    } catch (e) {
      return e;
    }
  };

exports.ValidateCreateRquest = data => {
    try {
      const schema = Joi.object().keys({
        rolename: Joi.string().required().error(new Error("Provide rolename(string)")),
        isactive: Joi.boolean().optional().error(new Error("Provide isactive(string)")),
        createdby:Joi.string().required().error(new Error("Provide createdby(string)")),
    });
      return schema.validate(data);
    } catch (e) {
      return e;
    }
  };