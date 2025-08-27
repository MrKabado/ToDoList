import express from 'express'
import { createUsers, checkUsers, updatePassword, checkEmail, sendCode } from '../controllers/authController.js'
import { displayName } from '../controllers/displayController.js';

const users = express.Router()

users.post('/registered-user', createUsers);

users.post('/login-user', checkUsers);

users.post('/update-password', updatePassword);

users.post('/check-email', checkEmail);

users.post('/find-user', displayName);

users.post('/otp-code', sendCode);

export default users