const mammoth = require('mammoth');
const cheerio = require('cheerio');

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

  // 저장해서 처리
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
      .convertToHtml({ buffer })
      .then((result) => {
        const html = result.value; // 변환된 HTML

        // HTML 파싱
        const html_source = cheerio.load(html);
        const tables = [];

        // 표 추출
        html_source('table').each((index, element) => {
          // 표의 HTML 가져오기
          let table = html_source(element).html();
          // 불필요한 태그 제거
          table = table
            .replace(/<tbody>/gi, '')
            .replace(/<\/tbody>/gi, '')
            .replace(/<tr>/gi, '')
            .replace(/<td>/gi, '')
            .replace(/<\/td>/gi, '')
            .replace(/<p>/gi, '')
            .replace(/<\/p>/gi, '')
            .replace(/<\/tr>$/, ''); // 맨 마지막 <tr>만
          // </tr>을 기준으로 쪼개기 -> 앞뒤 공백 지우기
          const table_array = table.split('</tr>').map((row) => row.trim());

          // 배열 담기
          tables.push(table_array);
        });

        let result_array = [];
        let result_object = {};

        // tables 순회하면서 객체에 담기
        tables.forEach((item, index) => {
          let sort_num = 0;
          let question_num = 0;
          let question = '';
          let example = {}; // type: text, value: ~~
          let choice = {}; // type: text,

          const dot_index = item[0].indexOf('. ');
          const billiard_index = item[0].indexOf('※ ');
          const division = item[0].substring(0, dot_index);

          if (division) {
            // 문제유형
            sort_num = index + 1;
            question_num = division;
            question = item[0].substring(dot_index + 2, item[0].length);
            result_object = {
              sort_num,
              question_num,
              question,
            };
            result_array.push(result_object);
            // console.log(result_object);
          } else {
            // 알림유형
            sort_num = index + 1;
            question = item[0].substring(billiard_index + 2, item[0].length);
            result_object = {
              sort_num,
              question,
            };
            result_array.push(result_object);
          }
        });

        console.log(result_array);
        // console.log(result_object);

        res.status(200).json({ parsingData: result_array });
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ errMsg: '파싱 실패' });
      });
  };
}

module.exports = TextController;
