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
})

const DiaryModel = mongoose.model("DiaryModel", diarySchema);
export default DiaryModel;