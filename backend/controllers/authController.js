import mongoose from "mongoose";
import usersModel from "../models/usersSchema.js";
import bcrypt from 'bcrypt';

export const createUsers = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    
    const alreadyRegistered = await usersModel.findOne({ email })
    if (alreadyRegistered) {
      return res.status(401).json({success: false, message: "This email is already registered"});
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const registeredUser = new usersModel({name, email, password: hashedPassword});
    await registeredUser.save();
    res.status(201);
    res.json({
      success: true,
      users: registeredUser,
      message: "Registered Successfully"
    })

  } catch (error) {
    res.status(500).json({error: error.message})
  }
}

export const checkUsers = async (req, res) => {
  const { email, password } = req.body;

  const user = await usersModel.findOne({email});
  if (!user) return res.status(404).json({message: "User not found"});


  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return res.status(401).json({success: false, message: "Invalid Password"});
  }

  return res.json({success: true, message: "Login Successfully", user: user.name});
}


export const updatePassword = async (req, res) => {
  const {email, password} = req.body;

  try { 
    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedUser = await usersModel.findOneAndUpdate(
      {email},
      {password: hashedPassword},
      {new: true},
    )

    if (!updatedUser.email) {
      return res.status(404).json({success: false, message: "Email not found"});
    }

    res.json({success: true, message: "Password changed successfully"});


  return res.json({success: true, message: "Password changed successfully"});
  } catch (error) {
    return res.status(500).json({success: false, message: error.message})
  }
};


export const checkEmail = async (req, res) => {
  const {email} = req.body;

  try {
    const user = await usersModel.findOne({email});

    if (!user) {
      console.log("no email like that");
      return res.status(404).json({success: false, message: "Email Not Found"});
    }

    return res.json({success: true, message: "Email Verified"})

  } catch (error) {
    return res.status(500).json({success: false, message: error.message})
  }
}