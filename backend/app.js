import express from 'express'
import cors from 'cors'
import usersDiares from './routes/usersRoutes.js'
import diaresDiares from './routes/diaresRoutes.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

const app = express();

dotenv.config();

app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173'
}))

app.use('/api/users', usersDiares)

app.use('/api/diares', diaresDiares)


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MONGO DB CONNECTED'))
  .catch((err) => console.log(err));

export default app