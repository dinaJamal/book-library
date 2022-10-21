import Joi from "joi";

export const authorSchema = Joi.object().keys({
  name: Joi.string().min(3).max(40).required(),
});
