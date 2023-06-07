const TextService = require('../services/text.service');
class TextController {
  textService = new TextService();

  addQuestionsEditor = async (req, res) => {
    try {
      let { exam_id, data } = req.body;
      console.log(data);
      // console.log(typeof data);
      const result = await this.textService.addQuestionsEditor(exam_id, data);
      return res.status(200).json({ data: result.addQuestionData });
    } catch (err) {
      console.error(err);
      return res.status(400).json({ errMsg: '파싱 에러' });
    }
  };
}

module.exports = TextController;
