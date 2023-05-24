const express = require('express');
const router = express.Router();
const multer = require('multer');

const multerMiddleware = require('../middlewares/multer.js');
const TextController = require('../controllers/text.controller.js');

const textController = new TextController();

router.post('/test', textController.test); // 테스트
router.post(
  '/upload_image',
  multerMiddleware.array('upload_images', 10),
  textController.upload_images
); // 이미지 업로드

// DOCX Parsing

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, 'uploads/');
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname);
//   },
// });

const storage = multer.memoryStorage(); // 메모리에서 파일 처리

const upload = multer({ storage: storage });

router.post('/upload_word', upload.single('file'), textController.upload_word); // MS Words Docs upload

module.exports = router;
