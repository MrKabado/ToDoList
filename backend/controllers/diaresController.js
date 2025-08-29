import DiaryModel from "../models/diarySchema.js";

export const createDiary = async (req, res) => {
  const { email, title, date, time, message } = req.body;

  try {

    const newDiary = await DiaryModel.findOneAndUpdate(
      { email },
      { 
        $push: { 
          diaries: {
            $each: [{title, date, time, message}],
            $position: 0
          },        
        }
      },
      { new: true, upsert: true},
    );
    
    res.json({
      data: newDiary,
      success: true,
      message: "Added Diary Successfully",
    });

  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

export const getDiaries = async (req, res) => {
  try {
    const diaries = await DiaryModel.find();
    res.status(200).json(diaries);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
}