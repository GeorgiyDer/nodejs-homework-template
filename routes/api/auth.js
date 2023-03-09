const express = require('express');
const router = express.Router();

const {validation, auth, upload, ctrlWrapper} = require("../../middlewars");
const {auth: ctrl} = require("../../controllers");
const {joiRegisterSchema, joiLoginSchema} = require("../../models/user")



router.post("/signup", validation(joiRegisterSchema), ctrlWrapper(ctrl.register));

router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login))

router.post("/logout", auth, ctrlWrapper(ctrl.logout));

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent))

router.patch("/avatars", auth, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar))

module.exports = router;