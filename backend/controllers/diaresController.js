import DiaryModel from "../models/diarySchema.js";

export const createDiary = async (req, res) => {
  try {
    const { title, date, time, message } = req.body;

    const newDiary = new DiaryModel({title, date, time, message});
    await newDiary.save();
    res.status(201);
    res.json({
      success: true,
      diary: newDiary,
      message: "Diary added successfully!",
    })

    console.log(`title: ${title} \ndate: ${date} \ntime: ${time} \nmessage: ${message}`);
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const getDiaries = async (req, res) => {
  try {
    const diaries = await DiaryModel.find();
    res.status(200).json(diares);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
}