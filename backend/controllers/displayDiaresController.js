import DiaryModel from "../models/diarySchema.js";

export const displayDiary = async (req, res) => {
  const {email} = req.body;

  try {
    const user = await DiaryModel.findOne({email});

    if (user) {
      res.json({
        success: true,
        message: "Success in displayDiaresController",
        userEmail: user.email,
        diaries: user.diaries,
      })
    }
  } catch (err) {
    res.status(500).json({success: false, message: "Error in displayDiaresController"});
  }


}