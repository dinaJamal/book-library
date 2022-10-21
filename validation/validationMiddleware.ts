import Joi from 'joi'

const validate = async ({ schema, data }: { schema: Joi.ObjectSchema<any>; data: any }) => {
  const result = { isValid: true, error: '' }

  try {
    await schema.validateAsync(data, { abortEarly: true })
  } catch (error) {
    result.isValid = false
    result.error = "" + error;
  }

  return result
};
export default validate