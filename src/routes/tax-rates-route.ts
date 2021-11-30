import express from 'express'
import taxRatesController from '../controllers/tax-rates-controller'

const taxRatesRouter = express.Router()

taxRatesRouter.get('/', taxRatesController.getAll)
taxRatesRouter.get('/:taxId', taxRatesController.getByTax)
taxRatesRouter.post('/', taxRatesController.add)

export default taxRatesRouter