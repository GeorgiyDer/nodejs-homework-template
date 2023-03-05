const {Contact} = require("../../models")

const updateStatusContact = async (req, res) => {
    const {contactId} = req.params;
    const { body } = req;
    const result = await Contact.findByIdAndUpdate(contactId, body, {new: true});
    if(!result){
      const error = new Error("not found")
      error.status = 404;
      throw error;
    }
    res.status(200).json(result);
};

  module.exports = updateStatusContact;