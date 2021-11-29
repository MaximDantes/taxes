import express from 'express'
import taxRatesController from '../controllers/tax-rates-controller'

const taxRatesRouter = express.Router()

taxRatesRouter.get('/', taxRatesController.get)
taxRatesRouter.post('/', taxRatesController.add)

export default taxRatesRouter