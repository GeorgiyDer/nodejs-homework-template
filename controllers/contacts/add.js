const contactsOperations = require("../../models/contacts");


const add = async (req, res, next) => {
    try {
      const result = await contactsOperations.addContact(req.body)
      res.status(201).json({status: "success",
      code: 201,
      data: {
        result: result,
      }})
    } catch (error) {
      next(error)
    }
  }

module.exports = add;