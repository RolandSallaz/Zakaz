import express from 'express'
import routes from './routes'

const { PORT = 3000 } = process.env
const app = express()
app.use(express.json())
app.use(routes)

app.listen(PORT, () => console.log('server is started'))
