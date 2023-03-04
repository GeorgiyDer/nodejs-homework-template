const validation = (schema) => {
return (req, res, next) => {
  const { body } = req;
  if (Object.getOwnPropertyNames(body).length === 0) {
    const err = new Error("missing fields");
    err.status = 400;
    next(err);
  }
  const { error } = schema.validate(body);
  if (error) {
    error.status = 400;
    next(error);
  }
  next();
};
};
module.exports = validation;