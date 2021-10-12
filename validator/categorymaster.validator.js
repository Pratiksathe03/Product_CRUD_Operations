const Joi = require("joi");

// validate req api request
exports.ValidateGetRquest = data => {
  try {

    const schema = Joi.object().keys({
      catid: Joi.number().optional().error(new Error("Provide catid(number)")),
      category: Joi.string()
        .optional()
        .error(new Error("Provide category(string)")),
      description: Joi.string()
        .optional()
        .error(new Error("Provide description(string)")),
      offset: Joi.number().optional().error(new Error("Provide offset(number)")),
      limit: Joi.number().optional().error(new Error("Provide limit(number)"))
    });
    return schema.validate(data);
  } catch (e) {
    return e;
  }
};

// create payload
exports.ValidateCreateRquest = data => {
  try {
    const schema = Joi.object().keys({
      category: Joi.string()
        .required()
        .error(new Error("Provide category(string)")),
      description: Joi.string()
        .optional()
        .error(new Error("Provide description(string)")),
        createdby:Joi.string()
        .required()
        .error(new Error("Provide createdby(string)")),
    });
    return schema.validate(data);
  } catch (e) {
    return e;
  }
};

// update payload
exports.ValidateUpdateRquest = data => {
  try {
    const schema = Joi.object().keys({
      catid: Joi.number().required().error(new Error("Provide catid(number)")),
      // description: Joi.string.optional(),
      category: Joi.string()
        .required()
        .error(new Error("Provide category(string)")),
      description: Joi.string()
        .optional()
        .error(new Error("Provide description(string)")),
        lastmodifiedby:Joi.string()
        .required()
        .error(new Error("Provide lastmodifiedby(string)")),
    });
    return schema.validate(data);
  } catch (e) {
    return e;
  }
};
