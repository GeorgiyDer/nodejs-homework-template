const {Contact} = require("../../models")

const removeContact = async (req, res) => {
    const {contactId} = req.params;
    const result = await Contact.findByIdAndRemove(contactId);
    if(!result){
      const error = new Error(`contact with id=${contactId} not found`)
      error.status = 404;
      throw error;
    }
    res.status(200).json({
      message: "contact deleted",
    })
};

module.exports = removeContact;
