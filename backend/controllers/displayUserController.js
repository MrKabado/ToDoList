import usersModel from "../models/usersSchema.js";

export const displayName = async (req, res) => {
  try {
    const {email} = req.body;

    const user = await usersModel.findOne({email});

    if (!user) {
      return res.status(404).json({success: false, message: "Email not found"});
    }

    res.status(200).json({success: true, data: user});

  } catch (error) {
    return res.status(500).json({success: false, message: error.message})
  }
}