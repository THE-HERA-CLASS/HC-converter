const { Questions } = require('../models');

class TextRepository {
  addQuestionsEditor = async (exam_id, data) => {
    try {
      // DB Create
      await data.forEach((question) => {
        return Questions.create({
          exam_id,
          sort_num: question.sort_num,
          question_num: question.question_num,
          question: question.question,
          example: JSON.stringify(question.example),
          choice: JSON.stringify(question.choice),
          answer: question.answer,
          solve: question.solve,
        });
      });
    } catch (err) {
      console.error(err);
    }
  };
}

module.exports = TextRepository;
