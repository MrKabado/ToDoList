import express from 'express'
import { createDiary, getDiaries} from '../controllers/diaresController.js'

const diares = express.Router();

diares.post('/create-diary', createDiary);

diares.get('/', getDiaries);

export default diares