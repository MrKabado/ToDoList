import express from 'express'
import { createUsers, checkUsers, updatePassword, checkEmail } from '../controllers/authController.js'
import { displayName } from '../controllers/displayController.js';

const users = express.Router()

users.post('/registered-user', createUsers);

users.post('/login-user', checkUsers);

users.post('/update-password', updatePassword);

users.post('/check-email', checkEmail);

users.post('/find-user', displayName);

export default users