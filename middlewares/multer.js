const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + Math.random();
    const ext = path.extname(file.originalname);

    const validFormats = [".png", "jpg", "jpeg"];
    // also we can use mimetype

    if (validFormats.includes(ext)) {
      cb(null, `${filename}${ext}`);
    } else {
      cb(new Error("only png, jpg, jpeg"));
    }
  },
});

const maxsize = 1 * 1000 * 1000;

const uploader = multer({
  storage,
  limits: {
    fileSize: maxsize,
  },
});

module.exports = uploader;
