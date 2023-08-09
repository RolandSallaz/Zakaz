import express from 'express'
import routes from './routes'
import mongoose from 'mongoose'
import errorHandler from './middlewares/errorHandler'
import cors from 'cors'
import cookieParser from 'cookie-parser'
const { PORT = 3000, DB_ADRESS = 'mongodb://localhost:27017/stroyProfService'} = process.env
const app = express()

mongoose.connect(DB_ADRESS)
app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(routes)
app.use(errorHandler)
app.listen(PORT, () => console.log('server is started'))
