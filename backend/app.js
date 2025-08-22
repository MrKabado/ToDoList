import express from 'express'
import cors from 'cors'
import users from './routes/users.js'

const app = express();

app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5173'
}))

app.use('/api/users', users)

export default app