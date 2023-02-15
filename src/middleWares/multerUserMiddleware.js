const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const carpeta = path.join(__dirname, "../../public/images/user")
        cb(null, carpeta)
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
      }
});
const multerUserMiddleware = multer({storage});

module.exports = multerUserMiddleware;