const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, ('./public/images'))
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
      }
});
const multerSalasMiddleware = multer({ storage });

module.exports = multerSalasMiddleware;