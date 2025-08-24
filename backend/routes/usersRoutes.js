import express from 'express'
import { createUsers, checkUsers } from '../controllers/authController.js'

const users = express.Router()

users.post('/registered-user', createUsers);

users.post('/login-user', checkUsers);

export default users