const TextRepository = require('../repositories/text.repository.js');

class TextService {
  textRepository = new TextRepository();

  addQuestionsEditor = async (exam_id, data) => {
    const addQuestionResult = await this.textRepository.addQuestionsEditor(exam_id, data);
    // console.log('addQuestionResult', addQuestionResult);
    return {
      addQuestionResult,
      addQuestionData: data,
    };
  };
}

module.exports = TextService;
