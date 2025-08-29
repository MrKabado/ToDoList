import express from 'express'
import { createDiary, getDiaries} from '../controllers/diaresController.js'
import { displayDiary } from '../controllers/displayDiaresController.js'

const diares = express.Router();

diares.post('/create-diary', createDiary);

diares.get('/', getDiaries);

diares.post('/display', displayDiary);

export default diares