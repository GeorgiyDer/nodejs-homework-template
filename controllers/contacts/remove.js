const contactsOperations = require("../../models/contacts")

const remove = async (req, res, next) => {
    try {
      const {contactId} = req.params;
      const result = await contactsOperations.removeContact(contactId);
      if(!result){
        const error = new Error(`contact with id=${contactId} not found`)
        error.status = 404;
        throw error;
      }
      res.json({
        status: "success",
        code: 200,
        message: "contact deleted"
      })
    } catch (error) {
      next(error)
    }
};

module.exports = remove;
