const Joi = require("joi");

// validate fetch api request
exports.ValidateGetRquest = data => {
  try {
    const schema = Joi.object().keys({
      userid: Joi.number().optional().error(new Error("Provide userid(number)")),
       username: Joi.string().optional().error(new Error("Provide username(string)")),
      userroleid: Joi.number().optional().error(new Error("Provide userroleid(number)")),
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
        userid: Joi.number().required().error(new Error("Provide userid(number)")),
        username: Joi.string().optional().error(new Error("Provide username(string)")),
        roleid: Joi.number().optional().error(new Error("Provide roleid(number)")),
        phoneno: Joi.number().optional().error(new Error("Provide phoneno(string)")),
        isactive: Joi.boolean().optional().error(new Error("Provide isactive(string)")),
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
        username: Joi.string().required().error(new Error("Provide username(string)")),
        roleid: Joi.number().required().error(new Error("Provide roleid(number)")),
        phoneno: Joi.number().required().error(new Error("Provide phoneno(string)")),
        isactive: Joi.boolean().optional().error(new Error("Provide isactive(string)")),
        createdby:Joi.string().required().error(new Error("Provide createdby(string)")),
    });
      return schema.validate(data);
    } catch (e) {
      return e;
    }
  };