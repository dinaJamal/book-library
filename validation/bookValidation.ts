import Joi from "joi";

export const bookSchema = Joi.object().keys({
  title: Joi.string().min(5).max(20).required(),
});
