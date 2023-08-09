import express from 'express'
import routes from './routes'
import mongoose from 'mongoose'
import errorHandler from './middlewares/errorHandler'
import cors from 'cors'
import fileUpload from 'express-fileupload'
const { PORT = 3000, DB_ADRESS = 'mongodb://localhost:27017/stroyProfService' } = process.env
const app = express()

mongoose.connect(DB_ADRESS)
app.use(cors())
app.use(express.json())
app.use(
  fileUpload({
    limits: {
      fileSize: 10000000 // 10 mb limit
    },
    abortOnLimit: true
  })
)
app.use(routes)
app.use(errorHandler)
app.listen(PORT, () => console.log('server is started'))
