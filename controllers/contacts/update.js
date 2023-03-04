const {Contact} = require("../../models")

const updateContact = async (req, res) => {
    const {contactId} = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {new: true});
    if(!result){
      const error = new Error(`contact with id=${contactId} not found`)
      error.status = 404;
      throw error;
    }
    res.status(200).json(result)
};

module.exports = updateContact;