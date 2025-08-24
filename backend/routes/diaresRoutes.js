import express from 'express'
import { createDiary, getDiaries} from '../controllers/diaresController.js'

const diares = express.Router();

diares.post('/', createDiary);

diares.get('/', getDiaries);

export default diares