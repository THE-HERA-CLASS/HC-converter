const TextService = require('../services/text.service');
class TextController {
  textService = new TextService();

  addQuestionsEditor = async (req, res) => {
    try {
      let { data } = req.body;
      const result = await this.textService.addQuestionsEditor(data);
      return res.status(200).json({ data: result.addQuestionData });
    } catch (err) {
      console.error(err);
      return res.status(400).json({ errMsg: '파싱 에러' });
    }
  };
}

module.exports = TextController;
