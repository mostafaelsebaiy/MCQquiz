import Question from '../model/questionModel.js';
import _ from 'lodash';

const getquestions = async (req, res) => {
  const questions = await Question.aggregate([{ $sample: { size: 5 } }]);
  if (questions) {
    questions.forEach((question) => {
      const shuffledOptions = _.shuffle(question.QuestionOptions);
      question.QuestionOptions = shuffledOptions;
    });
    return res.status(200).json(questions);
  } else {
    res.status(404);
    throw new Error('no questions found');
  }
};
export { getquestions };
