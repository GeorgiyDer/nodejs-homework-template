const contactsOperations = require("../../models/contacts")

const removeContact = async (req, res, next) => {
    try {
      const {contactId} = req.params;
      const result = await contactsOperations.remove(contactId);
      if(!result){
        const error = new Error("not found")
        error.status = 404;
        throw error;
      }
      res.status(200).json({
        message: "contact deleted",
    })
    } catch (error) {
      next(error)
    }
};

module.exports = removeContact;
