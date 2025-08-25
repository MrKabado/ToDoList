import mongoose from "mongoose";

const diarySchema = new mongoose.Schema({
  title: {
    type: String, 
    required: true,
  },

  date: {
    type: String,
    required: true,
  },

  time: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  }
});

const userDiarySchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  diaries: [diarySchema]
})

const DiaryModel = mongoose.model("Diary", userDiarySchema);
export default DiaryModel;