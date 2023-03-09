const {User} = require("../../models")
const path = require("path")
const fs = require("fs/promises")
const jimp = require("jimp")

const avatarsDir = path.join(__dirname, "../../", "public", "avatars")

const updateAvatar = async(req, res) => {
    try {
        const {path: tempUpload, originalname} = req.file;
        const {_id} = req.user
        const avatarName = `${_id}.${originalname}`
        const resultUpload = path.join(avatarsDir, avatarName)
        await fs.rename(tempUpload, resultUpload)

        jimp.read(resultUpload, (err, avatar) => {
            if (err) throw err;
                avatar
               .resize(250, 250) 
               .quality(60)  
               .write(resultUpload); 
           });

        const avatarURL = path.join("public", "avatars", resultUpload)

        await User.findByIdAndUpdate(_id, {avatarURL})
        res.json({
            status: "seccess",
            code: 200,
            ResponseBody: {
                "avatarURL": avatarURL
            }
        })
    } catch (error) {
        await fs.unlink(tempUpload);
        throw error;
    }
}

module.exports = updateAvatar