const express = require('express');
const router = express.Router();
const multer = require('multer');

// const multerMiddleware = require('../middlewares/multer.js');
const TextController = require('../controllers/text.controller.js');

const textController = new TextController();

// const storage = multer.memoryStorage(); // 메모리에서 파일 처리
// const upload = multer({ storage: storage });

// router.post('/upload_word', upload.single('file'), textController.upload_word); // MS Words Docs upload
router.post('/addQuestionsEditor', textController.addQuestionsEditor);

module.exports = router;
