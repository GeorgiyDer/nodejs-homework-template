const { User } = require("../../models");
const { sendEmail } = require("../../helpers/sendEmail")

const resendVerifyEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({email})
  if (!user) {
    const error = new Error("User not found");
    error.status = 404;
    throw error;
  }
  if (user.verify) {
        const error = new Error(`Verification has already been passed`);
        error.status = 400;
        throw error;
  }
  const mail = {
    to: email,
    subject: "Подтверждение email",
    html: `<a target='_blank' href='http://localhost:3000/api/users/verify/${user.verificationToken}' >Подтвердите email</a>`,
  };

  await sendEmail(mail);

  res.json({
    message: "Verification email sent",
  });
};

module.exports = resendVerifyEmail;
