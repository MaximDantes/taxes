import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import dbConfig from './config/dbConfig'
import regionsRouter from './routes/regions-route'
import kindsOfActivityRouter from './routes/kinds-of-activity-router'
import bodyParser from 'body-parser'
import payersRouter from './routes/payers-router'
import taxesRouter from './routes/taxes-route'
import taxRatesRouter from './routes/tax-rates-route'
import declarationsRouter from './routes/declarations-router'
import declarationTaxRatesController from './controllers/declaration-tax-rates-controller'
import declarationTaxRatesRouter from './routes/declaration-tax-rates-router'

const PORT = 4000

const app = express()

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

mongoose.connect(dbConfig.uri)
    .then(() => console.log('MongoDB connected'))
    .catch(e => console.error(e))

mongoose.set('toJSON', {
    virtuals: true,
    transform: (doc, converted) => {
        delete converted._id
        delete converted.__v
    }
})

app.use('/regions', regionsRouter)
app.use('/kindsOfActivity', kindsOfActivityRouter)
app.use('/payers', payersRouter)
app.use('/taxes', taxesRouter)
app.use('/taxRates', taxRatesRouter)
app.use('/declarations', declarationsRouter)
app.use('/declarationTaxRates', declarationTaxRatesRouter)


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`)
})
