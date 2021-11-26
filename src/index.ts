import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import dbConfig from './config/dbConfig'
import regionsRouter from './routes/regions-route'
import kindsOfActivityRouter from './routes/kind-of-activity-route'
import bodyParser from 'body-parser'
import payersRouter from './routes/payers-router'
import taxesRouter from './routes/taxes-route'

const PORT = 4000

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect(dbConfig.uri)
    .then(() => console.log('MongoDB connected'))
    .catch(e => console.error(e))

app.use('/regions', regionsRouter)
app.use('/kindsOfActivity', kindsOfActivityRouter)
app.use('/payers', payersRouter)
app.use('/taxes', taxesRouter)


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
