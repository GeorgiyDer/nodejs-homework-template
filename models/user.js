// const { string } = require("joi");
const {Schema, model} = require("mongoose");
const bcrypt = require("bcryptjs")
const Joi = require("joi")

const userSchema = Schema({
    name: {
        type: String,
        required : [true, 'Password is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    subscription: {
        type: String,
        enum: ["starter", "pro", "business"],
        default: "starter",
    },
    token: {
        type: String,
        default: null,
    },
    avatarURL: {
        type: String,
        required: true
    }
}, {versionKey: false, timestamps: true})

userSchema.methods.setPassword = function(password) {
    this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

const joiRegisterSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

const joiLoginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});


const User = model("user", userSchema)

module.exports = {
    User,
    joiRegisterSchema,
    joiLoginSchema,
}