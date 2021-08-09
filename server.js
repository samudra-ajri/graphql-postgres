import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import cors from 'cors'

import connectDB from './config/db.js'
import auth from './middleware/auth.js'

dotenv.config()

connectDB()

const app = express()

const PORT = process.env.PORT
const ENV = process.env.APP_ENV

if (ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(cors())
app.use(auth)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, console.log(`Server running in ${ENV} mode on port ${PORT}`))
    