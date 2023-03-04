const express = require('express');
const router = express.Router();
const {validation, ctrlWrapper} = require("../../middlewars");
const {joiSchema, favoritejoiSchema} = require("../../models/contact")
const {contacts: ctrl} = require("../../controllers");


router.get('/', ctrlWrapper(ctrl.listContacts))

router.get('/:contactId', ctrlWrapper(ctrl.getById))

router.post('/', validation(joiSchema),  ctrlWrapper(ctrl.addContact))

router.delete('/:contactId', ctrlWrapper(ctrl.removeContact))

router.put('/:contactId', validation(joiSchema), ctrlWrapper(ctrl.updateContact))

router.patch('/:contactId/favorite', validation(favoritejoiSchema), ctrlWrapper(ctrl.updateStatusContact))

module.exports = router
