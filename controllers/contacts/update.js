const contactsOperations = require("../../models/contacts")

const updateContact = async (req, res, next) => {
    try {
      const {contactId} = req.params;
      const result = await contactsOperations.update(contactId, req.body);
      if(!result){
        const error = new Error("not found")
        error.status = 404;
        throw error;
      }
      res.status(200).json(
        result,
      );
    } catch (error) {
      next(error)
    }
};

module.exports = updateContact;