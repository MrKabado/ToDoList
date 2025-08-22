import express from 'express'
import {diaresController} from '../controllers/diaresController.js'

const diares = express.Router();

diares.post('/diares', diaresController)

export default diares