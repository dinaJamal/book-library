import Joi from 'joi'

export const tagsSchema = Joi.object().keys({
    name: Joi.string().min(3).max(7).required(),
})