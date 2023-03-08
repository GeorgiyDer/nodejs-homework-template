const express = require('express');
const router = express.Router();
const {auth, validation, ctrlWrapper, isValidId } = require("../../middlewars");
const {joiSchema, favoritejoiSchema} = require("../../models/contact")
const {contacts: ctrl} = require("../../controllers");


router.get('/', auth, ctrlWrapper(ctrl.listContacts))

router.get('/:contactId', isValidId, ctrlWrapper(ctrl.getById))

router.post('/', validation(joiSchema), auth,  ctrlWrapper(ctrl.addContact))

router.delete('/:contactId', isValidId, ctrlWrapper(ctrl.removeContact))

router.put('/:contactId', isValidId, validation(joiSchema), ctrlWrapper(ctrl.updateContact))

router.patch('/:contactId/favorite', isValidId, validation(favoritejoiSchema), ctrlWrapper(ctrl.updateStatusContact))

module.exports = router
