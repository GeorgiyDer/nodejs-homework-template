const {User} = require("../../models")

const getCurrent = async(req, res) => {
    const {name, email, subscription} = req.user;
    res.json({
        status: "success",
        code: 200,
        responsebody: {
            email,
            subscription

        }
    })
    
}


module.exports = getCurrent