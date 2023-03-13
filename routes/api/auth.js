const express = require('express');
const router = express.Router();

const {validation, auth, upload, ctrlWrapper} = require("../../middlewars");
const {auth: ctrl} = require("../../controllers");
const {joiRegisterSchema, joiLoginSchema, joiVerifyEmailSchema} = require("../../models/user")



router.post("/signup", validation(joiRegisterSchema), ctrlWrapper(ctrl.register));

router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login))

router.post("/logout", auth, ctrlWrapper(ctrl.logout));

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent))

router.get("/verify/:verificationToken", ctrlWrapper(ctrl.verifyEmail))

router.post("/verify", validation(joiVerifyEmailSchema), ctrlWrapper(ctrl.resendVerifyEmail));

router.patch("/avatars", auth, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar))

module.exports = router;