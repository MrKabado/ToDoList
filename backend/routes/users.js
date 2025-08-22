import express from 'express'
import { authController } from '../controllers/authController.js'

const users = express.Router()

users.post('/register', authController)

export default users