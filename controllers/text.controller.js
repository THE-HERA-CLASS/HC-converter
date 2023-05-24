const mammoth = require('mammoth');

class TextController {
  test = async (req, res) => {
    const { data } = req.body;
    console.log('req.body', req.body);
    // console.log(data);
    return res.status(200).json({ data });
  };

  upload_images = async (req, res) => {
    const upload_images = req.img_url.toString();
    const upload_images_array = upload_images.split(',');
    return res.status(200).json({ imageUrls: upload_images_array });
  };

  // upload_word = async (req, res) => {
  //   if (!req.file) {
  //     return res.status(400).json({ errMsg: '업로드된 파일 없음' });
  //   }

  //   const filePath = req.file.path;

  //   mammoth
  //     .extractRawText({ path: filePath })
  //     .then((result) => {
  //       const text = result.value; // 추출된 텍스트
  //       res.status(200).json({ parsingData: text });
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       res.status(500).json({ errMsg: '파싱 실패' });
  //     });
  // };

  // 메모리에서 처리
  upload_word = async (req, res) => {
    if (!req.file) {
      return res.status(400).json({ errMsg: '업로드된 파일 없음' });
    }

    const buffer = req.file.buffer;

    mammoth
      .extractRawText({ buffer })
      .then((result) => {
        const text = result.value; // 추출된 텍스트
        // 표 시작 부분으로 텍스트를 나누어 표 추출
        const tables = text.split('[표 시작]');
        console.log('text', text);
        console.log('tables', tables);
        res.status(200).json({ parsingData: tables });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ errMsg: '파싱 실패' });
      });
  };
}

module.exports = TextController;
