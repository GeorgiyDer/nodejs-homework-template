const { Unauthorized  } = require("http-errors")
const jwt = require("jsonwebtoken")
const {User} = require("../../models")
const bcrypt = require("bcryptjs");
const {SECRET_KEY} = process.env

const login = async(req, res) => {
    const {email, password} = req.body;
    const user = await User.findOne({email})

    const passwordCompare = bcrypt.compareSync(password, user.password);
    if (!user || !passwordCompare) {
        throw Unauthorized ("Email or password is wrong");
    }

    const payload = {
        id: user._id
    }
    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "48h"})
    await User.findByIdAndUpdate(user._id, { token });
    
    res.json({
        status: "success",
        code: 200,
        data: {
            token
        }
    })
}

module.exports = login