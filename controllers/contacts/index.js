const listContacts = require("./getAll");
const addContact = require("./add");
const getById = require("./getById");
const removeContact = require("./remove");
const updateContact =require("./update")

module.exports = {
    listContacts,
    addContact,
    getById,
    removeContact,
    updateContact
}