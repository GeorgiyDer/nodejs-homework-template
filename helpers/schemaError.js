const isConflict = ({ name, code }) =>
  code === 11000 && name === "MongoServerError";

const schemaError = (error, data, next) => {
  error.status = isConflict(error) ? 409 : 400;
  next();
};

module.exports = schemaError;