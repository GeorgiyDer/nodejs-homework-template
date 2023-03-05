const {Contact} = require("../../models")

const updateStatusContact = async (req, res) => {
    const {contactId} = req.params;
    const { body } = req;
    const result = await Contact.findByIdAndUpdate(contactId, body, {new: true});
    if(!result){
      const error = new Error("missing field favorite")
      error.status = 400;
      throw error;
    }
    res.status(200).json(result);
};

  module.exports = updateStatusContact;