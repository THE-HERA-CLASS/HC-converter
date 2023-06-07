const express = require('express');
const app = express();

const Docxtemplater = require('docxtemplater');
const fs = require('fs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ...나머지 Express.js 설정 코드...

// .docx 파일 파싱 라우트 추가
app.post('/parse-docx', (req, res) => {
  const filePath = req.body.filePath; // 업로드된 .docx 파일의 경로

  const content = fs.readFileSync(filePath, 'binary');
  const doc = new Docxtemplater(content);

  // .docx 파일에서 텍스트 파싱하기
  const text = doc.getFullText();

  // .docx 파일에서 이미지 파싱하기
  const images = doc.getImageTags();

  // 파싱된 텍스트와 이미지를 클라이언트에게 응답으로 보내기
  res.json({ text, images });
});

// ...나머지 Express.js 라우트 및 서버 설정 코드...

// 서버 시작
app.listen(3000, () => {
  console.log('서버가 3000번 포트에서 실행 중입니다.');
});
