import usersModel from "../models/usersSchema.js";

export const authController = (req, res) => {
  const { email, password } = req.body;

  console.log(email, password)
  return res.json({ success: true })
}

export const createUsers = async (req, res) => {
  try {
    const { email, password } = req.body;

    const registeredUser = new usersModel({email, password});
    await registeredUser.save();
    res.status(201);
    res.json({
      success: true,
      users: registeredUser
    })

  } catch (error) {
    res.status(500).json({error: error.message})
  }
}