const { isValidObjectId } = require("mongoose");

const isValidId = (req, res, next) => {
  const { contactId } = req.params;
  const isValid = isValidObjectId(contactId);
  if (!isValid) {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
  }
  next();
};

module.exports = isValidId;