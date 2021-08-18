import mongoose from 'mongoose';

const questionSchema = mongoose.Schema({
  QuestionID: { type: String, required: true },
  QuestionText: { type: String, required: true },
  Correct: { type: String, required: true },
  QuestionOptions: [
    {
      Option_Title: { type: String, required: true },
      Option_Value: { type: String, required: true },
    },
    {
      Option_Title: { type: String, required: true },
      Option_Value: { type: String, required: true },
    },
    {
      Option_Title: { type: String, required: true },
      Option_Value: { type: String, required: true },
    },
    {
      Option_Title: { type: String, required: true },
      Option_Value: { type: String, required: true },
    },
  ],
});

const Question = mongoose.model('Question', questionSchema);

export default Question;
