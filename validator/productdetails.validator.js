const Joi = require("joi");

// validate fetch api request
exports.ValidateGetRquest = data => {
  try {
    const schema = Joi.object().keys({
      productid: Joi.number().optional().error(new Error("Provide productid(number)")),
      productname: Joi.string().optional().error(new Error("Provide productname(string)")),
      catid: Joi.number().optional().error(new Error("Provide catid(number)")),
      price: Joi.number().optional().error(new Error("Provide price(string)")),
      qty: Joi.number().optional().error(new Error("Provide qty(string)")),
      description: Joi.string().optional().error(new Error("Provide description(string)")),
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
        productid: Joi.number().required().error(new Error("Provide productid(number)")),
        productname: Joi.string().required().error(new Error("Provide productname(string)")),
        catid: Joi.number().optional().error(new Error("Provide catid(number)")),
        price: Joi.number().optional().error(new Error("Provide price(string)")),
        qty: Joi.number().optional().error(new Error("Provide qty(string)")),
        description: Joi.string().optional().error(new Error("Provide description(string)")),
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
        productname: Joi.string().required().error(new Error("Provide productname(string)")),
        catid: Joi.number().required().error(new Error("Provide catid(number)")),
        price: Joi.number().required().error(new Error("Provide price(string)")),
        qty: Joi.number().optional().error(new Error("Provide qty(string)")),
        description: Joi.string().optional().error(new Error("Provide description(string)")),
        createdby:Joi.string().required().error(new Error("Provide createdby(string)")),
    });
      return schema.validate(data);
    } catch (e) {
      return e;
    }
  };
