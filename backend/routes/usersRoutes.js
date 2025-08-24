import express from 'express'
import { createUsers } from '../controllers/authController.js'

const users = express.Router()

users.post('/registered-user', createUsers)

export default users