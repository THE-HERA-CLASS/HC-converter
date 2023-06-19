const TextRepository = require('../repositories/text.repository.js');

class TextService {
  textRepository = new TextRepository();

  addQuestionsEditor = async (data) => {
    const addQuestionResult = await this.textRepository.addQuestionsEditor(data);
    return {
      addQuestionResult,
      addQuestionData: data,
    };
  };
}

module.exports = TextService;
