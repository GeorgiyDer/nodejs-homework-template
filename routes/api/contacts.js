const express = require('express');
const router = express.Router();
const {validation} = require("../../middlewars");
const {contactsSchema} = require("../../schemas")
const {contacts: ctrl} = require("../../controllers");

const validateMiddleware = validation(contactsSchema);

router.get('/', ctrl.getAll)

router.get('/:contactId', ctrl.getById)

router.post('/', validateMiddleware,  ctrl.add)

router.delete('/:contactId', ctrl.remove)

router.put('/:contactId', validateMiddleware, ctrl.update)

module.exports = router
